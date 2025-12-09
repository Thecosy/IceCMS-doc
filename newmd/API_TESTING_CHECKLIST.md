# IceCMS-Pro UniApp API接口测试清单

## 测试环境配置

### 基础配置
- 后端地址: http://localhost:8181
- 数据库: MySQL icecms
- Redis: localhost:6379
- 测试工具: Postman / Apifox

### 测试用户准备
```sql
-- 创建测试用户
INSERT INTO user (username, password, phone, status)
VALUES ('testuser', '加密后的密码', '13800138000', 1);

-- 获取测试用户token (登录后从响应中获取)
```

## 一、Mini小程序接口组 (11个)

### 1.1 轮播图接口
- **接口**: GET /Mini/getCarousel
- **描述**: 获取小程序首页轮播图
- **测试要点**:
  - [ ] 返回数据包含 id, title, pic, url
  - [ ] 只返回 status=1 的轮播图
  - [ ] 按 sort 字段排序
  - [ ] 图片URL可访问
- **预期结果**: 200, 返回轮播图数组

### 1.2 重要文章接口
- **接口**: GET /Mini/GetArticleBtmatter
- **描述**: 获取重要/置顶文章
- **测试要点**:
  - [ ] 返回 matter=1 的文章
  - [ ] 包含文章基本信息
  - [ ] 按发布时间倒序
- **预期结果**: 200, 返回文章列表

### 1.3 根据ID获取文章
- **接口**: GET /Mini/getArticleById/{id}
- **描述**: 获取指定文章详情
- **测试要点**:
  - [ ] 传入有效ID返回完整文章信息
  - [ ] 传入无效ID返回404或空
  - [ ] 自动增加浏览量
  - [ ] 包含作者信息
- **测试数据**:
  - 有效ID: 1
  - 无效ID: 99999

### 1.4 根据ID获取资源
- **接口**: GET /Mini/getResourceById/{id}
- **描述**: 获取指定资源详情
- **测试要点**:
  - [ ] 传入有效ID返回完整资源信息
  - [ ] 包含下载链接
  - [ ] 自动增加浏览量
  - [ ] 包含资源大小、格式等信息
- **测试数据**:
  - 有效ID: 1
  - 无效ID: 99999

### 1.5 获取所有圈子
- **接口**: GET /Mini/getAllSquare
- **描述**: 获取所有圈子列表
- **测试要点**:
  - [ ] 返回所有 status=1 的圈子
  - [ ] 包含圈子名称、图标、简介
  - [ ] 包含成员数、话题数统计
- **预期结果**: 200, 返回圈子数组

### 1.6 获取圈子分类列表
- **接口**: GET /Mini/getSquareClasslist
- **描述**: 获取圈子分类
- **测试要点**:
  - [ ] 返回所有分类
  - [ ] 每个分类包含圈子列表
  - [ ] 分类按顺序排列
- **预期结果**: 200, 返回分类数组

### 1.7 获取最新资源
- **接口**: GET /Mini/getNewResource
- **描述**: 获取最新发布的资源
- **测试要点**:
  - [ ] 按发布时间倒序
  - [ ] 默认返回10条
  - [ ] 包含资源基本信息
- **预期结果**: 200, 返回资源数组

### 1.8 综合搜索
- **接口**: GET /Mini/search
- **参数**:
  - keyword: 搜索关键词
  - type: 搜索类型 (all/article/resource)
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] type=all 返回文章和资源
  - [ ] type=article 只返回文章
  - [ ] type=resource 只返回资源
  - [ ] 支持标题和内容模糊搜索
  - [ ] 空关键词返回空数组
  - [ ] 分页正确
- **测试数据**:
  ```json
  {
    "keyword": "测试",
    "type": "all",
    "page": 1,
    "limit": 10
  }
  ```

### 1.9 获取热榜
- **接口**: GET /Mini/getHotList
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 按浏览量倒序排列
  - [ ] 分页功能正常
  - [ ] 包含文章和资源
  - [ ] 返回总数和总页数
- **测试数据**:
  ```json
  {
    "page": 1,
    "limit": 20
  }
  ```

### 1.10 获取所有文章列表
- **接口**: GET /Mini/getAllArticles
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 返回所有文章
  - [ ] 分页正确
  - [ ] 按发布时间倒序
  - [ ] 包含作者信息
- **测试数据**:
  ```json
  {
    "page": 1,
    "limit": 20
  }
  ```

### 1.11 获取所有资源列表
- **接口**: GET /Mini/getAllResources
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 返回所有资源
  - [ ] 分页正确
  - [ ] 按发布时间倒序
  - [ ] 包含下载次数
- **测试数据**:
  ```json
  {
    "page": 1,
    "limit": 20
  }
  ```

---

## 二、用户认证接口组 (8个)

### 2.1 用户登录
- **接口**: POST /Websuser/login
- **参数**:
  ```json
  {
    "username": "testuser",
    "password": "123456"
  }
  ```
- **测试要点**:
  - [ ] 正确用户名密码返回token
  - [ ] 错误密码返回401
  - [ ] 不存在用户返回404
  - [ ] 禁用用户返回403
  - [ ] token格式正确 (JWT)
- **预期结果**: 200, 返回token和用户信息

### 2.2 用户注册
- **接口**: POST /Websuser/Create
- **参数**:
  ```json
  {
    "username": "newuser",
    "password": "123456",
    "phone": "13900139000",
    "code": "123456"
  }
  ```
- **测试要点**:
  - [ ] 新用户注册成功
  - [ ] 重复用户名返回错误
  - [ ] 重复手机号返回错误
  - [ ] 短信验证码错误返回错误
  - [ ] 密码加密存储
- **预期结果**: 200, 返回用户信息

### 2.3 微信登录
- **接口**: POST /Websuser/WeChatLogin
- **参数**:
  ```json
  {
    "code": "微信授权code"
  }
  ```
- **测试要点**:
  - [ ] 已绑定用户返回token
  - [ ] 未绑定用户返回临时标识
  - [ ] 无效code返回错误
- **预期结果**: 200, 返回登录结果

### 2.4 微信绑定注册
- **接口**: POST /Websuser/CreateWeChatLogin
- **参数**:
  ```json
  {
    "openid": "微信openid",
    "phone": "13900139000",
    "code": "123456"
  }
  ```
- **测试要点**:
  - [ ] 绑定成功返回token
  - [ ] 手机号已存在则绑定到现有账号
  - [ ] 新手机号创建新账号
- **预期结果**: 200, 返回token

### 2.5 短信登录
- **接口**: POST /Websuser/Messagelogin
- **参数**:
  ```json
  {
    "phone": "13800138000",
    "code": "123456"
  }
  ```
- **测试要点**:
  - [ ] 正确手机号和验证码登录成功
  - [ ] 错误验证码返回错误
  - [ ] 验证码过期返回错误
  - [ ] 不存在手机号自动注册
- **预期结果**: 200, 返回token

### 2.6 修改个人资料
- **接口**: POST /Websuser/ChangeUser
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "nickname": "新昵称",
    "avatar": "头像URL",
    "gender": 1
  }
  ```
- **测试要点**:
  - [ ] 需要token认证
  - [ ] 可修改昵称、头像、性别等
  - [ ] 不能修改用户名、手机号
  - [ ] 无效token返回401
- **预期结果**: 200, 返回更新后信息

### 2.7 修改密码
- **接口**: POST /Websuser/ChangePassword
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "oldPassword": "123456",
    "newPassword": "654321"
  }
  ```
- **测试要点**:
  - [ ] 旧密码正确可修改
  - [ ] 旧密码错误返回错误
  - [ ] 新密码加密存储
  - [ ] 需要token认证
- **预期结果**: 200, 密码修改成功

### 2.8 找回密码
- **接口**: POST /Websuser/FindPassword
- **参数**:
  ```json
  {
    "phone": "13800138000",
    "code": "123456",
    "newPassword": "654321"
  }
  ```
- **测试要点**:
  - [ ] 正确手机号和验证码可重置
  - [ ] 错误验证码返回错误
  - [ ] 不存在手机号返回错误
  - [ ] 新密码加密存储
- **预期结果**: 200, 密码重置成功

---

## 三、积分签到接口组 (4个)

### 3.1 用户签到
- **接口**: POST /WebUserIntegral/signIn
- **Headers**: Authorization: Bearer {token}
- **测试要点**:
  - [ ] 首次签到成功,获得10积分
  - [ ] 连续3-5天签到获得50积分
  - [ ] 连续6天以上获得100积分
  - [ ] 今日已签到返回提示
  - [ ] 断签后重置连续天数
  - [ ] 积分记录正确创建
  - [ ] 用户总积分正确更新
- **预期结果**: 200, 返回签到信息和奖励积分

### 3.2 获取签到状态
- **接口**: GET /WebUserIntegral/getSignInStatus
- **Headers**: Authorization: Bearer {token}
- **测试要点**:
  - [ ] 返回今日是否已签到
  - [ ] 返回连续签到天数
  - [ ] 返回本周签到情况
  - [ ] 返回总积分
  - [ ] 未登录返回401
- **预期结果**: 200, 返回签到状态信息

### 3.3 获取积分记录
- **接口**: GET /WebUserIntegral/getIntegralRecords
- **Headers**: Authorization: Bearer {token}
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 返回当前用户的积分记录
  - [ ] 包含变更类型、数量、时间
  - [ ] 按时间倒序排列
  - [ ] 分页正确
  - [ ] 显示变更前后积分
- **测试数据**:
  ```json
  {
    "page": 1,
    "limit": 20
  }
  ```

### 3.4 获取积分排行榜
- **接口**: GET /WebUserIntegral/getIntegralRanking
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 按总积分倒序排列
  - [ ] 包含用户昵称、头像、积分
  - [ ] 分页正确
  - [ ] 显示排名序号
- **测试数据**:
  ```json
  {
    "page": 1,
    "limit": 20
  }
  ```

---

## 四、互动功能接口组 (5个)

### 4.1 点赞/取消点赞
- **接口**: POST /WebInteraction/toggleLike
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "targetType": "article",
    "targetId": 1
  }
  ```
- **测试要点**:
  - [ ] targetType支持: article, resource, video, topic
  - [ ] 首次点赞成功,返回isLiked=true
  - [ ] 再次点赞取消,返回isLiked=false
  - [ ] 目标的loveNum正确增减
  - [ ] 未登录返回401
  - [ ] 不存在的目标返回404
- **测试数据**:
  - targetType: article, resource, video, topic
  - targetId: 1

### 4.2 检查是否已点赞
- **接口**: GET /WebInteraction/checkLike
- **Headers**: Authorization: Bearer {token}
- **参数**:
  - targetType: 目标类型
  - targetId: 目标ID
- **测试要点**:
  - [ ] 已点赞返回true
  - [ ] 未点赞返回false
  - [ ] 未登录返回false
- **测试数据**:
  ```
  ?targetType=article&targetId=1
  ```

### 4.3 收藏/取消收藏
- **接口**: POST /WebInteraction/toggleFavorite
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "targetType": "article",
    "targetId": 1
  }
  ```
- **测试要点**:
  - [ ] targetType支持: article, resource
  - [ ] 首次收藏成功
  - [ ] 再次收藏取消
  - [ ] 记录正确创建/更新
  - [ ] 未登录返回401
- **测试数据**:
  - targetType: article, resource
  - targetId: 1

### 4.4 检查是否已收藏
- **接口**: GET /WebInteraction/checkFavorite
- **Headers**: Authorization: Bearer {token}
- **参数**:
  - targetType: 目标类型
  - targetId: 目标ID
- **测试要点**:
  - [ ] 已收藏返回true
  - [ ] 未收藏返回false
  - [ ] 未登录返回false
- **测试数据**:
  ```
  ?targetType=article&targetId=1
  ```

### 4.5 获取我的收藏列表
- **接口**: GET /WebInteraction/getMyFavorites
- **Headers**: Authorization: Bearer {token}
- **参数**:
  - targetType: 目标类型 (可选)
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] targetType为空返回所有收藏
  - [ ] 指定targetType返回特定类型
  - [ ] 包含收藏的详细信息
  - [ ] 分页正确
  - [ ] 按收藏时间倒序
- **测试数据**:
  ```
  ?targetType=article&page=1&limit=20
  ```

---

## 五、圈子话题接口组 (7个)

### 5.1 获取话题列表
- **接口**: GET /WebCircleTopic/list
- **参数**:
  - squareId: 圈子ID (可选)
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] squareId为空返回所有话题
  - [ ] 指定squareId返回该圈子话题
  - [ ] 包含话题基本信息
  - [ ] 包含作者信息
  - [ ] 包含点赞数、评论数
  - [ ] 分页正确
- **测试数据**:
  ```
  ?squareId=1&page=1&limit=20
  ```

### 5.2 获取话题详情
- **接口**: GET /WebCircleTopic/detail/{id}
- **测试要点**:
  - [ ] 返回话题完整信息
  - [ ] 包含作者详细信息
  - [ ] 包含圈子信息
  - [ ] 包含图片列表
  - [ ] 自动增加浏览量
  - [ ] 不存在的ID返回404
- **测试数据**:
  - 有效ID: 1
  - 无效ID: 99999

### 5.3 发布话题
- **接口**: POST /WebCircleTopic/publish
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "squareId": 1,
    "title": "话题标题",
    "content": "话题内容",
    "images": ["图片URL1", "图片URL2"]
  }
  ```
- **测试要点**:
  - [ ] 需要登录
  - [ ] 标题和内容必填
  - [ ] 图片可选,最多9张
  - [ ] squareId必须存在
  - [ ] 返回新建话题ID
- **预期结果**: 200, 话题发布成功

### 5.4 点赞话题
- **接口**: POST /WebCircleTopic/like/{id}
- **Headers**: Authorization: Bearer {token}
- **测试要点**:
  - [ ] 首次点赞成功
  - [ ] 再次点赞取消
  - [ ] loveNum正确增减
  - [ ] 需要登录
  - [ ] 不存在的话题返回404
- **测试数据**:
  - topicId: 1

### 5.5 删除话题
- **接口**: DELETE /WebCircleTopic/delete/{id}
- **Headers**: Authorization: Bearer {token}
- **测试要点**:
  - [ ] 只能删除自己的话题
  - [ ] 删除成功后查询不到
  - [ ] 删除他人话题返回403
  - [ ] 需要登录
- **测试数据**:
  - 自己的话题ID: 1

### 5.6 获取话题评论列表
- **接口**: GET /WebCircleTopic/comments/{topicId}
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 返回该话题的所有评论
  - [ ] 包含评论者信息
  - [ ] 包含评论时间
  - [ ] 支持二级评论
  - [ ] 分页正确
  - [ ] 按时间倒序
- **测试数据**:
  ```
  /comments/1?page=1&limit=20
  ```

### 5.7 发布评论
- **接口**: POST /WebCircleTopic/comment
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "topicId": 1,
    "content": "评论内容",
    "parentId": 0
  }
  ```
- **测试要点**:
  - [ ] parentId=0为一级评论
  - [ ] parentId>0为二级回复
  - [ ] content必填
  - [ ] 话题评论数+1
  - [ ] 需要登录
- **预期结果**: 200, 评论发布成功

---

## 六、视频功能接口组 (6个)

### 6.1 获取视频列表
- **接口**: GET /WebVideo/list
- **参数**:
  - categoryId: 分类ID (可选)
  - keyword: 搜索关键词 (可选)
  - sort: 排序方式 (latest/hot/recommend)
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] sort=latest 按时间倒序
  - [ ] sort=hot 按播放量倒序
  - [ ] sort=recommend 按推荐排序
  - [ ] categoryId筛选分类
  - [ ] keyword搜索标题
  - [ ] 分页正确
- **测试数据**:
  ```
  ?categoryId=1&sort=hot&page=1&limit=20
  ```

### 6.2 获取视频详情
- **接口**: GET /WebVideo/detail/{id}
- **测试要点**:
  - [ ] 返回视频完整信息
  - [ ] 包含视频URL、封面URL
  - [ ] 包含作者信息
  - [ ] 包含时长、播放量等
  - [ ] 自动增加播放次数
  - [ ] 不存在的ID返回404
- **测试数据**:
  - 有效ID: 1
  - 无效ID: 99999

### 6.3 短视频刷取
- **接口**: GET /WebVideo/feed
- **参数**:
  - lastId: 上次最后的视频ID (可选)
  - limit: 获取数量 (默认10)
- **测试要点**:
  - [ ] lastId为空返回最新10个
  - [ ] lastId不为空返回ID小于lastId的10个
  - [ ] 优先推荐视频
  - [ ] 返回hasMore标识
  - [ ] 支持无限滚动
- **测试数据**:
  ```
  ?lastId=100&limit=10
  ```

### 6.4 添加视频评论
- **接口**: POST /WebVideo/comment/add
- **Headers**: Authorization: Bearer {token}
- **参数**:
  ```json
  {
    "videoId": 1,
    "content": "评论内容",
    "parentId": 0
  }
  ```
- **测试要点**:
  - [ ] parentId=0为一级评论
  - [ ] parentId>0为二级回复
  - [ ] 视频评论数+1
  - [ ] 需要登录
  - [ ] content必填
- **预期结果**: 200, 评论发布成功

### 6.5 获取视频评论列表
- **接口**: GET /WebVideo/comment/list/{videoId}
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 返回该视频的所有评论
  - [ ] 包含评论者信息
  - [ ] 支持二级评论
  - [ ] 分页正确
  - [ ] 按时间倒序
- **测试数据**:
  ```
  /comment/list/1?page=1&limit=20
  ```

### 6.6 获取推荐视频
- **接口**: GET /WebVideo/recommend
- **参数**:
  - limit: 数量 (默认10)
- **测试要点**:
  - [ ] 返回推荐视频列表
  - [ ] 按推荐权重排序
  - [ ] 包含视频基本信息
  - [ ] 数量限制正确
- **测试数据**:
  ```
  ?limit=10
  ```

---

## 七、测试执行记录

### 测试进度
- [ ] Mini小程序接口组 (0/11)
- [ ] 用户认证接口组 (0/8)
- [ ] 积分签到接口组 (0/4)
- [ ] 互动功能接口组 (0/5)
- [ ] 圈子话题接口组 (0/7)
- [ ] 视频功能接口组 (0/6)

### Bug记录

| 编号 | 接口 | 问题描述 | 严重程度 | 状态 | 修复人 | 修复日期 |
|------|------|----------|----------|------|--------|----------|
| 1 | | | | | | |
| 2 | | | | | | |

### 测试通过率
- 总接口数: 41
- 已测试: 0
- 通过: 0
- 失败: 0
- 通过率: 0%

---

## 八、Postman测试集合

### 环境变量配置
```json
{
  "baseUrl": "http://localhost:8181",
  "token": "",
  "userId": ""
}
```

### 自动化测试脚本示例

#### 登录接口测试脚本
```javascript
// 发送请求后执行
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has token", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data).to.have.property('token');

    // 保存token到环境变量
    pm.environment.set("token", jsonData.data.token);
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
```

#### 签到接口测试脚本
```javascript
pm.test("Sign in successfully", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.code).to.equal(200);
    pm.expect(jsonData.data).to.have.property('integralReward');
    pm.expect(jsonData.data.integralReward).to.be.greaterThan(0);
});
```

---

## 九、测试建议

### 优先级
1. **P0 (高优先级)**: 用户登录、注册、核心内容展示
2. **P1 (中优先级)**: 搜索、评论、点赞收藏、签到
3. **P2 (低优先级)**: 排行榜、推荐算法、统计数据

### 测试顺序
1. 先测试用户认证接口,获取token
2. 再测试需要认证的接口
3. 最后测试公开接口

### 注意事项
1. 每个接口至少测试3种情况: 正常、异常、边界
2. 注意检查返回数据的完整性和正确性
3. 关注接口响应时间,建议<500ms
4. 测试并发情况下的数据一致性
5. 测试SQL注入、XSS等安全问题

### 测试数据准备
```sql
-- 创建测试数据的SQL脚本
-- 参考 TESTING_GUIDE.md 中的测试数据准备部分
```
