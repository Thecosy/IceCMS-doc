---
id: docker-hub-deploy
title: Docker镜像部署教程
sidebar_label: Docker镜像部署
---

# IceCMS-Pro Docker 部署教程

本文档详细介绍如何在任何机器上使用 Docker Hub 镜像快速部署 IceCMS-Pro 系统。

## 📋 目录

- [系统要求](#系统要求)
- [快速开始](#快速开始)
- [详细步骤](#详细步骤)
- [环境配置](#环境配置)
- [访问系统](#访问系统)
- [常见问题](#常见问题)
- [故障排除](#故障排除)

---

## 系统要求

### 硬件要求

| 组件 | 最低配置 | 推荐配置 |
|------|---------|---------|
| CPU | 2核 | 4核+ |
| 内存 | 4GB | 8GB+ |
| 磁盘 | 20GB | 50GB+ SSD |
| 网络 | 10Mbps | 100Mbps+ |

### 软件要求

- **操作系统**：Windows 10/11、macOS 10.15+、Ubuntu 20.04+、CentOS 7+
- **Docker**：20.10+ 版本
- **Docker Compose**：2.0+ 版本

---

## 快速开始

### 一键部署（推荐）

```bash
# 1. 创建项目目录
mkdir icecms-pro && cd icecms-pro

# 2. 下载 docker-compose 配置文件
curl -O https://raw.githubusercontent.com/Thecosy/IceCMS-Pro/main/docker-compose.prod.yml
curl -O https://raw.githubusercontent.com/Thecosy/IceCMS-Pro/main/.env.example

# 3. 配置环境变量
cp .env.example .env
nano .env  # 或使用其他编辑器修改

# 4. 启动所有服务
docker compose -f docker-compose.prod.yml up -d

# 5. 查看启动状态
docker compose -f docker-compose.prod.yml ps
```

### 访问系统

部署完成后，通过浏览器访问：

- **公共前端**：http://localhost:3001
- **管理后台**：http://localhost:2580
- **API 接口**：http://localhost:8181
- **API 文档**：http://localhost:8181/doc.html

---

## 详细步骤

### 步骤 1：安装 Docker

#### Windows

1. 下载 [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
2. 双击安装包安装
3. 启动 Docker Desktop
4. 验证安装：
   ```powershell
   docker --version
   docker compose version
   ```

#### macOS

1. 下载 [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
2. 拖拽到 Applications 文件夹
3. 启动 Docker Desktop
4. 验证安装：
   ```bash
   docker --version
   docker compose version
   ```

#### Linux (Ubuntu/Debian)

```bash
# 更新软件包
sudo apt-get update

# 安装依赖
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# 添加 Docker 官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 添加 Docker 仓库
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker

# 将当前用户加入 docker 组（避免每次使用 sudo）
sudo usermod -aG docker $USER
newgrp docker

# 验证安装
docker --version
docker compose version
```

#### Linux (CentOS/RHEL)

```bash
# 安装依赖
sudo yum install -y yum-utils

# 添加 Docker 仓库
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker Engine
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker

# 将当前用户加入 docker 组
sudo usermod -aG docker $USER
newgrp docker

# 验证安装
docker --version
docker compose version
```

### 步骤 2：准备部署文件

#### 方法 1：克隆完整仓库（推荐用于开发）

```bash
# 克隆项目仓库
git clone https://github.com/Thecosy/IceCMS-Pro.git
cd IceCMS-Pro

# 复制环境配置文件
cp .env.example .env
```

#### 方法 2：仅下载配置文件（推荐用于生产）

```bash
# 创建项目目录
mkdir icecms-pro && cd icecms-pro

# 下载 docker-compose 配置文件
curl -O https://raw.githubusercontent.com/Thecosy/IceCMS-Pro/main/docker-compose.prod.yml

# 下载环境变量示例文件
curl -O https://raw.githubusercontent.com/Thecosy/IceCMS-Pro/main/.env.example

# 复制并编辑环境变量
cp .env.example .env
```

### 步骤 3：配置环境变量

编辑 `.env` 文件，根据实际情况修改以下配置：

```bash
# MySQL 配置
MYSQL_ROOT_PASSWORD=your_secure_password_here
MYSQL_DATABASE=icecms
MYSQL_PORT=3306

# Redis 配置
REDIS_PASSWORD=your_redis_password_here
REDIS_PORT=6379

# 阿里云短信配置（可选）
ALIYUN_SMS_ACCESS_KEY_ID=your_aliyun_access_key_id
ALIYUN_SMS_ACCESS_KEY_SECRET=your_aliyun_access_key_secret
ALIYUN_SMS_SIGN_NAME=阿里云短信测试
ALIYUN_SMS_TEMPLATE_CODE=SMS_154950909

# 端口配置
API_PORT=8181
NUXT_PORT=3001
WEB_PORT=2580
```

**重要提示：**
- 🔐 **务必修改默认密码**，使用强密码保护数据库和 Redis
- 📝 请妥善保管 `.env` 文件，不要提交到公开仓库
- 🔑 生产环境建议使用环境变量或密钥管理服务

### 步骤 4：拉取 Docker 镜像

```bash
# 拉取所有镜像（可选，docker compose 会自动拉取）
docker pull ttice/icecms-api:prod
docker pull ttice/icecms-nuxt:prod
docker pull ttice/icecms-web:prod
docker pull ttice/icecms-mysql:latest

# 查看已下载的镜像
docker images | grep ttice
```

**镜像说明：**

| 镜像名称 | 大小 | 用途 |
|---------|------|------|
| ttice/icecms-api:prod | 559MB | Spring Boot 后端 API 服务 |
| ttice/icecms-nuxt:prod | 215MB | Nuxt.js 公共前端（SSR） |
| ttice/icecms-web:prod | 104MB | Vue.js 管理后台 |
| ttice/icecms-mysql:latest | 1.07GB | MySQL 8 数据库（含初始数据） |

### 步骤 5：启动服务

#### 生产环境部署

```bash
# 启动所有服务（后台运行）
docker compose -f docker-compose.prod.yml up -d

# 查看服务状态
docker compose -f docker-compose.prod.yml ps

# 查看服务日志
docker compose -f docker-compose.prod.yml logs -f

# 查看特定服务日志
docker compose -f docker-compose.prod.yml logs -f api
docker compose -f docker-compose.prod.yml logs -f nuxt
```

#### 开发环境部署

```bash
# 启动开发环境（支持热更新）
docker compose up -d

# 查看服务状态
docker compose ps

# 查看日志
docker compose logs -f
```

### 步骤 6：验证部署

```bash
# 检查所有容器是否正常运行
docker compose -f docker-compose.prod.yml ps

# 期望输出：
# NAME                  STATUS          PORTS
# icecms-api-prod       Up 2 minutes    0.0.0.0:8181->8181/tcp
# icecms-mysql          Up 2 minutes    0.0.0.0:3306->3306/tcp
# icecms-nuxt-prod      Up 2 minutes    0.0.0.0:3001->3000/tcp
# icecms-redis          Up 2 minutes    0.0.0.0:6379->6379/tcp
# icecms-web-prod       Up 2 minutes    0.0.0.0:2580->80/tcp

# 检查 API 健康状态
curl http://localhost:8181/actuator/health

# 检查前端是否可访问
curl -I http://localhost:3001
curl -I http://localhost:2580
```

---

## 环境配置

### 自定义端口映射

如果默认端口被占用，可以修改 `docker-compose.prod.yml` 文件：

```yaml
services:
  api:
    ports:
      - "9090:8181"  # 将外部端口 9090 映射到容器内 8181

  nuxt:
    ports:
      - "3002:3000"  # 将外部端口 3002 映射到容器内 3000

  web:
    ports:
      - "8080:80"    # 将外部端口 8080 映射到容器内 80
```

### 持久化数据

默认配置已启用数据持久化，数据存储位置：

```
./docker/volumes/
├── mysql/       # MySQL 数据
│   ├── data/    # 数据库文件
│   └── logs/    # 日志文件
└── redis/       # Redis 数据
```

### 配置反向代理（Nginx）

生产环境建议使用 Nginx 反向代理：

```nginx
# /etc/nginx/sites-available/icecms.conf

# 公共前端
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# 管理后台
server {
    listen 80;
    server_name admin.your-domain.com;

    location / {
        proxy_pass http://localhost:2580;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# API 接口
server {
    listen 80;
    server_name api.your-domain.com;

    location / {
        proxy_pass http://localhost:8181;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/icecms.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 配置 SSL 证书（Let's Encrypt）

```bash
# 安装 Certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取 SSL 证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
sudo certbot --nginx -d admin.your-domain.com
sudo certbot --nginx -d api.your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

---

## 访问系统

### 默认访问地址

部署成功后，可通过以下地址访问：

| 服务 | URL | 说明 |
|------|-----|------|
| 公共前端 | http://localhost:3001 | 用户访问的主站 |
| 管理后台 | http://localhost:2580 | 系统管理后台 |
| API 接口 | http://localhost:8181 | RESTful API |
| API 文档 | http://localhost:8181/doc.html | Swagger/Knife4j 文档 |
| MySQL | localhost:3306 | 数据库连接 |
| Redis | localhost:6379 | 缓存服务 |

### 默认管理员账户

**方式 1：使用已有账户**

根据初始数据库数据，可用账户：
- 用户名：`admin` / `ttice`
- 密码：见数据库 SQL 文件（已加密）

**方式 2：创建新账户**

```bash
# 进入 MySQL 容器
docker exec -it icecms-mysql mysql -uroot -p

# 输入密码后，执行：
USE icecms;

# 查看用户表
SELECT user_id, name, USERNAME, email, role FROM user;

# 创建新管理员账户（需要自行加密密码）
# ...
```

---

## 常见问题

### Q1: 端口被占用怎么办？

**问题：**启动时提示 `port is already allocated`

**解决方案：**

1. 查看占用端口的进程：
   ```bash
   # Windows
   netstat -ano | findstr :8181

   # Linux/macOS
   sudo lsof -i :8181
   ```

2. 停止占用进程或修改配置文件端口映射

### Q2: 容器启动失败

**问题：**容器状态显示 `Exited` 或 `Restarting`

**解决方案：**

```bash
# 查看容器日志
docker logs icecms-api-prod
docker logs icecms-mysql

# 常见原因：
# 1. 数据库密码错误 - 检查 .env 文件
# 2. 内存不足 - 增加 Docker 内存限制
# 3. 磁盘空间不足 - 清理 Docker 资源
```

### Q3: 数据库连接失败

**问题：**API 无法连接到 MySQL

**解决方案：**

```bash
# 检查 MySQL 容器是否运行
docker ps | grep mysql

# 测试数据库连接
docker exec -it icecms-mysql mysql -uroot -p

# 检查网络连接
docker network ls
docker network inspect icecms-network
```

### Q4: 前端页面空白

**问题：**访问前端显示空白页面

**解决方案：**

```bash
# 查看 Nuxt 日志
docker logs icecms-nuxt-prod

# 检查 API 连接
curl http://localhost:8181/WebSitting/getCarousel

# 清理浏览器缓存
# Ctrl+Shift+Delete (Windows/Linux)
# Cmd+Shift+Delete (macOS)
```

### Q5: 如何更新镜像？

```bash
# 1. 停止服务
docker compose -f docker-compose.prod.yml down

# 2. 拉取最新镜像
docker compose -f docker-compose.prod.yml pull

# 3. 重新启动
docker compose -f docker-compose.prod.yml up -d

# 4. 清理旧镜像（可选）
docker image prune -a
```

### Q6: 如何备份数据？

```bash
# 备份 MySQL 数据
docker exec icecms-mysql mysqldump -uroot -p"your_password" icecms > backup_$(date +%Y%m%d).sql

# 备份 Redis 数据
docker exec icecms-redis redis-cli -a "your_password" SAVE
docker cp icecms-redis:/data/dump.rdb ./backup/

# 备份 volumes 数据
tar -czf icecms_volumes_$(date +%Y%m%d).tar.gz ./docker/volumes/
```

### Q7: 如何恢复数据？

```bash
# 恢复 MySQL 数据
docker exec -i icecms-mysql mysql -uroot -p"your_password" icecms < backup_20260110.sql

# 恢复 Redis 数据
docker cp backup/dump.rdb icecms-redis:/data/
docker restart icecms-redis
```

---

## 故障排除

### 日志查看

```bash
# 查看所有服务日志
docker compose -f docker-compose.prod.yml logs

# 实时跟踪日志
docker compose -f docker-compose.prod.yml logs -f

# 查看特定服务日志
docker compose -f docker-compose.prod.yml logs api
docker compose -f docker-compose.prod.yml logs mysql
docker compose -f docker-compose.prod.yml logs nuxt
docker compose -f docker-compose.prod.yml logs web
docker compose -f docker-compose.prod.yml logs redis

# 查看最近 100 行日志
docker compose -f docker-compose.prod.yml logs --tail=100 api
```

### 重启服务

```bash
# 重启所有服务
docker compose -f docker-compose.prod.yml restart

# 重启特定服务
docker compose -f docker-compose.prod.yml restart api
docker compose -f docker-compose.prod.yml restart mysql
```

### 进入容器调试

```bash
# 进入 API 容器
docker exec -it icecms-api-prod sh

# 进入 MySQL 容器
docker exec -it icecms-mysql bash

# 进入 Nuxt 容器
docker exec -it icecms-nuxt-prod sh

# 进入 Redis 容器
docker exec -it icecms-redis sh
```

### 完全清理并重新部署

```bash
# 警告：此操作会删除所有数据！

# 1. 停止并删除所有容器
docker compose -f docker-compose.prod.yml down -v

# 2. 删除所有镜像
docker rmi ttice/icecms-api:prod
docker rmi ttice/icecms-nuxt:prod
docker rmi ttice/icecms-web:prod
docker rmi ttice/icecms-mysql:latest

# 3. 清理 volumes（可选）
rm -rf ./docker/volumes/

# 4. 重新部署
docker compose -f docker-compose.prod.yml up -d
```

### 性能优化

```bash
# 查看容器资源使用情况
docker stats

# 限制容器内存和 CPU
# 编辑 docker-compose.prod.yml
services:
  api:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
```

---

## 生产环境建议

### 安全配置

1. **修改默认密码**
   - MySQL root 密码
   - Redis 密码
   - 管理员账户密码

2. **启用防火墙**
   ```bash
   # Ubuntu/Debian
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable

   # CentOS/RHEL
   sudo firewall-cmd --permanent --add-service=http
   sudo firewall-cmd --permanent --add-service=https
   sudo firewall-cmd --reload
   ```

3. **限制数据库外部访问**
   ```yaml
   # docker-compose.prod.yml
   services:
     mysql:
       ports:
         - "127.0.0.1:3306:3306"  # 仅本地访问
   ```

4. **定期更新镜像和系统**

### 监控和日志

1. **使用 Docker 日志驱动**
   ```yaml
   services:
     api:
       logging:
         driver: "json-file"
         options:
           max-size: "10m"
           max-file: "3"
   ```

2. **集成监控工具**
   - Prometheus + Grafana
   - ELK Stack (Elasticsearch + Logstash + Kibana)
   - Portainer（Docker 可视化管理）

### 高可用部署

1. **使用 Docker Swarm 或 Kubernetes**
2. **配置负载均衡**
3. **主从复制数据库**
4. **Redis 哨兵模式**

---

## 技术支持

### 官方资源

- **GitHub 仓库**：https://github.com/Thecosy/IceCMS-Pro
- **Docker Hub**：https://hub.docker.com/u/ttice
- **问题反馈**：https://github.com/Thecosy/IceCMS-Pro/issues

### 社区

- 提交 Issue 报告问题
- 提交 Pull Request 贡献代码
- 参与 Discussions 讨论

---

## 更新日志

### v3.6.3 (2026-01-10)
- ✅ 集成阿里云短信认证服务
- ✅ 修复 Vue SSR hydration 错误
- ✅ 优化 Docker 镜像大小
- ✅ 推送所有镜像到 Docker Hub

### v3.6.2 (2025-12-10)
- 完整 Docker 部署支持
- CORS 和 Shiro 安全配置
- 阿里云 OSS 支持

---

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](https://github.com/Thecosy/IceCMS-Pro/blob/main/LICENSE) 文件

---

**部署愉快！如有问题，欢迎提交 Issue 或 PR！** 🚀
