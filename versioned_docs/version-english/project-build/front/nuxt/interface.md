---
id: interface
title: Add SEO key information
sidebar_label: Add SEO key information
---

# Add SEO key information

> Based on the existing Vue SPA, we will add the function of publishing pure static pages. We will introduce the design ideas of Nuxt.js and how to combine this idea to achieve our goals.

SEO, the full name of which is "Search Engine Optimization" in Chinese, is also called "Search Engine Optimization" in English. Although SEO is called "Search Engine Optimization", it actually does not optimize search engines, but our own web pages. The purpose is to improve the ranking of our web pages in search engines.

You know, traffic is very expensive, the cheapest one costs several yuan per person, and those users with strong spending power and high spending desire may sell one for more than 300 yuan. So for the boss, if we can use SEO to make our webpage rank higher and attract more users, it means saving a lot of money. So it is obvious that SEO is very attractive to them.

For our front-end, the need for SEO is inevitable, so how to do it? This requires us to have some understanding of the principles of search engines. Let me briefly introduce:

1. Search engines crawl all pages
2. The search engine will then analyze each page, segment the content, and score each word.
3. Finally, we get the score of "all content" in "all web pages"
4. When a user enters a search keyword, the page with the highest score is displayed in reverse order.

> If you want to know more detailed search engine knowledge, I recommend you to read "The Beauty of Mathematics" by Dr. Wu Jun. Although I think his other works are not as good, this book has a lot of scientific content and is still worth reading.

In other words, SEO is to make our web pages score higher for a certain keyword. Generally speaking, there are the following tasks:

1. `<title>` should contain keywords
2. `<meta >` should contain keywords
3. The page title, i.e. `<h1>` , `<h2>` , etc., should contain keywords
4. The `alt` attribute of elements such as pictures should contain keywords
5. In other texts, the density of keywords should be maintained, for example, at least one keyword should appear in every paragraph, every 100 words, etc.

When it comes to website generation, (3)(4)(5) are usually handled by the operations/editing/content team. What we can really do is (1)(2), which is the subsequent use of components.

## [#Components](#%E7%BB%84%E4%BB%B6)

First, in the page component, add `head` attribute to return the header information. In this project, it must be a function that returns a value dynamically based on the page data:

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

Sometimes, we will configure the default meta information in `nuxt.config.js` . In order to avoid the page's meta information and the default meta information from being repeated, we need to use `vmid` (in the component) and `hid` (in the configuration). In this way, only one header information with the same id will appear, and the weight of the page is of course higher.

Next, in `script` part, you can control the insertion position of `<script>` through the `body` attribute. The default value is `false` , which means inserting it into `<head>` . Of course, it should be placed before `</body>` . Static web pages do not need those complex interactions of Vue, so in the previous chapter, I removed them through `render` attribute. But there are some other interactions to be added, such as swiper for switching the header image, and statistics code. So a `footer.js` should be inserted.

It should be noted here that Nuxt.js does not call webpack to process the JS here, so we need to manually control their paths. In the next chapter, you will see that I copied the file directly to the `static` folder, so its path is fixed as `/footer.js` . If you have requirements such as `publicPath` , you have to handle it yourself.

## [#Configuration](#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6) File

The contents of the configuration file were shown in the previous chapter:

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

There's not much to say... I'm only using the title template for now, so for example, if the page title is "What's for dinner tonight?", it will render as: "What's for dinner tonight? - Meathill". For other options, you can refer to [Vue Meta &gt; API &gt; metaInfo propertiesopen in new window](https://vue-meta.nuxtjs.org/api/#base) .

When rendering static pages, vue-meta does not seem to be necessary; in other words, I used vue-meta at the beginning, but did not configure `head` and did not output the required meta information.
