---
id: config
title: nuxt configuration
sidebar_label: nuxt configuration
---

# Configuration

# Nuxt.js

If you want to do SEO for vue single-page applications, Nuxt.js's SSR server-side rendering can do it very well. Xiaomi's official website and Nuggets both use Nuxt.

## 1. Installation

```
npx create-nuxt-app <项目名>


```

There may be an error reported here:

```
npm ERR! code ENOLOCAL
npm ERR! Could not install from “Files\nodejs\node-cache_npx\16376” as it does not contain a package.json file.
​
npm ERR! A complete log of this run can be found in:
npm ERR! C:\Program Files\nodejs\node-cache_logs\2019-08-07T02_34_54_333Z-debug.log
Install for create-nuxt-app@latest failed with code 1


```

The reason is that the node_cache path has spaces

cmd input

```
npm config list


```

You can see

```
cache = "C:\Program Files\nodejs\node_cache"
prefix = "C:\Program Files\nodejs\node_global"


```

Enter again

```
"C:\Program~1\nodejs\node_cache"


```

If you change the path and create the project directly:

```
npx create-nuxt-app 项目名称


```

Later, you will be asked to choose some frameworks and configurations, refer to [www.nuxtjs.cn/guide/install](https://link.juejin.cn?target=https%3A%2F%2Fwww.nuxtjs.cn%2Fguide%2Finstallation "https://www.nuxtjs.cn/guide/installation")

After the creation is complete, enter npm run dev to start the project.

![](/img/icecms/202307/1.png)

## 2. Routing

#### 1. Route jump

![](/img/icecms/202307/2.png)

nuxt routing jump label nuxt-link will be rendered as a label

```
<nuxt-link to="/">首页</nuxt-link>


```

#### 2. Nested Routes

nuxt will automatically generate routes for the vue files in the pages folder. You can see the generated routing files in router.js in the nuxt folder.

```
pages/
--| index/
-----| integratedQuery.vue
-----| integratedQueryResult.vue
--| index.vue


```

The index.vue file should have a tag to display the sub-route page

Subroutes should be placed in a folder with the same name as the parent page.

![](/img/icecms/202307/3.png)

![](/img/icecms/202307/4.png)

#### 3. Dynamic Routing

To define dynamic routes with parameters in Nuxt.js, you need to create corresponding Vue files or directories **with an underscore as the prefix** .

The named file or directory is the parameter name

![](/img/icecms/202307/5.png)

![](/img/icecms/202307/6.png)

## 3. Introduction of plugins

### Using scss in Nuxt

Install using npm

```
npm install --save-dev node-sass sass-loader@10 fibers @nuxtjs/style-resources


```

Configure in nuxt.config.js file

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

Re-run the project npm run dev to use it

### Using echarts in Nuxt

npm import

`npm install echarts`

#### Configuration

Create a new js file in plugins

echarts.js:

```
import Vue from 'vue'
const echarts = require('echarts');
Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）
​


```

nuxt.config.js configuration

```
plugins: [
    '@/plugins/echarts'
],


```

#### use

```
let radarChart = this.$echarts.init(document.getElementById("ElementId"));
radarChart.setOption(...);


```

## 4. asyncData gets data

#### 1. Basic use

The two-way binding data defined in asyncData return; because asyncData is executed before the component is rendered, this cannot be obtained in it.

Axios uses nuxt. It is recommended to use its built-in [axios.nuxtjs.org/](https://link.juejin.cn?target=https%3A%2F%2Faxios.nuxtjs.org%2F "https://axios.nuxtjs.org/") .

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

#### 2. Unable to verify certificate error

`如果接口是http公网IP地址的形式， 有可能会报无法验证证书错误`

Create a new js file under plugins

```
//解决接口无法验证证书问题
import https from 'https';
​
export default function ({ $axios }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
}
​


```

nuxt.config.js configuration

```
plugins: [
    '@/plugins/https'
],


```

## 5. Nuxt packaging and deployment

#### 1. Configuration

In the project package.json configuration, the location is at the same level as scripts

```
"config": {
    "nuxt": {
      "host": "0.0.0.0", //推荐改成服务器公网IP
      "port": 5001 //自定义端口
    }
  },


```

Run the npm run build command to package;

Then put these folders in the project on the server site

```
-- .nuxt
-- static
-- nuxt.config.js
-- package.json


```

#### 2. Possible error

When running npm i on the server, an error may be reported

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

Then my server was fully loaded...

The reason is probably that the default configuration of centos does not have enough virtual memory;

You can refer to [github.com/jackieli123…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjackieli123723%2Fjackieli123723.github.io%2Fissues%2F59 "https://github.com/jackieli123723/jackieli123723.github.io/issues/59")

You can also put the deployed folder locally and run npm install to compress the generated node_modules and upload them to the server (this is what I did);

Open the terminal where the folder is located and enter npm run start to run;

Use the server's public IP to test access: [http://IP address: configured port/](https://link.juejin.cn?target=http%3A%2F%2FIP%25E5%259C%25B0%25E5%259D%2580%3A%25E9%2585%258D%25E7%25BD%25AE%25E7%259A%2584%25E7%25AB%25AF%25E5%258F%25A3%2F "http://IP%E5%9C%B0%E5%9D%80:%E9%85%8D%E7%BD%AE%E7%9A%84%E7%AB%AF%E5%8F%A3/")

ps: Remember to open the server firewall and Baota security rules

But when you close the current terminal, you can no longer access it.

You can use PM2 daemon;

#### 3. PM2 Daemon

**Install**

Use pagoda to install, which comes with node environment; just search PM2 in software store to install;

After installation, create a new site and upload the packaged files;

**run**

```
pm2 start npm --name "项目名称" -- run start


```

**Other related commands**

pm2 list shows all processes

`pm2 stop all` stops all processes

`pm2 stop 0` stops the process with id 0

`pm2 delete 0` deletes the process with id 0

`pm2 startup` creates a boot-up command

`pm2 restart all` restarts all applications

## 6. Initial configuration of nuxt SEO

#### 1. Keywords and titles

Here we take bilibili as an example

![](/img/icecms/202307/7.png)

Configuration in nuxt

![](/img/icecms/202307/8.png)

#### 2. Sitemap

Sitemap is a list of web pages on a website, which allows search engines to index them faster. It is usually an XML file, but Baidu's TXT file seems to work too.

**Configure sitemap in nuxt**

Install @nuxtjs/sitemap

`npm i @nuxtjs/sitemap -D`

Add it in nuxt.config.js

```
modules: [
    '@nuxtjs/sitemap'
],


```

And add configuration at the same level as modules

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

npm run dev test will generate a sitemap

![](/img/icecms/202307/9.png)

For configuration parameters, please refer to the official website [www.npmjs.com/package/@nu…](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40nuxtjs%2Fsitemap%23usage "https://www.npmjs.com/package/@nuxtjs/sitemap#usage")

#### 3. Chrome included

Google SEO Console [search.google.com/search-cons…](https://link.juejin.cn?target=https%3A%2F%2Fsearch.google.com%2Fsearch-console%2Fwelcome%3Faction%3Dinspect%26utm_medium%3Dreferral%26utm_campaign%3D9012289 "https://search.google.com/search-console/welcome?action=inspect&utm_medium=referral&utm_campaign=9012289")

The first time you enter, you will verify the ownership of the website

Just put the HTML file generated by Google in the static directory

**Test whether the generated sitemap is usable**

![](/img/icecms/202307/10.png)

Just enter the sitemap.xml here and submit it.

**Request indexing**

![](/img/icecms/202307/11.png)

Next, wait for Google crawler to index the website.

Rankings are related to user search clicks and website content.
