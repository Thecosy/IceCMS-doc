---
id: performance-optimization
title: 性能优化建议
sidebar_label: 性能优化建议
---

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

-- user_like表
✅ PRIMARY KEY (id)
✅ UNIQUE KEY uk_user_target (user_id, target_type, target_id)

-- video表
✅ PRIMARY KEY (id)
✅ KEY idx_category_id (category_id)
✅ KEY idx_create_time (create_time)
✅ KEY idx_status_recommend (status, is_recommend)
```

### 1.2 额外建议索引

#### article表
```sql
ALTER TABLE article ADD INDEX idx_status_matter (status, matter);
ALTER TABLE article ADD INDEX idx_create_time (create_time);
ALTER TABLE article ADD INDEX idx_hits (hits);
```

#### resource表
```sql
ALTER TABLE resource ADD INDEX idx_status (status);
ALTER TABLE resource ADD INDEX idx_create_time (create_time);
ALTER TABLE resource ADD INDEX idx_hits (hits);
```

### 1.3 查询优化

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

-- 2. 避免深度分页,使用lastId机制
-- 优化前 (offset越大越慢)
SELECT * FROM video ORDER BY id DESC LIMIT 1000, 10;

-- 优化后 (使用ID范围查询)
SELECT * FROM video WHERE id < 1000 ORDER BY id DESC LIMIT 10;
```

## 二、后端优化

### 2.1 Redis缓存实施

#### 热点数据缓存

##### 1. 轮播图缓存
```java
@GetMapping("/getCarousel")
public Result getCarousel() {
    String cacheKey = "mini:carousel";
    String cached = redisTemplate.opsForValue().get(cacheKey);

    if (cached != null) {
        return Result.succ(JSON.parseArray(cached, MiniCarousel.class));
    }

    // 缓存未命中,查询数据库
    List<MiniCarousel> list = miniCarouselService.list(...);

    // 存入Redis,过期时间1小时
    redisTemplate.opsForValue().set(cacheKey, JSON.toJSONString(list), 1, TimeUnit.HOURS);

    return Result.succ(list);
}
```

##### 2. 视频详情缓存
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
    }

    return Result.succ(video);
}
```

### 2.2 批量查询优化

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

```java
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

## 三、前端优化

### 3.1 图片优化

#### UniApp图片懒加载
```vue
<template>
  <image
    :src="video.coverUrl"
    mode="aspectFill"
    lazy-load
    class="cover-image">
  </image>
</template>
```

#### 图片压缩
```javascript
uni.chooseImage({
  count: 1,
  sizeType: ['compressed'], // 使用压缩图
  sourceType: ['album', 'camera'],
  success: (res) => {
    // 上传图片
  }
})
```

### 3.2 列表优化

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

      // 使用concat而不是push
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
    }
  }
}
```

### 3.4 请求优化

#### 防抖和节流
```javascript
import { debounce } from 'lodash';

export default {
  methods: {
    // 搜索防抖
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
    this.stopAllVideos();
    uni.offKeyboardHeightChange(this.onKeyboardChange);
  }
}
```

### 4.2 数据缓存

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

## 六、优化优先级

### P0 (必须实施)
1. ✅ 数据库索引优化 (已完成)
2. ⚠️ Redis缓存热点数据
3. ⚠️ 图片CDN加速
4. ⚠️ 列表分页优化

### P1 (建议实施)
1. ⚠️ 批量查询优化
2. ⚠️ 异步处理统计数据
3. ⚠️ 前端请求优化
4. ⚠️ UniApp分包加载

### P2 (可选实施)
1. ⚠️ 表分区 (数据量大时)
2. ⚠️ APM监控
3. ⚠️ 虚拟滚动
4. ⚠️ 预加载优化

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

4. **用户体验显著提升**
   - 页面秒开
   - 滚动流畅
   - 视频播放流畅

---

**文档创建日期**: 2025-12-09
**优化目标**: 整体性能提升50%以上
**预计实施时间**: 1周
