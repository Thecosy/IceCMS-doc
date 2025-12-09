# IceCMS 激活系统使用指南

## 系统架构

IceCMS 激活系统由两部分组成：

1. **激活服务（Activate目录）**：独立的 Node.js 服务，用于验证和管理激活码
2. **前端集成（Nuxt项目）**：在 Nuxt 项目中集成激活页面和验证中间件

## 快速开始

### 1. 启动激活服务

```bash
cd Activate
npm install
npm start
```

服务将在 `http://localhost:3100` 运行

### 2. 激活码管理

可用激活码存储在 `Activate/activation-codes.json` 文件中。

**默认激活码：**
- `ICECMS-2024-PROD-A1B2C3D4`
- `ICECMS-2024-PROD-E5F6G7H8`
- `ICECMS-2024-PROD-I9J0K1L2`

### 3. 使用激活功能

#### 开发环境
开发环境（`npm run dev`）会自动跳过激活检查，无需激活即可访问。

#### 生产环境
1. 构建生产版本：
```bash
cd IceCMS-front-nuxt
pnpm build
```

2. 首次访问时会自动跳转到 `/activate` 页面
3. 输入激活码进行激活
4. 激活成功后可以正常访问系统

## 工作流程

### 激活流程

```
用户访问网站
    ↓
中间件检查激活状态
    ↓
[未激活] → 跳转到激活页面 → 输入激活码 → 调用激活API → 保存激活状态 → 跳转首页
    ↓
[已激活] → 验证激活有效性 → 允许访问
```

### 验证流程

1. **本地检查**：检查 localStorage 中是否有激活标记
2. **远程验证**：向激活服务发送域名，验证激活是否有效
3. **过期检查**：检查激活是否过期（默认到 2025-12-31）

## API 接口

### 激活域名
**POST** `/api/activate`

请求：
```json
{
  "code": "ICECMS-2024-PROD-A1B2C3D4",
  "domain": "example.com"
}
```

成功响应：
```json
{
  "success": true,
  "message": "激活成功",
  "data": {
    "domain": "example.com",
    "activatedAt": "2024-01-01T00:00:00.000Z",
    "expiresAt": "2025-12-31T23:59:59.999Z"
  }
}
```

### 验证域名
**POST** `/api/verify`

请求：
```json
{
  "domain": "example.com"
}
```

成功响应：
```json
{
  "success": true,
  "message": "域名已激活",
  "data": {
    "activatedAt": "2024-01-01T00:00:00.000Z",
    "expiresAt": "2025-12-31T23:59:59.999Z"
  }
}
```

## 文件说明

### 激活服务文件
- `Activate/server.js`: 激活服务主文件
- `Activate/activation-codes.json`: 激活码数据库
- `Activate/package.json`: 依赖配置
- `Activate/.env`: 环境变量

### Nuxt 集成文件
- `src/pages/activate.vue`: 激活页面
- `src/middleware/activation.global.ts`: 全局激活验证中间件
- `.env.production`: 生产环境配置

## 部署说明

### 激活服务部署

1. 将 `Activate` 目录部署到独立服务器
2. 配置环境变量：
```bash
PORT=3100
NODE_ENV=production
```
3. 使用 PM2 或类似工具保持服务运行：
```bash
pm2 start server.js --name icecms-activation
```

### Nuxt 项目配置

更新 `.env.production` 中的激活服务地址：
```
NUXT_PUBLIC_ACTIVATION_SERVICE_URL=https://your-activation-service.com
```

### 安全建议

1. **HTTPS**: 生产环境必须使用 HTTPS
2. **防火墙**: 限制激活服务只允许来自前端服务器的请求
3. **备份**: 定期备份 `activation-codes.json` 文件
4. **日志**: 记录所有激活请求用于审计

## 添加新激活码

编辑 `Activate/activation-codes.json`，添加新条目：

```json
{
  "code": "ICECMS-2024-PROD-NEWCODE",
  "domain": "",
  "activated": false,
  "activatedAt": null,
  "expiresAt": "2025-12-31T23:59:59.999Z"
}
```

## 故障排查

### 1. 激活服务无法访问
- 检查服务是否正在运行：`ps aux | grep node`
- 检查端口是否被占用：`netstat -ano | findstr :3100`
- 查看服务日志

### 2. 激活失败
- 确认激活码是否正确
- 检查激活码是否已被使用
- 检查激活码是否过期

### 3. 验证失败
- 清除浏览器 localStorage
- 检查域名是否匹配
- 重新激活

## 技术支持

如有问题，请联系 IceCMS 技术支持团队。
