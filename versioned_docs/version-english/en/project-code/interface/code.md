---
id: code
title: Interface development
sidebar_label: Interface development
---

# Interface development

Front-end development reference documentation

1.Uniapp official documentation: https://uniapp.dcloud.net.cn/component/

2. UView official documentation (version 1.X, do not read 2.X documentation): https://v1.uviewui.com/components/intro.html

3.ElementUI documentation: https://element.eleme.cn/#/zh-CN/component/installation

4.Backend management

1. How to get the currently logged in administrator

Inherit the abstract class AbstractController and call **getUser() **. If you only need the administrator user ID, call **** getUserId()**. 2. How to record sensitive operation logs on the backend management end

Add annotations @SysLog("description content") @SysLog("information that needs to be described") to the backend management interface controller

For example:

```java
  @SysLog("修改圈子分类")
  @PostMapping("/update")
  @RequiresPermissions("admin:category:update")
  @ApiOperation("修改分类")
  public R update(@RequestBody CategoryEntity category){
        categoryService.updateById(category);
        return R.ok();
  }
```

1. Documentation usage of Swagger

Access address: Local: localhost:8080/doc.html Online: domain name + /doc.html

<!-- ![alt icecms](/uploads/projects/icecms/2b76dbf3393928e4b188611d00eadc61.webp)

（1）如果测试的是后台管理系统的接口，那么在如上图所示的地方设置token（移动端也是这个地方设置），记得点击保存。token值可以直接从已登录后台的请求路径获取，直接复制过来。如下图所示：
![alt icecms](/uploads/projects/icecms/56c9ef3a37b17f561f5a07aca97782df.webp)
（2）如果测试的是用户端，token值可以通过用户端接口请求获取token，或者通过如下图方式复制token值。前提：已登录状态，否则找不到token值。
![alt icecms](/uploads/projects/icecms/eba41136d95e02e778c2d6b9f7b6f747.webp)
很多用户由于没有设置token值，会导致swagger文档接口请求失败，响应内容如下所示：响应码401就是未登录，也就是没有设置token或token无效。
![alt icecms](/uploads/projects/icecms/c8aa77283ab9c2d07ffc40a41bc03b29.webp) -->

Create a new interface on the user side backend

Create a new interface under this package to develop your user-side content io.linfeng.modules.app.controller (1) Interface login interception

If the interface requires the current user information, add the @LoginUser annotation to the interface input parameter to inject the user information and add the @Login annotation. As shown below:

```java
/**
 * 评论区的点赞
 */
@Login
@PostMapping("/thumbs")
@NoRepeatSubmit
public R thumbs(@RequestBody AddThumbsForm request,@LoginUser AppUserEntity user){

    commentThumbsService.addThumbs(request,user);
    return R.ok();
}
```

Note: If you use the @LoginUser annotation, you must use the @Login annotation! ! ! Otherwise, a null pointer exception will be reported.

As shown in the above code, we find that there is also a @NoRepeatSubmit annotation, which prevents repeated submission operations of the interface and maintains the idempotence of the interface.

(2) Obtaining user information

If you are sure that your new interface requires user login, then you only need to follow the instructions in Section (1). However, if you follow the instructions in Section (1), there will be a problem: if the user is not logged in, the user will be forced to jump to the login page. If you do not want this, then follow the steps below:

First, the two annotations in item (1) are no longer added to the controller interface. You only need to inject the LocalUser Bean, call the getUser() method, and determine whether the current user information returned by the method is empty. Look at the code directly:

```java
@Override
public AppPageUtils lastPost(Integer currPage) {
    Page<PostEntity> page = new Page<>(currPage,10);
    QueryWrapper<PostEntity> queryWrapper=new QueryWrapper<>();
    queryWrapper.lambda().eq(PostEntity::getStatus,Constant.POST_NORMAL);
    queryWrapper.orderByDesc("post_top","id");
    AppUserEntity user = localUser.getUser();
    if(ObjectUtil.isNull(user)){
        return this.mapPostList(page, queryWrapper, 0);
    }
    return this.mapPostList(page, queryWrapper, user.getUid());
}
```

The key code is extracted as follows:

```java

@Autowired
private LocalUser localUser;
...
...
...
AppUserEntity user = localUser.getUser();
if(ObjectUtil.isNull(user)){
    //未登录时的业务逻辑
}else{
    //登录时的业务逻辑
}
2.创建新的定时任务

在该包下创建你的类
io.linfeng.modules.job.task
该类的类名需要和后台管理系统创建的“bean名称”一致。
比如：下图和对应的代码保持了一致的名称。参数即为传入的值。cron依照自己的需求设定时间。依葫芦画瓢即可。

/**
 *
 * 定期清理所有消息定时任务
 *
 *
    * @author linfeng
    * @date 2022/5/8 16:58
 */
@Component("messageTask")
public class MessageTask implements ITask {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    @Lazy
    private MessageService messageService;


    @Override
    public void run(String params){
        logger.debug("messageTask定时任务正在执行，参数为：{}", params);
        //必须是整数而且为正数，代表清除几个月前的数据
        if(NumberUtil.isInteger(params)&&Integer.valueOf(params)>0){
            messageService.deleteMessageByMonth(Integer.valueOf(params));
        }
    }
}
```
