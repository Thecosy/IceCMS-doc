---
id: config
title: nuxt配置
sidebar_label: nuxt配置
---

# 配置

Nuxt.js
=======

vue 单页应用要做 SEO， Nuxt.js 的 SSR 服务端渲染可以很好的做到，小米官网和掘金都有使用 Nuxt。

一、安装
----

```
npx create-nuxt-app <项目名>


```

在这可能有报一个错误：

```
npm ERR! code ENOLOCAL
npm ERR! Could not install from “Files\nodejs\node-cache_npx\16376” as it does not contain a package.json file.
​
npm ERR! A complete log of this run can be found in:
npm ERR! C:\Program Files\nodejs\node-cache_logs\2019-08-07T02_34_54_333Z-debug.log
Install for create-nuxt-app@latest failed with code 1


```

原因是 node_cache 路径有空格

cmd 输入

```
npm config list 


```

可以看到

```
cache = "C:\Program Files\nodejs\node_cache"
prefix = "C:\Program Files\nodejs\node_global"


```

再次输入

```
"C:\Program~1\nodejs\node_cache"


```

如果改掉路径了直接创建项目：

```
npx create-nuxt-app 项目名称


```

后续会让选择一些框架和配置，参考 [www.nuxtjs.cn/guide/insta…](https://link.juejin.cn?target=https%3A%2F%2Fwww.nuxtjs.cn%2Fguide%2Finstallation "https://www.nuxtjs.cn/guide/installation")

创建完成 输入 npm run dev 启动项目

![](/img/icecms/202307/1.png)

二、路由
----

#### 1、路由跳转

![](/img/icecms/202307/2.png)


nuxt 路由跳转标签 nuxt-link 会渲染成 a 标签

```
<nuxt-link to="/">首页</nuxt-link>


```

#### 2、嵌套路由

nuxt 会将 pages 文件夹下 vue 文件自动生成路由， 可以再. nuxt 文件夹下 router.js 看到生成的路由文件

```
pages/
--| index/
-----| integratedQuery.vue
-----| integratedQueryResult.vue
--| index.vue


```

index.vue 文件中要有标签显示子路由页面

子路由要放在父页面同名的文件夹下。

![](/img/icecms/202307/3.png)

![](/img/icecms/202307/4.png)

#### 3、动态路由

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的**以下划线作为前缀**的 Vue 文件 或 目录。

命名的文件或目录为参数名 

![](/img/icecms/202307/5.png)

![](/img/icecms/202307/6.png)

三、插件的引入
-------

### Nuxt 中使用 scss

使用 npm 安装

```
npm install --save-dev node-sass sass-loader@10 fibers @nuxtjs/style-resources


```

在 nuxt.config.js 文件中配置

```
buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/style-resources'
],
​
styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
},


```

重新运行一下项目 npm run dev 即可使用

### Nuxt 中使用 echarts

npm 引入

`npm install echarts`

#### 配置

在 plugins 中新建一个 js 文件

echarts.js:

```
import Vue from 'vue'
const echarts = require('echarts');
Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）
​


```

nuxt.config.js 配置

```
plugins: [
    '@/plugins/echarts'
],


```

#### 使用

```
let radarChart = this.$echarts.init(document.getElementById("ElementId"));
radarChart.setOption(...);


```

四、asyncData 获取数据
----------------

#### 1、基本使用

asyncData return 里面定义的双向绑定的数据; 因为在组件渲染前执行 asyncData, 所以在里面不能获取 this。

axios 使用 nuxt 推荐使用他内置的 [axios.nuxtjs.org/](https://link.juejin.cn?target=https%3A%2F%2Faxios.nuxtjs.org%2F "https://axios.nuxtjs.org/")。

```
async asyncData({$axios}) {
    const res = await $axios.$get('http://4157eaf7.cpolar/.....');
    //根据接口结构来
    console.log(res.data.data, '数据');
    return {
      tableData:res.data.data
    }
  },


```

#### 2、无法验证证书错误

`如果接口是http公网IP地址的形式， 有可能会报无法验证证书错误`

在 plugins 下面新建 js 文件

```
//解决接口无法验证证书问题
import https from 'https';
​
export default function ({ $axios }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
}
​


```

nuxt.config.js 配置

```
plugins: [
    '@/plugins/https'
],


```

五、nuxt 打包部署
-----------

#### 1、配置

在项目 package.json 配置， 位置和 scripts 同一级

```
"config": {
    "nuxt": {
      "host": "0.0.0.0", //推荐改成服务器公网IP
      "port": 5001 //自定义端口
    }
  },


```

运行 npm run build 命令打包；

然后将项目中这几个文件夹放在服务器站点上

```
-- .nuxt
-- static
-- nuxt.config.js
-- package.json


```

#### 2、可能报错

在服务器运行 npm i 时候有可能会报错误

```
 ERROR 
​
  Error: No SSR build! Please start with `nuxt start --spa` or build using `nuxt build --universal`
​
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! nuxt-ssr-demo@1.0.0 start: `PORT=7001 nuxt start`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the nuxt-ssr-demo@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
​
npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2018-05-08T06_20_58_553Z-debug.log


```

然后我的服务器负载就满了......

原因大概是 centos 的默认配置的虚拟内存不够导致的；

可以参考 [github.com/jackieli123…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjackieli123723%2Fjackieli123723.github.io%2Fissues%2F59 "https://github.com/jackieli123723/jackieli123723.github.io/issues/59")

也可以把部署的文件夹放在本地再运行 npm install 将生成的 node_moudles 压缩上传到服务器上（我是这么干的）；

打开文件夹所在位置的终端 输入 npm run start 运行；

使用服务器公网 IP 测试访问：[http://IP 地址: 配置的端口 /](https://link.juejin.cn?target=http%3A%2F%2FIP%25E5%259C%25B0%25E5%259D%2580%3A%25E9%2585%258D%25E7%25BD%25AE%25E7%259A%2584%25E7%25AB%25AF%25E5%258F%25A3%2F "http://IP%E5%9C%B0%E5%9D%80:%E9%85%8D%E7%BD%AE%E7%9A%84%E7%AB%AF%E5%8F%A3/")

ps: 记得开放服务器防火墙，和宝塔安全规则

但是当关闭当前终端的时候就访问不了了，

可以使用 PM2 守护进程；

#### 3、PM2 守护进程

**安装**

使用宝塔安装, 自带 node 环境；软件商店搜索 PM2 安装就行；

安装好之后新建站点将打包好的文件上传；

**运行**

```
pm2 start npm --name "项目名称" -- run start


```

**其他相关命令**

pm2 list 显示所有进程

`pm2 stop all` 停止所有进程

`pm2 stop 0` 停止 id 为 0 的进程

`pm2 delete 0` 删除 id 为 0 的进程

`pm2 startup` 创建开机自启动命令

`pm2 restart all` 重启所有应用

六、nuxt SEO 初配置
--------------

#### 1、关键词和标题

这里以 bilibili 举例

![](/img/icecms/202307/7.png)

在 nuxt 中配置

![](/img/icecms/202307/8.png)

#### 2、sitemap 站点地图

sitemap 就是网站上各网页的列表，可以让搜索引擎更快收录到资料库中。 一般是 xml 文件，百度的 txt 文件好像也可以；

**nuxt 中配置站点地图**

安装 @nuxtjs/sitemap

`npm i @nuxtjs/sitemap -D`

在 nuxt.config.js 中添加进去

```
modules: [
    '@nuxtjs/sitemap'
],


```

并在与 modules 同级添加配置

```
​
  sitemap:{
    path:'/sitemap.xml',
    hostname: 'http://域名.com/',
    defaults:{
      changefreq: 'always',
      lastmod: new Date()
    },
    // 路由配置
    routes: () => {
      const routes = [
        {
          url:'/',
          changefreq: 'always',
          lastmod: new Date() // 最后更新时间
        },
        {
          url:'/integratedQueryResult',
          changefreq: 'always',
        }
      ]
      return routes
    }
  }


```

npm run dev 测试 会生成站点地图

![](/img/icecms/202307/9.png)

配置参数查看官网 [www.npmjs.com/package/@nu…](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40nuxtjs%2Fsitemap%23usage "https://www.npmjs.com/package/@nuxtjs/sitemap#usage")

#### 3、chrome 收录

谷歌 seo 控制台 [search.google.com/search-cons…](https://link.juejin.cn?target=https%3A%2F%2Fsearch.google.com%2Fsearch-console%2Fwelcome%3Faction%3Dinspect%26utm_medium%3Dreferral%26utm_campaign%3D9012289 "https://search.google.com/search-console/welcome?action=inspect&utm_medium=referral&utm_campaign=9012289")

第一次进去会验证网站的所有权

将 google 给你生成的 html 文件放在 static 目录下就行

**测试生成的站点地图是否可用**

![](/img/icecms/202307/10.png)

在这输入输入 sitemap.xml 提交就行。

**请求编入索引**

![](/img/icecms/202307/11.png)

接下来等待谷歌爬虫收录网站。

排名和用户搜索点击量和网站内容相关。
