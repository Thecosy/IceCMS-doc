---
id: development-guide
title: 开发指南
sidebar_label: 开发指南
---

# IceCMS-Pro 开发指南

## 项目结构

IceCMS-Pro 分为Java后端模块和三个前端UI:

- **后端模块**: `IceCMS-main` (Spring Boot), `IceCMS-ment` (APIs), `IcePay-ment` (支付)
- **管理UI**: `IceCMS-front-admin` (Vite + Vue 3)
- **前台网站**: `IceCMS-front-nuxt` (Nuxt 4 SSR)
- **移动端**: `IceCMS-uniApp` (UniApp)
- **Docker**: `IceCMS-Docker/` 一键部署
- **SQL**: `sql/` 数据库脚本

## 构建、测试和开发命令

### 后端
```bash
# 启动API服务
.\mvnw -pl IceCMS-main -am spring-boot:run

# 构建所有Maven模块
.\mvnw clean install
```

### 管理UI
```bash
cd IceCMS-front-admin
pnpm install
pnpm dev      # 开发模式
pnpm build    # 生产构建
```

### Nuxt网站
```bash
cd IceCMS-front-nuxt
pnpm install
pnpm dev            # 开发模式
pnpm build:prod     # 生产构建
```

### UniApp
```bash
cd IceCMS-uniApp
pnpm install
pnpm dev:h5         # H5开发
pnpm dev:mp-weixin  # 微信小程序
```

## 编码风格

### Java
- 4空格缩进
- `UpperCamelCase` 类名
- `camelCase` 方法名
- 基础包: `com.ttice`

### Vue/TypeScript
- 2空格缩进
- `<script setup lang="ts">`
- 目录使用 `kebab-case` (`src/views/system-user/`)
- 环境变量放在 `.env.*` 文件中,不提交敏感信息

### 代码检查
```bash
# 管理UI
pnpm lint

# Nuxt
pnpm lint
pnpm typecheck
```

## 测试指南

### 后端测试
```bash
# 运行所有测试
.\mvnw test

# 运行特定模块测试
.\mvnw -pl IceCMS-ment test
```

### 前端测试
- 单元测试放在 `src/tests/`
- 每次UI更改必须通过 `pnpm typecheck` 和 `pnpm lint`
- 在PR中记录手动测试覆盖范围

## Git提交规范

### 提交消息格式
```
类型 作用域 变更内容

示例:
fix admin user Permission issue
nuxt index hover style fix
fix api token refresh
```

### PR指南
每个PR应包含:
- 变更动机
- 受影响的模块
- 测试证据
- UI变更的截图/GIF
- 关联的issue链接

## 安全配置

- 示例 `.env.*` 文件说明了必需的配置项
- 根据环境复制并配置
- 通过部署工具注入敏感信息
- Docker部署前务必更改MySQL密码

## Docker快速启动

```bash
docker compose -f IceCMS-Docker/docker-compose.yml up -d
```

---

**最后更新**: 2025-12-09
