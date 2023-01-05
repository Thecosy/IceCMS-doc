---
sidebar_position: 3
---

# 接口开发

前端开发参考文档

1.Uniapp官方文档：
https://uniapp.dcloud.net.cn/component/

2.UView官方文档(1.X版本，不要看2.X文档): https://v1.uviewui.com/components/intro.html

3.ElementUI文档:
https://element.eleme.cn/#/zh-CN/component/installation

4.后台管理端

1.如何获取当前登录管理员

继承抽象类AbstractController，调用**getUser()**即可。
如果只要管理员用户id，调用**getUserId()**即可。
2.如何记录后台管理端的敏感操作日志

在后台管理端接口controller上添加注解@SysLog（"描述内容"）
@SysLog("需要描述内容的信息")

例如：

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
5. Swagger的文档使用

访问地址:
本地：localhost:8080/doc.html
线上: 域名+/doc.html
<!-- ![alt icecms](/uploads/projects/icecms/2b76dbf3393928e4b188611d00eadc61.webp)

（1）如果测试的是后台管理系统的接口，那么在如上图所示的地方设置token（移动端也是这个地方设置），记得点击保存。token值可以直接从已登录后台的请求路径获取，直接复制过来。如下图所示：
![alt icecms](/uploads/projects/icecms/56c9ef3a37b17f561f5a07aca97782df.webp)
（2）如果测试的是用户端，token值可以通过用户端接口请求获取token，或者通过如下图方式复制token值。前提：已登录状态，否则找不到token值。
![alt icecms](/uploads/projects/icecms/eba41136d95e02e778c2d6b9f7b6f747.webp)
很多用户由于没有设置token值，会导致swagger文档接口请求失败，响应内容如下所示：响应码401就是未登录，也就是没有设置token或token无效。
![alt icecms](/uploads/projects/icecms/c8aa77283ab9c2d07ffc40a41bc03b29.webp) -->

用户端后端创建新接口

在该包下新建接口开发你的用户端二开内容
io.linfeng.modules.app.controller
（1）接口登录拦截

如果该接口需要当前用户信息，则在接口入参上添加@LoginUser注解注入用户信息，并添加@Login注解。如下所示：
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
注意：使用@LoginUser注解就必须使用@Login注解！！！不然会报空指针异常。

如上代码中，我们发现还有一个@NoRepeatSubmit注解，该注解是防止接口的重复提交操作，保持接口幂等性。

（2）获取用户信息

如果确定你的新接口需要用户登录，那么你只需要按照第（1）条的说明进行操作，但是按照第（1）条的说明进行操作的话，会出现一个问题，即：如果用户端未登录，那么用户端会强制跳转到登录页。如果你不希望这样，那么就按照如下操作进行：

首先，controller接口处不再添加第（1）条的两个注解，你只需要注入LocalUser这个Bean，调用getUser()方法并判断该方法返回的当前用户信息是否为空即可。直接看代码：
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
提取关键代码即如下所示：
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