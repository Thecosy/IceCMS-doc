---
id: docker-network
title: Docker 网络配置
sidebar_label: Docker 网络配置
---

# Docker 网络配置

## Docker 网络模式

Docker 提供了多种网络模式，用于容器之间以及容器与外部网络的通信。

### 网络模式类型

<table>
<thead>
<tr>
<th>网络模式</th>
<th>说明</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>bridge</td>
<td>桥接模式（默认）</td>
<td>适用于同一主机上的容器通信</td>
</tr>
<tr>
<td>host</td>
<td>主机模式</td>
<td>容器与主机共享网络命名空间</td>
</tr>
<tr>
<td>none</td>
<td>无网络模式</td>
<td>容器没有网络配置</td>
</tr>
<tr>
<td>container</td>
<td>容器模式</td>
<td>与其他容器共享网络</td>
</tr>
<tr>
<td>自定义网络</td>
<td>用户自定义网络</td>
<td>更灵活的网络配置</td>
</tr>
</tbody>
</table>

## Bridge 桥接模式

Bridge 是 Docker 的默认网络模式，容器通过虚拟网桥与外部通信。

### 特点

* Docker 启动时会创建一个名为 docker0 的虚拟网桥
* 每个容器都会被分配一个独立的 IP 地址
* 容器可以通过 docker0 网桥与其他容器通信
* 需要通过端口映射才能从外部访问容器

### 使用示例

```bash
# 使用默认 bridge 网络运行容器
docker run -d --name web1 nginx

# 查看容器的网络信息
docker inspect web1

# 查看 bridge 网络详情
docker network inspect bridge
```

### 端口映射

```bash
# 映射单个端口
docker run -d -p 8080:80 --name web nginx

# 映射多个端口
docker run -d -p 8080:80 -p 8443:443 --name web nginx

# 映射所有端口（随机映射）
docker run -d -P --name web nginx

# 指定 IP 地址映射
docker run -d -p 192.168.1.100:8080:80 --name web nginx
```

## Host 主机模式

容器与主机共享网络命名空间，容器没有独立的 IP 地址。

### 特点

* 容器直接使用主机的网络
* 不需要进行端口映射
* 网络性能最好
* 端口可能会冲突

### 使用示例

```bash
# 使用 host 网络模式
docker run -d --network host --name web nginx

# 此时容器直接使用主机的 80 端口，无需映射
```

### 适用场景

* 需要高性能网络的应用
* 需要访问主机网络资源的应用
* 网络监控工具

## None 无网络模式

容器没有网络配置，完全隔离的网络环境。

### 使用示例

```bash
# 使用 none 网络模式
docker run -d --network none --name isolated alpine sleep 3600
```

### 适用场景

* 需要完全隔离网络的应用
* 安全性要求极高的场景

## Container 模式

与指定的容器共享网络命名空间。

### 使用示例

```bash
# 先启动一个容器
docker run -d --name web1 nginx

# 新容器共享 web1 的网络
docker run -d --network container:web1 --name web2 nginx
```

### 特点

* 两个容器共享同一个网络命名空间
* 共享 IP 地址和端口范围
* 可以通过 localhost 相互访问

## 自定义网络

创建用户自定义网络，提供更灵活的网络配置。

### 创建自定义网络

```bash
# 创建 bridge 类型的自定义网络
docker network create mynet

# 指定网络驱动和子网
docker network create --driver bridge --subnet 172.18.0.0/16 --gateway 172.18.0.1 mynet

# 查看网络列表
docker network ls

# 查看网络详情
docker network inspect mynet
```

### 使用自定义网络

```bash
# 在自定义网络中运行容器
docker run -d --name web1 --network mynet nginx

# 在同一网络中运行另一个容器
docker run -d --name web2 --network mynet nginx

# 容器之间可以通过容器名相互访问
docker exec -it web1 ping web2
```

### 连接和断开网络

```bash
# 将运行中的容器连接到网络
docker network connect mynet 容器名

# 断开容器与网络的连接
docker network disconnect mynet 容器名

# 一个容器可以连接多个网络
docker network connect network1 容器名
docker network connect network2 容器名
```

## 网络配置实战

### 实战一：搭建应用和数据库网络

```bash
# 1. 创建应用网络
docker network create app-network

# 2. 启动 MySQL 数据库
docker run -d \
  --name mysql \
  --network app-network \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=myapp \
  mysql:5.7

# 3. 启动应用容器
docker run -d \
  --name myapp \
  --network app-network \
  -p 8080:8080 \
  -e DB_HOST=mysql \
  -e DB_PORT=3306 \
  -e DB_NAME=myapp \
  myapp:latest

# 应用可以通过 mysql:3306 访问数据库
```

### 实战二：前后端分离架构

```bash
# 1. 创建前端网络
docker network create frontend

# 2. 创建后端网络
docker network create backend

# 3. 启动数据库（只在后端网络）
docker run -d \
  --name postgres \
  --network backend \
  -e POSTGRES_PASSWORD=password \
  postgres:13

# 4. 启动后端 API（连接前后端网络）
docker run -d \
  --name api \
  --network backend \
  -e DB_HOST=postgres \
  api:latest

docker network connect frontend api

# 5. 启动前端应用（只在前端网络）
docker run -d \
  --name web \
  --network frontend \
  -p 80:80 \
  -e API_URL=http://api:8080 \
  web:latest

# 前端可以访问 API，但不能直接访问数据库
```

### 实战三：使用 Docker Compose 配置网络

创建 `docker-compose.yml` 文件：

```yaml
version: '3'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    networks:
      - frontend
    depends_on:
      - api

  api:
    image: myapi:latest
    networks:
      - frontend
      - backend
    environment:
      - DB_HOST=db
    depends_on:
      - db

  db:
    image: mysql:5.7
    networks:
      - backend
    environment:
      - MYSQL_ROOT_PASSWORD=root123
      - MYSQL_DATABASE=myapp
    volumes:
      - db_data:/var/lib/mysql

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge

volumes:
  db_data:
```

启动服务：

```bash
docker-compose up -d
```

## 网络故障排查

### 查看容器网络配置

```bash
# 查看容器 IP 地址
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 容器名

# 查看容器所有网络信息
docker inspect 容器名 | grep -A 20 NetworkSettings

# 查看容器连接的网络
docker inspect 容器名 | grep -A 10 Networks
```

### 测试容器网络连通性

```bash
# 进入容器测试网络
docker exec -it 容器名 /bin/bash

# 在容器内测试连通性
ping 目标地址
curl http://目标地址
telnet 目标地址 端口

# 测试 DNS 解析
nslookup 域名
dig 域名
```

### 查看端口映射

```bash
# 查看容器端口映射
docker port 容器名

# 查看所有容器的端口映射
docker ps --format "table {{.Names}}\t{{.Ports}}"
```

### 抓包分析

```bash
# 在主机上抓取容器网络包
docker run --rm --net=container:容器名 nicolaka/netshoot tcpdump -i eth0

# 使用 nsenter 进入容器网络命名空间
PID=$(docker inspect -f '{{.State.Pid}}' 容器名)
nsenter -t $PID -n tcpdump -i eth0
```

## 网络性能优化

### 使用 Host 网络模式

对于性能要求高的应用，使用 host 网络模式：

```bash
docker run -d --network host 镜像名
```

### 调整 MTU 值

```bash
# 创建网络时指定 MTU
docker network create --opt com.docker.network.driver.mtu=1450 mynet
```

### 使用 Overlay 网络

对于跨主机通信，使用 overlay 网络：

```bash
# 创建 overlay 网络（需要 Swarm 模式）
docker network create --driver overlay --attachable my-overlay-net
```

## 安全配置

### 网络隔离

```bash
# 创建隔离的网络
docker network create --internal secure-net

# 在隔离网络中运行容器（无法访问外网）
docker run -d --network secure-net 镜像名
```

### 禁用容器间通信

```bash
# 创建禁止容器间通信的网络
docker network create --opt com.docker.network.bridge.enable_icc=false isolated-net
```

### 限制网络带宽

```bash
# 限制容器的网络带宽
docker run -d --network-alias web --net mynet \
  --memory 512m \
  --cpus 0.5 \
  nginx
```

## 常见问题

### 容器无法访问外网

检查 DNS 配置：

```bash
# 运行容器时指定 DNS
docker run -d --dns 8.8.8.8 --dns 114.114.114.114 镜像名

# 或在 daemon.json 中配置
{
  "dns": ["8.8.8.8", "114.114.114.114"]
}
```

### 端口冲突

```bash
# 使用随机端口
docker run -d -P 镜像名

# 或使用不同的端口
docker run -d -p 8081:80 镜像名
```

### 网络删除失败

```bash
# 查看网络被哪些容器使用
docker network inspect 网络名

# 先删除或断开相关容器
docker network disconnect 网络名 容器名

# 再删除网络
docker network rm 网络名
```
