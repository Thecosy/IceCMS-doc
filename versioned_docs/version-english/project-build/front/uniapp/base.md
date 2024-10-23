---
id: base
title: 基础配置
sidebar_label: 基础配置
---

# 基础配置

HbuilderX 开发

插件推荐安装：在运行过程中会自动安装需要插件

# 运行uniapp

## 1. 导入项目

点击HbuilderX左上角菜单文件>导入>从本地目录导入，目录选择uniapp

## 3. 安装依赖

选中当前项目，点击HbuilderX左上角菜单工具>外部命令>npm install安装依赖

## 4. 运行到h5

点击HbuilderX左上角菜单运行>运行到浏览器>Chrome

## 5. 运行到微信小程序

点击HbuilderX左上角菜单运行>运行到小程序模拟器>微信开发者工具 - (uniapp)


## **注意**

	- 运行到微信小程序前，先配置好小程序的appid，点击uniapp/src/manifest.json，选择微信小程序配置>微信小程序AppID，输入appid即可

	- 一般运行到微信小程序，会自动打开微信开发者工具，如果打开失败，可能是工具的服务端口没有打开，手动打开工具 -> 设置 -> 安全设置，将服务端口开启，也有可能是你配置的小程序appid中，你登录的账号不是这个小程序的开发者，只需要去微信小程序后台将该账号添加到开发者，重新运行即可

# 发行uniapp

## 发行到h5

1. 点击HbuilderX左上角菜单发行>网站-PC Web或手机H5(仅适用于uni-app)，输入网站标题，点击发行按钮，编译完成后可在uniapp/dist/build/h5下面看到打包好的代码
	![image.png](/img/icecms/202301/1736bfba8b11cc41.png "image.png")

2. 将h5下面的代码复制到发布目录，然后上传代码到服务器或仓库即可

## 发行到微信小程序

1. 点击HbuilderX左上角菜单发行>小程序-微信(仅适用于uni-app)，输入小程序名称和小程序appid，点击发行，编译完成后会自动打开微信开发者工具
![image-1.png](/img/icecms/202301/1736bfc4ab478268.png "image-1.png")
2. 点击微信开发者工具的上传按钮，将代码上传到微信小程序后台