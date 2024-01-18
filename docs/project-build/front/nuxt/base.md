---
id: base
title: 快速发布
sidebar_label: 快速发布
---

# 快速发布


**一：搭建 nginx+node+npm+pm2 环境**

我们的 nginx 版本是 1.12  
node 版本是 v8.11.1  
npm 版本是 5.6.0  
pm2 版本是 2.10.2

具体环境安装，网上都有教程，就不在叙述，直接进入正文。

**二：配置 nginx 代理监听 3001 端口**

在 nginx 的 vhost 里新建一个主机绑定

```
upstream nodenuxt {
    server 127.0.0.1:3001; #nuxt项目 监听端口
    keepalive 64;
}

server {
    listen 80;
    server_name mysite.com;
    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nodenuxt; #反向代理
    }
}


```

**三：项目在本地完成后，npm run build 打包应用**  
打包完成后，我们将

```
.nuxt
static
nuxt.config.js
package.json


```

传到服务器空间里, 需要上传文件如下  
![image.png](/img/icecms/202305/966455076-5ad6c1f342878_fix732.png "image.png")

**三：在服务器上部署运行**

1.  运行 npm install 安装 package 里的依赖
2.  运行 npm start 就可以运行起来 nuxt 的服务渲染了

此时我们就可以在浏览器上输入 mysite.com 访问了。服务端渲染瞬间出来了，但这并不理想，进程稳定性能否常驻后台？

**四：pm2 开启进程守护**

进入对应的应用目录，执行以下命令

```
pm2 start npm --name "my-nuxt" -- run start


```

其中 my-nuxt 的名称是 我们在 package 中的项目名称。  
执行完 pm2 的启动命令后，我们用 pm2 list 查看一下进程列表，我截一下我个人服务器的 pm2 列表：  
![image.png](/img/icecms/202305/1160220683-5ad6c5a99602b_fix732.png "image.png")

