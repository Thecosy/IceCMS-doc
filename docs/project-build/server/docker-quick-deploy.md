---
id: docker-quick-deploy
title: Docker快速部署指南
sidebar_label: Docker快速部署
---

# IceCMS-Pro Docker 快速部署指南

:::tip 🎉 一键启动命令

**Linux / Mac 用户**

```bash
curl -fsSL http://www.icecms.cn/docker-start.sh | bash
```

**Windows PowerShell 用户**

```powershell
iwr -useb http://www.icecms.cn/docker-start.ps1 | iex
```

---

**📍 访问地址（启动完成后）**

| 服务 | 地址 | 说明 |
|------|------|------|
| 🌐 前台 | http://localhost:3001 | 公开网站前台 |
| 🔧 后台 | http://localhost:2580 | 管理后台界面 |
| 📖 API | http://localhost:8181/doc.html | Swagger API文档 |

**默认管理员账号**: `admin` / `admin123`

---

**🛑 停止服务**

```bash
# Linux / Mac
curl -fsSL http://www.icecms.cn/docker-stop.sh | bash

# Windows
iwr -useb http://www.icecms.cn/docker-stop.ps1 | iex
```

:::

---

## 镜像信息

所有镜像已上传到 Docker Hub，可直接拉取使用：

- **ttice/icecms-fullstack:latest** (1.07GB) - 包含后端API + Nuxt前端 + Vue管理后台
- **ttice/icecms-sql:latest** (1.08GB) - MySQL 8.0 数据库 + 初始化数据
- **redis:7-alpine** (60.7MB) - Redis 7.x 缓存服务

## 三种部署方式

### 方式一：一键启动脚本（推荐，最简单）

#### Linux/Mac 用户

```bash
# 一键下载并执行（推荐）
curl -fsSL http://www.icecms.cn/docker-start.sh | bash

# 或者分步执行
curl -o docker-start.sh http://www.icecms.cn/docker-start.sh
chmod +x docker-start.sh
bash docker-start.sh
```

#### Windows 用户

```powershell
# 一键下载并执行（推荐）
iwr -useb http://www.icecms.cn/docker-start.ps1 | iex

# 或者分步执行
Invoke-WebRequest -Uri "http://www.icecms.cn/docker-start.ps1" -OutFile "docker-start.ps1"
.\docker-start.ps1
```

#### 停止和清理

```bash
# Linux/Mac
curl -fsSL http://www.icecms.cn/docker-stop.sh | bash

# Windows
iwr -useb http://www.icecms.cn/docker-stop.ps1 | iex
```

---

### 方式二：手动命令行部署

:::note 📋 前置要求
- 已安装 Docker (20.10+)
- 已安装 Docker Compose (可选)
- 确保端口 3001, 2580, 8181, 3307, 6379 未被占用
:::

```bash
# 1. 创建Docker网络
docker network create icecms-network

# 2. 启动MySQL数据库
docker run -d \
  --name icecms-sql \
  --network icecms-network \
  -p 3307:3306 \
  -e MYSQL_ROOT_PASSWORD=123123 \
  -e MYSQL_DATABASE=icecms \
  --restart always \
  ttice/icecms-sql:latest

# 3. 启动Redis缓存
docker run -d \
  --name icecms-redis \
  --network icecms-network \
  -p 6379:6379 \
  --restart always \
  redis:7-alpine

# 4. 等待数据库启动（30秒）
sleep 30

# 5. 启动应用
docker run -d \
  --name icecms-fullstack \
  --network icecms-network \
  -p 3001:3000 \
  -p 2580:2580 \
  -p 8181:8181 \
  -e MYSQL_SERVER=icecms-sql:3306 \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=123123 \
  -e REDIS_HOST=icecms-redis \
  -e REDIS_PORT=6379 \
  -e API_BASE_URL=http://localhost:8181 \
  --restart always \
  ttice/icecms-fullstack:latest

# 查看容器状态
docker ps -a | grep icecms

# 查看应用日志
docker logs -f icecms-fullstack
```

:::tip ⏰ 启动时间
首次启动需要下载镜像（约2.1GB），耗时取决于网络速度。
数据库初始化需要约30秒，应用启动需要约1分钟。
**总计约需 2-5 分钟**完成完整部署。
:::

#### 停止和清理

```bash
# 停止容器
docker stop icecms-fullstack icecms-redis icecms-sql

# 删除容器
docker rm icecms-fullstack icecms-redis icecms-sql

# 删除网络
docker network rm icecms-network

# （可选）删除镜像
docker rmi ttice/icecms-fullstack:latest
docker rmi ttice/icecms-sql:latest
docker rmi ttice/redis:7-alpine
```

---

### 方式三：Docker Compose 部署（适合开发环境）

```bash
# 1. 克隆项目
git clone https://github.com/ttice/IceCMS-Pro.git
cd IceCMS-Pro/IceCMS-Docker

# 2. 启动所有服务
docker-compose up -d

# 3. 查看日志
docker-compose logs -f

# 4. 停止服务
docker-compose down

# 5. 完全清理（包括数据卷）
docker-compose down -v
```

---

## 访问地址

启动成功后，可通过以下地址访问：

- **前台网站**: http://localhost:3001
- **管理后台**: http://localhost:2580
- **API文档**: http://localhost:8181/doc.html

默认管理员账号：
- 用户名: `admin`
- 密码: `admin123`

---

## 端口说明

| 服务 | 容器端口 | 宿主机端口 | 说明 |
|------|---------|-----------|------|
| Nuxt 前端 | 3000 | 3001 | 公开访问的前台网站 |
| Vue 管理后台 | 2580 | 2580 | 后台管理界面 |
| Java API | 8181 | 8181 | RESTful API 接口 |
| MySQL | 3306 | 3307 | 数据库服务 |
| Redis | 6379 | 6379 | 缓存服务 |

---

## 环境变量说明

### MySQL 相关

- `MYSQL_ROOT_PASSWORD`: MySQL root密码（默认：123123）
- `MYSQL_DATABASE`: 数据库名称（默认：icecms）
- `MYSQL_SERVER`: MySQL服务器地址（容器内：icecms-sql:3306）

### Redis 相关

- `REDIS_HOST`: Redis服务器地址（容器内：icecms-redis）
- `REDIS_PORT`: Redis端口（默认：6379）

### 应用相关

- `API_BASE_URL`: API基础地址（默认：http://localhost:8181）
- `SERVER_PORT`: Java后端端口（默认：8181）
- `NUXT_PORT`: Nuxt前端端口（默认：3000）

---

## 常用命令

### 查看容器状态

```bash
docker ps -a | grep icecms
```

### 查看日志

```bash
# 查看全栈应用日志
docker logs -f icecms-fullstack

# 查看数据库日志
docker logs -f icecms-sql

# 查看Redis日志
docker logs -f icecms-redis
```

### 进入容器

```bash
# 进入应用容器
docker exec -it icecms-fullstack bash

# 进入数据库容器
docker exec -it icecms-sql bash

# 连接MySQL数据库
docker exec -it icecms-sql mysql -uroot -p123123 icecms
```

### 重启容器

```bash
# 重启应用
docker restart icecms-fullstack

# 重启数据库
docker restart icecms-sql

# 重启Redis
docker restart icecms-redis
```

---

## 故障排查

### 1. 容器无法启动

```bash
# 查看容器日志
docker logs icecms-fullstack

# 检查容器状态
docker ps -a

# 检查网络连接
docker network inspect icecms-network
```

### 2. 无法访问应用

- 检查防火墙是否开放端口 3001, 2580, 8181
- 检查容器是否正常运行: `docker ps`
- 查看应用日志: `docker logs icecms-fullstack`
- 确认数据库已完全启动（需要约30秒）

### 3. 数据库连接失败

```bash
# 检查MySQL是否正常运行
docker exec icecms-sql mysqladmin ping -h localhost -uroot -p123123

# 查看MySQL日志
docker logs icecms-sql

# 手动连接测试
docker exec -it icecms-sql mysql -uroot -p123123 -e "SHOW DATABASES;"
```

### 4. Redis连接失败

```bash
# 检查Redis是否正常运行
docker exec icecms-redis redis-cli ping

# 查看Redis日志
docker logs icecms-redis
```

---

## 数据持久化

使用 Docker Compose 部署时，数据会自动持久化到 Docker volumes：

- `mysql-data`: MySQL数据目录
- `redis-data`: Redis数据目录

查看数据卷：

```bash
docker volume ls | grep icecms
```

备份数据卷：

```bash
# 备份MySQL数据
docker run --rm \
  -v mysql-data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/mysql-backup.tar.gz /data

# 备份Redis数据
docker run --rm \
  -v redis-data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/redis-backup.tar.gz /data
```

---

## 生产环境建议

:::caution 🔐 安全提示
在生产环境部署前，**务必**完成以下安全配置：
:::

### 1. 修改默认密码

```bash
# 修改 MySQL root 密码
docker exec -it icecms-sql mysql -uroot -p123123 -e "ALTER USER 'root'@'%' IDENTIFIED BY '新密码';"

# 修改管理员密码
# 登录后台 http://localhost:2580 在【系统管理】->【用户管理】中修改
```

### 2. 配置域名访问

推荐使用 Nginx 反向代理：

```nginx
# /etc/nginx/conf.d/icecms.conf
server {
    listen 80;
    server_name your-domain.com;

    # 前台网站
    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # API接口
    location /api/ {
        proxy_pass http://localhost:8181/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # 管理后台
    location /admin/ {
        proxy_pass http://localhost:2580/;
        proxy_set_header Host $host;
    }
}
```

### 3. 启用 HTTPS

```bash
# 使用 Let's Encrypt 免费证书
sudo certbot --nginx -d your-domain.com
```

### 4. 数据备份策略

```bash
# 每日自动备份脚本
cat > /root/backup-icecms.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/icecms"

mkdir -p $BACKUP_DIR

# 备份MySQL数据
docker exec icecms-sql mysqldump -uroot -p123123 icecms > $BACKUP_DIR/icecms_$DATE.sql

# 备份上传文件（如果有）
docker cp icecms-fullstack:/app/uploads $BACKUP_DIR/uploads_$DATE

# 保留最近7天的备份
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /root/backup-icecms.sh

# 添加定时任务（每天凌晨2点执行）
echo "0 2 * * * /root/backup-icecms.sh" | crontab -
```

### 5. 监控和日志

```bash
# 查看容器资源占用
docker stats icecms-fullstack icecms-sql icecms-redis

# 设置日志大小限制
docker update --log-opt max-size=10m --log-opt max-file=3 icecms-fullstack

# 使用 Portainer 可视化管理（可选）
docker run -d \
  -p 9000:9000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --restart always \
  portainer/portainer-ce:latest
```

### 6. 资源限制配置

```bash
# 限制容器资源使用
docker update --cpus="2" --memory="4g" icecms-fullstack
docker update --cpus="1" --memory="2g" icecms-sql
docker update --cpus="0.5" --memory="512m" icecms-redis
```

---

## 常见问题 FAQ

### Q1: 启动后无法访问网站怎么办？

**A**: 按以下步骤排查：

```bash
# 1. 检查容器是否正常运行
docker ps -a | grep icecms

# 2. 查看应用日志
docker logs icecms-fullstack

# 3. 检查端口是否被占用
netstat -tunlp | grep -E '3001|2580|8181'

# 4. 检查防火墙
sudo ufw status
sudo firewall-cmd --list-ports

# 5. 等待应用完全启动（约2分钟）
```

### Q2: 数据库连接失败？

**A**: 确保数据库已完全启动：

```bash
# 等待数据库完全初始化（首次需要约30-60秒）
docker logs icecms-sql | grep "ready for connections"

# 手动测试连接
docker exec icecms-sql mysql -uroot -p123123 -e "SELECT 1"
```

### Q3: 如何更新到最新版本？

**A**: 执行以下步骤：

```bash
# 1. 备份数据
docker exec icecms-sql mysqldump -uroot -p123123 icecms > backup.sql

# 2. 停止并删除旧容器
docker stop icecms-fullstack && docker rm icecms-fullstack

# 3. 拉取最新镜像
docker pull ttice/icecms-fullstack:latest

# 4. 使用新镜像启动（使用相同的启动命令）
# ...参考上面的启动命令
```

### Q4: 如何查看详细的启动日志？

**A**: 使用以下命令：

```bash
# 实时查看所有日志
docker logs -f icecms-fullstack

# 只看最近100行
docker logs --tail 100 icecms-fullstack

# 查看特定时间段的日志
docker logs --since 30m icecms-fullstack
```

### Q5: 端口冲突怎么办？

**A**: 修改宿主机端口映射：

```bash
# 示例：将前台端口改为 8001
docker run -d \
  --name icecms-fullstack \
  -p 8001:3000 \
  -p 2580:2580 \
  -p 8181:8181 \
  # ... 其他参数保持不变
```

---

## 性能优化建议

### 1. 启用 Redis 缓存

Redis 已默认启用，缓存策略：

- **轮播图**: 1小时
- **热榜数据**: 10分钟
- **文章详情**: 5分钟
- **用户会话**: 30分钟

### 2. 数据库优化

```sql
-- 进入数据库
docker exec -it icecms-sql mysql -uroot -p123123 icecms

-- 查看慢查询
SHOW VARIABLES LIKE 'slow_query%';

-- 分析表
ANALYZE TABLE article, resource, user;

-- 优化表
OPTIMIZE TABLE article, resource, user;
```

### 3. 应用层优化

- ✅ 已启用 Gzip 压缩
- ✅ 已配置静态资源缓存
- ✅ 已启用 HTTP/2
- ✅ 已优化数据库连接池

---

## 技术支持

:::info 💬 获取帮助

- **GitHub Issues**: https://github.com/ttice/IceCMS-Pro/issues
- **官方文档**: https://icecms.cn
- **Docker Hub**: https://hub.docker.com/u/ttice
- **社区论坛**: https://forum.icecms.cn

**技术交流QQ群**: 123456789

:::

---

## 开源许可

本项目遵循 **MIT 许可证**

---

**最后更新**: 2025-12-09
**文档版本**: v1.0
