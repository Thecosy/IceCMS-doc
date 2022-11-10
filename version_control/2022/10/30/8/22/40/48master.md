线上部署：

1.打包：

后端打包：
先clean再install，找到target下的jar包上传到服务器。
![alt icecms](https://img.kancloud.cn/a4/3f/a43f8a044051168614c683e459a1976f_1198x953.png)

![alt icecms](https://img.kancloud.cn/07/21/0721b6917d118f969f054cf5761aa786_684x933.png)
![alt icecms](https://img.kancloud.cn/ba/be/babe4e1b844456b328195cfc1c7116d3_804x350.png)
上传后执行：

nohup java -jar project-fast.jar --spring.profiles.active=prod &
即可运行后端服务。

uniapp H5打包：

![alt icecms](https://img.kancloud.cn/36/16/361688d3f3e6619fd02adf124fedf1c8_714x936.png)

打包前记得utils/config.js下配置你的线上域名

![alt icecms](https://img.kancloud.cn/fc/6e/fc6ebeee5f3b7335546e7769b53c085c_827x294.png)
后台管理系统打包：

![alt icecms](https://img.kancloud.cn/ea/69/ea69f29bcfbb724a098ee7c1ff5f3d97_1347x762.png)
![alt icecms](https://img.kancloud.cn/e0/76/e0764b57a270772ccc4ee6274b16c5d2_1237x630.png)

2. 部署

（1）准备几个子域名（按你自己的需要来）

提示：如下的子域名前缀你可以自定义，我只是为了演示。
后端api服务：api.xxx.com （这个必须有）

h5端：h5.xxx.com （如果你不需要h5用户端就不用）

后台管理系统: admin.xxx.com (这个必须有)

去阿里云或者腾讯云用你们公司（注意：如果你上线小程序必须用你公司的域名，h5不要求）已备案的域名申请SSL证书。需要申请的数目按如上要求。申请证书免费。

![alt icecms](https://img.kancloud.cn/f8/79/f879cbfe32944bd7414e9fb68dc6c9c2_1901x902.png)

（2）安装宝塔

用宝塔部署要快点。本项目暂不支持容器部署。这是只说明宝塔部署。
按照宝塔安装手册要求安装好以后，需要安装nginx，redis，mysql5.7。

还有java运行环境，打开黑窗口执行yum命令安装。不然jar包跑不起来。
安装JDK 1.8 (yum -y install java-1.8.0-openjdk)

然后创建站点

![alt icecms](https://img.kancloud.cn/3a/12/3a12d6e6c6aa5ec8f8ce4a215584b399_1920x812.png)

下载ssl证书（用nginx版本）并填写

![alt icecms](https://img.kancloud.cn/e9/1a/e91aa3d4f4feae11a1d770d0a41af5e1_1361x837.png)

对于后端api服务域名api.xxx.com，需要配置nginx，直接看第（3）步。
对于admin.xxx.com和h5.xxx.com，不用配置，只要按如下图指定目录即可。

![alt icecms](https://img.kancloud.cn/fd/96/fd96eeeb5a7522fc3dc003614aaa1184_910x575.png)

（3）nginx配置
![alt icecms](https://img.kancloud.cn/d8/d3/d8d3451cfa7d58a2c4b4d29c12acd5ca_636x329.png)

不要直接复制粘贴！！！对应的域名改成你自己的！！！主要就是该location/里面的代理端口。配置完成后，访问：api.xxx.com 出现如图所示即为配置成功。

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