---
sidebar_position: 2
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

[#](#宝塔面板部署-1-推荐使用) 宝塔面板部署 - 1 - 推荐使用
-------------------------------------

强烈正式环境推荐使用宝塔面板部署项目，让部署更方便，减少部署出现问题。

### [#](#服务器环境设置) 服务器环境设置

*   **步骤 1**: 点击【软件商店】-【运行环境】，安装 Nginx、MySQL、其中 Mysql 选择 5.7 版本。然后搜索 redis 并安装 redis。
    
    提示
    
    安装软件的时候，使用极速安装，避免出现一些环境引起的问题。
    
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-1-1.png)  
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-1-2.png)  
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-1-3.png)  
    
*   **步骤 2**: 点击【终端】，登录 root 帐号，根据系统运行命令安装 maven。

或者

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-2.png)  

### [#](#数据库导入) 数据库导入

### [#](#源码编译) 源码编译

提示

本步骤将源码上传至服务器，并编译成可运行的 jar 包，如果熟悉 Java，建议在本地电脑编译，减少对运行服务器的影响，跳过编译步骤，直接上传 rar 包。

*   **步骤 1**: 下载 icecms 压缩包，解压到宝塔面板 / www/wwwroot 目录。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-1-1.png)  
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-1-2.png)
*   **步骤 2**: 打开【文件】，找到项目目录的 server/like-admin/src/main/resources，复制 application-dev-example.yml 文件并改名为 application-dev.yml，此配置为后台配置。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-2.png)
*   **步骤 3**: 打开 application-dev.yml 文件，根据图片内容，设置相关信息。【upload-directory】项为上传文件目录，可以根据需要设置位置。【database】项为 Mysql 相关信息，【redis】项为 Redis 相关信息，如果 Redis 没有设置密码，可以为空。此配置为后台的配置，设置完以后，保存文件。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-3.png)
*   **步骤 4**: 同样打开【文件】，找到项目目录的 server/like-front/src/main/resources，复制 application-dev-example.yml 文件并改名为 application-dev.yml，此配置为前台配置。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-4.png)
*   **步骤 5**: 同样打开 application-dev.yml 文件，根据图片内容，设置相关信息。【upload-directory】项为上传文件目录，可以根据需要设置位置。【database】项为 Mysql 相关信息，【redis】项为 Redis 相关信息，如果 Redis 没有设置密码，可以为空。此配置为前台的配置，设置完以后，保存文件。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-5.png)
*   **步骤 6**: 打开【终端】，运行 cd 命令进入项目目录的 server 目录，运行编译命令。首次编译需要下载依赖，时间会比较长。编译成功以后，终端会出现下图的信息。同时生成 / server/like-admin/target/like-admin-1.0.0.jar 文件和 / server/like-front/target/like-front-1.0.0.jar 文件，下面步骤需要用到这两个 jar 文件包。

```
cd /www/wwwroot/icecms/server
mvn clean install -Dmaven.test.skip=true -f pom.xml


```

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-6.png)

### [#](#项目运行) 项目运行

#### [#](#后台配置) 后台配置

*   **步骤 1**: 打开【网站】-【Java 项目】-【添加 Java 项目】，选择【Spring_boot】, 添加项目 / server/like-admin/target/like-admin-1.0.0.jar 包，设置 JDK。设置为开机自动启动，设置为前后端分开，后端 url 填写 "/api"，设置前端根目录为项目的 / public/admin，填写前台域名，然后【提交】。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-1-1.png)
    
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-1-2.png)
    
*   **步骤 2**: 在网站列表 Java 项目里面找到刚才添加的后台站点，点击【设置】-【伪静态】，填写下面伪静态信息，【保存】。

```
location / {
  try_files $uri $uri/ /index.html;
}


```

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-2.png)

*   **步骤 3**: 点击【SSL】-【Let's Encrypt】，选择【文件验证】，勾选域名，点击【申请】，等待完成 https 证书申请。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-3.png)
*   **步骤 4**: 访问添加的后台域名即可访问后台，默认帐号 admin，密码为 123123，为了使用安全，请更改密码。 

#### [#](#前台配置) 前台配置

提示

注意前台前端根目录与后台有所不同，因为前台有 PC 端和手机端。

*   **步骤 1**: 打开【网站】-【Java 项目】-【添加 Java 项目】，选择【Spring_boot】, 添加项目 / server/like-front/target/like-front-1.0.0.jar 包，设置 JDK。设置为开机自动启动，设置为前后端分开，后端 url 填写 "/api"，设置前端根目录为项目的 / public，填写前台域名，然后【提交】。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-1-1.png)
    
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-1-2.png)
    

提示

注意前台的伪静态信息与后台有所不同，因为前台有 PC 端和手机端。

*   **步骤 2**: 在网站列表 Java 项目里面找到刚才添加的前台站点，点击【设置】-【伪静态】，填写下面伪静态信息，【保存】。

```
location /pc {
  try_files $uri $uri/ /pc/index.html;
}

location /mobile {
  try_files $uri $uri/ /mobile/index.html;
}



```

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-2.png)

*   **步骤 3**: 点击【SSL】-【Let's Encrypt】，选择【文件验证】，勾选域名，点击【申请】，等待完成 https 证书申请。 ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-3.png)

提示

具体需要看产品是否含 PC 端或者手机端，每个产品不一样。

*   **步骤 4**:PC 端网页前台访问：https:// 添加的前台域名 / pc，即可访问 PC 端。如果该产品有手机网页端前台访问：https:// 添加的前台域名 / mobile，即可访问 PC 端。默认访问域名，会自动根据访问者使用 PC 或手机自动跳转。