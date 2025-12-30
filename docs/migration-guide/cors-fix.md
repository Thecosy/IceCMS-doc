---
id: cors-fix
title: CORS问题修复总结
sidebar_label: CORS问题修复
---

# CORS问题修复总结

## 问题描述

Nuxt前端尝试从 `https://api.icecmspro.com` (生产API) 获取数据,而不是本地 API `http://localhost:8181`,导致 CORS 错误。

## 根本原因

Nuxt应用使用 `.env.production` 配置构建,指向生产API URL。

## 解决方案

### 1. 更新环境配置

**文件**: `IceCMS-front-nuxt/.env.production`

**修改前**:
```env
NUXT_PUBLIC_API_BASE_URL=https://api.icecmspro.com/
```

**修改后**:
```env
NUXT_PUBLIC_API_BASE_URL=http://localhost:8181/
```

### 2. 修复Axios导入问题

**文件**: `IceCMS-front-nuxt/src/composables/useSystemConfig.ts`

**修改前**:
```typescript
import axios from 'axios'
const response = await axios.get(`${baseUrl}/WebSystemConfig/getConfigs`)
```

**修改后**:
```typescript
// 使用Nuxt的$fetch
const response = await $fetch(`${baseUrl}/WebSystemConfig/getConfigs`)
```

### 3. 重新构建并更新Docker

```bash
cd IceCMS-front-nuxt
pnpm build

# 更新Docker容器
docker compose restart icecms-fullstack
docker exec icecms-fullstack rm -rf /app/frontend-nuxt
docker cp IceCMS-front-nuxt/.output icecms-fullstack:/app/frontend-nuxt
docker compose restart icecms-fullstack
```

## 验证结果

### 修复前
```
❌ CORS Policy Error
❌ Failed to fetch from https://api.icecmspro.com
```

### 修复后
```
✅ 无CORS错误
✅ 前端成功连接到 http://localhost:8181
✅ API正常响应
```

## 服务状态

所有服务运行正常:

| 服务 | 容器端口 | 主机端口 | URL |
|------|---------|---------|-----|
| Nuxt前端 | 3000 | 3001 | http://localhost:3001 |
| Java API | 8181 | 8181 | http://localhost:8181 |
| Vue管理 | 2580 | 2580 | http://localhost:2580 |
| Redis | 6379 | 6379 | redis://localhost:6379 |
| MySQL | 3306 | 3307 | mysql://localhost:3307 |

---

**修复日期**: 2025-12-09
**状态**: ✅ CORS问题已解决
**所有服务**: ✅ 运行正常
