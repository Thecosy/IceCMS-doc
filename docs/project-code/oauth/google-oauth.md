---
id: google-oauth-setup
title: Google OAuth 配置指南
sidebar_label: Google OAuth 配置
---

# Google OAuth 2.0 单点登录配置指南

## 功能概述

本系统已集成 Google OAuth 2.0 单点登录功能，用户可以使用 Google 账号快速登录，无需注册新账号。

## 一、前期准备：Google Cloud 平台配置

### 1. 登录 Google Cloud Console

访问 [Google Cloud Console](https://console.cloud.google.com/)，使用 Google 账号登录。

### 2. 创建或选择项目

- **已有项目**：在顶部项目列表中选择目标项目
- **新建项目**：
  1. 点击顶部「项目」→「新建项目」
  2. 输入项目名称（如「IceCMS-OAuth」）
  3. 点击「创建」，等待项目初始化（约1-2分钟）

### 3. 配置「OAuth 同意屏幕」

新创建的项目必须先配置同意屏幕：

1. 在左侧菜单找到「API 和服务」→「OAuth 同意屏幕」
2. 选择「外部」（适用于面向公众的应用），点击「创建」
3. 填写「应用信息」：
   - **应用名称**：将显示在 Google 登录授权页面（如「IceCMS Pro」）
   - **支持邮箱**：用于接收 Google 相关通知
   - 其他步骤保持默认配置，点击「保存并继续」

### 4. 创建 OAuth 2.0 客户端（重要！）

1. 在左侧菜单找到「API 和服务」→「凭据」
2. 点击「创建凭据」→「OAuth 客户端 ID」
3. 应用类型选择「Web 应用」
4. 填写名称（如「IceCMS-Web-Client」）
5. **配置授权重定向 URI**（重要！）：
   ```
   开发环境：http://localhost:8181/auth/google-login-callback
   生产环境：https://your-domain.com/auth/google-login-callback
   ```
6. 点击「创建」
7. **记录生成的凭据**：
   - Client ID（客户端ID）
   - Client Secret（客户端密钥）

   ⚠️ **重要**：请妥善保管 Client Secret，切勿泄露！

## 二、后台管理配置

### 1. 执行数据库更新脚本

在数据库中执行以下SQL脚本（位于 `IceCMS-server-java/sql/update_google_oauth.sql`）：

```sql
USE icecms;

-- 添加google_open_id字段
ALTER TABLE `user` ADD COLUMN `google_open_id` varchar(255) DEFAULT NULL COMMENT 'Google OAuth OpenID' AFTER `openid`;

-- 为google_open_id字段创建索引
ALTER TABLE `user` ADD INDEX `idx_google_open_id` (`google_open_id`);

-- 添加last_login_time字段
ALTER TABLE `user` ADD COLUMN `last_login_time` datetime DEFAULT NULL COMMENT '最后登录时间' AFTER `google_open_id`;
```

### 2. 配置环境变量（推荐）

在 Docker 环境或系统环境变量中配置：

```bash
GOOGLE_OAUTH_ENABLED=true
GOOGLE_OAUTH_CLIENT_ID=你的Client_ID
GOOGLE_OAUTH_CLIENT_SECRET=你的Client_Secret
GOOGLE_OAUTH_REDIRECT_URI=http://localhost:8181/auth/google-login-callback
GOOGLE_OAUTH_LOGIN_REDIRECT_PAGE=http://localhost:3000/

# 国内环境需要配置代理
GOOGLE_OAUTH_PROXY_HOST=127.0.0.1
GOOGLE_OAUTH_PROXY_PORT=7897
```

### 3. 或者直接修改 application.yml

如果不使用环境变量，可以直接修改配置文件：

`IceCMS-server-java/IceCMS-main/src/main/resources/application.yml`

```yaml
oauth:
  google:
    enabled: true
    clientId: 你的Client_ID
    clientSecret: 你的Client_Secret
    redirectUri: http://localhost:8181/auth/google-login-callback
    proxyHost: 127.0.0.1  # 国内环境配置
    proxyPort: 7897        # 国内环境配置
    loginRedirectPage: http://localhost:3000/
```

### 4. 在管理后台配置（可选）

1. 登录 Admin 后台（http://localhost:2580）
2. 进入「系统管理」→「Google OAuth 配置」
3. 填写配置信息：
   - Client ID
   - Client Secret
   - 代理配置（如需要）
4. 启用 Google 登录
5. 点击「保存配置」

## 三、前端配置

### Nuxt 公共前端配置

配置文件已自动集成，无需额外修改。系统会自动从后端获取 Google 登录状态。

### 代理配置（国内环境）

如果在国内环境部署，需要配置代理才能访问 Google 服务：

1. **使用 Clash/V2Ray 等工具**开启代理
2. 记录代理地址和端口（如 `127.0.0.1:7897`）
3. 在后台配置或 application.yml 中填写代理信息

## 四、使用流程

### 用户登录流程

1. 用户访问前端登录页面（http://localhost:3000）
2. 点击「登录/注册」按钮
3. 在登录弹框中，点击 **Google 图标**（彩色的 G 标志）
4. 跳转到 Google 授权页面
5. 用户使用 Google 账号登录并授权
6. 自动跳转回系统，完成登录

### 首次登录

- 系统会自动创建新用户账号
- 绑定 Google OpenID
- 使用 Google 昵称作为用户名
- 使用 Google 头像作为用户头像

### 后续登录

- 直接通过 Google OpenID 识别用户
- 无需重复注册
- 更新最后登录时间

## 五、技术架构

### 后端技术栈

- **框架**：JustAuth v1.16.5（轻量级 OAuth 工具包）
- **授权协议**：OAuth 2.0
- **安全措施**：
  - State 参数防 CSRF 攻击
  - Redis 存储临时 State（5分钟过期）
  - HTTPS 传输（生产环境）

### 核心文件

#### Java 后端
- `GoogleOAuthService.java` - Google OAuth 服务类
- `GoogleOAuthController.java` - OAuth 控制器
- `User.java` - 用户实体（新增 googleOpenId 字段）
- `application.yml` - OAuth 配置

#### Admin 管理后台
- `src/views/system/oauth/google.vue` - Google OAuth 配置页面
- `src/router/modules/system.ts` - 路由配置

#### Nuxt 前端
- `src/components/Top.vue` - 登录组件（新增 Google 登录按钮）

### API 接口

| 接口 | 方法 | 说明 |
|-----|------|------|
| `/auth/google-login` | GET | 引导用户跳转到 Google 授权页 |
| `/auth/google-login-callback` | GET | 处理 Google 回调，完成登录 |
| `/auth/google-status` | GET | 获取 Google OAuth 配置状态 |

## 六、常见问题

### 1. 无法访问 Google 服务

**问题**：点击 Google 登录按钮后页面无法加载

**解决方案**：
- 检查代理配置是否正确
- 确保代理工具正常运行
- 在后台配置中填写正确的代理地址和端口

### 2. 回调地址错误

**问题**：授权后显示「redirect_uri_mismatch」错误

**解决方案**：
- 检查 Google Cloud Console 中配置的回调地址
- 确保与 `application.yml` 中的 `redirectUri` 完全一致
- 注意 http/https 协议要匹配

### 3. Client Secret 泄露风险

**问题**：如何保护 Client Secret

**解决方案**：
- 使用环境变量而非硬编码
- 不要将 Secret 提交到 Git 仓库
- 在 `.gitignore` 中忽略包含敏感信息的配置文件
- 定期更换 Client Secret

### 4. State 验证失败

**问题**：授权回调时显示「Invalid state parameter」

**解决方案**：
- 检查 Redis 服务是否正常运行
- 确保系统时间同步
- 增加 State 过期时间（当前为5分钟）

### 5. 用户信息无法获取

**问题**：登录成功但未获取到邮箱、头像等信息

**解决方案**：
- 在 Google Cloud Console「OAuth 同意屏幕」中添加权限范围
- 需要添加的范围：
  - `userinfo.email`
  - `userinfo.profile`

## 七、安全建议

### 生产环境配置

1. **启用 HTTPS**
   ```yaml
   oauth:
     google:
       redirectUri: https://your-domain.com/auth/google-login-callback
       loginRedirectPage: https://your-domain.com/
   ```

2. **使用环境变量**
   - 不要在代码中硬编码敏感信息
   - 使用 Docker secrets 或 Kubernetes ConfigMap

3. **定期审计**
   - 定期检查 Google Cloud Console 的使用情况
   - 监控异常登录行为
   - 设置登录日志记录

4. **限制授权范围**
   - 只请求必要的用户信息
   - 当前范围：基本资料、邮箱

## 八、测试步骤

### 1. 本地测试

1. 启动 MySQL、Redis 服务
2. 执行数据库更新脚本
3. 启动 Java 后端（端口 8181）
4. 启动 Nuxt 前端（端口 3000）
5. 访问 http://localhost:3000
6. 点击登录按钮，选择 Google 登录
7. 完成授权流程

### 2. 验证功能

- [ ] Google 登录按钮显示正常
- [ ] 点击后跳转到 Google 授权页
- [ ] 授权成功后返回系统
- [ ] 用户信息正确显示
- [ ] 再次登录可直接识别用户

## 九、故障排查

### 查看日志

```bash
# 后端日志
docker logs icecms-api-dev --tail 100

# Nuxt 前端日志
docker logs icecms-nuxt-dev --tail 100

# Redis 连接
docker exec -it icecms-redis redis-cli
> keys oauth:google:*
```

### 调试模式

在 `application.yml` 中启用调试日志：

```yaml
logging:
  level:
    com.ttice.icewkment.service.GoogleOAuthService: DEBUG
    com.ttice.icewkment.controller.frontend.GoogleOAuthController: DEBUG
```

## 十、参考资料

- [Google OAuth 2.0 文档](https://developers.google.com/identity/protocols/oauth2)
- [JustAuth 官方文档](https://justauth.wiki/)
- [OAuth 2.0 RFC 6749](https://tools.ietf.org/html/rfc6749)

---

**开发团队**：IceCMS Pro
**更新日期**：2026-01-10
**版本**：v3.6.2

如有问题，请在 [GitHub Issues](https://github.com/Thecosy/IceCMS-Pro/issues) 中反馈。
