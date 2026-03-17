# IceCMS-doc

IceCMS-doc 是 IceCMS 项目的官方文档站点，基于 Docusaurus 2 构建。Docusaurus 2 是一个现代化且功能强大的静态站点生成器，专为轻松创建高质量的文档网站而设计。

## 安装

安装项目依赖：

```bash
yarn install
```

## 本地开发

启动本地开发服务器：

```bash
yarn start
```

此命令将启动本地开发服务器，并在默认浏览器中打开站点。大多数更改会即时生效，无需重启服务器。

## 本地开发（含 Node 认证后端）

项目现已内置一个独立的 Node 认证后端，目录位于 `back/icecms-doc-auth`，默认运行在 `3001` 端口，提供登录、注册、手机号验证码登录、会话读取、资料修改、通知设置、令牌管理和设备下线接口。

同时启动文档站和认证后端：

```bash
yarn dev:full
```

只启动认证后端：

```bash
yarn server:start
```

默认预置账号：

```text
邮箱: admin@icecms.pro
用户名: asd12
密码: icecms123456
```

开发环境下，手机号登录接口会直接返回验证码，便于联调。

## 构建

构建生产环境的静态站点：

```bash
yarn build
```

此命令会在 `build` 目录中生成静态文件，可以使用任何静态站点托管服务进行部署。

## 部署

部署到 GitHub Pages：

```bash
GIT_USER=<你的 GitHub 用户名> USE_SSH=true yarn deploy
```
