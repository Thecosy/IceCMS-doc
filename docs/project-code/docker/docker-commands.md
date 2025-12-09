---
id: docker-commands
title: Docker 常用命令
sidebar_label: Docker 常用命令
---

# Docker 常用命令

## 镜像相关命令

### 查看镜像

```bash
# 列出本地所有镜像
docker images

# 列出本地所有镜像（包括中间层镜像）
docker images -a

# 只显示镜像 ID
docker images -q
```

### 搜索镜像

```bash
# 搜索镜像
docker search 镜像名

# 搜索并过滤，只显示官方镜像
docker search --filter "is-official=true" 镜像名

# 搜索并限制结果数量
docker search --limit 5 镜像名
```

### 拉取镜像

```bash
# 拉取最新版本镜像
docker pull 镜像名

# 拉取指定版本镜像
docker pull 镜像名:tag

# 拉取指定仓库的镜像
docker pull registry.hub.docker.com/library/nginx:latest
```

### 删除镜像

```bash
# 删除镜像
docker rmi 镜像名或镜像ID

# 强制删除镜像
docker rmi -f 镜像名或镜像ID

# 删除所有未使用的镜像
docker image prune

# 删除所有镜像
docker rmi $(docker images -q)
```

### 导出和导入镜像

```bash
# 导出镜像为 tar 文件
docker save -o 文件名.tar 镜像名:tag

# 从 tar 文件导入镜像
docker load -i 文件名.tar
```

## 容器相关命令

### 查看容器

```bash
# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止的）
docker ps -a

# 只显示容器 ID
docker ps -q

# 显示最近创建的容器
docker ps -l

# 显示最近创建的 n 个容器
docker ps -n 5
```

### 创建和运行容器

```bash
# 创建并启动容器
docker run 镜像名

# 后台运行容器
docker run -d 镜像名

# 指定容器名称
docker run --name 容器名 镜像名

# 端口映射
docker run -p 主机端口:容器端口 镜像名

# 多个端口映射
docker run -p 8080:80 -p 443:443 镜像名

# 挂载数据卷
docker run -v 主机路径:容器路径 镜像名

# 环境变量
docker run -e 变量名=值 镜像名

# 交互式运行容器
docker run -it 镜像名 /bin/bash

# 综合示例
docker run -d --name mynginx -p 8080:80 -v /data:/usr/share/nginx/html nginx:latest
```

### 启动、停止和重启容器

```bash
# 启动容器
docker start 容器名或容器ID

# 停止容器
docker stop 容器名或容器ID

# 强制停止容器
docker kill 容器名或容器ID

# 重启容器
docker restart 容器名或容器ID

# 暂停容器
docker pause 容器名或容器ID

# 恢复容器
docker unpause 容器名或容器ID
```

### 删除容器

```bash
# 删除容器（必须先停止）
docker rm 容器名或容器ID

# 强制删除运行中的容器
docker rm -f 容器名或容器ID

# 删除所有已停止的容器
docker container prune

# 删除所有容器
docker rm $(docker ps -aq)

# 停止并删除所有容器
docker stop $(docker ps -q) && docker rm $(docker ps -aq)
```

### 进入容器

```bash
# 进入容器（推荐）
docker exec -it 容器名或容器ID /bin/bash

# 进入容器（不推荐，exit 后容器会停止）
docker attach 容器名或容器ID

# 以 root 用户进入容器
docker exec -it -u root 容器名或容器ID /bin/bash
```

### 查看容器信息

```bash
# 查看容器详细信息
docker inspect 容器名或容器ID

# 查看容器日志
docker logs 容器名或容器ID

# 实时查看容器日志
docker logs -f 容器名或容器ID

# 查看最近 100 行日志
docker logs --tail 100 容器名或容器ID

# 查看容器资源使用情况
docker stats 容器名或容器ID

# 查看容器进程
docker top 容器名或容器ID

# 查看容器端口映射
docker port 容器名或容器ID
```

### 容器与主机间的文件复制

```bash
# 从容器复制文件到主机
docker cp 容器名:容器内路径 主机路径

# 从主机复制文件到容器
docker cp 主机路径 容器名:容器内路径

# 示例：复制容器配置文件到主机
docker cp mynginx:/etc/nginx/nginx.conf /tmp/nginx.conf
```

## 网络相关命令

### 查看网络

```bash
# 列出所有网络
docker network ls

# 查看网络详细信息
docker network inspect 网络名
```

### 创建和删除网络

```bash
# 创建网络
docker network create 网络名

# 创建指定驱动的网络
docker network create --driver bridge 网络名

# 删除网络
docker network rm 网络名

# 删除所有未使用的网络
docker network prune
```

### 容器连接网络

```bash
# 将容器连接到网络
docker network connect 网络名 容器名

# 断开容器与网络的连接
docker network disconnect 网络名 容器名
```

## 数据卷相关命令

### 查看数据卷

```bash
# 列出所有数据卷
docker volume ls

# 查看数据卷详细信息
docker volume inspect 卷名
```

### 创建和删除数据卷

```bash
# 创建数据卷
docker volume create 卷名

# 删除数据卷
docker volume rm 卷名

# 删除所有未使用的数据卷
docker volume prune
```

## 系统相关命令

### 查看系统信息

```bash
# 查看 Docker 系统信息
docker info

# 查看 Docker 版本
docker version

# 查看 Docker 磁盘使用情况
docker system df
```

### 清理系统

```bash
# 清理未使用的数据（镜像、容器、网络、数据卷）
docker system prune

# 清理所有未使用的数据（包括未使用的镜像）
docker system prune -a

# 清理所有未使用的数据（包括数据卷）
docker system prune --volumes
```

## 镜像构建相关命令

### 构建镜像

```bash
# 使用 Dockerfile 构建镜像
docker build -t 镜像名:tag .

# 指定 Dockerfile 路径构建
docker build -t 镜像名:tag -f Dockerfile路径 .

# 不使用缓存构建
docker build --no-cache -t 镜像名:tag .
```

### 提交容器为镜像

```bash
# 将容器保存为新镜像
docker commit 容器名或容器ID 镜像名:tag

# 添加作者和说明信息
docker commit -a "作者" -m "说明" 容器名 镜像名:tag
```

### 镜像标签

```bash
# 给镜像打标签
docker tag 源镜像:tag 目标镜像:tag

# 示例
docker tag nginx:latest myregistry.com/nginx:v1.0
```

## 仓库相关命令

### 登录和登出

```bash
# 登录 Docker Hub
docker login

# 登录私有仓库
docker login 仓库地址

# 登出
docker logout
```

### 推送和拉取

```bash
# 推送镜像到仓库
docker push 镜像名:tag

# 从仓库拉取镜像
docker pull 镜像名:tag
```

## 常用组合命令

### 批量操作

```bash
# 停止所有运行中的容器
docker stop $(docker ps -q)

# 删除所有已停止的容器
docker rm $(docker ps -aq)

# 删除所有未打标签的镜像
docker rmi $(docker images -q -f "dangling=true")

# 删除所有 none 镜像
docker rmi $(docker images | grep "none" | awk '{print $3}')
```

### 快速清理

```bash
# 一键清理所有容器和镜像
docker stop $(docker ps -aq) && docker rm $(docker ps -aq) && docker rmi $(docker images -q)
```

## 命令参数说明

<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr><td>-d</td><td>后台运行容器</td></tr>
<tr><td>-i</td><td>以交互模式运行容器</td></tr>
<tr><td>-t</td><td>为容器分配一个伪终端</td></tr>
<tr><td>-p</td><td>端口映射，格式：主机端口:容器端口</td></tr>
<tr><td>-P</td><td>随机端口映射</td></tr>
<tr><td>-v</td><td>挂载数据卷，格式：主机路径:容器路径</td></tr>
<tr><td>--name</td><td>为容器指定名称</td></tr>
<tr><td>-e</td><td>设置环境变量</td></tr>
<tr><td>--network</td><td>指定容器的网络</td></tr>
<tr><td>--restart</td><td>容器重启策略（no、on-failure、always、unless-stopped）</td></tr>
<tr><td>-m</td><td>限制容器内存使用</td></tr>
<tr><td>--cpus</td><td>限制容器 CPU 使用</td></tr>
</tbody>
</table>

## 实用技巧

### 1. 查看容器 IP 地址

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 容器名
```

### 2. 查看容器占用的端口

```bash
docker port 容器名
```

### 3. 导出容器为 tar 文件

```bash
docker export 容器ID > 文件名.tar
```

### 4. 导入容器快照为镜像

```bash
cat 文件名.tar | docker import - 镜像名:tag
```

### 5. 实时监控所有容器

```bash
docker stats
```
