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

**Refine** works on any environment that can run **React** (incl. *Vite, Next.js, Remix, and CRA(Legacy)* etc.)

Although you could take the time to manually set up your environment and install the **Refine** packages afterwards, the optimal way to get started with **Refine** is using the [Browser-based Scaffolder](https://refine.dev/?playground=true) and **CLI-based Scaffolder** .

Choose one of the methods below to bootstrap a Refine app:

<tabs>
  <tabitem value="Browser-based-scaffolder" label="With Browser-based" default></tabitem></tabs>

This is an efficient tool that allows you to create Refine app seamlessly in your browser.

You can choose the libraries and frameworks you want to work with, and the tool will generate a boilerplate code for you.

1. Navigate to [scaffolder](https://refine.dev/?playground=true) and select libraries and frameworks you want to work with by using interactive UI.
2. Download the generated project by clicking on the **"Build &amp; Download"** button.

<div classname="flex justify-center">     <img alt="React admin panel" src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-25-refine-primereact/create-refine-project.gif" classname="border border-gray-200 rounded"> </div>

<br>

:::tip

[If you do not want to deal with the installation steps, you can use this pre-configured refine.new template →](https://refine.new/preview/1a5eb93b-ab9b-4112-b80e-7563b334c025)

:::

<br>

1. Next, navigate to the project folder, install the dependencies, and then start your project.

```
> npm install

> npm run dev
```

  
  <tabitem value="CLI" label="With CLI-based"></tabitem>

`create refine-app` provides built-in templates for *Vite* , *Next.js* , *Remix* , and *CRA(Legacy)* environments, so you can bootstrap a **Refine** project in just a couple of minutes. It also offers a wide range of options that you can Easily configure for your *UI framework* , *i18n* , *router* , *Auth.* and *data provider* preferences.

1. To get started, run the following command. The *CLI wizard* will assist you for the rest of the setup process:

```
npm create refine-app@latest
```

1. Once the setup is complete, navigate to the project folder and start your application with:

```
npm run dev
```

<br>

:::tip

In case you select `Yes` for the `Do you want to add example pages?` option while using the CLI wizard, the Refine will add sample CRUD pages utilizing [ `Refine Inferencer` ] and fill the `resources` property.

It is highly recommended to add example pages as it provides a clearer understanding of how **Refine** works and lets you test out the CRUD operation functionalities.

:::

  



<br>

Now, you can access the Refine application at [http://localhost:3000](http://localhost:3000) .

You will see the output as a table populated with `blog_posts` and `category` data with filtering, sorting, and pagination features.

<br>

<div>    <img style="{{width:" src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start-example.png" alt="Example result"> </div>

<br>
