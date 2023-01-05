---
sidebar_position: 2
---

# docker部署

本文主要以图文的形式讲解在Linux环境下的部署，涉及在Docker容器中安装MySQL，以及SpringBoot应用部署，基于CenterOS7.6。

# Docker环境安装
安装yum-utils：

`yum install -y yum-utils device-mapper-persistent-data lvm2`
为yum源添加docker仓库位置：
`yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo`

安装docker：

`yum install docker-ce`

启动docker：

`systemctl start docker`

## 创建容器
   1.运行Mysql容器
    `docker run -d -p 0:3389 \
    --name MySQL \
    thecosy/icemysql:latest`
    2.运行Spring容器
    `docker run -d -p 8181:8181 \
    --name springboot-admin \
    --link MySQL:db \
    thecosy/icecms:latest`
说明：
-p 挂载的容器内的端口为8181，对应配置文件中声明的端口号
# 访问接口进行测试
api接口文档地址：http://你的ip地址:8181/doc.html