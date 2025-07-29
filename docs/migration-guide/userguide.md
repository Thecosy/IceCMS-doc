---
id: auth-provider
title: 常见问题
sidebar_label: 常见问题
---

## 常见问题

## 1.文件上传不了/图片不显示？

请参照文档中的[文件存储配置](https://doc.tduckcloud.com/proDeploy/fileConfigure.html)，完成系统的文件上传设置后重试。

## 2.部署后访问表单出现 "系统未知错误，请反馈系统管理员"

![](http://doc-oss.tduckcloud.com/doc/202302041331372.png)

部署后访问表单出现此类问题时，请检查：系统配置>微信公众号参数是否已经完成配置，若没有配置请随意填写任意值，保存后刷新表单即可解决

![](http://doc-oss.tduckcloud.com/doc/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_02d60921-d90c-4a4d-a879-7007c86f5e70.png)

## 3.出现 appid 未配置？

+   首先在系统设置中检查是否正确配置了：已经认证的服务号
+   检查微信公众号（服务号）后台是否配置了服务器域名/等参数
+   参考文档：[微信公众号配置](https://doc.tduckcloud.com/proDeploy/othersConfigure.html)

## 4.访问前端，请求出现502？

一般为nginx未配置正确，请检查Ng的配置，文档地址：[pro部署](https://doc.tduckcloud.com/proDeploy/)

## 5.doc/tduck-pro.sql 里的默认用户密码是啥？

admin/12345678

## 6.sys\_notice没有这张表/数据库文件怎么执行？

![4fd8e96c6826e9c1dba66d657ec1856.png](http://doc-oss.tduckcloud.com/doc/1642571966349-4b84fc31-65e2-4a27-9783-34ef8f47411e.png)

## 7.文件已经能存到阿里云的oss上，在前台点击查看文件的时候，系统提示404，请问这个问题有没有谁遇到过？

一定是域名配置有问题，请检查第三方参数与域名设置

## 8.执行maven时候报错？

initializationError(com.tduck.cloud.activiti.service.impl.ActivitiExpressionTest): Invalid test class 'com.tduck.cloud.activiti.service.impl.ActivitiExpressionTest'😦..)  
test(com.tduck.cloud.api.web.controller.system.ElasticsearchTest): Elasticsearch exception \[type=resource\_already\_exists\_exception, reason=index \[test001/TqWgcRKvT0G\_yN0is1Cylw\] already exists\]; nested exception is \[test001/TqWgcRKvT0G\_yN0is1Cylw\] ElasticsearchStatusException\[Elasticsearch exception \[type=resource\_already\_exists\_exception, reason=index \[test001/TqWgcRKvT0G\_yN0is1Cylw\] already exists\]\]  
![image.png](http://doc-oss.tduckcloud.com/doc/1642561569011-5c1f715a-e79e-4d00-8717-dfbdb77c072e.png)  
跳过单元测试即可

## 9.点击文件的时候，先跳转这个网址，后面再报404错误？

OSS域名没有配置域名的时候是不是没带https://

## 10.本地文件存储如何配置？

![10dd410131513be3bf58716a6c23fca.png](http://doc-oss.tduckcloud.com/doc/1642561642893-117fb5e9-a4ba-43db-8062-27e34722d9b7.png)

## 11.短信如何配置？

以阿里云为例，首先到阿里云申请短信之后，需要将模板code填入tduck短信配置

![1642571759(1).png](http://doc-oss.tduckcloud.com/doc/1642571762026-d4663513-9b24-4182-b407-f137c5c52c46.png)  
再填入appkey、secret等参数即可

## 12.在部署的时候vue端只能部署在ROOT目录下吗？

不是！可以自己改的，如图

![6bfdb49e88f0860e888b32529a186d3.png](http://doc-oss.tduckcloud.com/doc/1642572209140-2cb5fd31-7d94-44a4-9f6f-3012c25e1b68.png)

## 13.数据库连接报错 什么url 密码不对 ？

首先检查指定的是哪个配置文件，然后检查密码和数据库地址是否正确

![e147e6dd7d6cbae942c604c3a30af6b.png](http://doc-oss.tduckcloud.com/doc/1642572296113-60c5e5b2-ea4f-4bc6-932a-c915111aa17c.png)


## 14.支持什么邮箱，exchange支持吗，腾讯邮箱支持吗？

邮箱是通过\_SMTP 协议发送的，支持该协议的所有邮箱都支持\_

## 15. 异常：`java.security.InvalidKeyException: Illegal key size`

### 问题描述

代码出现以下异常：

```
org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'wxPayController': Injection of resource dependencies failed; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'wxPayServiceImpl': Injection of resource dependencies failed; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'wxPayClient' defined in class path resource [com/ttice/icepayment/config/WxPayConfig.class]: Unsatisfied dependency expressed through method 'getWxPayClient' parameter 0; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'getVerifier' defined in class path resource [com/ttice/icepayment/config/WxPayConfig.class]: Bean instantiation via factory method failed; nested exception is org.springframework.beans.BeanInstantiationException: Failed to instantiate [com.wechat.pay.contrib.apache.httpclient.auth.ScheduledUpdateCertificatesVerifier]: Factory method 'getVerifier' threw exception; nested exception is java.lang.IllegalArgumentException: java.security.InvalidKeyException: Illegal key size
        at org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.postProcessProperties(CommonAnnotationBeanPostProcessor.java:321) ~[spring-context-5.2.10.RELEASE.jar!/:5.2.10.RELEASE]
```

### 问题原因

如果密钥大于 128 位，会抛出 `java.security.InvalidKeyException: Illegal key size` 异常。这是因为密钥长度受限制，Java 运行时环境读取的是受限的 `policy` 文件。这些文件位于 `${java_home}/jre/lib/security` 目录下，这种限制是由于美国对软件出口的控制。

### 解决方案

1. **下载 Oracle 官方的 JCE 文件（JDK 8 对应版本）**：
   - 下载链接（可能需要登录 Oracle 账户）：[https://www.oracle.com/java/technologies/javase-jce8-downloads.html](https://www.oracle.com/java/technologies/javase-jce8-downloads.html)

2. **替换文件**：
   - 解压下载的文件后，替换以下两个文件：
     - `local_policy.jar`
     - `US_export_policy.jar`

3. **覆盖 JDK 路径下的目录**：
   - 将上述文件覆盖到 `${JAVA_HOME}/jre/lib/security/` 目录下。

4. **重启项目**。

或者，可以采取以下替代方案：

- **减少密钥长度**：
  ```java
  private static byte[] formatData(byte[] data) {
      return DigestUtils.md5(data);
  }
  ```

- **启用无限制强度管辖策略（适用于 Java 1.8.0_151 及以上版本）**：
  - 在 `jre/lib/security` 文件夹中找到文件 `java.security`。
  - 找到定义 Java 安全性属性 `crypto.policy` 的行，将其值从 `limited` 改为 `unlimited`：
    ```
    crypto.policy=unlimited
    ```