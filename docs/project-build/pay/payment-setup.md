---
id: payment-setup
title: 微信支付开发配置
sidebar_label: 微信支付开发配置
---

# 微信支付开发配置

## 功能概述

已成功实现以下支付功能：
- ✅ 微信小程序支付（JSAPI）
- ✅ 微信H5网页支付
- ✅ UniApp多端支付适配

:::tip 💡 配置说明
本文档面向开发者，介绍后端API配置和前端调用方法。如需了解微信支付商户平台的配置步骤，请参考 [微信支付配置](./we.md)。
:::

## 后端配置

### 1. 支付接口路径

| 支付方式 | 接口路径 | 请求方法 |
|---------|---------|---------|
| **JSAPI支付（小程序）** | `/Pay-api/wx-pay/jsapi/{productId}/{userid}/{openid}` | POST |
| **H5支付** | `/Pay-api/wx-pay/h5/{productId}/{userid}` | POST |

### 2. 配置文件位置

配置文件路径：`IcePay-ment/src/main/java/com/ttice/icepayment/config/WxPayConfig.java`

需要配置以下参数：

```java
// 微信小程序APPID
private String appid;

// 商户号
private String mchId;

// 商户私钥路径
private String privateKeyPath;

// 商户证书序列号
private String mchSerialNo;

// APIv3密钥
private String apiV3Key;

// 支付回调地址
private String notifyDomain;
```

### 3. 数据库配置

支付配置存储在 `pay_info` 表中，包含：
- 小程序APPID
- 商户号
- API密钥
- 证书信息

:::note 📋 数据库表结构
支付配置信息会从数据库的 `pay_info` 表中读取，请确保数据库中已正确配置相关支付参数。
:::

## 前端使用

### 1. 小程序支付流程

```javascript
// 1. 用户点击"立即购买"按钮
// 2. 检查登录状态
// 3. 获取用户openid
// 4. 调用后端JSAPI接口
// 5. 使用返回的支付参数调用uni.requestPayment()

// 示例代码
uni.requestPayment({
  provider: 'wxpay',
  timeStamp: payData.timeStamp,
  nonceStr: payData.nonceStr,
  package: payData.package,
  signType: 'RSA',
  paySign: payData.paySign,
  success: (res) => {
    console.log('支付成功', res);
  },
  fail: (err) => {
    console.log('支付失败', err);
  }
});
```

### 2. H5支付流程

```javascript
// 1. 用户点击"立即购买"按钮
// 2. 检查登录状态
// 3. 调用后端H5接口
// 4. 跳转到微信H5支付页面

// 示例代码
axios.post(`/Pay-api/wx-pay/h5/${productId}/${userId}`)
  .then(response => {
    // 跳转到微信H5支付页面
    window.location.href = response.data.h5_url;
  });
```

### 3. 条件编译说明

代码中使用了UniApp条件编译来适配不同平台：

| 平台标识 | 说明 |
|---------|------|
| `#ifdef MP-WEIXIN` | 微信小程序平台 |
| `#ifdef H5` | H5网页平台 |
| `#ifdef APP-PLUS` | APP平台 |

**示例代码：**

```javascript
// #ifdef MP-WEIXIN
// 小程序支付逻辑
uni.requestPayment({ ... });
// #endif

// #ifdef H5
// H5支付逻辑
window.location.href = h5PayUrl;
// #endif
```

## 重要配置项

### 1. 获取用户openid

:::caution ⚠️ 重要提示
小程序支付需要用户的openid，建议在登录时获取并存储。
:::

**推荐做法：**

```javascript
// 在登录成功后
uni.setStorageSync('openid', userInfo.openid);
uni.setStorageSync('userId', userInfo.userId);
```

### 2. 支付签名

:::danger 🔴 签名实现
当前后端代码中的签名部分需要实现真实的RSA签名算法。
:::

在 `WxPayServiceImpl.java` 的 `jsapiPay` 方法中：

```java
String paySign = "NEED_TO_IMPLEMENT_SIGN"; // 需要实现真实的RSA签名逻辑
```

**签名规则：**

需要使用商户私钥对以下字符串进行RSA-SHA256签名：

```
appid + "\n" + timestamp + "\n" + nonceStr + "\n" + package + "\n"
```

**实现步骤：**

1. 按照上述格式拼接待签名字符串
2. 使用商户私钥进行RSA-SHA256签名
3. 对签名结果进行Base64编码
4. 将编码后的字符串作为 `paySign` 返回给前端

### 3. 支付回调

支付成功后，微信会回调通知接口：

| 项目 | 说明 |
|-----|------|
| **回调地址** | `POST /Pay-api/wx-pay/native/notify` |
| **回调内容** | 加密的支付结果信息 |
| **处理要求** | 需要验证签名并处理订单状态 |

:::info 💡 回调处理
1. 验证微信回调的签名
2. 解密回调内容
3. 更新订单状态
4. 返回成功响应给微信服务器
:::

## 测试建议

### 1. 小程序测试

✅ **测试步骤：**
1. 在微信开发者工具中测试
2. 确保已配置正确的支付商户号
3. 使用测试账号进行支付测试

:::note 📱 开发者工具测试
微信开发者工具提供了支付测试功能，可以模拟真实的支付流程而无需真实扣款。
:::

### 2. H5测试

✅ **测试步骤：**
1. 在微信内置浏览器中打开H5页面
2. 测试支付流程
3. 验证支付回调

:::caution ⚠️ H5支付限制
H5支付仅能在微信内置浏览器中使用，外部浏览器会提示"请在微信客户端打开链接"。
:::

## 常见问题

### 1. 签名错误

**可能原因：**
- ❌ 商户私钥配置错误
- ❌ 签名算法不符合微信要求
- ❌ 时间戳或随机字符串生成有误

**解决方法：**
1. 检查商户私钥文件是否正确
2. 确认签名算法使用RSA-SHA256
3. 验证时间戳格式（秒级时间戳）
4. 确保随机字符串长度和格式符合要求

### 2. openid获取失败

**可能原因：**
- ❌ 小程序未配置appid和secret
- ❌ 登录流程未正确保存openid
- ❌ 用户未授权

**解决方法：**
1. 检查小程序配置信息
2. 在登录成功回调中保存openid
3. 确认用户已完成微信授权

### 3. 支付参数错误

**可能原因：**
- ❌ 价格单位错误（应为"分"）
- ❌ 订单号重复
- ❌ 商户号配置错误

**解决方法：**
1. 将价格转换为分（元 × 100）
2. 确保每次支付的订单号唯一
3. 核对商户号配置

:::tip 💰 价格单位
微信支付要求金额单位为"分"。例如：1元 = 100分，10.50元 = 1050分。
:::

## 安全建议

:::danger 🔒 安全要求
1. **不要在前端暴露商户密钥**
2. **所有支付参数必须由后端生成**
3. **验证支付回调的签名**
4. **检查订单状态，避免重复支付**
5. **记录支付日志，便于问题排查**
:::

### 安全检查清单

| 检查项 | 说明 | 状态 |
|-------|------|------|
| 商户密钥安全 | 密钥仅在后端使用，不暴露给前端 | ✅ |
| 支付参数验证 | 后端生成所有支付参数 | ✅ |
| 回调签名验证 | 验证微信回调的签名 | ⚠️ 需实现 |
| 订单状态检查 | 防止重复支付 | ⚠️ 需实现 |
| 日志记录 | 记录所有支付操作 | ⚠️ 需实现 |

## 下一步工作

📋 **待完善功能：**

1. ⚠️ 实现完整的RSA签名逻辑
2. ⚠️ 完善支付回调处理
3. ⚠️ 添加支付状态查询功能
4. ⚠️ 实现退款功能（已有接口）
5. ⚠️ 添加支付订单管理页面

:::info 🚀 持续改进
支付系统的安全性和稳定性至关重要，建议在上线前完成上述所有待完善功能。
:::

---

**最后更新**: 2025-12-14
