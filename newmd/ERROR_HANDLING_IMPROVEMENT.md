# 错误处理体系改进

## 问题分析

### 原有问题

1. **混乱的错误码**: 所有空指针异常都返回 `402: "用户名错误"`，与实际错误无关
2. **不清晰的错误信息**: 错误信息不能反映真实问题
3. **缺少错误分类**: 没有统一的错误码规范
4. **空指针处理不当**: `GetArticleBtmatter` 接口没有空值检查，导致 NullPointerException

## 解决方案

### 1. 创建统一错误码枚举 (ResultCode.java)

**文件位置**: `IceCMS-ment/src/main/java/com/ttice/icewkment/commin/lang/ResultCode.java`

#### 错误码分类

| 类别 | 错误码范围 | 说明 | 示例 |
|------|-----------|------|------|
| 成功 | 200 | 操作成功 | `SUCCESS(200, "操作成功")` |
| 客户端错误 | 4xx | 请求错误 | `BAD_REQUEST(400)` |
| 认证错误 | 401-408 | 登录认证相关 | `UNAUTHORIZED(401)` |
| 数据错误 | 41xx | 数据相关错误 | `DATA_NOT_FOUND(4100)` |
| 文章错误 | 42xx | 文章相关错误 | `ARTICLE_NOT_FOUND(4200)` |
| 资源错误 | 43xx | 资源相关错误 | `RESOURCE_NOT_FOUND(4300)` |
| 用户错误 | 44xx | 用户相关错误 | `USER_NOT_FOUND(4400)` |
| 评论错误 | 45xx | 评论相关错误 | `COMMENT_NOT_FOUND(4500)` |
| 服务器错误 | 5xx | 服务器内部错误 | `INTERNAL_SERVER_ERROR(500)` |

#### 主要错误码定义

```java
// 成功
SUCCESS(200, "操作成功"),

// 认证错误
UNAUTHORIZED(401, "未授权"),
USERNAME_NOT_FOUND(402, "用户名不存在"),
PASSWORD_ERROR(403, "密码错误"),
ACCOUNT_DISABLED(404, "账户已禁用"),
TOKEN_EXPIRED(406, "登录已过期"),

// 数据错误
DATA_NOT_FOUND(4100, "数据不存在"),
NULL_POINTER_ERROR(4103, "数据为空"),

// 文章相关
ARTICLE_NOT_FOUND(4200, "文章不存在"),
ARTICLE_AUTHOR_NOT_FOUND(4203, "文章作者不存在"),

// 服务器错误
INTERNAL_SERVER_ERROR(500, "服务器内部错误"),
DATABASE_ERROR(501, "数据库错误"),
```

### 2. 增强 Result 类

**文件位置**: `IceCMS-ment/src/main/java/com/ttice/icewkment/commin/lang/Result.java`

#### 新增方法

```java
// 使用 ResultCode 返回成功
public static Result succ(ResultCode resultCode, Object data)

// 使用 ResultCode 返回失败
public static Result fail(ResultCode resultCode)
public static Result fail(ResultCode resultCode, Object data)
public static Result fail(ResultCode resultCode, String customMsg, Object data)
```

#### 使用示例

```java
// 旧方式 (仍然支持)
return Result.fail(402, "用户名错误", null);

// 新方式 (推荐)
return Result.fail(ResultCode.USERNAME_NOT_FOUND);
return Result.fail(ResultCode.ARTICLE_NOT_FOUND, article);
return Result.fail(ResultCode.DATABASE_ERROR, "查询文章失败: " + e.getMessage(), null);
```

### 3. 完善全局异常处理器 (GlovalExceptionHandler.java)

**文件位置**: `IceCMS-ment/src/main/java/com/ttice/icewkment/commin/exception/GlovalExceptionHandler.java`

#### 改进点

##### ① 细化Shiro异常处理

```java
// 用户名不存在
@ExceptionHandler(value = UnknownAccountException.class)
return Result.fail(ResultCode.USERNAME_NOT_FOUND);

// 密码错误
@ExceptionHandler(value = IncorrectCredentialsException.class)
return Result.fail(ResultCode.PASSWORD_ERROR);

// 账户被禁用
@ExceptionHandler(value = DisabledAccountException.class)
return Result.fail(ResultCode.ACCOUNT_DISABLED);

// 账户被锁定
@ExceptionHandler(value = LockedAccountException.class)
return Result.fail(ResultCode.ACCOUNT_LOCKED);
```

##### ② 改进空指针异常处理

**之前**:
```java
@ExceptionHandler(value = NullPointerException.class)
public Result handler(NullPointerException e) {
    log.error("空值异常", e);
    return Result.fail(402, "用户名错误", null);  // ❌ 错误!
}
```

**现在**:
```java
@ExceptionHandler(value = NullPointerException.class)
public Result handler(NullPointerException e) {
    log.error("空指针异常，请检查数据是否存在", e);

    // 记录异常位置
    StackTraceElement[] stackTrace = e.getStackTrace();
    String errorLocation = stackTrace.length > 0 ?
        stackTrace[0].getClassName() + "." + stackTrace[0].getMethodName() +
        ":" + stackTrace[0].getLineNumber() : "未知位置";

    log.error("空指针异常发生位置: {}", errorLocation);

    return Result.fail(ResultCode.NULL_POINTER_ERROR,
        "数据不存在或为空，请检查相关数据是否已配置",
        null);
}
```

##### ③ 新增异常处理器

- **参数校验异常**: `MethodArgumentNotValidException`, `BindException`
- **参数类型异常**: `MethodArgumentTypeMismatchException`
- **404异常**: `NoHandlerFoundException`
- **数据库异常**: `SQLException`

### 4. 修复 GetArticleBtmatter 接口

**文件位置**: `IceCMS-ment/src/main/java/com/ttice/icewkment/controller/frontend/MiniProgrammeController.java`

#### 改进点

##### ① 添加 @Slf4j 注解
```java
@Slf4j
@RestController
@RequestMapping("/Mini")
public class MiniProgrammeController {
```

##### ② 完善空值检查

```java
@GetMapping("/GetArticleBtmatter")
public List<ArticleVO> GetArticleBtmatter() {
    List<ArticleVO> result = new ArrayList<>();

    try {
        // 查询文章
        List<Article> articles = this.articleMapper.selectList(Wrapper);

        // ✅ 检查文章列表是否为空
        if (articles == null || articles.isEmpty()) {
            log.warn("没有找到重要文章");
            return result;
        }

        for (Article article : articles) {
            try {
                // ✅ 检查文章ID
                if (aid == null) {
                    log.warn("文章ID为空，跳过该文章");
                    continue;
                }

                // ✅ 检查作者
                if (authorId != null) {
                    User users = userMapper.searchId(authorId);
                    if (users != null) {
                        profile = users.getProfile() != null ? users.getProfile() : "";
                    } else {
                        log.warn("文章ID: {} 的作者ID: {} 不存在", aid, authorId);
                    }
                }

                // ✅ 检查分类
                if (article.getSortClass() != null) {
                    ArticleClass articleClass = articleClassMapper.selectById(sortClass);
                    if (articleClass != null && articleClass.getName() != null) {
                        classname = articleClass.getName();
                    } else {
                        log.warn("文章ID: {} 的分类ID: {} 不存在", aid, sortClass);
                    }
                }

                // ✅ 检查关键词
                if (article.getKeyword() != null && !article.getKeyword().trim().isEmpty()) {
                    try {
                        AllTag tag = allTagMapper.selectOne(...);
                        if (tag != null && tag.getTagName() != null) {
                            keywordName = tag.getTagName();
                        }
                    } catch (Exception e) {
                        log.warn("文章ID: {} 处理关键词失败: {}", aid, e.getMessage());
                    }
                }

            } catch (Exception e) {
                log.error("处理文章时出错: {}", e.getMessage(), e);
                // ✅ 继续处理下一篇文章，而不是整个接口失败
                continue;
            }
        }
    } catch (Exception e) {
        log.error("获取重要文章失败", e);
    }

    return result;
}
```

## 使用指南

### 在Controller中使用

```java
// ❌ 旧方式 - 不推荐
return Result.fail(402, "用户名错误", null);

// ✅ 新方式 - 推荐
return Result.fail(ResultCode.USERNAME_NOT_FOUND);

// 自定义消息
return Result.fail(ResultCode.ARTICLE_NOT_FOUND,
    "未找到ID为" + id + "的文章",
    null);
```

### 在Service中抛出异常

```java
// 让全局异常处理器捕获
if (user == null) {
    throw new UnknownAccountException("用户不存在");
}

if (article == null) {
    throw new IllegalArgumentException("文章ID不能为空");
}
```

### 空值检查最佳实践

```java
// ✅ 推荐: 多层检查
Integer authorId = article.getAuthorId();
if (authorId != null) {
    User user = userMapper.selectById(authorId);
    if (user != null) {
        String username = user.getUsername();
        if (username != null) {
            // 使用 username
        }
    }
}

// ✅ 推荐: 使用 Optional (Java 8+)
Optional.ofNullable(article.getAuthorId())
    .map(userMapper::selectById)
    .map(User::getUsername)
    .ifPresent(username -> {
        // 使用 username
    });

// ❌ 不推荐: 直接使用，容易 NullPointerException
String username = userMapper.selectById(article.getAuthorId()).getUsername();
```

## 错误响应示例

### 之前 (混乱)

```json
{
  "code": 402,
  "msg": "用户名错误",
  "data": null
}
```
这是空指针异常，但错误信息是"用户名错误"，完全不相关！

### 现在 (清晰)

#### 空指针异常
```json
{
  "code": 4103,
  "msg": "数据不存在或为空，请检查相关数据是否已配置",
  "data": null
}
```

#### 用户名不存在
```json
{
  "code": 402,
  "msg": "用户名不存在",
  "data": null
}
```

#### 密码错误
```json
{
  "code": 403,
  "msg": "密码错误",
  "data": null
}
```

#### 文章不存在
```json
{
  "code": 4200,
  "msg": "文章不存在",
  "data": null
}
```

#### 数据库错误
```json
{
  "code": 501,
  "msg": "数据库操作失败: Connection timeout",
  "data": null
}
```

## 日志改进

### 之前
```
ERROR - 空值异常
```

### 现在
```
ERROR - 空指针异常，请检查数据是否存在
ERROR - 空指针异常发生位置: com.ttice.icewkment.controller.frontend.MiniProgrammeController.GetArticleBtmatter:157
ERROR - 处理文章时出错: null
WARN  - 文章ID: 5 的作者ID: 999 不存在
WARN  - 文章ID: 5 的分类ID: 88 不存在
WARN  - 文章ID: 5 处理关键词失败: Tag not found
```

日志现在提供:
- ✅ 具体的异常类型
- ✅ 异常发生的位置 (类名、方法名、行号)
- ✅ 相关的ID信息
- ✅ 详细的错误消息

## 后续建议

### 1. 数据完整性检查

建议在数据库层面添加约束:

```sql
-- 确保文章有作者
ALTER TABLE article ADD CONSTRAINT fk_article_author
FOREIGN KEY (author_id) REFERENCES user(id);

-- 确保文章有分类
ALTER TABLE article ADD CONSTRAINT fk_article_class
FOREIGN KEY (sort_class) REFERENCES article_class(id);
```

### 2. 添加默认数据

```sql
-- 添加默认用户 (用于已删除用户的文章)
INSERT INTO user (id, username, profile) VALUES (0, '已删除用户', '/default-avatar.png');

-- 添加默认分类
INSERT INTO article_class (id, name) VALUES (0, '未分类');
```

### 3. 前端处理

前端应该根据不同的错误码显示不同的提示:

```javascript
// 前端错误处理示例
if (response.code === 402) {
  message.error('用户名不存在，请检查输入');
} else if (response.code === 403) {
  message.error('密码错误，请重新输入');
} else if (response.code === 4103) {
  message.warning('数据加载失败，某些内容可能缺失');
} else if (response.code === 4200) {
  message.error('文章不存在或已被删除');
}
```

## 总结

### 改进效果

| 方面 | 改进前 | 改进后 |
|------|-------|-------|
| 错误码 | 混乱，不相关 | 清晰，有分类 |
| 错误信息 | 不准确 | 准确反映问题 |
| 空指针处理 | 全局返回"用户名错误" | 具体定位问题 |
| 日志信息 | 简单 | 详细的位置和上下文 |
| 可维护性 | 困难 | 容易定位和修复 |

### 核心改进

1. ✅ **统一错误码体系** - ResultCode 枚举
2. ✅ **增强 Result 类** - 支持 ResultCode
3. ✅ **完善异常处理** - 细化各种异常
4. ✅ **修复空指针问题** - GetArticleBtmatter 接口
5. ✅ **详细日志记录** - 包含位置和上下文

---

**改进日期**: 2025-12-09
**状态**: ✅ 已完成
**影响范围**: 全局错误处理、所有Controller
