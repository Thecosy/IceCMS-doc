---
title: 1panel面板部署②
sidebar_label: 1panel面板部署②
---


## 安装步骤

## 1\. 准备云服务器

买一个低配置的云服务器就行，哪家的都行

选择常见linux的发型版本，centos、debian、ubuntu 啥的都行

![alt 1panel](/img/1panel/c9cedcc8cde549e9b86507975539034e.png)

## 2\. 准备域名（可跳过）

买个普通的域名，并接上服务器

国内域名需要备案，尽量写：个人学习项目，这样容易过

## 3\. 安装1panel面板

前往1panel官网，准备安装

[**https://1panel.cn**](https://1panel.cn)

![alt 1panel](/img/1panel/e39edfb7189d4553b0683142be0a9960.png)

![alt 1panel](/img/1panel/e55fb990f9e748acb7a924661ca2e9c6.png)

进入云服务器控制台，登录终端，并切换到root用户，再粘贴安装命令，进行安装

![alt 1panel](/img/1panel/0593bf1e222e4a1e87008da4b12f55e1.png)

密码要是不知道or忘了，可去云服务器重置密码（上图红框处）

![alt 1panel](/img/1panel/9ffb656d794e4b298f591215a63842c2.png)

等待安装完成（约几分钟）

期间会要求配置一些选项，如文件保存路径、面板端口号、面板登录账号和密码

建议修改成好记忆的，当然也可以无脑回车按默认的来。不过不论如何，都建议保存到某个文件中，以防忘记。

如果你忘了面板信息也没事，登录终端，切换到root用户，输入以下命令

```bash
1pctl user-info
AI写代码bash1
```

即可查看

![alt 1panel](/img/1panel/2ddadfd2356247a3bd24c8be0867d490.png)

## 4\. 服务器开放端口

上面设置的端口号（假定是22），要在服务器那开放端口

![alt 1panel](/img/1panel/d17b7511c2524804a940d7c6b8c3a458.png)

写入22（假定是），然后保存

![alt 1panel](/img/1panel/772dd167de7c4c0f9e191a2d1444081f.png)

## 5\. 进入1panel面板

访问面板地址，并输入用户名和密码。登录前后还需要同意协议

![alt 1panel](/img/1panel/94263f19d6e44cfd8dacb7adb6c6d029.png)

## 6\. 安装并启动软件（服务器和面板开放端口）

先配置镜像加速，否则可能会安装失败

应用商店 - 已安装 - 快速跳转 - 镜像加速 - 设置

```bash
https://docker.1panel.live
https://ghcr.nju.edu.cn
https://docker.nju.edu.cn
AI写代码bash123
```

返回应用商店 - 安装 OpenResty、MySQL、phpMyAdmin 这三款软件，并启动

![alt 1panel](/img/1panel/052d831fd3a14b729a032e6a5a129295.png)

可在 应用商店 - 已安装 - 查看各软件的端口，并在 云服务器 和 面板中开放该端口

![alt 1panel](/img/1panel/63182ebf4e424afd9cfbeb0faae3fa24.png)

在服务器开放端口

![alt 1panel](/img/1panel/d17b7511c2524804a940d7c6b8c3a458.png)

在面板开放端口

主机 - 防火墙 - 创建端口规则

![alt 1panel](/img/1panel/ae371442fd0040e18549edb0184b7091.png)

## 7\. 打包并上传项目

### 7.1 打包 Java项目（springboot ）项目并上传（端口我设置的是9090）

点击 m（maven） - 双击package，等待片刻，即可完成打包，最终是打包成了jar或者war文件

![alt 1panel](/img/1panel/4cbe967dbff84945a17290b46e5cf8ce.png)

之后上传到面板文件

### 7.2 打包 vue 项目并上传（端口我设置的是8200）

修改后端端口（改成服务器的）

![alt 1panel](/img/1panel/4fad6cb6da474addaa2123e83a4c73f0.png)

vscode软件 - NPM脚本 - build ，最后生成的是一个dist文件夹

![alt 1panel](/img/1panel/1cda943e2b6547b9baf62128f39ee4c3.png)

之后上传到面板文件

## 8\. 上传 并 创建Java运行环境（服务器和面板开放端口）

把 jar包之类的东西上传到面板文件中

网站 - 运行环境 - Java - 创建运行环境

运行目录 - 选中到 jar包

启动命令：java -jar xxx.jar （xxx,jar改成你自己jar包的名字）

端口号自己设置一下（可以设置成一样的），我这里设置的是9090

![alt 1panel](/img/1panel/897c365fc84a45639b22d7430713c0d1.png)

**`服务器和面板记得开放端口`**，前面说过方法，这里不重复

## 9\. 上传 并 添加网站 - 静态网站（vue）（服务器和面板开放端口）

网站 - 网站 - 创建环境 - 静态网站

主域名处写下域名和端口就行，比如我写的是：106.53.164.141:8200

代号（就是网站目录的名称）自行设置

之后进入网站目录，把 dist文件夹上传上来

![alt 1panel](/img/1panel/15f0e2e259f346dc955276041f38c40f.png)

点进去刚刚设置的网站 - 网站目录 - 运行目录选择 /dist - 保存并重载

同时确保 root目录 选到的是 index文件夹（不是的话重选）

![alt 1panel](/img/1panel/1d41b1d7f40c467e815ad354bbde5ddc.png)

点击配置文件，把下面的代码加进去并保存

```bash
location / {
    try_files $uri $uri/ /index.html last; 
    index index.html; 
}
AI写代码bash1234
```

![alt 1panel](/img/1panel/d079d010575541eeb59941210c05bd37.png)

**`服务器和面板记得开放端口`**，前面说过方法，这里不重复

## 10\. 数据库配置

先确保 mysql 和 phpMyAdmin 这两个端口号都开放

数据库 - 新建数据库

按自己项目情况来填写

权限改为所有人

![alt 1panel](/img/1panel/ca5e17f53761451baabcbbecd509cd0b.png)

管理 - phpMyAdmin - 进入web端musql管理工具

选择数据库 - 导入 - 上传文件

选择sql文件并上传

![alt 1panel](/img/1panel/e82e999f6c064e1b87d2441a61f4ed71.png)

向下滑动，点击执行

![alt 1panel](/img/1panel/2bd8f9fe6c3c4fcb8be4fb6b062e8e4e.png)

## 11\. 修改项目里的数据库配置 并 重启Java服务

之后修改一下项目里的数据库配置并保存

![alt 1panel](/img/1panel/1ecf6559166c470abf57dcbb69a00f8d.png)

修改配置后，需要重启Java项目

![alt 1panel](/img/1panel/43eed1fea2df46a1bbf6e8c40a489aab.png)

## 12\. 刷新对应网站，即可访问

![alt 1panel](/img/1panel/719c8573d31f4b26a8887cfb532acba3.png)

