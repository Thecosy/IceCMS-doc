---
id: front-end
title: 前端部署
sidebar_label: 前端部署
---

# 前端

前端开发模式
IceCMS管理后台使用前后端分离技术开发，在二次开发的时候，需要启动前端开发模式，然后对前端的代码进行修改，即可实时修改预览。

提示
在开发者模式下预览页面速度会比较慢，打包以后非常流畅。

步骤1: 设置服务端域名接口。 使用ide编辑器打开IceCMS项目，打开.env.development文件，修改VUE_APP_BASE_API变量的值为项目安装部署的服务端地址，记得保存。

![](/img/icecms/878c15b03c8c962179d858cbb0b3f03a.png)

步骤2: node环境安装。 打开https://nodejs.org/en/download/releases/open in new window，下载对应的版本安装包，下载msi后缀文件，方便安装。node版本大于v14.18.0，推荐16.19.1，避免编译出现未知错误。

![](/img/icecms/6574c6100064cfa4e626daf43bbb5cec.png)

步骤3: 打开系统自带的终端，Windows Powershell，以管理员身份运行。

![](/img/icecms/ce43b03e5b7a59d8a3066f4c1fa6c356.png)

步骤4: 在终端运行命令，设置淘宝镜像。

	npm config set registry https://registry.npm.taobao.org

![](/img/icecms/be87000da748c9f14ee37ea223814afb.png)

步骤4: 使用cd命令进入likeadmin/admin后台前端源码目录，请根据项目实际目录输入cd命令，请勿直接复制命令运行。

![](/img/icecms/5f9a09eed31448f89ed4824e01e2b258.png)

步骤5: 在终端运行命令安装依赖。
	npm install

![](/img/icecms/e927b94ca9acffb489e0c040200dd819.png)

步骤6: 在终端运行命令运行项目。
	npm run dev

![](/img/icecms/fd9b6a9423df25c936fa7a6865d6cf8a.png)

步骤7: 打开浏览器，在地址栏输入http://localhost:9528/admin in new window访问管理后台，即可修改并实时预览前端后台源码。开发模式在首次加载会比较慢。

后台访问不了请配置好伪静态

	location / {
	  try_files $uri $uri/ /index.html;
	}

![](/img/icecms/280e2ff1dfb1047092d791475ef33fc6.png)
