---
id: docker-install
title: Docker 安装与配置
sidebar_label: Docker 安装与配置
---

# Docker 安装与配置

## Docker 简介

Docker 是一个开源的应用容器引擎，让开发者可以打包应用以及依赖包到一个可移植的容器中，然后发布到任何流行的 Linux 或 Windows 机器上。

### Docker 的优势

* **轻量级**: 容器共享主机内核，不需要完整的操作系统
* **快速部署**: 秒级启动，快速交付应用
* **可移植性**: 一次构建，到处运行
* **版本控制**: 支持镜像版本管理
* **隔离性**: 应用之间相互隔离，互不影响

## Linux 系统安装 Docker

### CentOS 安装 Docker

#### 1. 卸载旧版本

```bash
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
```

#### 2. 安装必要的依赖

```bash
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

#### 3. 设置 Docker 仓库

```bash
# 官方源（国外）
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 阿里云源（推荐国内使用）
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 4. 安装 Docker Engine

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

#### 5. 启动 Docker

```bash
# 启动 Docker 服务
sudo systemctl start docker

# 设置开机自启
sudo systemctl enable docker

# 查看 Docker 版本
docker --version
```

### Ubuntu 安装 Docker

#### 1. 更新软件包索引

```bash
sudo apt-get update
```

#### 2. 安装依赖包

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

#### 3. 添加 Docker 官方 GPG 密钥

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

#### 4. 设置稳定版仓库

```bash
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

#### 5. 安装 Docker Engine

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## Windows 系统安装 Docker

### 安装 Docker Desktop

1. 访问 Docker 官网下载页面：[https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

2. 下载 Docker Desktop for Windows

3. 双击安装包进行安装

4. 安装完成后，启动 Docker Desktop

5. 验证安装：打开 PowerShell 或 CMD，输入：

```bash
docker --version
docker run hello-world
```

### 系统要求

* Windows 10 64位：专业版、企业版或教育版（Build 15063 或更高版本）
* 启用 Hyper-V 和容器 Windows 功能
* 64 位处理器，支持二级地址转换 (SLAT)
* 至少 4GB 内存

## Docker 配置优化

### 配置镜像加速器

由于 Docker Hub 在国内访问较慢，建议配置国内镜像加速器。

#### Linux 系统配置

编辑 `/etc/docker/daemon.json` 文件（如果不存在则创建）：

```bash
sudo vim /etc/docker/daemon.json
```

添加以下内容：

```json
{
  "registry-mirrors": [
    "https://mirror.ccs.tencentyun.com",
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```

重启 Docker 服务：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### Windows 系统配置

1. 右键点击系统托盘中的 Docker 图标
2. 选择 Settings
3. 选择 Docker Engine
4. 在配置中添加镜像地址
5. 点击 Apply & Restart

### 配置存储驱动

编辑 `/etc/docker/daemon.json`：

```json
{
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}
```

### 配置日志驱动

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```

## 验证安装

运行以下命令验证 Docker 是否安装成功：

```bash
# 查看 Docker 版本
docker version

# 查看 Docker 信息
docker info

# 运行测试容器
docker run hello-world
```

如果看到 "Hello from Docker!" 的消息，说明 Docker 已成功安装并运行。

## 常见问题

### 权限问题

如果遇到权限问题，可以将当前用户添加到 docker 组：

```bash
sudo usermod -aG docker $USER
```

然后重新登录或运行：

```bash
newgrp docker
```

### Docker 服务启动失败

检查服务状态：

```bash
sudo systemctl status docker
```

查看日志：

```bash
sudo journalctl -u docker
```

### 端口冲突

如果遇到端口冲突，可以在运行容器时使用不同的端口映射：

```bash
docker run -p 主机端口:容器端口 镜像名
```
