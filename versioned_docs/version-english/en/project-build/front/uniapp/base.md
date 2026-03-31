---
id: base
title: Basic Configuration
sidebar_label: Basic Configuration
---

# Basic Configuration

HbuilderX Development

Recommended plugin installation: The required plugins will be automatically installed during operation

# Run uniapp

## 1. Import the project

Click the menu file in the upper left corner of HbuilderX&gt;Import&gt;Import from local directory, and select uniapp in the directory

## 3. Install dependencies

Select the current project, click the menu Tools &gt; External Commands &gt; npm install to install dependencies in the upper left corner of HbuilderX

## 4. Run to h5

Click the menu in the upper left corner of HbuilderX to run&gt;Run to browser&gt;Chrome

## 5. Run to WeChat applet

Click the menu in the upper left corner of HbuilderX to run&gt;Run to Mini Program Simulator&gt;WeChat Developer Tools-(uniapp)

## **Notice**

```
- 运行到微信小程序前，先配置好小程序的appid，点击uniapp/src/manifest.json，选择微信小程序配置>微信小程序AppID，输入appid即可

- 一般运行到微信小程序，会自动打开微信开发者工具，如果打开失败，可能是工具的服务端口没有打开，手动打开工具 -> 设置 -> 安全设置，将服务端口开启，也有可能是你配置的小程序appid中，你登录的账号不是这个小程序的开发者，只需要去微信小程序后台将该账号添加到开发者，重新运行即可
```

# Release uniapp

## Issued to h5

1. Click the menu release in the upper left corner of HbuilderX&gt;Website-PC Web or Mobile H5 (only for uni-app), enter the website title, click the release button, and after the compilation is complete, you can see the packaged code under uniapp/dist/build/h5 ![image.png](/img/icecms/202301/1736bfba8b11cc41.png "image.png")

2. Copy the code below h5 to the release directory, and then upload the code to the server or warehouse.

## Issue to WeChat Mini Program

1. Click the menu in the upper left corner of HbuilderX &gt; Release &gt; Mini Program - WeChat (only for uni-app), enter the mini program name and mini program appid, click Release, and the WeChat developer tool will automatically open after the compilation is completed ![image-1.png](/img/icecms/202301/1736bfc4ab478268.png "image-1.png")
2. Click the upload button of WeChat developer tools to upload the code to the WeChat applet backend
