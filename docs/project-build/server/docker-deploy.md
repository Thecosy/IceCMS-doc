---
id: docker-deploy
title: Docker部署说明
sidebar_label: Docker部署说明
---

# IceCMS-Docker 部署说明文档

IceCMS-Docker 是基于 Docker 容器化技术的完整 IceCMS 内容管理系统部署方案，支持快速部署和自动化构建。

## 📋 目录结构

```
IceCMS-Docker/
├── Makefile                    # 快速操作命令
├── build.sh                    # 自动化构建脚本
├── docker-compose.yml          # Docker Compose 配置文件
├── icecms-fullstack/           # 全栈应用容器
│   ├── Dockerfile              # 前后端合并镜像
│   ├── main.jar                # Java 后端应用
│   ├── package.json            # Node.js 依赖配置
│   ├── vue-app/                # Vue 管理前端
│   └── output/                 # Nuxt 构建输出
└── icecms-sql/                 # 数据库容器
    ├── Dockerfile              # MySQL 镜像
    ├── IceCMS.sql             # 数据库初始化脚本
    ├── privileges.sql          # 权限配置脚本
    └── setup.sh               # 数据库启动脚本
```

## 🚀 快速开始

### 环境要求

- Docker 20.10+
- Docker Compose 2.0+
- 至少 4GB 内存
- 至少 10GB 磁盘空间

### 构建前置条件

在运行 Docker 部署前，确保已完成以下构建:

```bash
# 1. 构建后端 JAR 包
./mvnw clean package -DskipTests

# 2. 构建 Vue 3 管理后台
cd IceCMS-front-admin && pnpm install && pnpm build && cd ..

# 3. 构建 Nuxt 4 公共前端
cd IceCMS-front-nuxt && pnpm install && pnpm build && cd ..
```

确认以下文件存在:
- `IceCMS-main/target/main.jar`
- `IceCMS-front-admin/dist/`
- `IceCMS-front-nuxt/.output/`

### 1. 构建镜像

```bash
cd IceCMS-Docker

# 使用 Docker Compose 直接构建
docker-compose build
```

### 2. 启动服务

```bash
# 后台启动所有服务
make run

# 或使用 Docker Compose
docker-compose up -d
```

### 3. 查看日志

```bash
# 实时查看日志
make debug

# 或使用 Docker Compose
docker-compose logs -f
```

## 🏗️ 服务架构

### 服务组成

| 服务名称 | 端口映射 | 描述 |
|---------|---------|------|
| `icecms-sql` | `3306:3306` | MySQL 8.4 数据库服务 |
| `icecms-fullstack` | `3001:3000` | Nuxt.js SSR 前端应用 |
|  | `2580:2580` | Vue 3 管理后台 (Nginx) |
|  | `8181:8181` | Java Spring Boot API |

### 访问地址

- Nuxt 公共前端: http://localhost:3001
- Vue 管理后台: http://localhost:2580
- Spring Boot API: http://localhost:8181
- MySQL 数据库: localhost:3306

### 网络配置

- 所有服务运行在 `icecms-network` 桥接网络中
- 服务间通过容器名进行通信
- 数据库别名：`db` (链接到 `icecms-sql`)

## 🔧 配置说明

### 数据库配置

**环境变量：**
```yaml
MYSQL_ROOT_PASSWORD: 123123           # 数据库 root 密码
MYSQL_SERVER: icecms-sql:3306         # 数据库服务器地址
MYSQL_USER: root                      # 数据库用户名
```

**数据持久化：**
- 数据库数据存储在 Docker volume `mysql-data` 中
- 即使容器删除，数据也不会丢失
- 使用 `docker-compose down -v` 会删除数据卷

**特性：**
- 基于 MySQL 8.4 官方镜像
- 自动执行数据库初始化脚本 (IceCMS.sql)
- 包含完整的 IceCMS 数据结构和权限配置
- 支持健康检查，确保数据库就绪后再启动应用
- 最新 SQL 版本 (2025-11-10)

### 全栈应用配置

**Java API 环境变量：**
```yaml
SERVER_PORT: 8181
CORS_ENABLED: "true"
CORS_ALLOWED_ORIGINS: "http://localhost:3001"
JAVA_OPTS: "-server -XX:+UseG1GC -Xmx2g ..."
```

**Nuxt.js 环境变量：**
```yaml
NUXT_HOST: 0.0.0.0
NUXT_PORT: 3000
API_BASE_URL: "http://localhost:8181"
NUXT_PUBLIC_API_BASE: "http://localhost:8181"
```

## 📝 常用操作

### Makefile 命令

```bash
# 构建所有镜像
make build

# 启动服务（后台运行）
make run

# 停止所有服务
make clear

# 重启服务
make restart

# 查看实时日志
make debug
```

### Docker Compose 命令

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs [服务名]

# 重启特定服务
docker-compose restart [服务名]
```

## 🔍 故障排除

### 常见问题

**1. 端口冲突**
```bash
# 检查端口占用
netstat -tlnp | grep :3001
lsof -i :8181

# 修改 docker-compose.yml 中的端口映射
```

**2. 内存不足**
```bash
# 检查容器资源使用
docker stats

# 调整 JAVA_OPTS 中的内存配置
JAVA_OPTS: "-Xmx1g"  # 减少内存使用
```

**3. 数据库连接失败**
```bash
# 检查数据库服务状态
docker-compose logs icecms-sql

# 验证网络连通性
docker-compose exec icecms-fullstack ping db
```

### 日志查看

```bash
# 查看所有服务日志
docker-compose logs

# 查看特定服务日志
docker-compose logs icecms-fullstack
docker-compose logs icecms-sql

# 实时跟踪日志
docker-compose logs -f --tail=100
```

## 🔒 安全配置

### 默认密码修改

**数据库密码：**
修改 `icecms-sql/Dockerfile` 中的：
```dockerfile
ENV MYSQL_ROOT_PASSWORD 123123
```

修改 `docker-compose.yml` 中的：
```yaml
MYSQL_PASSWORD: 123123
```

**注意：** 修改密码后需要重新构建镜像

### 端口安全

- 生产环境建议使用反向代理
- 关闭不必要的端口映射
- 配置防火墙规则

## 🚀 生产部署

### 自动化部署

使用 `build.sh` 脚本进行自动化部署：

```bash
# 部署指定版本
./build.sh release-1.0

# 脚本功能：
# - 自动拉取代码
# - Maven 构建打包
# - Docker 镜像构建
# - 服务重启
# - 清理虚悬镜像
```

### 监控和维护

```bash
# 检查容器健康状态
docker-compose ps

# 监控资源使用
docker stats

# 清理系统
docker system prune -f

# 备份数据库
docker exec icecms-sql mysqldump -uroot -p123123 icecms > backup_$(date +%Y%m%d).sql

# 备份到压缩文件
docker exec icecms-sql mysqldump -uroot -p123123 icecms | gzip > backup_$(date +%Y%m%d).sql.gz

# 恢复数据库
docker exec -i icecms-sql mysql -uroot -p123123 icecms < backup.sql
```

### 更新部署

当代码更新后，重新部署:

```bash
# 1. 在项目根目录重新构建应用
./mvnw clean package -DskipTests
cd IceCMS-front-admin && pnpm build && cd ..
cd IceCMS-front-nuxt && pnpm build && cd ..

# 2. 重新构建 Docker 镜像并启动
cd IceCMS-Docker
docker-compose down
docker-compose build
docker-compose up -d

# 3. 查看启动日志
docker-compose logs -f
```

## 📞 技术支持

- 项目地址：[IceCMS-Pro](https://github.com/your-repo/IceCMS-Pro)
- 技术文档：查看各子项目的 README.md
- 问题反馈：提交 Issue 或 Pull Request

---

**注意：** 请确保在生产环境中修改默认密码和敏感配置信息。
