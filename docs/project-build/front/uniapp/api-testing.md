---
id: api-testing
title: API接口测试清单
sidebar_label: API接口测试清单
---

# IceCMS-Pro UniApp API接口测试清单

## 测试环境配置

### 基础配置
- 后端地址: http://localhost:8181
- 数据库: MySQL icecms
- Redis: localhost:6379
- 测试工具: Postman / Apifox

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

### 1.4 综合搜索
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
  - [ ] 分页正确

### 1.5 获取热榜
- **接口**: GET /Mini/getHotList
- **参数**:
  - page: 页码
  - limit: 每页数量
- **测试要点**:
  - [ ] 按浏览量倒序排列
  - [ ] 分页功能正常
  - [ ] 包含文章和资源
  - [ ] 返回总数和总页数

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

### 2.3 修改个人资料
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
  - [ ] 无效token返回401

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

### 3.2 获取签到状态
- **接口**: GET /WebUserIntegral/getSignInStatus
- **Headers**: Authorization: Bearer {token}
- **测试要点**:
  - [ ] 返回今日是否已签到
  - [ ] 返回连续签到天数
  - [ ] 返回本周签到情况
  - [ ] 返回总积分

### 3.3 获取积分记录
- **接口**: GET /WebUserIntegral/getIntegralRecords
- **Headers**: Authorization: Bearer {token}
- **参数**: page, limit
- **测试要点**:
  - [ ] 返回当前用户的积分记录
  - [ ] 包含变更类型、数量、时间
  - [ ] 按时间倒序排列
  - [ ] 分页正确

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

### 4.2 收藏/取消收藏
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

### 4.3 获取我的收藏列表
- **接口**: GET /WebInteraction/getMyFavorites
- **Headers**: Authorization: Bearer {token}
- **参数**: targetType, page, limit
- **测试要点**:
  - [ ] targetType为空返回所有收藏
  - [ ] 指定targetType返回特定类型
  - [ ] 分页正确
  - [ ] 按收藏时间倒序

## 五、圈子话题接口组 (7个)

### 5.1 获取话题列表
- **接口**: GET /WebCircleTopic/list
- **参数**: squareId, page, limit
- **测试要点**:
  - [ ] squareId为空返回所有话题
  - [ ] 指定squareId返回该圈子话题
  - [ ] 包含作者信息
  - [ ] 分页正确

### 5.2 发布话题
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

### 5.3 点赞话题
- **接口**: POST /WebCircleTopic/like/{id}
- **Headers**: Authorization: Bearer {token}
- **测试要点**:
  - [ ] 首次点赞成功
  - [ ] 再次点赞取消
  - [ ] loveNum正确增减

## 六、视频功能接口组 (6个)

### 6.1 获取视频列表
- **接口**: GET /WebVideo/list
- **参数**: categoryId, keyword, sort, page, limit
- **测试要点**:
  - [ ] sort=latest 按时间倒序
  - [ ] sort=hot 按播放量倒序
  - [ ] sort=recommend 按推荐排序
  - [ ] 分页正确

### 6.2 短视频刷取
- **接口**: GET /WebVideo/feed
- **参数**: lastId, limit
- **测试要点**:
  - [ ] lastId为空返回最新10个
  - [ ] lastId不为空返回ID小于lastId的10个
  - [ ] 优先推荐视频
  - [ ] 返回hasMore标识
  - [ ] 支持无限滚动

### 6.3 添加视频评论
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

## 七、测试执行记录

### 测试进度
- [ ] Mini小程序接口组 (0/11)
- [ ] 用户认证接口组 (0/8)
- [ ] 积分签到接口组 (0/4)
- [ ] 互动功能接口组 (0/5)
- [ ] 圈子话题接口组 (0/7)
- [ ] 视频功能接口组 (0/6)

### 测试通过率
- 总接口数: 41
- 已测试: 0
- 通过: 0
- 失败: 0
- 通过率: 0%
