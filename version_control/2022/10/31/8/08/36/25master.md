线上部署：

1.打包：

后端打包：
先clean再install，找到target下的jar包上传到服务器。
![alt icecms](https://img.kancloud.cn/a4/3f/a43f8a044051168614c683e459a1976f_1198x953.png)

![alt icecms](https://img.kancloud.cn/07/21/0721b6917d118f969f054cf5761aa786_684x933.png)
![alt icecms](/uploads/projects/icecms/8e1d97959f70fe46f098a276236971df.webp)
上传后执行：

nohup java -jar project-fast.jar --spring.profiles.active=prod &
即可运行后端服务。

uniapp H5打包：

![alt icecms](/uploads/projects/icecms/fa0a21316ab9719160b825413f52db40.webp)

打包前记得utils/config.js下配置你的线上域名

![alt icecms](/uploads/projects/icecms/769dc0fc97e9f3fe51baeae6cfeb7160.webp)
后台管理系统打包：

![alt icecms](/uploads/projects/icecms/92de25918db9f3a003db55fe91976943.webp)
![alt icecms](/uploads/projects/icecms/749f47fb948df9f3786c68e708c18132.webp)

2. 部署

（1）准备几个子域名（按你自己的需要来）

提示：如下的子域名前缀你可以自定义，我只是为了演示。
后端api服务：api.xxx.com （这个必须有）

h5端：h5.xxx.com （如果你不需要h5用户端就不用）

后台管理系统: admin.xxx.com (这个必须有)

去阿里云或者腾讯云用你们公司（注意：如果你上线小程序必须用你公司的域名，h5不要求）已备案的域名申请SSL证书。需要申请的数目按如上要求。申请证书免费。

![alt icecms](/uploads/projects/icecms/e069619ba193f1cc096292dcbd136f27.webp)

（2）安装宝塔

用宝塔部署要快点。本项目暂不支持容器部署。这是只说明宝塔部署。
按照宝塔安装手册要求安装好以后，需要安装nginx，redis，mysql5.7。

还有java运行环境，打开黑窗口执行yum命令安装。不然jar包跑不起来。
安装JDK 1.8 (yum -y install java-1.8.0-openjdk)

然后创建站点

![alt icecms](/uploads/projects/icecms/1464db3701041c4df45d30bc81c0bc00.webp)

下载ssl证书（用nginx版本）并填写

![alt icecms](/uploads/projects/icecms/a6ab6bdaec1aa6d6d3b7982d6a5799cc.webp)

对于后端api服务域名api.xxx.com，需要配置nginx，直接看第（3）步。
对于admin.xxx.com和h5.xxx.com，不用配置，只要按如下图指定目录即可。

![alt icecms](/uploads/projects/icecms/20957d2cc869b6d6059a23d9ad186304.webp)

（3）nginx配置

![alt icecms](/uploads/projects/icecms/fd3905933641df3a2ae552a7edc45762.webp)

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