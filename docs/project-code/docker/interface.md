---
sidebar_position: 2
---

# docker complose

docker compose 是什么？
-------------------

compose、machine 和 swarm 是 docker 原生提供的三大编排工具。简称 docker 三剑客。

Docker Compose 能够在 Docker 节点上，以单引擎模式 (Single-Engine Mode) 进行多容器应用的部 署和管理。多数的现代应用通过多个更小的微服务互相协同来组成一个完整可用的应用。

部署和管理繁多的服务是困难的。而这正是 Docker Compose 要解决的问题。Docker Compose 并不 是通过脚本和各种冗长的 docker 命令来将应用组件组织起来，而是通过一个声明式的配置文件描述整 个应用，从而使用一条命令完成部署。应用部署成功后，还可以通过一系列简单的命令实现对其完整声 明周期的管理。甚至，配置文件还可以置于版本控制系统中进行存储和管理。

docker compose 安装
-----------------

### Linux 上安装 Docker Compose

#### 下载

```
https://github.com/docker/compose 
下载最新版本


```

#### 授权

```
mv /data/docker-compose-Linux-x86_64 /usr/local/bin/docker-compose

cp /data/docker-compose-Linux-x86_64 /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

开发环境可以授予最高权限

chmod 777 /usr/local/bin/docker-compose


```

#### 检查安装情况以及版本

```
docker-compose -v

docker-compose --version

docker-compose version


```

#### 卸载 docker-compose

```
rm -rf /usr/local/bin/docker-compose

reboot


```

### yml 配置文件及常用指令

Docker Compose 使用 YAML 文件来定义多服务的应用。YAML 是 JSON 的一个子集，因此也可以使用 JSON。

Docker Compose 默认使用文件名 docker-compose.yml。当然，也可以使用 -f 参数指定具体文件。

#### yaml 文件级

Docker Compose 的 YAML 文件包含 4 个一级 key:version、services、networks、volumes

*   version 是必须指定的，而且总是位于文件的第一行。它定义了 Compose 文件格式 (主要是 API) 的版本。注意，version 并非定义 Docker Compose 或 Docker 引擎的版本号。
    
*   services 用于定义不同的应用服务。上边的例子定义了两个服务: 一个名为 lagou-mysql 数据库服 务以及一个名为 lagou-eureka 的微服。Docker Compose 会将每个服务部署在各自的容器中。
    
*   networks 用于指引 Docker 创建新的网络。默认情况下，Docker Compose 会创建 bridge 网络。 这是一种单主机网络，只能够实现同一主机上容器的连接。当然，也可以使用 driver 属性来指定不 同的网络类型。
    
*   volumes 用于指引 Docker 来创建新的卷。
    

#### 配置文件

```
version: '3'
services:
  mysql:
    build:
      context: ./mysql
    environment:
      MYSQL_ROOT_PASSWORD: admin
    restart: always
    container_name: mysql
    volumes:
    - /data/edu-bom/mysql/test:/var/lib/mysql
    image: mysql/mysql:5.7
    ports:
      - 3306:3306
    networks:
      net:
  eureka:
    build:
      context: ./edu-eureka-boot
    restart: always
    ports:
      - 8761:8761
    container_name: edu-eureka-boot
    hostname: edu-eureka-boot
    image: edu/edu-eureka-boot:1.0
    depends_on:
      - mysql
    networks:
      net:
networks:
    net:
volumes:
    vol:


```

docker compose 常用命令
-------------------

### 启动服务

docker-compose up -d

### 停止服务

docker-compose down

### 列出所有运行容器

docker-compose ps

### 查看服务日志

docker-compose logs

### 构建或

docker-compose build 者重新构建服务

### 启动服务

docker-compose start

### 停止已运行的服务

docker-compose stop

### 重启服务

docker-compose restart