---
id: baota
title: 宝塔面板部署②
sidebar_label: 宝塔面板部署②
---

# 宝塔部署

[#](#基础信息) 基础信息
---------------

### [#](#下载) 下载

### [#](#环境要求) 环境要求

#### [#](#服务端) 服务端

<table><thead><tr><th>运行环境</th><th>要求版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>JDK</td><td>&gt;=1.8</td><td>1.8</td></tr><tr><td>Mysql</td><td>&gt;=5.7</td><td>5.7</td></tr><tr><td>nginx 或 apache</td><td>无限制</td><td>-</td></tr><tr><td>Redis</td><td>&gt;=6.0</td><td>7.0.0</td></tr></tbody></table>

#### [#](#前端) 前端

<table><thead><tr><th>运行环境</th><th>要求版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>Node.js</td><td>&gt;=14.18.1</td><td>14.18.1</td></tr></tbody></table>


## 宝塔面板部署①/② [](https://doc.likeadmin.cn/java/deployment/bt.html#%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E9%83%A8%E7%BD%B21-2)

提示

推荐服务器最低配置：CPU双核、内存4GB、硬盘20GB、带宽5兆。

提示

强烈推荐正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。

<!-- ## 服务器推荐 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8E%A8%E8%8D%90)

### 阿里云 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E9%98%BF%E9%87%8C%E4%BA%91)

打开以下活页选择并购买云服务器，价格会更优惠。也可以从【控制台】，选择ESC服务器或轻量级服务器，直接购买。  

| 活动1 | 活动2 | 活动3 |
| --- | --- | --- |
| [新人优惠](https://www.aliyun.com/minisite/goods?userCode=cvswwj8k) | [新老优惠](https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=cvswwj8k) | [企业扶持](https://www.aliyun.com/benefit/developer/company?userCode=cvswwj8k) |

### 腾讯云 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E8%85%BE%E8%AE%AF%E4%BA%91)

打开以下活页选择并购买云服务器，价格会更优惠。也可以从【控制台】，选择云服务器或轻量级服务器，直接购买。  

| 活动1 | 活动2 | 活动3 |
| --- | --- | --- |
| [精选优惠](https://curl.qcloud.com/WXBZDUR7) | [领取优惠券](https://curl.qcloud.com/zYJfzI7u) | [企业专区](https://curl.qcloud.com/JPFcAZjT) |
|   
 |  |  |

提示

获取更大更多优惠活动，咨询服务器相关问题，请加微信。 -->

<!-- ![描述](/img/baota/wechat.jpg) -->

## 服务器环境设置 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E8%AE%BE%E7%BD%AE)

-   **步骤1**:  
    点击【软件商店】->【运行环境】，安装Nginx、MySQL5.7。

⚠️ 警告

安装软件的时候，使用极速安装，一定要使用Mysql5.7，否则无法使用。  
建议使用JDK1.8。

![alt baota](//img/baota/env.png)

-   **步骤2**:  
    点击【终端】，登录root帐号，根据系统运行命令安装maven。

注意

maven的版本大于3.6，否则可能存在问题。可以使用命令查看`mvn -v`版本。

Debian/Ubuntu等CentOS等

shell

```
<span><span>apt-get</span><span> install</span><span> maven</span></span>
```

![alt baota](//img/baota/maven.png)

## 数据库导入数据 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%BC%E5%85%A5%E6%95%B0%E6%8D%AE)

## 上传解压源码包 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E4%B8%8A%E4%BC%A0%E8%A7%A3%E5%8E%8B%E6%BA%90%E7%A0%81%E5%8C%85)

⚠️ 警告

1.注意项目目录及子目录用户要为www，如果后续步骤出现问题，重新设置一下项目目录及子目录用户为www。  
2.压缩包为likeadmin（Java版）或基于likeadmin（Java版）开发的软件产品，根据自己实际部署的软件产品部署。

注意

likeadmin 本身是免费开源的，采用 MIT 许可证，允许任意商业用途，可以用于二次开发以制作项目和产品。然而，基于 likeadmin 开发的产品软件是否可以商用，请咨询具体软件产品的软件开发者，以免引发法律问题。

在`/www/wwwroot/`目录下新建项目文件夹，然后上传源码压缩包该目录，解压源码压缩包。 ![alt baota](//img/baota/update-code.png)

## 配置并编译项目 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E9%85%8D%E7%BD%AE%E5%B9%B6%E7%BC%96%E8%AF%91%E9%A1%B9%E7%9B%AE)

提示

一般情况下，编译jar在本地环境进行。不要在生产环境服务器编译，避免影响服务器其他运行的项目。

-   **步骤1**:  
    复制`server/like-admin/src/main/resources/application-dev-example.yml`文件为`application-dev.yml`文件，打开`application-dev.yml`文件的内容，上传目录、配置好域名、Mysql、Redis,保存文件。 ![alt baota](//img/baota/config-1.png)

注意

1.注意`upload-directory`配置的目录在服务器上真实存在，勿漏掉配置后面的"/"符号。  
2.记得保存修改的配置文件。

![alt baota](//img/baota/config-2.png)

-   **步骤2**:  
    复制`server/like-front/src/main/resources/application-dev-example.yml`文件为`application-dev.yml`文件，打开`application-dev.yml`文件的内容，上传目录、Mysql、Redis,保存文件。 ![alt baota](//img/baota/config-3.png)

注意

1.注意`upload-directory`配置的目录在服务器上真实存在，勿漏掉配置后面的"/"符号。  
2.记得保存修改的配置文件。

![alt baota](//img/baota/config-4.png)

-   **步骤3**:

提示

首次编译需要下载相关依赖，编译时间大概在15分钟左右。

使用cd命令进入项目的`server`目录，在`server`目录下运行mvn命令编译jar包。

sh

```
<span><span>mvn</span><span> clean</span><span> install</span><span> -Dmaven.test.skip=true</span></span>
```

![alt baota](//img/baota/build.png)

## 添加前台站点 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%B7%BB%E5%8A%A0%E5%89%8D%E5%8F%B0%E7%AB%99%E7%82%B9)

### 添加站点 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%B7%BB%E5%8A%A0%E7%AB%99%E7%82%B9)

⚠️ 警告

java服务端口号不要与其他运行程序重复，否则会有冲突，导致无法运行。

### 设置SSL证书（https） [](https://doc.likeadmin.cn/java/deployment/bt.html#%E8%AE%BE%E7%BD%AEssl%E8%AF%81%E4%B9%A6-https)

⚠️ 警告

1.申请SSL证书，必须将相应的域名解析到服务器IP地址。解析可能不会马上生效，申请失败过10分钟重试。  
2.如果在境内服务器，域名必须备案，否则申请也会被拦截。  
3.域名有解析到服务器并备案，如果失败，请多次重试，还有问题，可以到宝塔面板论坛反馈。[https://www.bt.cn/bbs/portal.php](https://www.bt.cn/bbs/portal.php) 。

点击【SSL】->【Let's Encrypt】->【文件验证】，选择域名后，点击【申请证书】。 ![alt baota](//img/baota/site-ssl-1.png)![alt baota](//img/baota/site-ssl-2.png)

### 配置站点前端 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E9%85%8D%E7%BD%AE%E7%AB%99%E7%82%B9%E5%89%8D%E7%AB%AF)

点击【配置文件】->【nginx配置文件】，填写nginx配置，其中<项目目录>和<前面步骤配置端口>修改为实际项目参数。

nginx

```
<span><span>    #STATIC-START likeadmin-java版前台前端页面</span></span>
<span><span>    location</span><span> / </span><span>{</span></span>
<span><span>        root </span><span>/www/wwwroot/likeadmin_java/public;</span></span>
<span><span>        index </span><span>index.html;</span></span>
<span><span>        try_files </span><span>$uri $uri/ /index.html;</span></span>
<span><span>        }</span></span>
<span><span>        </span></span>
<span><span>    location</span><span> /pc </span><span>{</span></span>
<span><span>        root </span><span>/www/wwwroot/likeadmin_java/public;</span></span>
<span><span>        index </span><span>index.html;</span></span>
<span><span>        try_files </span><span>$uri $uri/ /pc/index.html;</span></span>
<span><span>    }</span></span>
<span></span>
<span><span>    location</span><span> /mobile </span><span>{</span></span>
<span><span>        root </span><span>/www/wwwroot/likeadmin_java/public;</span></span>
<span><span>        index </span><span>index.html;</span></span>
<span><span>        try_files </span><span>$uri $uri/ /mobile/index.html;</span></span>
<span><span>    }</span></span>
<span><span>    #STATIC-END</span></span>
<span></span>
<span><span>    #PROXY-LOCAl-START likeadmin-java版服务端配置</span></span>
<span><span>    location</span><span> /api/ </span><span>{</span></span>
<span><span>        proxy_pass </span><span>http://127.0.0.1:&lt;前面骤配置端口&gt;;</span></span>
<span><span>        proxy_set_header </span><span>Host $host:$server_port;</span></span>
<span><span>        proxy_set_header </span><span>X-Real-IP $remote_addr;</span></span>
<span><span>        proxy_set_header </span><span>X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span><span>        proxy_set_header </span><span>REMOTE-HOST $remote_addr;</span></span>
<span><span>        add_header </span><span>X-Cache $upstream_cache_status;</span></span>
<span><span>        proxy_set_header </span><span>X-Host $host:$server_port;</span></span>
<span><span>        proxy_set_header </span><span>X-Scheme $scheme;</span></span>
<span><span>        proxy_set_header </span><span>X-Forwarded-Proto $scheme;</span></span>
<span><span>        proxy_connect_timeout </span><span>30s</span><span>;</span></span>
<span><span>        proxy_read_timeout </span><span>86400s</span><span>;</span></span>
<span><span>        proxy_send_timeout </span><span>30s</span><span>;</span></span>
<span><span>        proxy_http_version </span><span>1.1</span><span>;</span></span>
<span><span>        proxy_set_header </span><span>Upgrade $http_upgrade;</span></span>
<span><span>        proxy_set_header </span><span>Connection </span><span>"upgrade"</span><span>;</span></span>
<span><span>    }</span></span>
<span><span>    #PROXY-LOCAl-END</span></span>
```

![alt baota](//img/baota/site-front-proxy.png)

### 访问地址 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80)

PC端前台访问地址：[http://前台域名/pc](https://java-front.likeadmin.cn/pc/)  
移动端前台访问地址：[http://前台域名/mobile](https://java-front.likeadmin.cn/mobile/)

## 添加后台站点 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%B7%BB%E5%8A%A0%E5%90%8E%E5%8F%B0%E7%AB%99%E7%82%B9)

### 添加站点 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E6%B7%BB%E5%8A%A0%E7%AB%99%E7%82%B9-1)

⚠️ 警告

java服务端口号不要与其他运行程序重复，否则会有冲突，导致无法运行。

### 设置SSL证书（https） [](https://doc.likeadmin.cn/java/deployment/bt.html#%E8%AE%BE%E7%BD%AEssl%E8%AF%81%E4%B9%A6-https-1)

⚠️ 警告

1.申请SSL证书，必须将相应的域名解析到服务器IP地址。解析可能不会马上生效，申请失败过10分钟重试。  
2.如果在境内服务器，域名必须备案，否则申请也会被拦截。  
3.域名有解析到服务器并备案，如果失败，请多次重试，还有问题，可以到宝塔面板论坛反馈。[https://www.bt.cn/bbs/portal.php](https://www.bt.cn/bbs/portal.php) 。

点击【SSL】->【Let's Encrypt】->【文件验证】，选择域名后，点击【申请证书】。 ![alt baota](//img/baota/site-ssl-1.png)![alt baota](//img/baota/site-ssl-2.png)

### 配置站点前端 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E9%85%8D%E7%BD%AE%E7%AB%99%E7%82%B9%E5%89%8D%E7%AB%AF-1)

点击【配置文件】->【nginx配置文件】，填写nginx配置，其中<项目目录>和<前面步骤配置端口>修改为实际项目参数。

1.9版本以上基于1.9以上版本开发的产品1.9版本以上基于1.9以上版本开发的产品

nginx

```
<span><span>    #STATIC-START likeadmin-java版后台前端页面</span></span>
<span><span>    location</span><span> / </span><span>{</span></span>
<span><span>        root </span><span>&lt;项目目录&gt;/public/admin;</span></span>
<span><span>        index </span><span>index.html;</span></span>
<span><span>        try_files </span><span>$uri $uri/ /index.html;</span></span>
<span><span>        }</span></span>
<span><span>    #STATIC-END</span></span>
<span></span>
<span><span>    #PROXY-LOCAl-START likeadmin-java版服务端配置</span></span>
<span><span>    location</span><span> /adminapi/ </span><span>{</span></span>
<span><span>        proxy_pass </span><span>http://127.0.0.1:&lt;前面骤配置端口&gt;;</span></span>
<span><span>        proxy_set_header </span><span>Host $host:$server_port;</span></span>
<span><span>        proxy_set_header </span><span>X-Real-IP $remote_addr;</span></span>
<span><span>        proxy_set_header </span><span>X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span><span>        proxy_set_header </span><span>REMOTE-HOST $remote_addr;</span></span>
<span><span>        add_header </span><span>X-Cache $upstream_cache_status;</span></span>
<span><span>        proxy_set_header </span><span>X-Host $host:$server_port;</span></span>
<span><span>        proxy_set_header </span><span>X-Scheme $scheme;</span></span>
<span><span>        proxy_set_header </span><span>X-Forwarded-Proto $scheme;</span></span>
<span><span>        proxy_connect_timeout </span><span>30s</span><span>;</span></span>
<span><span>        proxy_read_timeout </span><span>86400s</span><span>;</span></span>
<span><span>        proxy_send_timeout </span><span>30s</span><span>;</span></span>
<span><span>        proxy_http_version </span><span>1.1</span><span>;</span></span>
<span><span>        proxy_set_header </span><span>Upgrade $http_upgrade;</span></span>
<span><span>        proxy_set_header </span><span>Connection </span><span>"upgrade"</span><span>;</span></span>
<span><span>    }</span></span>
<span><span>    #PROXY-LOCAl-END</span></span>
```

![alt baota](//img/baota/site-admin-proxy.png)

### 访问地址 [](https://doc.likeadmin.cn/java/deployment/bt.html#%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80-1)

PC端后台访问地址：[http://前台域名](https://127.0.0.1)