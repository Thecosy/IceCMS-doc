# IceCMS-Pro 快速开始指南

## 一、环境要求

### 必需环境
- **JDK**: 1.8+
- **MySQL**: 5.7+ 或 8.0+
- **Node.js**: 18.18.0+ 或 20.9.0+ (用于前端)
- **pnpm**: 8.6.10+ (用于前端包管理)

### 可选环境
- **Redis**: 6.0+ (可选,用于缓存优化)
- **Docker**: 20.10+ (可选,用于容器化部署)

---

## 二、快速启动 (最简模式)

### 步骤1: 克隆项目
```bash
git clone https://github.com/yourusername/IceCMS-Pro.git
cd IceCMS-Pro
```

### 步骤2: 配置数据库

#### 2.1 创建数据库
```sql
CREATE DATABASE icecms DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### 2.2 导入数据库
```bash
# Windows (PowerShell)
cd C:\Users\31313\Documents\GitHub\IceCMS-Pro
& 'C:\Program Files\mysql-8.0.39-winx64\bin\mysql.exe' -u root -p123123 icecms < sql/init.sql

# Linux/Mac
mysql -u root -p icecms < sql/init.sql
```

#### 2.3 导入新增表
项目已自动创建了以下新表:
- ✅ user_sign_in (用户签到)
- ✅ user_integral_record (积分记录)
- ✅ user_like (点赞记录)
- ✅ video (视频表)
- ✅ video_comment (视频评论)
- ✅ circle_topic (圈子话题)
- ✅ circle_topic_comment (话题评论)

### 步骤3: 配置应用

编辑 `IceCMS-main/src/main/resources/application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/icecms?useUnicode=true&serverTimezone=UTC
    username: root      # 修改为你的数据库用户名
    password: 123123    # 修改为你的数据库密码
    driver-class-name: com.mysql.cj.jdbc.Driver

  redis:
    enabled: false  # 不使用Redis,保持false即可

server:
  port: 8181  # 后端端口
```

### 步骤4: 启动后端

#### 方式1: 使用Maven命令 (推荐)
```bash
# Windows
.\mvnw.cmd clean package -DskipTests
.\mvnw.cmd -pl IceCMS-main spring-boot:run

# Linux/Mac
./mvnw clean package -DskipTests
./mvnw -pl IceCMS-main spring-boot:run
```

#### 方式2: 使用IDE
1. 打开IDEA/Eclipse
2. 导入Maven项目
3. 运行 `IceCMS-main` 模块中的 `MainApplication.java`

### 步骤5: 验证后端启动

访问: http://localhost:8181/doc.html

看到Swagger文档页面即表示启动成功!

---

## 三、启动前端 (可选)

### 3.1 管理后台 (Vue 3)

```bash
cd IceCMS-front-admin
pnpm install
pnpm dev
```

访问: http://localhost:2580

### 3.2 公共前端 (Nuxt)

```bash
cd IceCMS-front-nuxt
pnpm install
pnpm dev
```

访问: http://localhost:3001

### 3.3 小程序 (UniApp)

1. 使用HBuilderX打开 `IceCMS-uniApp` 目录
2. 配置接口地址: `common/config.js`
3. 运行到微信开发者工具或浏览器

---

## 四、Docker快速启动 (推荐)

### 步骤1: 安装Docker

确保已安装Docker和Docker Compose

### 步骤2: 启动所有服务

```bash
cd IceCMS-Docker
docker-compose up -d
```

### 步骤3: 查看服务状态

```bash
docker-compose ps
```

### 服务访问地址

| 服务 | 地址 | 说明 |
|------|------|------|
| MySQL | localhost:3306 | 数据库 |
| Java API | http://localhost:8181 | 后端接口 |
| Swagger文档 | http://localhost:8181/doc.html | API文档 |
| Nuxt前端 | http://localhost:3001 | 公共前端 |
| Vue管理 | http://localhost:2580 | 管理后台 |

### 步骤4: 停止服务

```bash
docker-compose down
```

---

## 五、功能测试

### 5.1 测试轮播图接口

```bash
curl http://localhost:8181/Mini/getCarousel
```

预期返回JSON数组

### 5.2 测试热榜接口

```bash
curl http://localhost:8181/Mini/getHotList?page=1&limit=10
```

### 5.3 测试用户注册

使用Postman或其他工具:

```
POST http://localhost:8181/Websuser/Create
Content-Type: application/json

{
  "username": "testuser",
  "password": "123456",
  "phone": "13800138000",
  "code": "123456"
}
```

---

## 六、常见问题

### Q1: 端口冲突怎么办?

修改 `application.yml` 中的端口:
```yaml
server:
  port: 8182  # 改成其他端口
```

### Q2: 数据库连接失败?

检查:
1. MySQL是否启动
2. 数据库名称是否正确
3. 用户名密码是否正确
4. 防火墙是否允许3306端口

### Q3: 没有Redis可以运行吗?

**可以!** Redis是可选的:
- 设置 `spring.redis.enabled=false` (默认已是false)
- 系统会自动降级到直接数据库查询
- 功能完全正常,只是性能稍低

### Q4: 如何启用Redis?

编辑 `application.yml`:
```yaml
spring:
  redis:
    enabled: true
    host: localhost
    port: 6379
    password:       # 如果有密码
    database: 0
```

### Q5: 如何查看日志?

日志文件位置: `logs/spring.log`

或在控制台查看实时日志

### Q6: 如何修改默认管理员账号?

数据库中运行:
```sql
-- 查看管理员账号
SELECT * FROM user WHERE role = 'admin';

-- 修改密码 (需要使用Argon2加密)
-- 建议通过接口修改密码
```

---

## 七、下一步

### 功能测试
参考 `API_TESTING_CHECKLIST.md` 进行完整的接口测试

### 性能优化
1. 启用Redis缓存 (参考 `REDIS_OPTIONAL_GUIDE.md`)
2. 配置CDN加速
3. 优化数据库索引

### 部署上线
1. 配置生产环境数据库
2. 配置文件上传服务 (七牛云/腾讯云)
3. 配置短信服务
4. 配置微信小程序AppID

### 开发文档
- `TESTING_GUIDE.md` - 测试指南
- `PERFORMANCE_OPTIMIZATION.md` - 性能优化
- `PROJECT_COMPLETION_SUMMARY.md` - 项目总结
- `REDIS_OPTIONAL_GUIDE.md` - Redis可选配置

---

## 八、技术支持

### 文档
- 项目根目录下的各种 `.md` 文档
- Swagger API文档: http://localhost:8181/doc.html

### 问题反馈
- GitHub Issues: https://github.com/yourusername/IceCMS-Pro/issues

### 社区
- QQ群: (待添加)
- 微信群: (待添加)

---

## 九、开发建议

### 推荐开发流程

1. **本地开发** (不用Redis)
   ```yaml
   spring:
     redis:
       enabled: false
   ```

2. **测试环境** (启用Redis)
   ```yaml
   spring:
     redis:
       enabled: true
   ```

3. **生产环境** (启用Redis + CDN + 云存储)

### 推荐IDE
- **后端**: IntelliJ IDEA
- **前端**: VSCode
- **小程序**: HBuilderX

### 推荐工具
- **API测试**: Postman / Apifox
- **数据库**: Navicat / DBeaver
- **Redis管理**: RedisInsight / AnotherRedisDesktopManager

---

## 十、最小启动清单

最简单的启动只需要:

✅ **必需**:
- [x] JDK 1.8+
- [x] MySQL 5.7+
- [x] 创建数据库 icecms
- [x] 导入SQL文件
- [x] 配置数据库连接
- [x] 启动后端

❌ **不需要**:
- [ ] Redis (可选)
- [ ] Docker (可选)
- [ ] Nginx (可选)
- [ ] 云存储 (可选)
- [ ] 短信服务 (可选)

**启动命令**:
```bash
# 1. 配置数据库
mysql -u root -p icecms < sql/init.sql

# 2. 修改 application.yml 中的数据库密码

# 3. 启动
.\mvnw.cmd -pl IceCMS-main spring-boot:run

# 4. 访问
http://localhost:8181/doc.html
```

就这么简单! 🎉

---

**文档版本**: v1.0
**最后更新**: 2025-12-09
**适用版本**: IceCMS-Pro v1.0+
