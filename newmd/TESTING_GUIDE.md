# IceCMS-Pro UniApp 测试指南

## 测试概述

本文档提供了IceCMS-Pro UniApp小程序的完整测试指南，包括功能测试、接口测试和性能优化建议。

## 一、功能测试清单

### 1. 首页模块测试

#### 1.1 首页基础功能
- [ ] 轮播图加载和切换
- [ ] 重要文章列表显示
- [ ] 精选圈子列表显示
- [ ] 下拉刷新功能
- [ ] 上拉加载更多

#### 1.2 首页导航功能
- [ ] 搜索按钮跳转到搜索页
- [ ] 热榜按钮跳转到热榜页
- [ ] "查看更多"跳转到热榜页
- [ ] 文章点击跳转到文章详情
- [ ] 圈子点击跳转到圈子详情

**测试接口:**
- GET /Mini/getCarousel
- GET /Mini/GetArticleBtmatter
- GET /Mini/getAllSquare

---

### 2. 搜索模块测试

#### 2.1 搜索功能
- [ ] 搜索框输入和清空
- [ ] 综合搜索(文章+资源)
- [ ] 文章单独搜索
- [ ] 资源单独搜索
- [ ] 搜索历史记录保存
- [ ] 搜索历史清空

#### 2.2 搜索结果
- [ ] 文章结果显示和跳转
- [ ] 资源结果显示和跳转
- [ ] 无结果提示
- [ ] 分页加载更多

**测试接口:**
- GET /Mini/search

---

### 3. 热榜模块测试

#### 3.1 热榜列表
- [ ] 热榜列表按浏览量排序
- [ ] 文章信息完整显示(标题、简介、浏览量、点赞数)
- [ ] 下拉刷新
- [ ] 上拉加载更多
- [ ] 点击跳转到文章详情

**测试接口:**
- GET /Mini/getHotList

---

### 4. 文章模块测试

#### 4.1 文章详情
- [ ] 文章标题和内容正确显示
- [ ] 浏览量正确显示
- [ ] 点赞数正确显示
- [ ] 评论数正确显示
- [ ] 推荐文章列表显示

#### 4.2 文章互动
- [ ] 点赞功能(已登录)
- [ ] 取消点赞功能
- [ ] 收藏功能(已登录)
- [ ] 取消收藏功能
- [ ] 评论功能
- [ ] 查看评论列表

**测试接口:**
- GET /Mini/getArticleById/{id}
- POST /WebInteraction/toggleLike
- POST /WebInteraction/toggleFavorite
- POST /WebArticleComment/addArticleComment
- GET /WebArticleComment/getallArticleComment/{articleId}

---

### 5. 资源模块测试

#### 5.1 资源详情
- [ ] 资源信息正确显示(标题、简介、下载地址)
- [ ] 浏览量和点赞数显示
- [ ] 复用文章详情页(type=resource)

#### 5.2 资源互动
- [ ] 点赞功能
- [ ] 收藏功能
- [ ] 评论功能

**测试接口:**
- GET /Mini/getResourceById/{id}
- GET /Mini/getAllResources

---

### 6. 圈子模块测试

#### 6.1 圈子列表
- [ ] 圈子分类列表显示
- [ ] 圈子列表分页加载
- [ ] 圈子信息完整显示

#### 6.2 圈子话题
- [ ] 话题列表显示
- [ ] 话题详情查看
- [ ] 发布话题(已登录)
- [ ] 话题点赞
- [ ] 话题评论
- [ ] 话题删除(自己发布的)

**测试接口:**
- GET /Mini/getSquareClasslist
- GET /Mini/getAllSquare
- GET /WebCircleTopic/list
- GET /WebCircleTopic/detail/{id}
- POST /WebCircleTopic/publish
- POST /WebCircleTopic/like/{id}
- POST /WebCircleTopic/comment
- DELETE /WebCircleTopic/delete/{id}

---

### 7. 用户模块测试

#### 7.1 登录注册
- [ ] 邮箱注册
- [ ] 邮箱验证码发送
- [ ] 邮箱登录
- [ ] 微信登录
- [ ] 手机号登录
- [ ] 找回密码

#### 7.2 个人中心
- [ ] 个人信息显示
- [ ] 修改个人资料
- [ ] 修改密码
- [ ] 头像上传

#### 7.3 积分签到
- [ ] 每日签到功能
- [ ] 签到状态显示
- [ ] 连续签到天数显示
- [ ] 积分奖励计算
- [ ] 签到规则显示

#### 7.4 积分明细
- [ ] 积分记录列表显示
- [ ] 积分变动类型显示(签到、兑换等)
- [ ] 当前总积分显示
- [ ] 分页加载更多

#### 7.5 积分排行
- [ ] 积分排行榜显示
- [ ] 排名正确计算
- [ ] 分页功能

**测试接口:**
- POST /Websuser/login
- GET /Websuser/Create
- POST /Websuser/WeChatLogin
- POST /Websuser/ChangeUser
- POST /WebUserIntegral/signIn
- GET /WebUserIntegral/getSignInStatus
- GET /WebUserIntegral/getIntegralRecords
- GET /WebUserIntegral/getIntegralRanking

---

### 8. 通用互动测试

#### 8.1 点赞功能
- [ ] 文章点赞/取消
- [ ] 资源点赞/取消
- [ ] 圈子话题点赞/取消
- [ ] 视频点赞/取消
- [ ] 点赞状态正确显示
- [ ] 点赞数实时更新

#### 8.2 收藏功能
- [ ] 文章收藏/取消
- [ ] 资源收藏/取消
- [ ] 收藏状态正确显示
- [ ] 我的收藏列表

#### 8.3 评论功能
- [ ] 发布评论
- [ ] 评论列表显示
- [ ] 评论用户信息显示

**测试接口:**
- POST /WebInteraction/toggleLike
- GET /WebInteraction/checkLike
- POST /WebInteraction/toggleFavorite
- GET /WebInteraction/checkFavorite
- GET /WebInteraction/getMyFavorites

---

### 9. 视频模块测试

#### 9.1 视频列表
- [ ] 视频列表显示
- [ ] 分类筛选
- [ ] 关键词搜索
- [ ] 排序功能(最新/最热/推荐)
- [ ] 分页加载

#### 9.2 视频详情
- [ ] 视频播放
- [ ] 封面图显示
- [ ] 播放次数统计
- [ ] 视频信息显示

#### 9.3 短视频刷取
- [ ] 竖屏滑动切换视频
- [ ] 自动播放新视频
- [ ] 自动暂停旧视频
- [ ] 点击暂停/播放
- [ ] 无限滚动加载
- [ ] 点赞功能
- [ ] 收藏功能
- [ ] 评论功能
- [ ] 分享功能

#### 9.4 视频评论
- [ ] 发布评论
- [ ] 评论列表显示
- [ ] 评论数更新

**测试接口:**
- GET /WebVideo/list
- GET /WebVideo/detail/{id}
- GET /WebVideo/feed
- POST /WebVideo/comment/add
- GET /WebVideo/comment/list/{videoId}
- GET /WebVideo/recommend

---

## 二、接口测试清单

### 1. Mini接口组 (MiniProgrammeController)

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /Mini/getCarousel | GET | 获取轮播图 | ⏳ 待测试 |
| /Mini/GetArticleBtmatter | GET | 获取重要文章 | ⏳ 待测试 |
| /Mini/getArticleById/{id} | GET | 获取文章详情 | ⏳ 待测试 |
| /Mini/getResourceById/{id} | GET | 获取资源详情 | ⏳ 待测试 |
| /Mini/getAllSquare | GET | 获取圈子列表 | ⏳ 待测试 |
| /Mini/getSquareClasslist | GET | 获取分类列表 | ⏳ 待测试 |
| /Mini/getNewResource | GET | 获取最新资源 | ⏳ 待测试 |
| /Mini/search | GET | 综合搜索 | ⏳ 待测试 |
| /Mini/getHotList | GET | 获取热榜 | ⏳ 待测试 |
| /Mini/getAllArticles | GET | 获取所有文章 | ⏳ 待测试 |
| /Mini/getAllResources | GET | 获取所有资源 | ⏳ 待测试 |

### 2. 用户接口组 (WebUserController)

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /Websuser/login | POST | 用户登录 | ⏳ 待测试 |
| /Websuser/Create | GET | 用户注册 | ⏳ 待测试 |
| /Websuser/WeChatLogin | POST | 微信登录 | ⏳ 待测试 |
| /Websuser/CreateWeChatLogin | POST | 微信登录注册 | ⏳ 待测试 |
| /Websuser/ChangeUser | POST | 修改用户信息 | ⏳ 待测试 |
| /Websuser/ChangePassword/{jwt}/{yuanPassword}/{newPassword}/{userid} | POST | 修改密码 | ⏳ 待测试 |
| /Websuser/FindPassword | POST | 找回密码 | ⏳ 待测试 |
| /Websuser/getCurrentUserInfo | GET | 获取当前用户信息 | ⏳ 待测试 |

### 3. 积分签到接口组 (WebUserIntegralController)

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /WebUserIntegral/signIn | POST | 用户签到 | ⏳ 待测试 |
| /WebUserIntegral/getSignInStatus | GET | 获取签到状态 | ⏳ 待测试 |
| /WebUserIntegral/getIntegralRecords | GET | 获取积分记录 | ⏳ 待测试 |
| /WebUserIntegral/getIntegralRanking | GET | 获取积分排行 | ⏳ 待测试 |

### 4. 互动接口组 (WebInteractionController)

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /WebInteraction/toggleLike | POST | 点赞/取消点赞 | ⏳ 待测试 |
| /WebInteraction/checkLike | GET | 检查是否已点赞 | ⏳ 待测试 |
| /WebInteraction/toggleFavorite | POST | 收藏/取消收藏 | ⏳ 待测试 |
| /WebInteraction/checkFavorite | GET | 检查是否已收藏 | ⏳ 待测试 |
| /WebInteraction/getMyFavorites | GET | 获取我的收藏 | ⏳ 待测试 |

### 5. 圈子话题接口组 (WebCircleTopicController)

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /WebCircleTopic/list | GET | 获取话题列表 | ⏳ 待测试 |
| /WebCircleTopic/detail/{id} | GET | 获取话题详情 | ⏳ 待测试 |
| /WebCircleTopic/publish | POST | 发布话题 | ⏳ 待测试 |
| /WebCircleTopic/like/{id} | POST | 点赞话题 | ⏳ 待测试 |
| /WebCircleTopic/delete/{id} | DELETE | 删除话题 | ⏳ 待测试 |
| /WebCircleTopic/comments/{topicId} | GET | 获取评论列表 | ⏳ 待测试 |
| /WebCircleTopic/comment | POST | 发布评论 | ⏳ 待测试 |

### 6. 视频接口组 (WebVideoController)

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /WebVideo/list | GET | 获取视频列表 | ⏳ 待测试 |
| /WebVideo/detail/{id} | GET | 获取视频详情 | ⏳ 待测试 |
| /WebVideo/feed | GET | 短视频刷取 | ⏳ 待测试 |
| /WebVideo/comment/add | POST | 添加视频评论 | ⏳ 待测试 |
| /WebVideo/comment/list/{videoId} | GET | 获取视频评论 | ⏳ 待测试 |
| /WebVideo/recommend | GET | 获取推荐视频 | ⏳ 待测试 |

### 7. 评论接口组

| 接口路径 | 方法 | 功能 | 测试状态 |
|---------|------|------|---------|
| /WebArticleComment/getallArticleComment/{articleId} | GET | 获取文章评论 | ⏳ 待测试 |
| /WebArticleComment/addArticleComment | POST | 添加文章评论 | ⏳ 待测试 |
| /WebResourceComment/* | * | 资源评论相关 | ⏳ 待测试 |

---

## 三、接口测试步骤

### 1. 环境准备
```bash
# 1. 启动后端服务
cd IceCMS-main
./mvnw spring-boot:run

# 2. 导入数据库表
mysql -u root -p icecms < user_sign_in.sql
mysql -u root -p icecms < user_like.sql
mysql -u root -p icecms < video_tables.sql

# 3. 检查服务状态
# 访问 http://localhost:8181/doc.html 查看Swagger文档
```

### 2. 使用Postman测试

#### 示例1: 测试用户登录
```
POST http://localhost:8181/Websuser/login
Content-Type: application/x-www-form-urlencoded

username=test@example.com&password=123456
```

#### 示例2: 测试签到功能
```
POST http://localhost:8181/WebUserIntegral/signIn
Authorization: Bearer {token}
```

#### 示例3: 测试点赞功能
```
POST http://localhost:8181/WebInteraction/toggleLike
Authorization: Bearer {token}
Content-Type: application/x-www-form-urlencoded

targetType=article&targetId=1
```

### 3. 测试数据准备

在测试前，需要准备以下测试数据:

```sql
-- 插入测试用户
INSERT INTO user (username, password, name, email, integral) VALUES
('testuser', '$argon2$...', '测试用户', 'test@example.com', 100);

-- 插入测试文章
INSERT INTO article (title, intro, content, hits, love_num) VALUES
('测试文章1', '这是测试文章简介', '这是测试文章内容', 100, 50);

-- 插入测试视频
INSERT INTO video (title, intro, video_url, cover_url, hits, love_num) VALUES
('测试视频1', '测试视频简介', 'http://example.com/video1.mp4', 'http://example.com/cover1.jpg', 100, 50);
```

---

## 四、性能优化建议

### 1. 数据库优化

#### 1.1 索引优化
```sql
-- 文章表索引
ALTER TABLE article ADD INDEX idx_sort_class (sort_class);
ALTER TABLE article ADD INDEX idx_hits (hits);
ALTER TABLE article ADD INDEX idx_love_num (love_num);
ALTER TABLE article ADD INDEX idx_add_time (add_time);

-- 资源表索引
ALTER TABLE resource ADD INDEX idx_sort_class (sort_class);
ALTER TABLE resource ADD INDEX idx_hits (hits);

-- 视频表索引
ALTER TABLE video ADD INDEX idx_category (category_id);
ALTER TABLE video ADD INDEX idx_hits (hits);
ALTER TABLE video ADD INDEX idx_is_recommend (is_recommend);

-- 用户签到表索引
ALTER TABLE user_sign_in ADD INDEX idx_user_date (user_id, sign_date);

-- 用户点赞表索引
ALTER TABLE user_like ADD INDEX idx_user_target (user_id, target_type, target_id);
```

#### 1.2 查询优化
- 使用分页查询,避免一次性加载大量数据
- 使用索引字段进行排序和筛选
- 避免SELECT *,只查询需要的字段
- 使用JOIN时注意关联字段的索引

### 2. 后端优化

#### 2.1 缓存优化
```java
// 建议对热点数据使用Redis缓存
// 1. 轮播图缓存(更新频率低)
// 2. 热门文章缓存(10分钟刷新)
// 3. 积分排行榜缓存(1小时刷新)
// 4. 推荐视频缓存(30分钟刷新)
```

#### 2.2 批量查询优化
```java
// 建议优化点:
// 1. 收藏列表查询时,批量获取文章/资源详情
// 2. 评论列表查询时,批量获取用户信息
// 3. 使用MyBatis-Plus的批量查询方法
```

#### 2.3 异步处理
```java
// 以下操作可以异步处理:
// 1. 增加浏览次数
// 2. 更新点赞数/评论数
// 3. 发送通知
```

### 3. 前端优化

#### 3.1 图片优化
- 使用CDN加速图片加载
- 实现图片懒加载
- 使用适当的图片尺寸
- 启用图片压缩

#### 3.2 列表优化
- 实现虚拟滚动(长列表)
- 合理的分页大小(建议20-30条)
- 防抖和节流(搜索、滚动事件)

#### 3.3 视频优化
- 视频预加载策略
- 离开页面时及时释放视频资源
- 使用合适的视频格式和码率
- 实现视频缓存机制

#### 3.4 请求优化
```javascript
// 1. API请求防抖
// 2. 取消重复请求
// 3. 请求失败重试机制
// 4. 请求超时设置
```

### 4. UniApp特定优化

#### 4.1 生命周期优化
```javascript
// 在页面onUnload时清理资源
onUnload() {
  // 停止视频播放
  // 取消未完成的请求
  // 清除定时器
}
```

#### 4.2 数据缓存
```javascript
// 使用uni.setStorageSync缓存常用数据
// 1. 用户信息
// 2. 搜索历史
// 3. 浏览历史
```

#### 4.3 包体积优化
- 移除未使用的组件和页面
- 压缩图片资源
- 使用分包加载

---

## 五、测试工具推荐

### 1. 接口测试工具
- **Postman** - REST API测试
- **Swagger UI** - 在线API文档和测试 (http://localhost:8181/doc.html)
- **JMeter** - 性能和压力测试

### 2. 前端测试工具
- **微信开发者工具** - 小程序调试
- **Chrome DevTools** - H5页面调试
- **UniApp真机调试** - 真实设备测试

### 3. 数据库测试工具
- **MySQL Workbench** - 数据库管理和查询
- **Navicat** - 数据库可视化管理

---

## 六、Bug追踪模板

当发现问题时,请使用以下模板记录:

```markdown
### Bug标题: [简短描述问题]

**环境:**
- 平台: [微信小程序/H5/APP]
- 设备: [iPhone 12 / 华为P40等]
- 系统版本: [iOS 14 / Android 11等]

**重现步骤:**
1. 打开XX页面
2. 点击XX按钮
3. 输入XX内容
4. ...

**预期结果:**
应该显示XXX

**实际结果:**
实际显示XXX

**截图/日志:**
[粘贴截图或错误日志]

**相关接口:**
- GET /WebVideo/list

**优先级:** [高/中/低]

**状态:** [待修复/修复中/已修复/已关闭]
```

---

## 七、测试检查清单

### 上线前必检项

- [ ] 所有核心功能正常工作
- [ ] 所有API接口正常响应
- [ ] 登录注册流程完整
- [ ] 支付功能正常(如有)
- [ ] 数据安全性检查
- [ ] 敏感信息脱敏
- [ ] 错误处理完善
- [ ] 用户体验流畅
- [ ] 页面加载速度acceptable
- [ ] 真机测试通过
- [ ] 兼容性测试通过
- [ ] 性能测试通过

---

## 八、持续改进建议

1. **建立自动化测试** - 编写单元测试和集成测试
2. **性能监控** - 接入APM工具监控应用性能
3. **用户反馈** - 建立用户反馈渠道
4. **数据分析** - 使用数据分析工具追踪用户行为
5. **定期review** - 定期代码审查和重构

---

**测试完成后,请更新测试状态并记录测试结果。**
