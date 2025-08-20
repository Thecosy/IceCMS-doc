---
title: 2024 年 React 生态系统 - 保持流行
description: 我们将探讨 React 生态系统以及为支持 React 而创建的工具和库。
slug: react-js-ecosystem-in-2024-zh
authors: chidume_nnamdi
tags: [comparison, react, chinese]
image: https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-01-11-react-ecosystem-2024/social.png
hide_table_of_contents: false
---

### 引言

React.js 无疑是全球最受欢迎的前端库。许多公司都在使用它，包括 Facebook、Instagram、Netflix、Twitter 和 Uber。React.js 之所以广受欢迎，是因为它简单易用，并简化了基于组件的设计理念。

React.js 的生态系统也随之蓬勃发展。许多工具和库都是为它而构建的，现有的工具和库也推出了 React 版本。

然而，许多工具和库都是为了解决同样的问题而创建的。例如，有许多路由库、数据管理库和 UI 组件库，这使得为您的项目选择合适的工具变得困难。

在本文中，我们将探讨 React 生态系统以及为支持 React 而创建的工具和库。

## React 元框架

元框架（meta-framework）是建立在另一个框架之上的、具有更高抽象层次的框架。元框架使得使用底层框架构建应用程序变得更加容易。

React.js 仅仅提供了应用程序的视图层，可能不提供路由、数据管理、HTTP 请求等其他功能，或者提供的功能非常基础。

而 React 元框架则提供了所有这些功能，例如：

-   认证
-   安全性
-   路由
-   数据提供者
-   数据库连接
-   样式
-   布局

下面我们来看看 2024 年最受欢迎的 React 元框架：

### Next.js

[Next.js](https://nextjs.org/) 是一个为 React.js 应用程序提供 SSR/SSG 支持的元框架。
Next.js 的优势在于：

**内置优化**
Next.js 内置了生产环境的优化，支持：

图片：Next.js 扩展了 `<img>` 标签，支持懒加载并自动优化图片加载性能。它可以为每种设备自动提供正确尺寸的图片，防止布局偏移，并自动调整远程图片的大小。

Next.js 还可以优化字体和脚本，以实现更快的 Web 性能和改进的核心 Web 指标（Core Web Vitals）。

**流式传输（Streaming）** Next.js 可以在页面被提供时将其流式传输到客户端，这减少了首字节时间（time to first byte），并提高了应用程序的感知性能。

**增量静态再生（Incremental Static Regeneration）** Next.js 可以在静态页面构建后对其进行更新，这使我们无需重新构建整个站点即可更新页面，对于频繁更新的页面非常有用。

**预取（Prefetching）** Next.js 可以预取用户可能访问的页面，从而提高应用程序的感知性能。

**React 服务器组件（React Server Components）** 我们可以在 Next.js 中编写服务器渲染的组件。这非常好，因为我们可以在服务器端进行数据获取，组件也可以在服务器端缓存，减少了包大小（因为我们不需要将组件发送到客户端），缩短了初始加载时间，并改善了 SEO。

### [Refine](https://github.com/Thecosy/IceCMS)

[Refine](https://github.com/Thecosy/IceCMS) 是一个用于构建基于 React 的内部工具、管理面板、仪表盘和 B2B 应用的 React 元框架。

它是一个面向企业的开源项目，在撰写本文时，在 [GitHub 上拥有超过 18,000 颗星](https://github.com/Thecosy/IceCMS)。它有超过 8,000 个应用在生产环境中使用，我们的开源社区中有超过 32,000 名活跃开发者，以及超过 200,000 名最终用户在使用由 Refine 构建的应用。

Refine.js 是构建 CRM 应用、HR 应用、财务规划系统、库存管理系统等的理想工具。它为您的数据搭建了一个完整的 CRUD 界面，并提供了许多开箱即用的功能。

Refine 提供了选择数据提供者、认证提供者和样式库的选项，还提供了许多插件来扩展其功能。

我们可以选择使用的 React 平台：

-   Next.js
-   Remix
-   Vite 打包的 React

它本身是无头的（headless），但也为以下 UI 框架提供了内置支持：

-   Ant Design
-   Chakra UI
-   Material UI
-   Mantine UI

可使用的后端：

-   超过 15 种后端服务，包括 REST API、GraphQL、NestJs CRUD、Airtable、Strapi、Strapi v4、Strapi GraphQL、Supabase、Hasura、Appwrite、Firebase、Nestjs-Query 和 Directus。

可使用的认证提供者：

-   Google Auth
-   Auth0
-   Okta
-   AWS Cognito

Refine 内部支持 i18n 框架，您无需安装外部工具。此外，您可以轻松审计日志、版本化文档，并且它对 React Query 提供了完美的状态管理。

设置一个 Refine 项目：

```bash
npm create refine-app@latest
```

您也可以在浏览器中从[这里](https://refine.dev/?playground=true)创建一个 Refine 项目。

### Remix

[Remix](https://remix.run/) 是一个全栈框架，让您可以使用 React、服务器渲染组件和零构建配置来构建应用。

Remix 利用分布式系统和原生浏览器功能，提供了快速、安全且易于使用的服务器和客户端运行时。

Remix 以提供最快的首次加载体验而闻名，同时也以其安全性、易用性著称。

Remix 拥有许多功能，包括广泛的钩子（hooks）和内置组件。例如，我们可以使用 `<Await>` 组件来等待一个 Promise 解析后再渲染子组件，也可以使用 `<Outlet>` 组件来渲染父路由的子组件。

还有 `<Meta>` 用于设置页面的标题和描述，`<Link>` 用于链接到其他页面，`<Form>` 用于处理表单提交，`<Image>` 用于渲染图片，`<Script>` 用于渲染应用的客户端运行时。

## 路由

路由是 Web 应用程序中最重要的部分之一，它是根据 URL 确定要渲染哪个页面的过程。

让我们来看看 React 可用的不同路由库。

### Next.js

Next.js 内置了对路由的支持，它使用文件系统来确定应用程序的路由，并支持动态路由。

路由在 `pages` 目录中设置。例如，如果我们有一个名为 `pages/about.tsx` 的文件，它将在 `/about` 路由下渲染。

### React Router

这是 React 最受欢迎的路由库，在 [Github 上有超过 50,000 颗星](https://github.com/remix-run/react-router)。许多公司都在使用它，包括 Facebook、Instagram、Netflix、Twitter 和 Uber。

React Router 是 React 开发者默认安装的路由库，它非常易于使用，并拥有许多功能。

它有许多内置的钩子来帮助路由，例如 `useParams` 用于获取当前路由的参数，`useLocation` 用于获取当前位置，`useHistory` 用于获取当前路由的历史记录，`useRouteMatch` 用于获取当前路由的匹配项。

它还有许多组件来帮助路由，例如 `Link` 用于链接到其他页面，`NavLink` 用于链接到带有活动类的其他页面，`Prompt` 用于在用户尝试离开当前页面时显示提示，`Redirect` 用于重定向到另一个页面，`Route` 用于根据当前路由渲染组件，`Switch` 用于渲染第一个匹配的路由。

### TanStack Router

[TanStack Router](https://tanstack.com/router/v1) 是一个为 suspense 和 transitions 构建的 React 路由库，它内置了处理数据获取和过渡的能力。

TanStack Router 提供完整的 TypeScript 支持、类型安全的导航和嵌套路由，以及为路由加载器内置的 SWR 缓存。

它针对客户端数据缓存进行了优化，并支持自动预取、异步组件和错误边界。

## 客户端状态数据管理

在 React 中管理客户端状态数据有多种方法。React 有其内置的方法，但也有一些库在其之上构建，使其更易于使用。

### Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/) 是官方的、有主见的、功能齐全的 Redux 开发工具集，是编写 Redux 逻辑的推荐方式。

它简单、强大、有效且有主见。Redux Toolkit 也可以在 Next.js 中使用，并且已经构建了其他 React 扩展，例如 React-Redux。
我们可以在 Immer 中编写 reducers，因此 Redux Toolkit 与 Immer 集成得很好。

### Jotai

[Jotai](https://jotai.org/) 是一个用于 React 的原始且灵活的状态管理库，它建立在 React Hooks 和 Context API 之上。

它采用原子化的方法进行全局 React 状态管理。原子方法源于 React 中的钩子概念，可以创建和管理任何类型的状态，可以对其执行操作，并保持其状态。

```jsx
import { atom } from "jotai";

const countAtom = atom(0);
const countryAtom = atom("Japan");
const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
const mangaAtom = atom({
  "Dragon Ball": 1984,
  "One Piece": 1997,
  Naruto: 1999,
});
```

Jotai 目前在 [NPM 上有 2800 万次下载](https://www.npmjs.com/package/jotai)，在 [Github 上有超过 15,000 颗星](https://github.com/pmndrs/jotai)，在 [Discord 上有 1,208 名活跃成员](https://discord.gg/poimandres)。

它的包大小仅为 [2.78kB](https://bundlephobia.com/result?p=jotai)，因此非常轻量，不会对您的包大小产生任何影响。

许多公司都在使用 Jotai，例如 [Ping](https://ping.gg/)、[Candycode](https://candycode.com/)、[Adobe](https://www.adobe.com/)、[TikTok](https://www.tiktok.com/)、[Uniswap](https://uniswap.org/) 等。

### Zustand

[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) 是一个小型、简约的 React 状态管理库，它使用了 Flux 原则。它非常轻量，包大小非常小。

Zustand 支持 TypeScript，您可以使用 Immerjs 创建不可变状态，并且可以与其他第三方库（如 mobx 等）很好地集成。
它的包大小为 [1.18kB](https://bundlephobia.com/result?p=zustand)，在 [Github 上有超过 38,000 颗星](https://github.com/pmndrs/zustand)，在 [NPM 上有 1.18 亿次下载](https://www.npmjs.com/package/zustand)，在 [Discord 上有 1,222 名活跃用户](https://discord.gg/poimandres)。

Zustand 设置了一个[实时演示，您可以在其中试用](https://githubbox.com/pmndrs/zustand/tree/main/examples/demo)。

只需运行：

```bash
npm install zustand
```

## 服务器端数据管理

React 有许多用于管理服务器端数据的库。

### Tanstack Query

Tanstack 库的另一个成员，[Tanstack Query](https://tanstack.com/query/v3/) 是一个用于 React 和 React Native 的数据获取和缓存库。

Tanstack Query 在数据获取中采用声明式方法，您不必手动编写数据获取逻辑，只需指向数据所在的位置，它就会为您获取数据。

Tanstack Query 非常简单易懂，与 Promise 和 async-await 代码风格非常相似。它具有高度的可扩展性和可配置性。
许多公司都采用了 Tanstack Query，例如 Facebook、Paypal、Amazon、Microsoft、ebay 等。

Tanstack Query 在 [Github 上有超过 38,000 颗星](https://github.com/tanstack/query)，在 [NPM 上有 1100 万次下载](https://www.npmjs.com/package/@tanstack/query-core)，其大小为 [38.1kb 到 11.3kb (gzip)](https://bundlejs.com/?q=%40tanstack%2Freact-query&config=%7B%22esbuild%22%3A%7B%22external%22%3A%5B%22react%22%2C%22react-dom%22%5D%7D%7D&badge=)。

### SWR

这是由 Vercel（Next.js 的创建者）开发的库，是一个用于远程数据获取的 React Hooks 库。

SWR 代表 stale-while-revalidate，这是一种缓存策略，允许我们在后台获取新数据的同时使用旧数据。

[SWR](https://swr.vercel.app/) 库使用此策略来获取和缓存我们的数据。

示例：

```tsx
import useSWR from "swr";

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>加载失败</div>;
  if (isLoading) return <div>加载中...</div>;
  return <div>你好 {data.name}!</div>;
}
```

传递给它的键是第一个参数 `/api/user`，这是它用来缓存从 URL 返回的数据的键。因此，第一个参数是获取数据的 URL，也是缓存数据的键，我们可以使用该键检索缓存的数据。
SWR 轻量、快速，并支持服务器端渲染、增量端渲染和服务器端生成。

SWR 在 [Github 上有超过 28,000 颗星](https://github.com/vercel/swr)，[最小化大小为 4.4kB](https://bundlephobia.com/result?p=swr)。

## HTTP

让我们来看看 React 最常用的 HTTP 库。

### Axios

这是世界上最受欢迎和广泛使用的 HTTP 库。
[Axios](https://axios-http.com/) 是一个基于 Promise 的用于 Node.js 和浏览器的 HTTP 客户端库。

它非常易于使用：

```tsx
import axios from "axios";
axios.get("/users").then((res) => {
  console.log(res.data);
});
```

Axios 具有令人难以置信的功能：

-   从浏览器发出 XMLHttpRequests
-   从 Node.js 发出 http 请求
-   拦截请求和响应
-   转换请求和响应数据
-   取消请求
-   自动转换 JSON 数据
-   客户端支持防止 XSRF
-   等等

上面的代码向 `/users` 端点发出 HTTP 请求，并将响应数据记录到控制台。

许多公司都在使用 Axios，例如 [Stytch](https://stytch.com/?utm_source=axios&utm_medium=sponsorlist&utm_campaign=sponsorship)、[Incognito](https://opencollective.com/user-5d607d62?utm_source=axios&utm_medium=sponsorlist&utm_campaign=sponsorship)、[nonGamstop casinos](https://nongamstopcasinos.net/gb)、[Casino reviews](https://www.casinoreviews.net/)、[BairesDev](https://www.bairesdev.com/sponsoring-open-source-projects) 等。

Axios 在 [Github 上有超过 103,000 颗星](https://github.com/axios/axios)，在 [NPM 上每月有超过 2.09 亿次下载](https://npm-stat.com/charts.html?package=axios)，是的，您没看错。[安装大小为 2.07MB](https://packagephobia.now.sh/result?p=axios)，[最小化大小为 11.8kB](https://bundlephobia.com/package/axios@latest)。

### SWR

该库也用于数据获取，并具有数据缓存功能。

### RTK Query

RTK Query 是一个用于数据获取和缓存的库。RTK Query 在其 API 设计中增加了一种独特的方法，其数据获取和缓存功能建立在 Redux Toolkit 之上。
RTK Query 可以生成钩子，我们可以使用这些钩子进行数据获取，并管理缓存数据的生命周期。

## 表单

我们可以使用内置的表单元素在 React 中处理表单。然而，有一些库可以使在 React 中处理表单变得更容易。

### Formik

[Formik](https://formik.org/) 是在 React 中构建表单最受欢迎的工具。它具有声明性、适应性和直观性。使用 Formik，我们可以在 React 中轻松构建表单。
Formik 使创建和处理表单感觉就像魔术一样。它处理表单的状态、验证、提交和错误处理，省去了我们连接状态和更改处理程序的时间。

使用 Formik，您不需要使用 Observables、订阅或任何其他花哨的东西。
要使用 Formik，我们需要安装它：

    npm install formik

然后我们可以在我们的 React 应用中使用它：

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>联系我们</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">提交</button>
        </Form>
      </Formik>
    </div>
  );
}
```

看它的声明性，我们只需要传递初始值和提交处理程序，Formik 将处理其余部分。

Formik 是可摇树的（tree-shakeable）并支持 i18n。我们可以添加自定义验证，它可以处理 API 错误、表单和字段级别的错误。

它与 Material UI 集成得很好。

Formik 在全球被许多公司使用，例如 Nasdaq、美国陆军、Booking.com、Lyft、NASA 等。

Formik 在 [Github 上有超过 30,000 颗星](https://github.com/jaredpalmer/formik)，并且有[超过 100 名用户在线活跃](https://discord.gg/pJSg287)。

### React Hook Form

[React Hook Form](https://react-hook-form.com/) 是一个流行、灵活且可扩展的用于在 React 中构建表单的库。它非常轻量，包大小很小，而且速度非常快。

它性能很高，通过最小化重新渲染次数、验证计算和减少内存分配来实现。

入门简单：

```
npm install react-hook-form
```

示例[代码](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm)：

```tsx
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // 通过传递输入名称来观察输入值

  return (
    /* "handleSubmit" 将在调用 "onSubmit" 之前验证您的输入 */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 通过调用 "register" 函数将您的输入注册到钩子中 */}
      <input defaultValue="test" {...register("example")} />

      {/* 包括 required 或其他标准 HTML 验证规则的验证 */}
      <input {...register("exampleRequired", { required: true })} />
      {/* 当字段验证失败时，errors 将返回 */}
      {errors.exampleRequired && <span>此字段是必需的</span>}

      <input type="submit" />
    </form>
  );
}
```

它有大量的钩子可供使用，内置验证，与 UI 库、受控输入、状态和服务的集成。

React Hook Form 在 [Github 上有超过 30,000 颗星](https://github.com/react-hook-form/react-hook-form)，在 [NPM 上有 2.38 亿次下载](https://www.npmjs.com/package/react-hook-form)。它在 [Discord 上有 385 名用户](https://discord.gg/yYv7GZ8)。

它得到了 Casino Reviews、Vercel 和 BeekAI 的支持和支持。

### React Final Form

React Final Form 是一个基于订阅的 React 表单状态管理库。
它是模块化的，这意味着我们只使用我们需要的部分，您不需要为了两个字段而下载整个库。

它没有依赖项，不依赖于任何其他库的功能，一切都是内置的。

它速度非常快，包大小很小，而且非常易于使用。

它与 React 钩子兼容。

许多大公司都在使用 React Final Form，例如 Google、Cisco、Salesforce、Yandex、TED、Nokia 等。

React Final Form 在 [Github 上有 7.3K 颗星](https://github.com/final-form/react-final-form)，在 [NPM 上每月有多达 130 万次下载](https://www.npmjs.com/package/react-final-form)，并且有 [8 个赞助商](https://github.com/final-form/react-final-form?tab=readme-ov-file#sponsors)。

安装简单：

```
npm install --save final-form react-final-form
```

然后，使用：

```tsx
import { Form, Field } from "react-final-form";

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>简单的默认输入</h2>
        <div>
          <label>名字</label>
          <Field name="firstName" component="input" placeholder="名字" />
        </div>

        <h2>任意可重用输入组件</h2>
        <div>
          <label>兴趣</label>
          <Field name="interests" component={InterestPicker} />
        </div>

        <h2>渲染函数</h2>
        <Field
          name="bio"
          render={({ input, meta }) => (
            <div>
              <label>简介</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <h2>作为子元素的渲染函数</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>电话</label>
              <input type="text" {...input} placeholder="电话" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button type="submit">提交</button>
      </form>
    )}
  />
);
```

## 测试

React 测试子生态系统中有许多测试库，让我们来看看其中的一些。

### Jest

[Jest](https://jestjs.io/) 是一个 JavaScript 测试框架，旨在确保任何 JavaScript 代码库的正确性。它允许您使用平易近人、熟悉且功能丰富的 API 编写测试，并快速获得结果。

它注重简单性，除了 React，Jest 还可以与 Angular、Node、Vue、TypeScript 等很好地集成。

它零配置、快速安全，并拥有出色的文档和 API。
我们可以轻松地在 Jest 中应用模拟（mocks），并生成清晰简洁的代码覆盖率报告。它有许多匹配器和插件。

许多公司都在使用 Jest！Facebook、Twitter、纽约时报、Spotify、Airbnb、Instagram 等。
它由 Airbnb、777、Prinicipla Financial Group、Katalon、Transloadit 等赞助，并得到 20 多个团体和个人的支持。

### React Testing Library

[React Testing Library](https://testing-library.com/) 是一个用于渲染和测试 React 组件的强大库，它非常简单易用。

我们可以为我们的 React 组件编写测试，而无需担心实现细节。我们可以编写更易于维护、更少脆弱的测试。测试是用 JSX 编写的，React Testing Library 让我们能够测试它的许多方面。
除了 React，React Testing Library 还适用于 Vue、Angular、Svelte 等。

设置简单，只需运行：

```bash
npm install --save-dev @testing-library/react
```

然后您就可以开始编写测试了。

此外，我们可以使用 React Testing Library 测试钩子，这是通过 `renderHook` API 完成的。我们可以测试组件是否在 DOM 文档中渲染，可以测试快照，并从 DOM 中获取文本和元素进行测试。

React Testing Library 非常强大且非常有用。它在 [Github 上有 18,329 颗星](https://github.com/testing-library/react-testing-library)，[每月有 3700 万次下载](http://www.npmtrends.com/@testing-library/react)，并有 [141 名贡献者](https://github.com/testing-library/react-testing-library#contributors)。

### Playwright

[Playwright](https://playwright.dev/) 主要用于 E2E（端到端）测试。它是一个用于 Web 测试和自动化的框架，它有一个单一的 API，可以实现跨浏览器测试。

要设置 Playwright，我们需要安装它：

```
npm i -D @playwright/test
# 安装支持的浏览器
npx playwright install
```

Playwright 在 [Github 上有超过 57,000 颗星](https://github.com/microsoft/playwright)，并被许多公司和开源项目广泛选择和使用，例如 VS Code、Bing、Outlook、Disney Plus Hotstar 等。

### Cypress

[Cypress](https://www.cypress.io/) 是一个用于编写测试、自动化测试的库，并加速了测试的编写、运行和通过持续集成的过程。

Cypress 用于单元测试和 e2e 测试，并且运行测试非常快。没有服务器、驱动程序或其他依赖项需要安装或配置。

它通过在与应用程序相同的运行循环中运行测试来消除不稳定的测试。这使得 Cypress 能够控制测试运行的各个方面，包括网络、浏览器和页面内容。

它与许多 CI 提供商集成得很好，例如 CircleCI、TravisCI、Jenkins、BitBucket、GitLab 和 Github。

它[每周有超过 500 万次下载](https://www.npmjs.com/package/cypress)，[在 Github 上有超过 45,000 颗星](https://github.com/cypress-io/cypress)，以及超过 100 万个依赖它的仓库。

安装和使用非常简单：

```bash
npm install cypress --save-dev
```

示例：

```tsx
import TodoList from "./components/TodoList";

it("包含正确数量的待办事项", () => {
  const todos = [
    { text: "买牛奶", id: 1 },
    { text: "学习组件测试", id: 2 },
  ];

  cy.mount(<TodoList todos={todos} />);
  // 组件像一个迷你 Web 应用一样开始运行
  cy.get('[data-testid="todos"]').should("have.length", todos.length);
});
```

## 无头 CMS

有几个与 React 集成得很好的无头 CMS，让我们来看看其中的一些。

### Strapi

[Strapi](https://strapi.io/) 是一个开源的无头内容管理系统 (CMS)，旨在使创建、编辑和管理内容变得容易。

Strapi 还具有高度可定制性，允许开发人员快速为他们的应用程序构建自定义后端。此外，Strapi 附带了一套广泛的 API，使其易于与其他服务和平台集成。

Strapi 与多个数据库集成得很好，例如 MongoDB、Postgres、MySQL、SQLite 等。它有许多插件和功能。[文档](https://docs.strapi.io/)非常棒，清楚地说明了 Strapi 的所有功能。

它有一个很棒的管理面板，使我们能够创建内容、集合，甚至测试它们。它还有可以根据集合中的某些事件触发的 webhook。

Strapi 非常受欢迎，在 [Github 上有 57.8K 颗星](https://github.com/strapi/strapi)，在 [Discord 上有 2,202 名活跃用户](https://discord.strapi.io/)。

### Sanity

[Sanity](https://www.sanity.io/) 是一个现代化的无头 CMS 工具，在全球范围内使用。Sanity 有超过 50 万个项目使用它构建，创建了 5000 万个文档，每月有 200 亿次 API/CDN 请求，每月提供 1PB 的内容。

开始使用 Sanity 的简单方法：

```bash
npm create sanity@latest
```

像 Nike、Brex、Figma、CloudFlare、Shopify 等大公司都在使用 Sanity。

## 样式

我们将看看 React 的样式库。

### Tailwind CSS

[Tailwind](https://tailwindcss.com/) 是一个基于实用工具的 CSS 框架，它有许多实用工具类，可用于为我们的组件设置样式。

这些实用工具类是针对特定样式选择器的 CSS 类。例如，我们可以使用 `bg-red-500` 将元素的背景颜色设置为红色。

例如，Tailwind 有这些 `flex`、`pt-4`、`text-center` 和 `rotate-90` 类。`flex` 是一个具有如下 CSS 样式的类：

```
.flex {
    display: flex;
}
```

因此，当我们在元素上使用 `flex` 类时，它将应用 `display: flex` CSS 属性。

开始使用 Tailwind 非常简单：

```
npm install -D tailwindcss
npx tailwindcss init
```

我们还可以通过 Tailwind 的实用工具类设置事件。

```
<button class="bg-sky-500 hover:bg-sky-700 ...">保存更改</button>
```

它还有一个[游乐场](https://play.tailwindcss.com/)，您可以在其中进行测试。

它在 [Github 上有 74.5K 颗星](https://github.com/tailwindlabs/tailwindcss)，在 [NPM 上有 4.1 亿次下载](https://www.npmjs.com/package/tailwindcss)。

### Styled Components

[Styled Components](https://styled-components.com/) 是一个 CSS-in-JS 库，允许我们在 JavaScript 代码中编写 CSS。它非常易于使用，并具有许多功能。

示例：

```
const Button = styled.button`
      width: 11rem;
    `;
```

这将创建一个按钮组件，并将其宽度设置为 11rem。

通过以下方式安装：

```bash
npm install styled-components
```

我们可以使用 Styled Components 创建动画和主题化我们的应用程序。Styled Components [非常强大，并具有许多功能](https://styled-components.com/docs)。

它在 [Github 上有超过 39,000 颗星](https://github.com/styled-components/styled-components)，在 [NPM 上有 2700 万次下载](https://www.npmjs.com/package/styled-components)。

### Emotion

[Emotion](https://emotion.sh/docs/introduction) 是另一个用于使用 JavaScript 编写 CSS 的库。它使用与 Styled Components 相同的标记模板字符串语法。

语法与 Styled Components 非常相似，因此非常易于使用。

```tsx
import { css } from "@emotion/react";

<div
  className={css`
    padding: 32px;
    background-color: hotpink;
  `}
>
  悬停以更改颜色。
</div>;
```

上面的代码创建了一个具有粉红色背景和 32px 内边距的 div 元素。
Emotion 支持媒体查询、嵌套选择器和组合。

Emotion 在 [Github 上有超过 16,000 颗星](https://github.com/emotion-js/emotion)，[15 个赞助商](https://github.com/emotion-js/emotion#sponsors)和 [33 个支持者](https://github.com/emotion-js/emotion#backers)。

## UI 组件库

我们有许多可以在我们的 React 项目中使用的 UI 组件库。

### Material UI

[Material UI](https://mui.com/) 是世界上最受欢迎的 UI 组件库之一，如果不是最受欢迎的话。许多公司都在使用它，例如 Uber、Netflix、Twitter 等。

它基于 [Material Design](https://m3.material.io/)，由 Google 开发和维护，最初是为 Angular 设计的，但现在已经移植到 React、Vue、Svelte 等。

Material UI 是一个用于 React 的 UI 组件库，用于构建美观流畅的界面和 UI。它有大量的组件，如卡片、按钮等。它有用于布局、实用工具、导航、表面、反馈、数据显示等的组件。

它有用于主题、间距、排版等的自定义选项。
Material UI 在 [Github 上有 90,000 颗星](https://github.com/mui/material-ui)，在 [NPM 上每月有 1400 万次下载](https://www.npmjs.com/package/@mui/material)。

### Mantine UI

[MantineUI](https://mantine.dev/) 是一个现代且响应式的 React.js 用户界面库。
它是一个功能齐全的 React 组件库，包括一套全面的组件、实用工具和样式，使构建 Web 应用程序的用户界面变得容易。它还提供了一个直观且易于访问的设计，使其成为各种项目的理想选择。

Mantine 在 [Github 上有超过 22,000 颗星](https://github.com/mantinedev/mantine)，[每月有 130 万次下载](https://www.npmjs.com/package/@mantine/hooks)，并有 [459 名贡献者](https://github.com/mantinedev/mantine/graphs/contributors)。

### Ant Design

[Ant Design](https://ant.design/) 是另一个 UI 组件库。它非常受欢迎，并拥有大量的组件。

Ant Design 在 [Github 上有 88.8K 颗星](https://github.com/ant-design/ant-design)，在 [NPM 上每月有 570 万次下载](https://npmjs.org/package/antd)。

### Chakra UI

[Chakra UI](https://chakra-ui.com/) 是一个开源的 React UI 库，提供用于构建用户界面的组件。

它被设计为可访问和可组合的，这使得组合组件以创建自定义用户体验变得容易。Chakra UI 还支持主题和样式，使其易于自定义应用程序的外观和感觉。

您可以通过安装它轻松入门：

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

然后导入您需要的组件：

```
import { Button } from "@chakra-ui/react";
```

Chakra UI 在 [Github 上有超过 35,000 颗星](https://github.com/chakra-ui/chakra-ui)，在 [NPM 上每月有 210 万次下载](https://camo.githubusercontent.com/4961fcbc4cf7b1e7c21fdbd470f57fe5383bc897379b2cc26c7a10f62af1d788/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f406368616b72612d75692f72656163742e7376673f7374796c653d666c6174)。

### Shadcn

[Shadcn](https://ui.shadcn.com/) 是一个可重用组件的集合，您可以将其复制并粘贴到您的应用程序中。

它是免费的、开源的，并有大量的组件，例如手风琴、警报、警报对话框、宽高比、头像、徽章、按钮、日历等。
您不能将 Shadcn 作为依赖项安装，只能复制和粘贴您需要的组件。它不在 NPM 上，因此您无法安装它。

Shadcn 有实用工具类和 CSS 变量可供使用。它在 [Github 上有 37.2K 颗星](https://github.com/shadcn-ui/ui)。

## 数据可视化

这是 Web 开发中非常重要的一部分，是数据在图形格式中的可视化呈现，用于清晰有效地向用户传达信息。
有许多与 React 集成得很好的数据可视化工具。

### D3

这是其中最受欢迎的。[D3](https://d3js.org/) 以无与伦比的灵活性创建自定义动态可视化。

它与 React 集成得很好。我们只需运行命令 `yarn add d3` 来安装它，然后导入它 `import * as d3 from "d3";`。

在 React 中的示例：

```tsx
import * as d3 from "d3";

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
}) {
  const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  return (
    <svg width={width} height={height}>
      <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(data)} />
      <g fill="white" stroke="currentColor" stroke-width="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
```

D3 非常受欢迎，在 [Github 上有 107,000 颗星](https://github.com/d3/d3)，并有一个 [社区 Slack 小组](https://observablehq.com/slack/join)。

### Victory

[Victory](https://formidable.com/open-source/victory/) 是一套用于 React 的模块化图表和数据可视化组件。
Victory 强大而灵活，我们可以使用 Victory 绘制面积图、散点图等。

它也非常易于安装和使用：

```
npm install victory
```

我们可以轻松地创建一个图表。

示例：

```tsx
import React from "react";
import { render } from "react-dom";
import { VictoryPie } from "victory";

const PieChart = () => {
  return <VictoryPie />;
};

render(<PieChart />, document.getElementById("app"));
```

这将创建一个饼图。

它在 [Github 上约有 10.6K 颗星](https://github.com/FormidableLabs/victory)，在 [NPM 上每周有 21.2 万次下载](https://npmjs.com/package/victory)。

### Recharts

[Recharts](https://recharts.org/en-US/) 是一个可组合的 React 图表库。

Recharts 建立在 SVG 元素之上，对 D3 子模块有轻量级依赖，并包含可通过 props 自定义的可重用图表组件。

```tsx
<LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
```

这将创建一个折线图。

许多公司都在使用 Recharts，例如 Squadlytics、ahrefs、hayns、demisto 等。
Recharts 在 [Github 上有超过 21,000 颗星](https://github.com/recharts/recharts)，在 [NPM 上每月有 590 万次下载](https://www.npmjs.com/package/recharts)。

## i18n (国际化)

由于语言多样性，i18n 是 Web 应用程序中的一个重要功能。有许多库可以帮助我们在 React 中实现 i18n。

### react-i18next

[react-i18next](https://react.i18next.com/) 是一个流行的 React i18n 框架，它基于 [i18next](https://www.i18next.com/)。

安装简单：

```
npm install react-i18next i18next --save
```

然后使用：

```tsx
<div>{t("simpleContent")}</div>
```

react-i18next 有许多钩子和提供程序，使在您的 React 应用程序中实现 i18n 变得轻而易举。

它在 [Github 上有 8.7k 颗星](https://github.com/i18next/react-i18next)，[每周有 270 万次下载](https://npmjs.org/package/react-i18next)。

### react-intl

[react-intl](https://formatjs.io/docs/react-intl/) 是一个将国际化引入您的 React 应用程序的库，它建立在 [formatjs](https://formatjs.io/) 之上。

安装简单：

```bash
npm i -S react-intl
```

react-intl 每周有 1,364,010 次下载。

## 总结

React 是一个庞大的框架，被许多人使用，因此每天都有许多工具被创建出来，以使使用 React.js 变得更容易。

这是一篇很长的文章，但我希望您喜欢它，并学到了一些新东西。