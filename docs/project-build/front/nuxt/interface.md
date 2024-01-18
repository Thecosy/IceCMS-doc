---
id: interface
title: 添加 SEO 关键信息
sidebar_label: 添加 SEO 关键信息
---

# 添加 SEO 关键信息


> 以已有的 Vue SPA 为基础，为其增加发布纯静态页面的功能。会介绍 Nuxt.js 的设计思路，及如何结合这个思路来达成我们的目标。

SEO，中文全称 “搜索引擎优化”，英文全称 Search Engeine Optimization，简写即 SEO。SEO 虽然名为 “搜索引擎优化”，但其实优化的并不是搜索引擎，而是我们自己的页面。目的是提升我们的网页在搜索引擎中的排名。

要知道，流量是很贵的，最便宜的也要好几块 / 人，那些消费能力强、消费欲望高的用户，一个可能要卖 300+。所以对于老板来说，如果能够通过 SEO，让我们的网页排到更靠前的位置，引来更多的用户，那么就等于省去了很大一笔费用。所以显而易见，SEO 对他们来说吸引力很大。

对于我们前端来说，SEO 的需求不可避免，那么如何做呢？这需要我们对搜索引擎的原理有一些理解。我简单介绍一下：

1.  搜索引擎会抓取所有页面
2.  然后搜索引擎会分析每个页面，对内容进行分词，对每个词进行打分
3.  最终得到 “所有网页” 里“所有内容”的评分
4.  当用户输入搜索关键词的时候，寻找评分最高的页面倒序显示

> 如果想了解更详细的搜索引擎知识，我推荐大家阅读吴军博士的《数学之美》，虽然我觉得他的其它作品水平不佳，但这本书科学内容比较多，还是蛮值得看的。

换言之，SEO，就是要让我们的网页针对某个关键词，得分更高。一般来说，有以下工作：

1.  `<title>` 里应该包含关键词
2.  `<meta >` 里应该包含关键词
3.  页面内的标题，即 `<h1>`、`<h2>` 等，应该包含关键词
4.  图片等元素的 `alt` 属性，应该包含关键词
5.  其它正文中，应保持一些关键词密度，比如每一段，每一百个字等，都要出现至少一次关键词

具体到网站生成工作中，(3)(4)(5) 通常都由运营 / 编辑 / 内容团队负责，我们真正能做的，就是 (1)(2)，也就是接下来的组件使用。

[#](#组件) 组件
-----------

首先，在页面组件里，添加 `head` 属性，用来返回头信息。在本次项目中，它必须是个函数，根据页面数据动态返回值：

```
export default {
  head() {
    if (!this.meta) {
      return;
    }
    return {
      title: this.meta.title,
      meta: [
        {
          vmid: 'keywords',
          name: 'keywords',
          content: this.meta.keywords,
        },
        {
          vmid: 'description',
          name: 'description',
          content: this.meta.description,
        },
      ],
      script: [
        {
          body: true,
          defer: true,
          src: 'https://unpkg.com/swiper@4.5.0/dist/js/swiper.min.js',
        },
        {
          body: true,
          defer: true,
          scr: '/footer.js',
        },
      ],
    };
  },
}


```

有些时候，我们会在 `nuxt.config.js` 里配置默认的 meta 信息，为了避免页面的 meta 信息和默认 meta 信息重复出现，所以要用到 `vmid`（在组件里） 和 `hid`（在配置里）。这样同样 id 的头信息就只出现一个，权重当然是页面更高。

接下来 `script` 的部分，可以通过 `body` 属性控制 `<script>` 插入的位置，默认为 `false`，插入 `<head>`。这里当然应该放在 `</body>` 之前。静态网页不需要 Vue 那些很复杂的交互，所以在上一章中，我通过 `render` 属性把它们去掉了。但是有一些其它交互要添加进来，比如头图切换用 swiper，还有统计代码。所以要插入一个 `footer.js` 进去。

这里需要注意，Nuxt.js 并不会调用 webpack 去处理这里的 JS，所以我们需要人工控制它们的路径。下一章你会看到，我是直接复制文件到 `static` 文件夹的，所以它的路径也就写成固定的 `/footer.js`。如果你有 `publicPath` 之类的需求，还要自己处理一下哦。

[#](#配置文件) 配置文件
---------------

配置文件里的内容上一章展示过：

```
module.exports = {
  head: {
    titleTemplate: '%s - Meathill',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
    ],
  },
}


```

好像没什么可说的…… 我暂时只用到标题模板，比如一个页面标题是 “今天晚上吃什么？”，就会渲染成：“今天晚上吃什么？ - Meathill”。其它选项大家可以参考 [Vue Meta > API > metaInfo propertiesopen in new window](https://vue-meta.nuxtjs.org/api/#base)。

渲染静态页的时候，vue-meta 似乎不是必须的；换言之，我一开始用了 vue-meta，没有配 `head`，也没有输出需要的 meta 信息。