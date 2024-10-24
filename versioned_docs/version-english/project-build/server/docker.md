---
id: docker
title: Docker deployment
sidebar_label: Docker deployment
---

# Docker deployment

This article mainly explains the deployment in the Linux environment in the form of pictures and texts, involving the installation of MySQL in the Docker container and the deployment of SpringBoot applications based on CenterOS7.6.

# Docker environment installation

Install yum-utils:

`yum install -y yum-utils device-mapper-persistent-data lvm2` Add the docker repository location to the yum source: `yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo`

Install docker:

`yum install docker-ce`

Start Docker:

`systemctl start docker`

## Create a container

1. Run the Mysql container `docker run -d -p 0:3389 \ --name MySQL \ thecosy/icemysql:latest` 2. Run the Spring container `docker run -d -p 8181:8181 \ --name springboot-admin \ --link MySQL:db \ thecosy/icecms:latest` Note: -p The port in the mounted container is 8181, which corresponds to the port number declared in the configuration file

# Access the interface for testing

API interface document address: http://youripaddress:8181/doc.html
