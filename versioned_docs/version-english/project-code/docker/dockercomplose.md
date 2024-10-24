---
id: dockercomplose
title: docker complose
sidebar_label: docker complose
---

# docker complose

## What is docker-compose?

Compose, machine and swarm are the three major orchestration tools provided by Docker. They are called the Docker Three Musketeers.

Docker Compose can deploy and manage multi-container applications in single-engine mode on Docker nodes. Most modern applications use multiple smaller microservices to work together to form a complete and usable application.

Deploying and managing numerous services is difficult. This is exactly the problem that Docker Compose aims to solve. Instead of organizing application components through scripts and various lengthy Docker commands, Docker Compose describes the entire application through a declarative configuration file, so that deployment can be completed with a single command. After the application is successfully deployed, its entire declaration lifecycle can also be managed through a series of simple commands. Configuration files can even be stored and managed in a version control system.

## Docker Compose Installation

### Install Docker Compose on Linux

#### download

```
https://github.com/docker/compose
下载最新版本


```

#### Authorization

```
mv /data/docker-compose-Linux-x86_64 /usr/local/bin/docker-compose

cp /data/docker-compose-Linux-x86_64 /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

开发环境可以授予最高权限

chmod 777 /usr/local/bin/docker-compose


```

#### Check the installation status and version

```
docker-compose -v

docker-compose --version

docker-compose version


```

#### Uninstall docker-compose

```
rm -rf /usr/local/bin/docker-compose

reboot


```

### yml configuration files and common instructions

Docker Compose uses YAML files to define multi-service applications. YAML is a subset of JSON, so JSON can also be used.

Docker Compose uses the file name docker-compose.yml by default. Of course, you can also use the -f parameter to specify a specific file.

#### yaml file level

The Docker Compose YAML file contains 4 primary keys: version, services, networks, volumes

- version is required and is always the first line of the file. It defines the version of the Compose file format (mainly the API). Note that version does not define the version number of Docker Compose or Docker Engine.

- Services are used to define different application services. The example above defines two services: a database service named lagou-mysql and a microservice named lagou-eureka. Docker Compose will deploy each service in its own container.

- networks is used to instruct Docker to create a new network. By default, Docker Compose will create a bridge network. This is a single-host network that can only connect containers on the same host. Of course, you can also use the driver attribute to specify different network types.

- volumes is used to instruct Docker to create new volumes.

#### Configuration Files

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

## Docker Compose Common Commands

### Start the service

docker-compose up -d

### Stop service

docker-compose down

### List all running containers

docker-compose ps

### View service logs

docker-compose logs

### Build or

docker-compose builder rebuilds the service

### Start the service

docker-compose start

### Stop a running service

docker-compose stop

### Restart the service

docker-compose restart