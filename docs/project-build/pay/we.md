---
id: we
title: 微信支付配置
sidebar_label: 微信支付配置
---

# 微信支付配置

1、设置操作密码


![image.png](/img/icecms/202301/1736bf0dc0120ac5.png "image.png")

2、设置api密钥


![image-1.png](/img/icecms/202301/1736bf0f922050a1.png "image-1.png")

填写32个字符。


![image-2.png](/img/icecms/202301/1736bf114f88cd8d.png "image-2.png")

3、申请证书

证书主要用来退款，如果商城不需要退款功能，可以不申请。

![image-3.png](/img/icecms/202301/1736bf143e9bdb90.png "image-3.png")

点击申请证书后，先下载证书工具（已经下过的，就不用再下了）。

![image-4.png](/img/icecms/202301/1736bf16086b7d67.png "image-4.png")
下载好后，打开证书工具。
选择证书保存路径后，点击申请证书

![image-5.png](/img/icecms/202301/1736bf17dc5b1fa4.png "image-5.png")
       填写相关的商户号和商户名称，该信息就在图5里能找到。

![image-6.png](/img/icecms/202301/1736bf1990c66cbd.png "image-6.png")
      填写后，点击下一步，将证书请求串复制到商户平台上，然后点击下一步。

![image-7.png](/img/icecms/202301/1736bf1b156000e7.png "image-7.png")


![image-8.png](/img/icecms/202301/1736bf1c6904048a.png "image-8.png")
       然后输入操作密码后，进入到复制证书串页面

![image-9.png](/img/icecms/202301/1736bf1e43847f43.png "image-9.png")
      然后在证书工具上点击“下一步”。

![image-10.png](/img/icecms/202301/1736bf200dc07ca6.png "image-10.png")
       然后把在商户平台上的证书串复制粘贴到证书工具上。然后点击“下一步”

![image-11.png](/img/icecms/202301/1736bf21dff98d1f.png "image-11.png")
点击查看证书文件夹，就能获取到证书了。

![image-12.png](/img/icecms/202301/1736bf24e4a81822.png "image-12.png")

4、开通jsapi支付


![image-13.png](/img/icecms/202301/1736bf26e0c26253.png "image-13.png")
5、关联appid

       关联一个自己的服务号。关联后，到服务号的微信支付那确定下。如果服务号和商户号的主体不同的话，需要微信那边审核1-3天，然后才能去服务号那边确认。

![image-14.png](/img/icecms/202301/1736bf28788d1b35.png "image-14.png")

6、添加支付授权目录

       填写：前端域名+/

![image-15.png](/img/icecms/202301/1736bf2a3af35d27.png "image-15.png")

![image-16.png](/img/icecms/202301/1736bf2c3e77b9f2.png "image-16.png")

7、后台配置项填写

其中appid和APPsecret的值是第5步中关联的服务号的APPID和APPsecret
Mchid是商户号

Key是api密钥

小程序和App基本一样，就是appid和appserect需要是小程序或者移动应用的

证书的话，根据后面要求上传
![image-17.png](/img/icecms/202508/1736bf2e174fb9f3.png "image-17.png")