---
title: 开发环境要求
displayed_sidebar: mainSidebar
---

# 部署环境要求

# 服务端

|  运行环境 | 要求版本  |  推荐版本 |
| ------------ | ------------ | ------------ |
|  JDK |  >=1.8 |  1.8 |
| Mysql  |  >=5.7 | 8.0  |
| nginx或 apache  |  无限制 | 1.20.x  |
| Redis  |  >=6.0 | 7.4.0  |

# 前端

|  运行环境 | 要求版本  |  推荐版本 |
| ------------ | ------------ | ------------ |
|  Node.js |  >=14.18.1 |  16.19.1 |

本文档概述了在不同环境中安装和设置IceCMS的不同方法。无论您是喜欢使用Docker进行容器化部署，还是传统的手动安装，我们都为您提供了解决方案。

在深入了解安装选项之前，请确保您的系统满足以下最低要求：

组件	要求
Java	JDK 1.8 或更高版本
数据库	MySQL 5.6/5.7/8.0
内存	2GB+ RAM（推荐4GB+）
存储	1GB用于应用程序，内容额外存储
构建工具	Maven 3.x（用于手动构建）
来源：pom.xml#L23，Dockerfile

1. Docker安装（推荐）

使用Docker是快速运行IceCMS的最佳方式。这种方法会自动在隔离的容器中设置数据库、API后端和前端UI。

前置条件

系统已安装Docker和Docker Compose
Git（用于克隆仓库）
Docker安装步骤

克隆仓库：

git clone https://github.com/Thecosy/IceCMS.git
cd IceCMS
构建容器：

cd IceCMS-Docker
make build
# 或者直接：docker-compose build
启动服务：

make run
# 或者直接：docker-compose up -d
这将启动三个容器：

内部可访问的数据库（MySQL 8.0）
后端API位于http://localhost:8181
前端UI位于http://localhost:3000
来源：docker-compose.yml#L3-L38，Makefile#L1-L6

常用Docker命令

命令	描述
make run	启动所有服务
make clear	停止所有服务
make restart	重启所有服务
make debug	查看容器日志
来源：Makefile#L1-L14

2. 手动安装

如果您更喜欢对安装过程有更多控制，或不使用Docker，请按照以下步骤单独设置每个组件。

2.1 数据库设置

安装MySQL（版本5.6、5.7或8.0）

创建数据库和用户：

CREATE DATABASE icecms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'icecms'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON icecms.* TO 'icecms'@'localhost';
FLUSH PRIVILEGES;
导入架构：

# 选择与您的MySQL版本对应的SQL文件
mysql -u icecms -p icecms < sql/icecms8.0.sql
来源：icecms8.0.sql

2.2 后端API设置

确保已安装Java 1.8+和Maven

配置数据库连接：
编辑应用程序属性以匹配您的数据库凭据

构建和运行应用程序：

mvn clean package -Dmaven.test.skip=true
java -jar IceCMS-main/target/*.jar
来源：pom.xml#L20-L24，build.sh#L26

2.3 管理前端设置

导航到管理前端目录：

cd IceCMS-front-admin
安装依赖项并构建：

npm install
npm run build
配置并部署到Web服务器（如Nginx或Apache）

来源：IceCMS-front-admin/package.json

2.4 公开前端设置

导航到Nuxt3前端目录：

cd IceCMS-front-nuxt3
安装依赖项并构建：

npm install
npm run build
启动Nuxt3服务器：

npm run start
来源：IceCMS-front-nuxt3/package.json

3. Windows脚本安装

对于Windows用户，IceCMS提供了方便的批处理脚本以进行常见操作：

设置和运行：

bin\run.bat
清理项目：

bin\clean.bat
打包用于部署：

bin\package.bat
来源：bin/run.bat，bin/clean.bat，bin/package.bat

4. 开发环境设置

对于希望为IceCMS贡献代码或进行修改的开发者：

后端开发：

IDE：支持Java 8的IntelliJ IDEA或Eclipse
作为Maven项目导入
运行主应用程序类
管理前端开发：

cd IceCMS-front-admin
npm install
npm run dev  # 启动开发服务器
公开前端开发：

cd IceCMS-front-nuxt3
npm install
npm run dev  # 启动开发服务器
来源：IceCMS-front-admin/package.json，IceCMS-front-nuxt3/package.json

5. 安装后步骤

通过任何方法安装IceCMS后：

访问管理面板，地址为/admin（Docker用户为端口3000）
使用默认凭据登录（查看文档或数据库以获取默认凭据）
通过管理面板更新系统设置
更改默认密码以确保安全
安装方式比较

特性	Docker	手动	Windows脚本
安装便捷性	★★★★★	★★★☆☆	★★★★☆
可定制性	★★★☆☆	★★★★★	★★★★☆
资源占用	较高	较低	中等
隔离性	完全隔离	无隔离	无隔离
适用场景	生产与测试	开发与生产	开发
选择最适合您需求和技术环境的安装方法。对于大多数用户，Docker方法提供了最便捷的路径来安装IceCMS。