---
id: ali
title: 支付宝支付配置
sidebar_label: 支付宝支付配置
---

# 支付宝支付配置

支付宝配置
1、申请网页&移动应用

1.1 登录支付宝的开放平台

https://open.alipay.com/，没有开放平台的企业帐号可以先入驻。
1.2 创建应用

	在控制台里创建应用。其中没有App的话，申请网页应用。如果有App的话，申请移动应用。

![image.png](/img/icecms/202301/1736bf53a8b7e455.png "image.png")
支付宝支开放平台控制台学堂社区API管理ALIPAY平台公告关于服务商管理制度新公告小程序第三方应用生活号网页/移动应用小程序插件创建网页/移动应用所属商家应用类型应用名称/ID
image.png


1.2.1 网页应用

	即H5端支付宝支付（注：微信浏览器端不支持支付宝支付，需要在其他浏览器端去下单，然后再支付）。
	填写下应用名称和应用图标，网站url和简介是选填。
![image-1.png](/img/icecms/202301/1736bf5784b11506.png "image-1.png")

1.2.2 移动应用

	除了应用名称和应用图标外，还需要选择应用平台，填写“Bundle ID”，“应用签名”（签名是Android证书的MD5）和“应用包名”。
![image-2.png](/img/icecms/202301/1736bf5a6ee1b2fc.png "image-2.png")


2、进行开发配置

2.1 产品绑定

       主要续约“手机网站支付”、“APP支付”和“电脑网站支付”，哪一端没有，可以不用去绑定哪个支付

![image-3.png](/img/icecms/202301/1736bf649b3b5f6d.png "image-3.png")


       appid可以在应用的左侧栏里找到

![image-4.png](/img/icecms/202301/1736bf7040fd0f46.png "image-4.png")
       提交绑定后，会进行审核。
2.2 开发设置
![image-5.png](/img/icecms/202301/1736bf72d53a2ca6.png "image-5.png")

2.2.1 接口加签方式

	加签模式推荐选择“公钥证书”。

![image-6.png](/img/icecms/202301/1736bf74c1a2b7c7.png "image-6.png")

1.需要先去下载“支付宝密钥生成器”
https://opendocs.alipay.com/open/291/introduce
2.加签的操作步骤可看官方说明
https://opendocs.alipay.com/common/056zub
其中密钥格式需要选择“PKCS1(非JAVA适用)”
![image-7.png](/img/icecms/202301/1736bf7b3d2c2d6d.png "image-7.png")


      3.然后将生成的csr文件上传上去，就能获取到三个证书文件，全部下载下来
![image-8.png](/img/icecms/202301/1736bf7d3c03923e.png "image-8.png")

2.2.2、ip白名单

      选择“配置全量接口”
![image-9.png](/img/icecms/202301/1736bf814c5de339.png "image-9.png")
![image-10.png](/img/icecms/202301/1736bf85fe33734c.png "image-10.png")


2.2.3 授权回调地址

设置“回调地址类型”，也就是您的域名是https的还是http的。
填写后台域名作为“回调地址”。
![image-11.png](/img/icecms/202301/1736bf89082d5e60.png "image-11.png")

3、 提交审核
![image-12.png](/img/icecms/202301/1736bf8a88dd0d11.png "image-12.png")

      预计1天内能完成审核。