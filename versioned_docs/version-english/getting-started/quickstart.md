---
title: Quick Start Guide
---

## Quick Start

The commercial version project consists of the above three sub-projects and database files

![](/img/icecms/407b8d406eb3c5ed7ee0b37974a32df8.png)

## 1. Backend IceWK-ment project

Open the project directory and select the sql folder

Select the database file corresponding to your MySQL version

![](/img/icecms/bd8f4feca170f53e0529fa1d05d7d570.png)

Use database visualization tools such as Navicat or SQLyog to create a database![](/img/icecms/25ae89c48ea629a97442cd537c001c63.png)

Then import the database sql file.

Configure the database connection in the backend yml file in the IceCMS-main directory:![](/img/icecms/029f8e303177b652dc8c4549ca65424a.png)

Configure the database name, port, account and password according to yml

The redis configuration items are here, no need to change by default![](/img/icecms/9f940751b3d909cd813cb9b94e8f2ebc.webp)

Be sure to start redis and mysql before running the backend api.![](/img/icecms/cfac6f17a3118073c5d4111b66897030.webp)

Run mvn clean and install to create a jar package. The executable jar is in the targer folder of the IceCMS-main directory. If you run the jar separately without IDEA, execute

java -jar main.jar

Before starting the backend project, the most important thing is to start the redis service first, and then start the backend service. Otherwise, the backend cannot be started because the backend startup will initialize various configuration items into the redis cache.

## 2. Mobile uniapp project

The uniapp directory is in the IceWk-uniApp directory under the main project directory![](/img/icecms/407b8d406eb3c5ed7ee0b37974a32df8.png) Find utils/api.js and configure the api interface address![](/img/icecms/0e825aee09f37000c6b8e5ccecaaefac.png) Modify the mini program appid (if you want to use the mini program version, you must change it here!!) ![](/img/icecms/d792b9a334df62c417e1ba3cf132ee8e.webp)![](/img/icecms/236cd4288735da0c344eb604ac3fd132.webp)

Click on the picture above to run the mini program. If you are running the uniapp project in WeChat Developer Tools for the first time,

You need to configure the security port of WeChat developer tools, otherwise you will not be able to invoke WeChat developer tools (for details, please refer to the blog example on Baidu https://blog.csdn.net/lyx1838102537/article/details/122491185). After running the mini program on the uniapp end, do not rush to log in to WeChat. At this time, an error "openid resolution failed" will be reported because your backend management system also needs to configure the mini program appid and key. Otherwise, you will not be able to log in.

## 3. Backend management IceWk-vues project

![](/img/icecms/4a4ae47f31d85965aacf4c782b0cd9bd.png)

This is where the development environment configures the port![](/img/icecms/73d83207b6d11fcd286c5aa4aac5530c.png)

This is where the production environment interface address is configured

For the first use, please use npm install to install dependencies. Some users may report errors when installing dependencies. If an error occurs, install other required local dependencies according to the requirements of the error log.

Or try

```
npm install --legacy-peer-deps --registry=https://registry.npm.taobao.org
```

After the dependencies are installed, run npm run dev to start the project

Backend address: localhost:8080/admin

The backend cannot be accessed, please configure pseudo-static

```
location / {
  try_files $uri $uri/ /index.html;
}
```

Backstage account: admin Password: 123123

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';
