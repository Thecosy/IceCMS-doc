---
id: nuxtstart
title: nuxt.js 入手
sidebar_label: nuxt.js 入手
---

# 目录结构

工具
--

*   node.js
*   mongodb
*   vue+elementui
*   nuxt.js
*   git+gitflow


nuxt.js 入手
----------

之所以需要选用`nuxt.js`就是因为项目主要考虑`SEO`，对比了一下自己的技术栈虽然`next.js`也用过，但是因为近一年基本都是在用`vue`，所以直接采用了 nuxt.js 来做`SSR`了。

nuxt.js 创建项目还是很简单的，根据官方的命令一步一步去做就可以了

```
npx create-nuxt-app 项目名


```

这里根据命令提示会需要选择一些测试框架、内置 UI 框架、是否需要`axios`以及`node.js`框架，因为我对`express`比较熟悉，而且 UI 前期不想自己手动去写`css`，所以我这里采用了 element+express，安装完毕以后工具会直接帮我们下载好对应的`package.json`里面的依赖。

接下来我们只需要在项目根目录下去执行

```
npm run dev


```

就可以了，这里会涉及到几个问题

### 1、修改访问端口

因为 nuxt 默认端口为`8080`，一般我们修改 dev-server 工具打包的项目都是通过修改配置文件，但是 nuxt.js 配置文件就没那么只管，我这里采用了在`package.json`添加配置脚本的方式

```
"config": {    "nuxt": {      "port": 4001//修改后的端口    }}


```

### 2、开放对外访问权限

默认 nuxt.js 只支持`localhost`访问，部署的时候也会存在这个问题，用 IP 跟域名的方式都会被拒绝，同样我也是在 package.json 里面添加配置脚本的方式去修改

```
"config": {    "nuxt": {      "host": "0.0.0.0",//修改为0.0.0.0以后允许对外访问      "port": 4001    }}


```

修改完这些以后我们基本可以进行正常开发与部署了，nuxt 部署也是很简单的，内置已经提供了`nuxt start` 或者 `npm run start`

nuxt 目录结构
---------

如下图

![image.webp](/img/icecms/202305/7.webp "image.webp")


**.nuxt** 目录是我们`nuxt build`之后生成的目录，真正运行在实际项目中的也是读取的此目录，里面生成以后就是我们在创建项目时候编译好的对应框架的 node 项目，我之前选择的`express`，当然喜欢`koa`的也可以选择`koa。`

**assets** 目录官方说明是放 Less、Sass、Javascript 的目录，这里我一般的理解与做法是放一些需要预编译的语言，比如我会把 Less 代码放到这个文件夹内。

**components** 目录一般是我们放自定义组件的地方，这里我把组件拆分为公共组件以及功能组件都是按目录存放到此目录下。

**layouts** 目录这一块是比较重要的，因为此目录主要是作为 nuxt 的布局目录，默认里面会有一个 default.vue，我们在 page 里面不配置 layout 的情况下默认会采用`layouts/default.vue`这个布局来渲染我们的页面，在这里我们可以自定义布局页面，然后在 page 里面去使用, 只需要在自定义布局里面引用`<nuxt/>`这个组件就可以了

**middleware** 目录是我们存放中间件的目录，当然中间件的配置后面我也会写一下。

**node_modules** 目录就是我们默认 npm 的依赖了，这里就不多说什么了。

**pages** 目录这个是核心目录了，所有的页面都会是来此这个文件夹里面，虽然官方也支持自定义路由，但是既然目录能够生成路由我们可以很好的利用这个来组织我们页面的层级关系；默认情况下我们的页面是会读取 index.vue 这个文件作为渲染页面，这里之所以没说是哪个 index.vue, 是因为 url 访问是那个层级，默认读取的就是哪个层级的 index.vue 文件，这里对于没有接触太久的人还是有一点绕的，特别是用文件夹的方式组织路由，不过熟悉规则以后还是很方便、直观的，这个系列我单独分一篇来写这个吧。

plugins 目录是我们存放自定义插件的地方，自定的插件可以直接在我们的 vue 代码里面使用，这里如果我们在创建项目的时候选择了 UI 框架，默认是会把 UI 框架的配置文件存放到这个目录，比如我这里创建之前选择了 elementui，里面会包含一个 element-ui.js，代码就跟我们平时用 element 配置一样, 写一个自己的插件也比较简单，比如我这里写了一个时间格式化的插件

```
import Vue from 'vue';Vue.prototype.$format = function(date){  if(!date) return '';  var t=new Date(date);//Date 表示一行数据, updateTime 表示要格式化的字段名称  return t.getFullYear()+"-"+ ((t.getMonth()+1) < 10 ? `0${(t.getMonth()+1)}` : (t.getMonth()+1)) +"-"+(t.getDate() < 10 ? `0${t.getDate()}` : t.getDate());}


```

然后通过在 nuxt.config.js 引入就可以了, 其实跟 middleware 的方式大同小异，不过这里无法获取到服务端的上下文

```
plugins: [    '@/plugins/element-ui',    '@/plugins/format'],


```

**static** 目录就是存放一些静态资源的地方，比如我们网站要用到的 css、图片、第三方库之类的都可以作为静态资源存放到这个目录。

**store** 目录如果我们在创建项目之初选择了使用`vuex`的话就会存在此目录，主要是用来做`store`的，我这里因为需要夸页面、组件交互的数据太多，所以直接用 vuex。

**nuxt.config.js** 文件可以理解为是 nuxt 项目的配置文件，这里可以配置的东西很多，比如我们的网站所有页面默认的标题、描述、关键词，引用全局样式、引用第三方库都可以在这里配置。这里面能配置的东西太多了，还可以自己扩展编译流程，之前网上看到有人专门针对这个写了一篇文章，有兴趣的可以去看一下，如果没有的话，后面我也可以抽时间来讲一下每个配置。

