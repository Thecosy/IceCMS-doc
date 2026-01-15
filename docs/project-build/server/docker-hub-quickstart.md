---
id: docker-hub-quickstart
title: Docker镜像快速部署
sidebar_label: Docker镜像快速部署
---

# IceCMS-Pro Docker 快速部署

> 5 分钟快速部署 IceCMS-Pro 系统

## 前置要求

- Docker 20.10+
- Docker Compose 2.0+
- 4GB+ 内存
- 20GB+ 磁盘空间

## 快速开始

### 1️⃣ 创建部署目录

```bash
mkdir icecms-pro && cd icecms-pro
```

### 2️⃣ 下载配置文件

```bash
# 下载 docker-compose 配置
curl -O https://raw.githubusercontent.com/Thecosy/IceCMS-Pro/main/docker-compose.prod.yml

# 下载环境变量配置
curl -O https://raw.githubusercontent.com/Thecosy/IceCMS-Pro/main/.env.example
cp .env.example .env
```

### 3️⃣ 修改配置（重要！）

编辑 `.env` 文件，**务必修改以下密码**：

```bash
MYSQL_ROOT_PASSWORD=your_strong_password_here
REDIS_PASSWORD=your_redis_password_here
```

### 4️⃣ 启动服务

```bash
docker compose -f docker-compose.prod.yml up -d
```

### 5️⃣ 查看状态

```bash
# 查看运行状态
docker compose -f docker-compose.prod.yml ps

# 查看日志
docker compose -f docker-compose.prod.yml logs -f
```

## 访问系统

部署完成后访问：

| 服务 | 地址 | 说明 |
|------|------|------|
| 🌐 公共前端 | http://localhost:3001 | 用户主站 |
| 🔧 管理后台 | http://localhost:2580 | 管理面板 |
| 📡 API 接口 | http://localhost:8181 | 后端 API |
| 📚 API 文档 | http://localhost:8181/doc.html | Swagger 文档 |

## 常用命令

```bash
# 停止服务
docker compose -f docker-compose.prod.yml stop

# 启动服务
docker compose -f docker-compose.prod.yml start

# 重启服务
docker compose -f docker-compose.prod.yml restart

# 停止并删除容器
docker compose -f docker-compose.prod.yml down

# 查看日志
docker compose -f docker-compose.prod.yml logs -f api

# 更新镜像
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

## 数据备份

```bash
# 备份 MySQL
docker exec icecms-mysql mysqldump -uroot -p"your_password" icecms > backup.sql

# 备份所有数据卷
tar -czf backup_$(date +%Y%m%d).tar.gz ./docker/volumes/
```

## 故障排除

### 端口被占用

修改 `docker-compose.prod.yml` 中的端口映射：

```yaml
services:
  api:
    ports:
      - "9090:8181"  # 改成其他端口
```

### 查看错误日志

```bash
docker logs icecms-api-prod
docker logs icecms-mysql
```

### 完全重新部署

```bash
# 警告：会删除所有数据！
docker compose -f docker-compose.prod.yml down -v
rm -rf ./docker/volumes/
docker compose -f docker-compose.prod.yml up -d
```

## 生产环境配置

### 配置域名

1. 修改服务器 DNS 解析
2. 配置 Nginx 反向代理
3. 申请 SSL 证书

### 示例 Nginx 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
    }
}
```

## 需要帮助？

- 📖 [完整部署文档](./docker-hub-deploy.md)
- 🐛 [提交问题](https://github.com/Thecosy/IceCMS-Pro/issues)
- 💬 [参与讨论](https://github.com/Thecosy/IceCMS-Pro/discussions)

---

**祝部署顺利！** 🚀
