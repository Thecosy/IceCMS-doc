商业版项目组成由以上三个子项目以及数据库文件
![alt icecms](https://s1.ax1x.com/2022/11/09/zSDNPx.png
)

# 1.后端IceWK-ment项目

打开项目目录选择sql文件夹
![alt icecms](https://s1.ax1x.com/2022/11/09/zSBBEn.png)

选择对应你mysql版本的数据库文件

![alt icecms](https://s1.ax1x.com/2022/11/09/zSBNjg.png)
使用数据库可视化工具navicat或者sqlyog等软件创建数据库

然后导入数据库sql文件。


在后端yml中配置数据库连接
yml文件在IceCMS-main目录下：
![alt icecms](https://s1.ax1x.com/2022/11/09/zSBvVA.png)

按照yml配置数据库名称端口和账号密码

redis配置项在这里，默认不用改
![alt icecms](https://img.kancloud.cn/7d/7f/7d7f67eaeeb335353fb0803c035c32e5_1687x839.png)

运行后端api前务必启动redis和mysql。
![alt icecms](https://img.kancloud.cn/75/0d/750d884b3f168c1237621824920ce4ed_1786x929.png)

mvn clean和install即可打成jar包，可运行jar就在IceCMS-main目录的targer文件夹目录下。
如果脱离IDEA，需要单独运行jar，执行

java -jar main.jar即可

启动后端项目之前，最重要的事情是一定要先启动redis服务，再启动后端服务。否则后端无法启动，因为后端启动会初始化各种配置项至redis缓存中。

# 2.移动端uniapp项目
uniapp目录在主项目目录下的IceWk-uniApp目录下
![alt icecms](https://s1.ax1x.com/2022/11/09/zSDNPx.png
)
找到utils/api.js配置api接口地址
![alt icecms](https://s1.ax1x.com/2022/11/09/zSDdxO.png)
修改小程序appid（如果你要用小程序版本就一定要改这里！！）
![alt icecms](https://img.kancloud.cn/c6/27/c6272c750579169caa5a6b2ea5a784e2_1920x964.png)
![alt icecms](https://img.kancloud.cn/fe/2f/fe2fc577f5d54d7678e72cf7fc5714dc_1920x958.png)

按上图所示即可运行小程序，如果你是第一次运行uniapp项目到微信开发者工具，

需要去配置一下微信开发者工具的安全端口，不然无法唤起微信开发者工具（具体百度看博客示例参考 https://blog.csdn.net/lyx1838102537/article/details/122491185 ）。
uniapp端运行到小程序以后不要着急微信登录，这时会报错“openid解析失败”，因为你的后台管理系统还需要配置小程序appid和密钥。不然无法登录。

# 3.后台管理端IceWk-vues项目

![alt icecms](https://s1.ax1x.com/2022/11/09/zSDOzT.png
)
这是开发环境配置端口的地方
![alt icecms](https://s1.ax1x.com/2022/11/09/zSDbiq.png
)
这是生产环境接口地址配置地方

初次使用请使用npm install安装依赖
安装依赖有的用户可能会报错，报错了按报错日志要求安装其他需要的本机依赖。

或尝试

	npm install --legacy-peer-deps --registry=https://registry.npm.taobao.org


依赖安装后运行npm run dev即可启动项目

后台地址:localhost:8080/admin

后台账号：admin 密码：123123