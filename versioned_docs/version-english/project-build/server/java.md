---
id: java
title: Java deployment
sidebar_label: Java deployment
---

# Java deployment

Online deployment:

1. Packaging:

Backend packaging: clean first and then install, find the jar package under the target and upload it to the server.![alt icecms](/img/icecms/ac6bb5242adb7e09aa70f85c9c0ca54c.webp)

![alt icecms](/img/icecms/2796d0913cb67ebfd65c0d7463f37279.webp)![alt icecms](/img/icecms/8e1d97959f70fe46f098a276236971df.webp)

Execute after uploading:

nohup java -jar project-fast.jar --spring.profiles.active=prod &amp; to run the backend service.

uniapp H5 packaging:

![alt icecms](/img/icecms/fa0a21316ab9719160b825413f52db40.webp)

Before packaging, remember to configure your online domain name in utils/api.js

![alt icecms](/img/icecms/769dc0fc97e9f3fe51baeae6cfeb7160.webp) Backend management system packaging:

![alt icecms](/img/icecms/92de25918db9f3a003db55fe91976943.webp)![alt icecms](/img/icecms/749f47fb948df9f3786c68e708c18132.webp)

1. deploy

(1) Prepare several subdomains (according to your needs)

Tip: You can customize the following subdomain prefixes, I just use it for demonstration. Backend API service: api.xxx.com (this is required)

h5 client: h5.xxx.com (not required if you don’t need h5 client)

Backend management system: admin.xxx.com (this is required)

Go to Alibaba Cloud or Tencent Cloud and apply for an SSL certificate using your company's registered domain name (note: if you launch a mini program, you must use your company's domain name, but h5 does not require it). The number of certificates you need to apply for is as required above. Applying for a certificate is free.

![alt icecms](/img/icecms/e069619ba193f1cc096292dcbd136f27.webp)

(2) Install the pagoda

It is faster to use Baota deployment. This project does not support container deployment yet. This only explains Baota deployment. After installing according to the Baota installation manual, you need to install nginx, redis, and mysql5.7.

There is also a java runtime environment. Open the black window and execute the yum command to install it. Otherwise, the jar package will not run. Install JDK 1.8 (yum -y install java-1.8.0-openjdk)

Then create the site

![alt icecms](/img/icecms/1464db3701041c4df45d30bc81c0bc00.webp)

Download the ssl certificate (using the nginx version) and fill in

![alt icecms](/img/icecms/a6ab6bdaec1aa6d6d3b7982d6a5799cc.webp)

For the backend API service domain name api.xxx.com, you need to configure nginx, just go to step (3). For admin.xxx.com and h5.xxx.com, no configuration is required, just specify the directory as shown below.

![alt icecms](/img/icecms/20957d2cc869b6d6059a23d9ad186304.webp)

(3) nginx configuration

![alt icecms](/img/icecms/fd3905933641df3a2ae552a7edc45762.webp)

Do not copy and paste directly!!! Change the corresponding domain name to your own!!! The main thing is the proxy port in the location/. After the configuration is completed, visit: api.xxx.com. If the figure shows up, the configuration is successful.

```json

server
{
    listen 80;
	listen 443 ssl http2;
    server_name api.linfeng.tech;
    # index index.php index.html index.htm default.php default.htm default.html;
    # root /www/wwwroot/api.linfeng.tech;
    
    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #HTTP_TO_HTTPS_START
    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    #HTTP_TO_HTTPS_END
    ssl_certificate    /www/server/panel/vhost/cert/api.linfeng.tech/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/api.linfeng.tech/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;

    #SSL-END
    
    #ERROR-PAGE-START  错误页配置，可以注释、删除或修改
    #error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END
    
    #PHP-INFO-START  PHP引用配置，可以注释或修改
    # include enable-php-00.conf;
    #PHP-INFO-END
    
    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    # include /www/server/panel/vhost/rewrite/api.linfeng.tech.conf;
    #REWRITE-END
    
    #禁止访问的文件或目录
    # location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    # {
    #     return 404;
    # }
    
    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }
    
    # location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    # {
    #     expires      30d;
    #     error_log off;
    #     access_log /dev/null;
    # }
    
    # location ~ .*\.(js|css)?$
    # {
    #     expires      12h;
    #     error_log off;
    #     access_log /dev/null;
    # }
  location / {
		proxy_pass http://127.0.0.1:8080;
		proxy_set_header X-Forwarded-Proto $scheme;
        	proxy_set_header X-Forwarded-Port $server_port;
        	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        	proxy_set_header Upgrade $http_upgrade;
        	proxy_set_header Connection "upgrade";

	}
    access_log  /www/wwwlogs/api.linfeng.tech.log;
    error_log  /www/wwwlogs/api.linfeng.tech.error.log;
}
```

Access the interface to test the API interface document address: http://your ip address:8181/doc.html
