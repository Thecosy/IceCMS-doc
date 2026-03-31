---
id: we
title: WeChat payment configuration
sidebar_label: WeChat payment configuration
---

# WeChat payment configuration

1. Set the operation password

![image.png](/img/icecms/202301/1736bf0dc0120ac5.png "image.png")

2. Set the API key

![image-1.png](/img/icecms/202301/1736bf0f922050a1.png "image-1.png")

Enter up to 32 characters.

![image-2.png](/img/icecms/202301/1736bf114f88cd8d.png "image-2.png")

3. Apply for a certificate

The certificate is mainly used for refunds. If the mall does not need a refund function, you do not need to apply for it.

![image-3.png](/img/icecms/202301/1736bf143e9bdb90.png "image-3.png")

After clicking Apply for Certificate, download the certificate tool first (if you have already downloaded it, you don’t need to download it again).

![image-4.png](/img/icecms/202301/1736bf16086b7d67.png "image-4.png") After downloading, open the certificate tool. After selecting the certificate save path, click Apply for Certificate

![image-5.png](/img/icecms/202301/1736bf17dc5b1fa4.png "image-5.png") Fill in the relevant merchant number and merchant name. This information can be found in Figure 5.

![image-6.png](/img/icecms/202301/1736bf1990c66cbd.png "image-6.png") After filling in, click Next, copy the certificate request string to the merchant platform, and then click Next.

![image-7.png](/img/icecms/202301/1736bf1b156000e7.png "image-7.png")

![image-8.png](/img/icecms/202301/1736bf1c6904048a.png "image-8.png") Then enter the operation password and enter the copy certificate string page

![image-9.png](/img/icecms/202301/1736bf1e43847f43.png "image-9.png") Then click "Next" on the Certificate Tool.

![image-10.png](/img/icecms/202301/1736bf200dc07ca6.png "image-10.png") Then copy and paste the certificate string on the merchant platform into the certificate tool. Then click "Next"

![image-11.png](/img/icecms/202301/1736bf21dff98d1f.png "image-11.png") Click View Certificate Folder to obtain the certificate.

![image-12.png](/img/icecms/202301/1736bf24e4a81822.png "image-12.png")

4. Enable jsapi payment

![image-13.png](/img/icecms/202301/1736bf26e0c26253.png "image-13.png") 5. Associate appid

```
   关联一个自己的服务号。关联后，到服务号的微信支付那确定下。如果服务号和商户号的主体不同的话，需要微信那边审核1-3天，然后才能去服务号那边确认。
```

![image-14.png](/img/icecms/202301/1736bf28788d1b35.png "image-14.png")

6. Add payment authorization directory

```
   填写：前端域名+/
```

![image-15.png](/img/icecms/202301/1736bf2a3af35d27.png "image-15.png")

![image-16.png](/img/icecms/202301/1736bf2c3e77b9f2.png "image-16.png")

7. Fill in the background configuration items

The values of appid and APPsecret are the APPID and APPsecret of the service number associated in step 5. Mchid is the merchant number

Key is the API key

Mini Programs are basically the same as Apps, except that appid and appserect must be the same as those of Mini Programs or mobile applications.

For certificates, upload them according to the following requirements ![image-17.png](/img/icecms/202301/1736bf2e174fb9f3.png "image-17.png")
