# IceCMS-Pro 性能优化建议

## 一、数据库优化

### 1.1 索引优化 (已实施)

#### 已添加的索引
```sql
-- user_sign_in表
✅ PRIMARY KEY (id)
✅ UNIQUE KEY uk_user_date (user_id, sign_date)
✅ KEY idx_user_id (user_id)
✅ KEY idx_sign_date (sign_date)

-- user_integral_record表
✅ PRIMARY KEY (id)
✅ KEY idx_user_id (user_id)
✅ KEY idx_create_time (create_time)

-- user_like表
✅ PRIMARY KEY (id)
✅ UNIQUE KEY uk_user_target (user_id, target_type, target_id)
✅ KEY idx_target (target_type, target_id)

-- video表
✅ PRIMARY KEY (id)
✅ KEY idx_category_id (category_id)
✅ KEY idx_user_id (user_id)
✅ KEY idx_create_time (create_time)
✅ KEY idx_status_recommend (status, is_recommend)

-- video_comment表
✅ PRIMARY KEY (id)
✅ KEY idx_video_id (video_id)
✅ KEY idx_user_id (user_id)
✅ KEY idx_parent_id (parent_id)

-- circle_topic表
✅ PRIMARY KEY (id)
✅ KEY idx_square_id (square_id)
✅ KEY idx_user_id (user_id)
✅ KEY idx_create_time (create_time)

-- circle_topic_comment表
✅ PRIMARY KEY (id)
✅ KEY idx_topic_id (topic_id)
✅ KEY idx_user_id (user_id)
✅ KEY idx_parent_id (parent_id)
```

### 1.2 额外建议索引

#### article表
```sql
-- 如果article表还没有这些索引,建议添加:
ALTER TABLE article ADD INDEX idx_status_matter (status, matter);
ALTER TABLE article ADD INDEX idx_create_time (create_time);
ALTER TABLE article ADD INDEX idx_hits (hits); -- 用于热榜排序
```

#### resource表
```sql
-- 如果resource表还没有这些索引,建议添加:
ALTER TABLE resource ADD INDEX idx_status (status);
ALTER TABLE resource ADD INDEX idx_create_time (create_time);
ALTER TABLE resource ADD INDEX idx_hits (hits);
```

#### square表
```sql
-- 如果square表还没有这些索引,建议添加:
ALTER TABLE square ADD INDEX idx_status (status);
ALTER TABLE square ADD INDEX idx_category_id (category_id);
```

### 1.3 查询优化

#### 慢查询优化建议
```sql
-- 1. 避免SELECT *,只查询需要的字段
-- 优化前
SELECT * FROM video WHERE status = 1 ORDER BY create_time DESC LIMIT 10;

-- 优化后
SELECT id, title, cover_url, duration, hits, love_num
FROM video
WHERE status = 1
ORDER BY create_time DESC
LIMIT 10;

-- 2. 使用EXPLAIN分析查询
EXPLAIN SELECT * FROM video WHERE status = 1 AND is_recommend = 1;

-- 3. 避免深度分页,使用lastId机制
-- 优化前 (offset越大越慢)
SELECT * FROM video ORDER BY id DESC LIMIT 1000, 10;

-- 优化后 (使用ID范围查询)
SELECT * FROM video WHERE id < 1000 ORDER BY id DESC LIMIT 10;
```

### 1.4 表分区建议 (可选,数据量大时使用)

```sql
-- 对积分记录表按月分区
ALTER TABLE user_integral_record
PARTITION BY RANGE (YEAR(create_time) * 100 + MONTH(create_time)) (
    PARTITION p202501 VALUES LESS THAN (202502),
    PARTITION p202502 VALUES LESS THAN (202503),
    PARTITION p202503 VALUES LESS THAN (202504),
    -- ... 继续添加
    PARTITION pmax VALUES LESS THAN MAXVALUE
);

-- 对签到记录表按月分区
ALTER TABLE user_sign_in
PARTITION BY RANGE (YEAR(sign_date) * 100 + MONTH(sign_date)) (
    PARTITION p202501 VALUES LESS THAN (202502),
    -- ... 类似上面
    PARTITION pmax VALUES LESS THAN MAXVALUE
);
```

---

## 二、后端优化

### 2.1 Redis缓存实施

#### 缓存配置
```java
// application.yml
spring:
  redis:
    host: localhost
    port: 6379
    password:
    database: 0
    lettuce:
      pool:
        max-active: 8
        max-wait: -1ms
        max-idle: 8
        min-idle: 0
    timeout: 5000ms
```

#### 热点数据缓存

##### 1. 轮播图缓存
```java
// MiniProgrammeController.java
@GetMapping("/getCarousel")
public Result getCarousel() {
    // 从Redis获取缓存
    String cacheKey = "mini:carousel";
    String cached = redisTemplate.opsForValue().get(cacheKey);

    if (cached != null) {
        return Result.succ(JSON.parseArray(cached, MiniCarousel.class));
    }

    // 缓存未命中,查询数据库
    List<MiniCarousel> list = miniCarouselService.list(
        new QueryWrapper<MiniCarousel>().eq("status", 1).orderByAsc("sort")
    );

    // 存入Redis,过期时间1小时
    redisTemplate.opsForValue().set(cacheKey, JSON.toJSONString(list), 1, TimeUnit.HOURS);

    return Result.succ(list);
}
```

##### 2. 热榜缓存
```java
@GetMapping("/getHotList")
public Result getHotList(
    @RequestParam(defaultValue = "1") Integer page,
    @RequestParam(defaultValue = "20") Integer limit) {

    // 只缓存第一页
    if (page == 1) {
        String cacheKey = "mini:hotlist:page1";
        String cached = redisTemplate.opsForValue().get(cacheKey);

        if (cached != null) {
            return Result.succ(JSON.parseObject(cached));
        }
    }

    // 查询数据库...

    // 缓存第一页,过期时间10分钟
    if (page == 1) {
        redisTemplate.opsForValue().set(cacheKey, JSON.toJSONString(result), 10, TimeUnit.MINUTES);
    }

    return Result.succ(result);
}
```

##### 3. 视频详情缓存
```java
@GetMapping("/detail/{id}")
public Result getVideoDetail(@PathVariable Integer id) {
    String cacheKey = "video:detail:" + id;
    String cached = redisTemplate.opsForValue().get(cacheKey);

    if (cached != null) {
        // 异步更新播放次数
        CompletableFuture.runAsync(() -> {
            videoMapper.increaseHits(id);
        });
        return Result.succ(JSON.parseObject(cached, Video.class));
    }

    Video video = videoService.getById(id);
    if (video != null) {
        // 缓存5分钟
        redisTemplate.opsForValue().set(cacheKey, JSON.toJSONString(video), 5, TimeUnit.MINUTES);

        // 增加播放次数
        video.setHits(video.getHits() + 1);
        videoService.updateById(video);
    }

    return Result.succ(video);
}
```

##### 4. 用户签到状态缓存
```java
@GetMapping("/getSignInStatus")
public Result getSignInStatus(@RequestHeader("Authorization") String token) {
    Integer userId = JwtUtil.getUserIdFromToken(token);
    String cacheKey = "user:signin:status:" + userId;

    String cached = redisTemplate.opsForValue().get(cacheKey);
    if (cached != null) {
        return Result.succ(JSON.parseObject(cached));
    }

    // 查询数据库...

    // 缓存到今天24点
    long seconds = getSecondsUntilEndOfDay();
    redisTemplate.opsForValue().set(cacheKey, JSON.toJSONString(result), seconds, TimeUnit.SECONDS);

    return Result.succ(result);
}

private long getSecondsUntilEndOfDay() {
    LocalDateTime now = LocalDateTime.now();
    LocalDateTime endOfDay = now.toLocalDate().atTime(23, 59, 59);
    return Duration.between(now, endOfDay).getSeconds();
}
```

#### 缓存更新策略

```java
// 签到后清除缓存
@PostMapping("/signIn")
@Transactional(rollbackFor = Exception.class)
public Result signIn(@RequestHeader("Authorization") String token) {
    Integer userId = JwtUtil.getUserIdFromToken(token);

    // ... 签到逻辑 ...

    // 清除签到状态缓存
    redisTemplate.delete("user:signin:status:" + userId);

    return Result.succ(data);
}

// 点赞后清除视频详情缓存
@PostMapping("/toggleLike")
@Transactional(rollbackFor = Exception.class)
public Result toggleLike(...) {
    // ... 点赞逻辑 ...

    // 清除缓存
    if ("video".equals(targetType)) {
        redisTemplate.delete("video:detail:" + targetId);
    }

    return Result.succ(data);
}
```

### 2.2 批量查询优化

#### 批量获取用户信息
```java
// 优化前: N+1查询
for (Video video : videoList) {
    User user = userService.getById(video.getUserId());
    video.setAuthor(user);
}

// 优化后: 批量查询
List<Integer> userIds = videoList.stream()
    .map(Video::getUserId)
    .distinct()
    .collect(Collectors.toList());

List<User> users = userService.listByIds(userIds);
Map<Integer, User> userMap = users.stream()
    .collect(Collectors.toMap(User::getId, u -> u));

videoList.forEach(video -> {
    video.setAuthor(userMap.get(video.getUserId()));
});
```

### 2.3 异步处理

#### 异步更新统计数据
```java
@Configuration
@EnableAsync
public class AsyncConfig {
    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("async-");
        executor.initialize();
        return executor;
    }
}

@Service
public class VideoService {
    @Async
    public void increaseHitsAsync(Integer videoId) {
        videoMapper.increaseHits(videoId);
    }

    @Async
    public void increaseCommentNumAsync(Integer videoId) {
        videoMapper.increaseCommentNum(videoId);
    }
}
```

### 2.4 数据库连接池优化

```yaml
# application.yml
spring:
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    hikari:
      minimum-idle: 5
      maximum-pool-size: 20
      auto-commit: true
      idle-timeout: 30000
      pool-name: IceCMSHikariCP
      max-lifetime: 1800000
      connection-timeout: 30000
      connection-test-query: SELECT 1
```

---

## 三、前端优化

### 3.1 图片优化

#### UniApp图片懒加载
```vue
<template>
  <!-- 使用image组件的lazy-load属性 -->
  <image
    :src="video.coverUrl"
    mode="aspectFill"
    lazy-load
    class="cover-image">
  </image>
</template>
```

#### 图片压缩和格式
```javascript
// 上传前压缩图片
uni.chooseImage({
  count: 1,
  sizeType: ['compressed'], // 使用压缩图
  sourceType: ['album', 'camera'],
  success: (res) => {
    // 上传图片
  }
})

// 使用WebP格式 (服务端支持)
<image :src="imageUrl + '?x-oss-process=image/format,webp'"></image>
```

#### CDN加速
```javascript
// 使用七牛云/腾讯云COS的CDN域名
const CDN_DOMAIN = 'https://cdn.icecmspro.com';

function getCDNUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return CDN_DOMAIN + path;
}
```

### 3.2 列表优化

#### 虚拟滚动 (长列表)
```vue
<template>
  <!-- 使用recycle-list组件 (App端支持) -->
  <recycle-list :data="list" :height="600">
    <template v-slot="{ item }">
      <view class="list-item">
        <text>{{ item.title }}</text>
      </view>
    </template>
  </recycle-list>
</template>
```

#### 分页加载优化
```javascript
export default {
  data() {
    return {
      list: [],
      page: 1,
      limit: 20,
      loading: false,
      hasMore: true
    }
  },

  onReachBottom() {
    // 节流控制
    if (this.loading || !this.hasMore) return;

    this.page++;
    this.loadMore();
  },

  async loadMore() {
    this.loading = true;

    try {
      const result = await api.getList(this.page, this.limit);

      // 使用concat而不是push,避免多次触发视图更新
      this.list = this.list.concat(result.records);
      this.hasMore = this.page < result.pages;
    } finally {
      this.loading = false;
    }
  }
}
```

### 3.3 视频优化

#### 短视频预加载
```javascript
export default {
  data() {
    return {
      videoList: [],
      currentIndex: 0
    }
  },

  methods: {
    onSwiperChange(e) {
      const newIndex = e.detail.current;
      this.currentIndex = newIndex;

      // 预加载下一个视频
      if (newIndex < this.videoList.length - 1) {
        this.preloadVideo(newIndex + 1);
      }

      // 提前加载更多
      if (newIndex >= this.videoList.length - 3) {
        this.loadVideos();
      }
    },

    preloadVideo(index) {
      const video = this.videoList[index];
      if (!video) return;

      // 创建video上下文进行预加载
      const videoId = 'video-' + video.id;
      const context = uni.createVideoContext(videoId, this);
      // 不需要调用play,只需要创建上下文即可预加载
    }
  }
}
```

#### 视频封面优化
```vue
<template>
  <video
    :src="video.videoUrl"
    :poster="video.coverUrl + '?x-oss-process=image/resize,w_750/quality,q_80'"
    :enable-progress-gesture="false"
    :show-center-play-btn="false">
  </video>
</template>
```

### 3.4 请求优化

#### 请求合并
```javascript
// 批量检查点赞状态
async batchCheckLikes(items, targetType) {
  const ids = items.map(item => item.id);

  // 一次性检查多个
  const result = await api.interaction.batchCheckLike(targetType, ids);

  // 更新到items
  items.forEach(item => {
    item.isLiked = result[item.id] || false;
  });
}
```

#### 请求取消 (避免重复请求)
```javascript
let controller = null;

async function searchArticles(keyword) {
  // 取消上一次请求
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();

  try {
    const result = await api.search(keyword, {
      signal: controller.signal
    });
    return result;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('请求被取消');
    }
  }
}
```

#### 防抖和节流
```javascript
// 搜索防抖
import { debounce } from 'lodash';

export default {
  methods: {
    onSearchInput: debounce(function(keyword) {
      this.search(keyword);
    }, 500),

    // 滚动节流
    onScroll: throttle(function(e) {
      this.handleScroll(e);
    }, 100)
  }
}
```

---

## 四、UniApp专项优化

### 4.1 生命周期优化

```javascript
export default {
  // 页面显示时才加载数据
  onShow() {
    this.loadData();
  },

  // 页面隐藏时停止定时器
  onHide() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  // 页面卸载时清理资源
  onUnload() {
    // 停止所有视频
    this.stopAllVideos();

    // 清除事件监听
    uni.offKeyboardHeightChange(this.onKeyboardChange);
  }
}
```

### 4.2 数据缓存

#### 使用uni.setStorageSync缓存数据
```javascript
// 缓存用户信息
export const cacheUserInfo = (userInfo) => {
  uni.setStorageSync('userInfo', userInfo);
}

export const getCachedUserInfo = () => {
  try {
    return uni.getStorageSync('userInfo');
  } catch (e) {
    return null;
  }
}

// 缓存搜索历史
export const addSearchHistory = (keyword) => {
  let history = uni.getStorageSync('searchHistory') || [];

  // 去重
  history = history.filter(item => item !== keyword);

  // 添加到开头
  history.unshift(keyword);

  // 最多保存10条
  if (history.length > 10) {
    history = history.slice(0, 10);
  }

  uni.setStorageSync('searchHistory', history);
}
```

### 4.3 包体积优化

#### 分包配置
```json
// pages.json
{
  "subPackages": [
    {
      "root": "pages/video",
      "pages": [
        {
          "path": "feed",
          "style": {
            "navigationBarTitleText": "短视频"
          }
        }
      ]
    },
    {
      "root": "pages/circle",
      "pages": [
        {
          "path": "topic/detail",
          "style": {
            "navigationBarTitleText": "话题详情"
          }
        }
      ]
    }
  ],
  "preloadRule": {
    "pages/index/index": {
      "network": "all",
      "packages": ["pages/video"]
    }
  }
}
```

#### 按需引入组件
```javascript
// 不要全局引入整个UI库
// import TuniaoUI from 'tuniao-ui';
// Vue.use(TuniaoUI);

// 按需引入
import { Button, Icon } from 'tuniao-ui';
Vue.component('tn-button', Button);
Vue.component('tn-icon', Icon);
```

#### 图片资源优化
```
1. 压缩所有图片 (使用tinypng.com)
2. 使用字体图标代替小图标
3. 大图片使用CDN,不打包到小程序
```

### 4.4 性能监控

```javascript
// App.vue
export default {
  onLaunch() {
    // 监控启动性能
    const startTime = Date.now();

    this.$nextTick(() => {
      const launchTime = Date.now() - startTime;
      console.log('App启动耗时:', launchTime, 'ms');

      // 上报到统计平台
      if (launchTime > 3000) {
        this.reportSlowLaunch(launchTime);
      }
    });
  },

  methods: {
    reportSlowLaunch(time) {
      // 上报慢启动
      uni.request({
        url: 'https://api.icecmspro.com/monitor/slow-launch',
        method: 'POST',
        data: { time, platform: uni.getSystemInfoSync().platform }
      });
    }
  }
}
```

---

## 五、监控和度量

### 5.1 关键性能指标 (KPI)

```
1. 接口响应时间
   - P50 < 200ms
   - P95 < 500ms
   - P99 < 1000ms

2. 数据库查询时间
   - 简单查询 < 10ms
   - 复杂查询 < 100ms

3. 页面加载时间
   - 首屏 < 2秒
   - 完全加载 < 5秒

4. 缓存命中率
   - 热点数据 > 80%
   - 普通数据 > 50%
```

### 5.2 慢查询日志

```yaml
# application.yml
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.slf4j.Slf4jImpl

# 开启慢SQL日志
logging:
  level:
    com.ttice.icewkment.mapper: debug
```

### 5.3 APM监控 (推荐)

```java
// 使用SkyWalking或Spring Boot Admin

// pom.xml
<dependency>
    <groupId>org.apache.skywalking</groupId>
    <artifactId>apm-toolkit-trace</artifactId>
    <version>8.9.0</version>
</dependency>

// 使用@Trace注解标记关键方法
@Trace
@Transactional
public Result signIn(String token) {
    // ...
}
```

---

## 六、优化优先级

### P0 (必须实施)
1. ✅ 数据库索引优化 (已完成)
2. ⚠️ Redis缓存热点数据
3. ⚠️ 图片CDN加速
4. ⚠️ 列表分页优化

### P1 (建议实施)
1. ⚠️ 批量查询优化
2. ⚠️ 异步处理统计数据
3. ⚠️ 前端请求优化 (防抖节流)
4. ⚠️ UniApp分包加载

### P2 (可选实施)
1. ⚠️ 表分区 (数据量大时)
2. ⚠️ APM监控
3. ⚠️ 虚拟滚动 (超长列表)
4. ⚠️ 预加载优化

---

## 七、预期效果

实施以上优化后,预期达到:

1. **接口响应时间降低50%**
   - 缓存命中: < 50ms
   - 数据库查询: < 200ms

2. **数据库负载降低60%**
   - 热点数据走Redis
   - 索引优化减少全表扫描

3. **前端加载速度提升40%**
   - 图片CDN加速
   - 分包按需加载
   - 虚拟滚动减少渲染

4. **用户体验显著提升**
   - 页面秒开
   - 滚动流畅
   - 视频播放流畅

---

## 八、实施计划

### 第一阶段 (1-2天)
1. 配置Redis
2. 实施轮播图、热榜缓存
3. 配置图片CDN

### 第二阶段 (2-3天)
1. 优化所有列表查询
2. 实施批量查询
3. 添加异步处理

### 第三阶段 (1-2天)
1. 前端分包配置
2. 图片懒加载
3. 请求优化

### 第四阶段 (持续)
1. 监控慢查询
2. 持续优化
3. 性能测试

---

**文档创建日期**: 2025-12-09
**优化目标**: 整体性能提升50%以上
**预计实施时间**: 1周
