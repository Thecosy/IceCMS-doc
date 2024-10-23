---
id: idea_environment_config
title: IDEA 开发环境准备
sidebar_label: IDEA 开发环境准备
---

# IDEA 开发环境准备

## 1、jdk 配置

jdk 的下载安装参考：[文档](/docs/project-code/environment/jdk-config)

在 IDEA 中配置 jdk

setting 是 idea 配置，Project Structure 是项目配置

![](/img/icecms/202302/jdk_image/img_2.png)

点击 Project Structure 进入项目配置，选择你安装的 jdk,再点击 apply 应用

![](/img/icecms/202302/jdk_image/img_3.png)

点击 Modules,选择安装的 jdk,再点击应用

![](/img/icecms/202302/jdk_image/img_4.png)

SDKs 的配置，选择你安装的 jdk

![](/img/icecms/202302/jdk_image/img_5.png)

## 2、maven 配置

maven 的下载安装参考：[文档](/docs/project-code/environment/maven_config.md)

maven 在 IDEA 中的配置

打开 idea 中 setting，如下图所示：

![](/img/icecms/202302/maven_img/img_15.png)

配置 maven 路径

![](/img/icecms/202302/maven_img/img_16.png)

## 3、tomcat 配置


IDEA 配置 tomcat 启动


第一步打开 idea，点击 Run -> EDit Configurations

![](/img/icecms/202302/tomcat_img/img_3.png)

进去之后，点击 + 号，下拉选择 Tomcat Server -> local

![](/img/icecms/202302/tomcat_img/img_18.png)

选择你下载的 tomcat 解压后的路径，

![](/img/icecms/202302/tomcat_img/img_19.png)

再点击添加要部署的 war 包,再点击 apply 应用

![](/img/icecms/202302/tomcat_img/img_22.png)

![](/img/icecms/202302/tomcat_img/img_20.png)

![](/img/icecms/202302/tomcat_img/img_23.png)

配置完 Deployment,再来看 server,URL 地址已经被修改

![](/img/icecms/202302/tomcat_img/img_24.png)

IDEA 启动配置的 tomcat 9

![](/img/icecms/202302/tomcat_img/img_21.png)

启动成功，控制台出现中文乱码问题

![](/img/icecms/202302/tomcat_img/img_25.png)

打开：apache-tomcat-9.0.65 -> conf -> logging.properties

找到下图所示内容注释掉，并在下面重新添加把 UTF-8 修改为 GBK

![](/img/icecms/202302/tomcat_img/img_26.png)

重新启动 tomcat，控制台乱码问题解决

![](/img/icecms/202302/tomcat_img/img_27.png)

tomcat 启动成功

![](/img/icecms/202302/tomcat_img/img_28.png)
