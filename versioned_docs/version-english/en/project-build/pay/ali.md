---
id: ali
title: Alipay payment configuration
sidebar_label: Alipay payment configuration
---

# Alipay payment configuration

Alipay configuration 1. Application website &amp; mobile application

1.1 Log in to Alipay's open platform

https://open.alipay.com/, corporate accounts without open platform can register first. 1.2 Create an application

```
在控制台里创建应用。其中没有App的话，申请网页应用。如果有App的话，申请移动应用。
```

![image.png](/img/icecms/202301/1736bf53a8b7e455.png "image.png") Alipay Open Platform Console School Community API Management ALIPAY Platform Announcement About Service Provider Management System New Announcement Mini Program Third-party Application Life Account Web Page/Mobile Application Mini Program Plug-in Creation Web Page/Mobile Application Merchant Application Type Application Name/ID image.png

1.2.1 Web Application

```
即H5端支付宝支付（注：微信浏览器端不支持支付宝支付，需要在其他浏览器端去下单，然后再支付）。
填写下应用名称和应用图标，网站url和简介是选填。
```

![image-1.png](/img/icecms/202301/1736bf5784b11506.png "image-1.png")

1.2.2 Mobile Applications

```
除了应用名称和应用图标外，还需要选择应用平台，填写“Bundle ID”，“应用签名”（签名是Android证书的MD5）和“应用包名”。
```

![image-2.png](/img/icecms/202301/1736bf5a6ee1b2fc.png "image-2.png")

2. Perform development configuration

2.1 Product Binding

```
   主要续约“手机网站支付”、“APP支付”和“电脑网站支付”，哪一端没有，可以不用去绑定哪个支付
```

![image-3.png](/img/icecms/202301/1736bf649b3b5f6d.png "image-3.png")

```
   appid可以在应用的左侧栏里找到
```

![image-4.png](/img/icecms/202301/1736bf7040fd0f46.png "image-4.png") After the binding is submitted, it will be reviewed. 2.2 Development Settings ![image-5.png](/img/icecms/202301/1736bf72d53a2ca6.png "image-5.png")

2.2.1 Interface signing method

```
加签模式推荐选择“公钥证书”。
```

![image-6.png](/img/icecms/202301/1736bf74c1a2b7c7.png "image-6.png")

1. You need to download the "Alipay Key Generator" first https://opendocs.alipay.com/open/291/introduce 2. For the steps of adding signatures, please refer to the official instructions https://opendocs.alipay.com/common/056zub. The key format needs to be "PKCS1 (not applicable to JAVA)" ![image-7.png](/img/icecms/202301/1736bf7b3d2c2d6d.png "image-7.png")

```
  3.然后将生成的csr文件上传上去，就能获取到三个证书文件，全部下载下来
```

![image-8.png](/img/icecms/202301/1736bf7d3c03923e.png "image-8.png")

2.2.2, IP whitelist

```
  选择“配置全量接口”
```

![image-9.png](/img/icecms/202301/1736bf814c5de339.png "image-9.png")![image-10.png](/img/icecms/202301/1736bf85fe33734c.png "image-10.png")

2.2.3 Authorization callback address

Set the "callback address type", that is, whether your domain name is https or http. Fill in the backend domain name as the "callback address". ![image-11.png](/img/icecms/202301/1736bf89082d5e60.png "image-11.png")

3. Submit for review ![image-12.png](/img/icecms/202301/1736bf8a88dd0d11.png "image-12.png")

```
  预计1天内能完成审核。
```
