---
id: docker-volume
title: Docker 数据卷管理
sidebar_label: Docker 数据卷管理
---

# Docker 数据卷管理

## 数据卷简介

Docker 数据卷（Volume）是一个可供容器使用的特殊目录，它将主机操作系统目录直接映射进容器。

### 数据卷的特点

* **持久化存储**: 数据不会因为容器删除而丢失
* **数据共享**: 多个容器可以同时挂载同一个数据卷
* **性能优化**: 数据卷的读写性能优于容器文件系统
* **独立管理**: 数据卷的生命周期独立于容器
* **跨平台**: 支持 Linux、Windows、Mac 等多个平台

## 数据卷类型

Docker 提供三种主要的数据持久化方式：

### 1. Volumes（数据卷）

由 Docker 管理的数据卷，存储在 Docker 区域（`/var/lib/docker/volumes/`）。

```bash
# 创建数据卷
docker volume create my-volume

# 使用数据卷
docker run -d --name web -v my-volume:/usr/share/nginx/html nginx
```

### 2. Bind Mounts（绑定挂载）

将主机的任意目录或文件挂载到容器中。

```bash
# 绑定主机目录到容器
docker run -d --name web -v /data/html:/usr/share/nginx/html nginx

# Windows 系统示例
docker run -d --name web -v C:\data\html:/usr/share/nginx/html nginx
```

### 3. tmpfs Mounts（临时文件系统）

数据存储在主机内存中，容器停止后数据消失。

```bash
# 使用 tmpfs
docker run -d --name web --tmpfs /tmp nginx
```

## 数据卷基本操作

### 创建数据卷

```bash
# 创建数据卷
docker volume create volume-name

# 创建数据卷并指定驱动
docker volume create --driver local volume-name

# 创建数据卷并指定标签
docker volume create --label env=prod volume-name
```

### 查看数据卷

```bash
# 列出所有数据卷
docker volume ls

# 查看数据卷详细信息
docker volume inspect volume-name

# 过滤数据卷
docker volume ls --filter "dangling=true"
```

### 删除数据卷

```bash
# 删除指定数据卷
docker volume rm volume-name

# 删除所有未使用的数据卷
docker volume prune

# 强制删除所有未使用的数据卷
docker volume prune -f
```

## 容器使用数据卷

### 使用命名数据卷

```bash
# 创建数据卷
docker volume create mysql-data

# 运行容器并挂载数据卷
docker run -d \
  --name mysql \
  -v mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=root123 \
  mysql:5.7

# 查看挂载信息
docker inspect mysql | grep -A 10 Mounts
```

### 使用匿名数据卷

```bash
# Docker 会自动创建匿名数据卷
docker run -d --name web -v /usr/share/nginx/html nginx

# 查看匿名卷
docker volume ls
```

### 使用绑定挂载

```bash
# 绑定主机目录（绝对路径）
docker run -d \
  --name web \
  -v /data/html:/usr/share/nginx/html \
  nginx

# 只读挂载
docker run -d \
  --name web \
  -v /data/html:/usr/share/nginx/html:ro \
  nginx

# 挂载单个文件
docker run -d \
  --name web \
  -v /data/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx
```

### 使用 --mount 参数

```bash
# 使用 --mount（推荐，更明确）
docker run -d \
  --name web \
  --mount type=volume,source=my-volume,target=/usr/share/nginx/html \
  nginx

# bind 类型挂载
docker run -d \
  --name web \
  --mount type=bind,source=/data/html,target=/usr/share/nginx/html \
  nginx

# 只读挂载
docker run -d \
  --name web \
  --mount type=bind,source=/data/html,target=/usr/share/nginx/html,readonly \
  nginx
```

## 数据卷实战案例

### 案例一：MySQL 数据持久化

```bash
# 1. 创建数据卷
docker volume create mysql-data
docker volume create mysql-config

# 2. 运行 MySQL 容器
docker run -d \
  --name mysql \
  -p 3306:3306 \
  -v mysql-data:/var/lib/mysql \
  -v mysql-config:/etc/mysql/conf.d \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=mydb \
  mysql:5.7

# 3. 验证数据持久化
docker exec -it mysql mysql -uroot -proot123 -e "CREATE TABLE mydb.test (id INT);"

# 4. 删除并重新创建容器
docker rm -f mysql
docker run -d \
  --name mysql \
  -p 3306:3306 \
  -v mysql-data:/var/lib/mysql \
  -v mysql-config:/etc/mysql/conf.d \
  -e MYSQL_ROOT_PASSWORD=root123 \
  mysql:5.7

# 5. 验证数据仍然存在
docker exec -it mysql mysql -uroot -proot123 -e "SHOW TABLES FROM mydb;"
```

### 案例二：Nginx 站点部署

```bash
# 1. 创建主机目录
mkdir -p /data/nginx/html
mkdir -p /data/nginx/conf
mkdir -p /data/nginx/logs

# 2. 准备网站文件
echo "<h1>Hello Docker!</h1>" > /data/nginx/html/index.html

# 3. 运行 Nginx 容器
docker run -d \
  --name nginx \
  -p 80:80 \
  -v /data/nginx/html:/usr/share/nginx/html:ro \
  -v /data/nginx/conf:/etc/nginx/conf.d \
  -v /data/nginx/logs:/var/log/nginx \
  nginx:latest

# 4. 访问测试
curl http://localhost
```

### 案例三：多容器共享数据卷

```bash
# 1. 创建共享数据卷
docker volume create shared-data

# 2. 容器 1 写入数据
docker run -d \
  --name writer \
  -v shared-data:/data \
  alpine \
  sh -c "while true; do echo $(date) >> /data/log.txt; sleep 5; done"

# 3. 容器 2 读取数据
docker run -d \
  --name reader \
  -v shared-data:/data:ro \
  alpine \
  sh -c "tail -f /data/log.txt"

# 4. 查看日志
docker logs -f reader
```

### 案例四：容器数据备份

```bash
# 1. 运行应用容器
docker run -d \
  --name app \
  -v app-data:/app/data \
  myapp:latest

# 2. 备份数据卷
docker run --rm \
  -v app-data:/source:ro \
  -v /backup:/backup \
  alpine \
  tar czf /backup/app-data-$(date +%Y%m%d).tar.gz -C /source .

# 3. 恢复数据卷
docker run --rm \
  -v app-data:/target \
  -v /backup:/backup \
  alpine \
  tar xzf /backup/app-data-20231201.tar.gz -C /target
```

### 案例五：使用 Docker Compose 管理数据卷

创建 `docker-compose.yml` 文件：

```yaml
version: '3.8'

services:
  db:
    image: mysql:5.7
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: myapp
    volumes:
      - db_data:/var/lib/mysql
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    networks:
      - app-network

  web:
    image: nginx:latest
    container_name: nginx
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - web_logs:/var/log/nginx
    depends_on:
      - db
    networks:
      - app-network

  app:
    image: myapp:latest
    container_name: app
    volumes:
      - app_data:/app/data
      - ./config:/app/config:ro
    depends_on:
      - db
    networks:
      - app-network

volumes:
  db_data:
    driver: local
  app_data:
    driver: local
  web_logs:
    driver: local

networks:
  app-network:
    driver: bridge
```

启动服务：

```bash
docker-compose up -d
```

## 数据卷迁移

### 方法一：使用 tar 备份和恢复

```bash
# 备份数据卷
docker run --rm \
  -v source-volume:/source:ro \
  -v $(pwd):/backup \
  alpine \
  tar czf /backup/volume-backup.tar.gz -C /source .

# 恢复到新数据卷
docker volume create target-volume
docker run --rm \
  -v target-volume:/target \
  -v $(pwd):/backup \
  alpine \
  tar xzf /backup/volume-backup.tar.gz -C /target
```

### 方法二：使用容器间复制

```bash
# 从容器复制到主机
docker cp 容器名:/容器路径 主机路径

# 从主机复制到容器
docker cp 主机路径 容器名:/容器路径
```

### 方法三：使用数据卷容器

```bash
# 创建数据卷容器
docker create -v /data --name data-container alpine

# 从数据卷容器复制数据
docker run --rm \
  --volumes-from data-container \
  -v $(pwd):/backup \
  alpine \
  tar czf /backup/data.tar.gz /data
```

## 数据卷最佳实践

### 1. 使用命名数据卷

避免使用匿名卷，使用命名卷便于管理：

```bash
# 推荐
docker volume create mysql-data
docker run -v mysql-data:/var/lib/mysql mysql

# 不推荐
docker run -v /var/lib/mysql mysql
```

### 2. 定期备份数据

```bash
# 创建备份脚本
#!/bin/bash
BACKUP_DIR=/backup
DATE=$(date +%Y%m%d_%H%M%S)

docker run --rm \
  -v mysql-data:/source:ro \
  -v $BACKUP_DIR:/backup \
  alpine \
  tar czf /backup/mysql-$DATE.tar.gz -C /source .

# 保留最近 7 天的备份
find $BACKUP_DIR -name "mysql-*.tar.gz" -mtime +7 -delete
```

### 3. 使用只读挂载

对于配置文件等不需要修改的数据，使用只读挂载：

```bash
docker run -v /data/config:/config:ro nginx
```

### 4. 分离数据和应用

```bash
# 数据卷存储数据
docker run -v app-data:/app/data app

# 绑定挂载存储配置
docker run -v /data/config:/app/config:ro app
```

### 5. 监控数据卷使用

```bash
# 查看数据卷占用空间
docker system df -v

# 查看特定数据卷大小
docker volume inspect volume-name | grep Mountpoint
sudo du -sh /var/lib/docker/volumes/volume-name/_data
```

## 故障排查

### 数据卷权限问题

```bash
# 检查挂载目录权限
docker exec -it 容器名 ls -la /挂载路径

# 修改容器内权限
docker exec -it 容器名 chown -R user:group /挂载路径

# 或在 Dockerfile 中设置
RUN chown -R user:group /app/data
```

### 数据卷无法删除

```bash
# 查看哪些容器使用了该卷
docker ps -a --filter volume=volume-name

# 删除使用该卷的容器
docker rm -f 容器名

# 再删除数据卷
docker volume rm volume-name
```

### Windows 路径问题

```bash
# Windows 下使用正确的路径格式
docker run -v C:/data:/app/data app

# 或使用 Git Bash 的路径转换
docker run -v /c/data:/app/data app
```

## 性能优化

### 使用本地卷驱动选项

```bash
# 创建数据卷时指定选项
docker volume create \
  --driver local \
  --opt type=none \
  --opt device=/data/volumes/myvolume \
  --opt o=bind \
  myvolume
```

### 选择合适的存储驱动

```bash
# 在 daemon.json 中配置存储驱动
{
  "storage-driver": "overlay2"
}
```

### 避免频繁的小文件读写

对于日志等频繁写入的场景，考虑使用 volume 而非 bind mount：

```bash
# 使用 volume（性能更好）
docker run -v logs:/var/log/app app

# 而不是 bind mount
docker run -v /data/logs:/var/log/app app
```
