---
sidebar_position: 1
---

# docker file

### 利用 Docker 创建镜像运行 Jar 文件

#### 1. 创建 Dockerfile 文件

```
FROM java:8
MAINTAINER 3795
ADD FileServer.jar file-server.jar
COPY config config
EXPOSE 9000
ENTRYPOINT ["java", "-jar", "file-server.jar"]


```

*   FROM: 基础镜像，基于 jdk8 镜像开始
*   MAINTAINER：作者
*   ADD：将 jar 文件添加（复制）到镜像内，`FileServer.jar`源 jar 文件，`file-server.jar`复制得到的 jar 文件。
*   COPY: 将应用的配置文件也拷贝到镜像中。
*   EXPOSE：声明端口
*   ENTRYPOINT：docker 启动时，运行的命令，这里容器启动时直接运行 jar 服务。

> 在添加或复制文件到镜像中时，如果不指定目标路径，则默认将文件添加到容器的`/`路径下。

#### 2. 构建镜像

先看 Dockerfile 所在的目录

![image.png](/img/icecms/202305/1.png "image.png")


在当前目录下执行命令：

```
docker build -t file-server:test .


```

*   file-server: 镜像的名称
*   test: 镜像的`tag`，如果不写，则默认为`latest`
*   `.`: 这个`.`一定不能忘记，最后的`.`代表本次执行的上下文路径，`ADD FileServer.jar file-server.jar`，中间的`FileServer.jar`在哪里，就是根据这个`.`确定的，在上述 Dockerfile，表示将当前文件夹下的`FileServer.jar`和`config`文件夹添加到容器中。

查看镜像：

![image.png](/img/icecms/202305/2.png "image.png")


构建成功！

#### 3. 运行镜像

```
docker run -d --name file-server-test -p 9000:9000 -v /project/file-server:/project/file-server file-server:test


```

容器运行情况

![image.png](/img/icecms/202305/3.png "image.png")


可以看到容器成功运行了。

#### 4. 将镜像提交到 DockerHub 中

##### 4.1 注册 DockerHub 账号并创建仓库

略，我创建了一个名为`file-server`的仓库

参考: [Docker 仓库管理](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdocker%2Fdocker-repository.html "https://www.runoob.com/docker/docker-repository.html")

##### 4.2 使用 docker login

略

##### 4.3 提交镜像

`docker tag <existing-image> <hub-user>/<repo-name>[:<tag>]`

![image.png](/img/icecms/202305/4.png "image.png")


如果我们只要容器，怎么把容器提交到仓库呢？

将容器先制作为镜像，再上传。

`docker commit <exiting-Container> <hub-user>/<repo-name>[:<tag>]`

这里的 tag 不指定就是 latest。

##### 4.5 push 镜像到远程仓库

`docker push <hub-user>/<repo-name>:<tag>`

![image.png](/img/icecms/202305/5.png "image.png")


耗时可能会稍长一些。

到仓库中查看镜像：

![image.png](/img/icecms/202305/6.png "image.png")


这样推送到仓库就成功了，后面可以直接`docker pull`再`docker run`就可以运行了。

### Dockerfile 常用命令

<table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>FROM</td><td>基础镜像</td></tr><tr><td>MAINTAINER</td><td>维护者信息</td></tr><tr><td>ADD</td><td>添加文件到镜像（自动解压）</td></tr><tr><td>COPY</td><td>添加文件到镜像（不解压）</td></tr><tr><td>USER</td><td>设置运行 RUN 指令的用户</td></tr><tr><td>ENV</td><td>设置环境变量</td></tr><tr><td>RUN</td><td>镜像制作时执行的命令</td></tr><tr><td>ENTRYPOINT</td><td>容器启动时执行的命令（无法被覆盖）</td></tr><tr><td>CMD</td><td>容器启动时执行的命令（多条 CMD 只执行最后一条）</td></tr><tr><td>EXPOSE</td><td>声明要打开的端口 (实际还是要 docker run -p port1:port2 才行)</td></tr><tr><td>VOLUME</td><td>目录映射</td></tr><tr><td>ONBUILD</td><td>构建时自动执行的命令</td></tr></tbody></table>

### 容器的相关博文

*   [Docker 极简入门：使用 Docker-Compose 运行网站浏览量统计 Demo](https://www.cnblogs.com/AD-milk/p/16174417.html)
*   [Docker 极简入门：使用 Docker-Compose 搭建 redis 集群](https://www.cnblogs.com/AD-milk/p/16200539.html)