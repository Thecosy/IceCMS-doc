---
id: nuxtstart
title: Getting started with nuxt.js
sidebar_label: Getting started with nuxt.js
---

# Directory Structure

## tool

- node.js
- mongodb
- vue+elementui
- nuxt.js
- git+gitflow

## Getting started with nuxt.js

The reason why `nuxt.js` needs to be used is because the project mainly considers `SEO` . After comparing my own technology stack, although `next.js` has been used, because I have been using `vue` basically for the past year, I directly adopted nuxt.js for `SSR` .

It is very simple to create a nuxt.js project. Just follow the official commands step by step.

```
npx create-nuxt-app 项目名


```

Here, according to the command prompt, you will need to select some test frameworks, built-in UI frameworks, whether you need `axios` and `node.js` framework. Because I am familiar with `express` and don’t want to write `css` manually in the early stage of UI, I use element+express here. After the installation is complete, the tool will directly help us download the corresponding dependencies in `package.json` .

Next we just need to execute in the project root directory

```
npm run dev


```

That's it. There are several issues involved here.

### 1. Modify the access port

Because the default port of nuxt is `8080` , we usually modify the project packaged by the dev-server tool by modifying the configuration file, but the nuxt.js configuration file is not so simple. Here I use the method of adding a configuration script in `package.json`

```
"config": {    "nuxt": {      "port": 4001//修改后的端口    }}


```

### 2. Open external access rights

By default, nuxt.js only supports `localhost` access. This problem also exists when deploying. Using IP and domain name will be rejected. I also modify it by adding configuration scripts in package.json.

```
"config": {    "nuxt": {      "host": "0.0.0.0",//修改为0.0.0.0以后允许对外访问      "port": 4001    }}


```

After modifying these, we can basically carry out normal development and deployment. Nuxt deployment is also very simple. `nuxt start` or `npm run start` is already provided.

## Nuxt Directory Structure

As shown below

![image.webp](/img/icecms/202305/7.webp "image.webp")

The **.nuxt** directory is the directory generated after we `nuxt build` . This directory is also read when running in the actual project. After it is generated, it is the node project of the corresponding framework compiled when we created the project. I chose `express` before. Of course, if you like `koa` , you can also choose `koa。`

The official description of the **assets** directory is that it is a directory for Less, Sass, and Javascript. My general understanding and practice here is to put some languages that need to be precompiled. For example, I will put the Less code in this folder.

The **components** directory is generally where we put custom components. Here I split the components into common components and functional components and store them in this directory by directory.

The **layouts** directory is very important because it is mainly used as the layout directory of nuxt. By default, there will be a default.vue in it. If we do not configure layout in the page, `layouts/default.vue` layout will be used to render our page by default. Here we can customize the layout page and use it in the page. We only need to reference the `<nuxt/>` component in the custom layout.

The **middleware** directory is where we store the middleware. Of course, I will also write about the configuration of the middleware later.

The **node_modules** directory is our default npm dependency, so I won’t say much about it here.

The **pages** directory is the core directory. All pages will be in this folder. Although the official also supports custom routing, since the directory can generate routing, we can make good use of this to organize the hierarchical relationship of our pages; by default, our page will read the index.vue file as the rendering page. The reason why it is not mentioned here is that the url access is at that level, and the index.vue file of that level is read by default. This is still a little confusing for people who have not been exposed to it for too long, especially organizing routing in the form of folders, but it is still very convenient and intuitive after you are familiar with the rules. I will write about this in a separate article in this series.

The plugins directory is where we store custom plugins. Custom plugins can be used directly in our vue code. If we choose a UI framework when creating a project, the configuration file of the UI framework will be stored in this directory by default. For example, I chose elementui before creating it, which contains an element-ui.js. The code is the same as the element configuration we usually use. It is also relatively simple to write your own plugin. For example, I wrote a time formatting plugin here.

```
import Vue from 'vue';Vue.prototype.$format = function(date){  if(!date) return '';  var t=new Date(date);//Date 表示一行数据, updateTime 表示要格式化的字段名称  return t.getFullYear()+"-"+ ((t.getMonth()+1) < 10 ? `0${(t.getMonth()+1)}` : (t.getMonth()+1)) +"-"+(t.getDate() < 10 ? `0${t.getDate()}` : t.getDate());}


```

Then you can import it in nuxt.config.js. It is similar to the middleware method, but the server context cannot be obtained here.

```
plugins: [    '@/plugins/element-ui',    '@/plugins/format'],


```

The **static** directory is where some static resources are stored. For example, the CSS, pictures, third-party libraries used on our website can all be stored in this directory as static resources.

The **store** directory will exist if we choose to use `vuex` at the beginning of creating the project. It is mainly used for `store` . Because I need to use too much data for page and component interaction, I use vuex directly.

The **nuxt.config.js** file can be understood as the configuration file of the nuxt project. There are many things that can be configured here, such as the default title, description, keywords of all pages of our website, references to global styles, and references to third-party libraries. There are too many things that can be configured here, and you can also expand the compilation process yourself. I saw someone write an article specifically for this on the Internet before. If you are interested, you can take a look. If not, I can also take the time to talk about each configuration later.
