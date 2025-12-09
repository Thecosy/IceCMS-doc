# Redis缓存集成指南

## 概述

本文档说明如何为文章、资源、首页等接口添加Redis缓存支持。

## 一、准备工作

### 1.1 确保已创建缓存工具类

确认以下文件已创建:
- ✅ `RedisConfig.java` - Redis配置类
- ✅ `CacheUtil.java` - 缓存工具类

### 1.2 配置Redis (可选)

编辑 `application.yml`:
```yaml
spring:
  redis:
    enabled: true    # 启用Redis
    host: localhost
    port: 6379
```

不启用Redis也能运行,只是不会使用缓存。

## 二、在Controller中添加缓存支持

### 2.1 注入CacheUtil

在Controller类中添加:
```java
@Autowired
private CacheUtil cacheUtil;
```

### 2.2 缓存策略说明

| 接口 | 缓存时间 | 缓存Key | 说明 |
|------|---------|---------|------|
| 轮播图 | 1小时 | mini:carousel | 不常变化 |
| 重要文章 | 30分钟 | mini:important:articles | 更新频率中等 |
| 文章详情 | 5分钟 | article:detail:{id} | 访问频繁 |
| 资源详情 | 5分钟 | resource:detail:{id} | 访问频繁 |
| 热榜第一页 | 10分钟 | mini:hotlist:page1 | 只缓存第一页 |
| 文章列表第一页 | 5分钟 | mini:articles:page1:limit{n} | 只缓存第一页 |
| 资源列表第一页 | 5分钟 | mini:resources:page1:limit{n} | 只缓存第一页 |
| 圈子分类 | 1小时 | mini:square:classlist | 不常变化 |
| 搜索结果 | 不缓存 | - | 实时性要求高 |

## 三、具体实现示例

### 3.1 轮播图接口 - 简单缓存

#### 原代码:
```java
@GetMapping("/getCarousel")
public List<Map<String, Object>> getCarousel() {
    QueryWrapper<MiniCarousel> wrapper = new QueryWrapper<>();
    wrapper.eq("status", 1);
    wrapper.orderByAsc("sort");

    List<MiniCarousel> miniCarousels = miniCarouselMapper.selectList(wrapper);
    List<Map<String, Object>> resultList = new ArrayList<>();

    for (MiniCarousel miniCarousel : miniCarousels) {
        Map<String, Object> myMap = new HashMap<>();
        myMap.put("id", miniCarousel.getId());
        myMap.put("title", miniCarousel.getTitle());
        myMap.put("url", miniCarousel.getImg());
        resultList.add(myMap);
    }

    return resultList;
}
```

#### 添加缓存后:
```java
@GetMapping("/getCarousel")
public List<Map<String, Object>> getCarousel() {
    String cacheKey = "mini:carousel";

    return cacheUtil.getOrLoad(cacheKey, () -> {
        // 原来的查询逻辑放到这里
        QueryWrapper<MiniCarousel> wrapper = new QueryWrapper<>();
        wrapper.eq("status", 1);
        wrapper.orderByAsc("sort");

        List<MiniCarousel> miniCarousels = miniCarouselMapper.selectList(wrapper);
        List<Map<String, Object>> resultList = new ArrayList<>();

        for (MiniCarousel miniCarousel : miniCarousels) {
            Map<String, Object> myMap = new HashMap<>();
            myMap.put("id", miniCarousel.getId());
            myMap.put("title", miniCarousel.getTitle());
            myMap.put("url", miniCarousel.getImg());
            resultList.add(myMap);
        }

        return resultList;
    }, 3600); // 缓存1小时
}
```

**改动说明**:
1. 定义缓存Key
2. 使用 `cacheUtil.getOrLoad()` 包装原逻辑
3. 设置缓存时间(秒)

### 3.2 文章详情 - 带异步更新浏览量

#### 原代码:
```java
@GetMapping("/getArticleById/{id}")
public ArticleVO getArticleById(@PathVariable("id") Integer id) {
    Article article = articleService.getById(id);

    // ... 处理逻辑 ...

    // 增加浏览量
    article.setHits(article.getHits() + 1);
    articleService.updateById(article);

    return articleVO;
}
```

#### 添加缓存后:
```java
@GetMapping("/getArticleById/{id}")
public ArticleVO getArticleById(@PathVariable("id") Integer id) {
    String cacheKey = "article:detail:" + id;

    ArticleVO articleVO = cacheUtil.getOrLoad(cacheKey, () -> {
        Article article = articleService.getById(id);
        if (article == null) {
            return null;
        }

        // ... 原来的处理逻辑 ...

        return articleVO;
    }, 300); // 缓存5分钟

    // 异步更新浏览量(不影响响应速度)
    if (articleVO != null) {
        new Thread(() -> {
            try {
                Article article = articleService.getById(id);
                if (article != null) {
                    article.setHits(article.getHits() + 1);
                    articleService.updateById(article);

                    // 更新后清除缓存,下次访问时重新加载
                    cacheUtil.delete(cacheKey);
                }
            } catch (Exception e) {
                // 异常不影响主流程
            }
        }).start();
    }

    return articleVO;
}
```

**改动说明**:
1. 使用缓存返回文章详情
2. 浏览量更新改为异步(提升响应速度)
3. 更新后清除缓存

### 3.3 热榜接口 - 只缓存第一页

#### 原代码:
```java
@GetMapping("/getHotList")
public Map<String, Object> getHotList(
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "limit", defaultValue = "20") int limit) {

    Map<String, Object> result = new HashMap<>();

    // 查询热榜
    QueryWrapper<Article> wrapper = new QueryWrapper<>();
    wrapper.orderByDesc("hits");
    wrapper.last("limit " + (page - 1) * limit + "," + limit);
    List<Article> articles = articleMapper.selectList(wrapper);

    // ... 处理结果 ...

    return result;
}
```

#### 添加缓存后:
```java
@GetMapping("/getHotList")
public Map<String, Object> getHotList(
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "limit", defaultValue = "20") int limit) {

    // 只缓存第一页
    if (page == 1) {
        String cacheKey = "mini:hotlist:page1";

        return cacheUtil.getOrLoad(cacheKey, () -> {
            return buildHotList(page, limit);
        }, 600); // 缓存10分钟
    }

    // 其他页不缓存,直接查询
    return buildHotList(page, limit);
}

// 提取查询逻辑为单独方法
private Map<String, Object> buildHotList(int page, int limit) {
    Map<String, Object> result = new HashMap<>();

    // 原来的查询逻辑
    QueryWrapper<Article> wrapper = new QueryWrapper<>();
    wrapper.orderByDesc("hits");
    wrapper.last("limit " + (page - 1) * limit + "," + limit);
    List<Article> articles = articleMapper.selectList(wrapper);

    // ... 处理结果 ...

    return result;
}
```

**改动说明**:
1. 只缓存第一页(访问最频繁)
2. 其他页直接查询
3. 提取查询逻辑为独立方法

### 3.4 列表接口 - 第一页缓存

#### 模板代码:
```java
@GetMapping("/getAllArticles")
public Map<String, Object> getAllArticles(
        @RequestParam(value = "page", defaultValue = "1") Integer page,
        @RequestParam(value = "limit", defaultValue = "10") Integer limit) {

    // 只缓存第一页
    if (page == 1) {
        String cacheKey = "mini:articles:page1:limit" + limit;

        return cacheUtil.getOrLoad(cacheKey, () -> {
            return buildArticleList(page, limit);
        }, 300); // 缓存5分钟
    }

    return buildArticleList(page, limit);
}

private Map<String, Object> buildArticleList(Integer page, Integer limit) {
    // 原来的查询逻辑
    Map<String, Object> result = new HashMap<>();
    // ...
    return result;
}
```

## 四、缓存更新策略

### 4.1 创建/更新/删除后清除缓存

#### 示例: 发布文章后清除列表缓存
```java
@PostMapping("/createArticle")
public Result createArticle(@RequestBody Article article) {
    // 创建文章
    articleService.save(article);

    // 清除相关缓存
    cacheUtil.delete(
        "mini:articles:page1:limit10",
        "mini:articles:page1:limit20",
        "mini:important:articles",
        "mini:hotlist:page1"
    );

    return Result.succ("发布成功");
}
```

#### 示例: 更新文章后清除详情缓存
```java
@PostMapping("/updateArticle")
public Result updateArticle(@RequestBody Article article) {
    // 更新文章
    articleService.updateById(article);

    // 清除该文章的详情缓存
    cacheUtil.delete("article:detail:" + article.getId());

    // 清除列表缓存
    cacheUtil.delete(
        "mini:articles:page1:limit10",
        "mini:hotlist:page1"
    );

    return Result.succ("更新成功");
}
```

### 4.2 点赞/收藏后清除缓存

```java
@PostMapping("/toggleLike")
public Result toggleLike(@RequestParam String targetType,
                         @RequestParam Integer targetId) {
    // 点赞逻辑
    // ...

    // 清除缓存
    if ("article".equals(targetType)) {
        cacheUtil.delete("article:detail:" + targetId);
    } else if ("resource".equals(targetType)) {
        cacheUtil.delete("resource:detail:" + targetId);
    }

    return Result.succ("操作成功");
}
```

## 五、完整集成步骤

### 步骤1: 备份原Controller
```bash
cp MiniProgrammeController.java MiniProgrammeController.java.bak
```

### 步骤2: 添加CacheUtil注入
```java
@RestController
@RequestMapping("/Mini")
public class MiniProgrammeController {

    // 添加这一行
    @Autowired
    private CacheUtil cacheUtil;

    // ... 其他代码 ...
}
```

### 步骤3: 修改需要缓存的接口

参考上面的示例,逐个修改接口。推荐顺序:
1. ✅ getCarousel - 轮播图
2. ✅ getImportantArticles - 重要文章
3. ✅ getSquareClasslist - 圈子分类
4. ✅ getArticleById - 文章详情
5. ✅ getResourceById - 资源详情
6. ✅ getHotList - 热榜
7. ✅ getAllArticles - 文章列表
8. ✅ getAllResources - 资源列表

### 步骤4: 测试

#### 测试缓存是否生效:
```bash
# 第一次访问 - 慢(查数据库)
curl http://localhost:8181/Mini/getCarousel

# 第二次访问 - 快(走缓存)
curl http://localhost:8181/Mini/getCarousel
```

#### 检查日志:
```
# Redis可用时
缓存未命中 - 查询数据库
缓存写入: mini:carousel
缓存命中: mini:carousel

# Redis不可用时
Redis不可用,降级到直接查询
```

## 六、缓存Key命名规范

```
模块:功能:参数

示例:
mini:carousel                          # 轮播图
mini:important:articles                # 重要文章
mini:hotlist:page1                     # 热榜第一页
mini:articles:page1:limit10            # 文章列表第一页(每页10条)
mini:resources:page1:limit20           # 资源列表第一页(每页20条)
mini:square:classlist                  # 圈子分类列表
article:detail:123                     # 文章123的详情
resource:detail:456                    # 资源456的详情
```

## 七、监控和调优

### 7.1 查看缓存命中率

```java
@GetMapping("/cache/stats")
public Map<String, Object> getCacheStats() {
    Map<String, Object> stats = new HashMap<>();
    stats.put("redisAvailable", cacheUtil.isRedisAvailable());
    stats.put("hitRate", cacheUtil.getHitRate());
    return stats;
}
```

### 7.2 手动清除缓存

```java
@PostMapping("/cache/clear")
public Result clearCache(@RequestParam String pattern) {
    // 清除所有mini模块的缓存
    if ("mini".equals(pattern)) {
        cacheUtil.delete(
            "mini:carousel",
            "mini:important:articles",
            "mini:hotlist:page1",
            "mini:articles:page1:limit10",
            "mini:articles:page1:limit20",
            "mini:resources:page1:limit10",
            "mini:resources:page1:limit20",
            "mini:square:classlist"
        );
    }

    return Result.succ("缓存已清除");
}
```

### 7.3 调整缓存时间

根据实际情况调整缓存时间:
```java
// 不常变化的数据 - 1小时
cacheUtil.getOrLoad(key, supplier, 3600);

// 中等频率变化 - 30分钟
cacheUtil.getOrLoad(key, supplier, 1800);

// 频繁变化 - 5-10分钟
cacheUtil.getOrLoad(key, supplier, 300);

// 实时性要求高 - 不缓存
// 直接调用 supplier.get()
```

## 八、常见问题

### Q1: 缓存更新不及时怎么办?

**方案1**: 缩短缓存时间
```java
cacheUtil.getOrLoad(key, supplier, 60); // 改为1分钟
```

**方案2**: 主动清除缓存
```java
// 更新后立即清除
articleService.updateById(article);
cacheUtil.delete("article:detail:" + article.getId());
```

### Q2: 缓存占用内存太多?

**方案1**: 只缓存热点数据(第一页)
```java
if (page == 1) {
    return cacheUtil.getOrLoad(key, supplier, expire);
}
return supplier.get(); // 其他页不缓存
```

**方案2**: 缩短缓存时间
```java
cacheUtil.getOrLoad(key, supplier, 300); // 5分钟
```

### Q3: Redis宕机会影响服务吗?

**不会!** CacheUtil会自动降级:
```
Redis可用 -> 使用缓存
Redis故障 -> 自动降级到直接查询数据库
```

功能完全正常,只是响应稍慢。

## 九、性能提升预期

### 启用Redis前:
```
轮播图: 50-100ms
文章详情: 50-100ms
热榜: 100-200ms
文章列表: 100-200ms
```

### 启用Redis后(缓存命中):
```
轮播图: 5-10ms      ↑ 提升90%
文章详情: 5-10ms    ↑ 提升90%
热榜: 10-20ms       ↑ 提升90%
文章列表: 10-20ms   ↑ 提升90%
```

### 数据库压力:
```
QPS降低: 60-80%
连接数降低: 50-70%
```

## 十、参考文件

- `MiniProgrammeControllerWithCache.java` - 完整的带缓存版本示例
- `CacheUtil.java` - 缓存工具类
- `RedisConfig.java` - Redis配置类
- `REDIS_OPTIONAL_GUIDE.md` - Redis可选配置指南

---

**文档版本**: v1.0
**最后更新**: 2025-12-09
**适用版本**: IceCMS-Pro v1.0+
