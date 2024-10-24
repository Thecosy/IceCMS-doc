---
id: dockerfile
title: docker file
sidebar_label: docker file
---

# docker file

### Use Docker to create an image and run the Jar file

#### 1. Create a Dockerfile

```
FROM java:8
MAINTAINER 3795
ADD FileServer.jar file-server.jar
COPY config config
EXPOSE 9000
ENTRYPOINT ["java", "-jar", "file-server.jar"]


```

- FROM: base image, starting from jdk8 image
- MAINTAINER: Author
- ADD: Add (copy) the jar file to the image, `FileServer.jar` source jar file, `file-server.jar` copied jar file.
- COPY: Copy the application configuration file to the image.
- EXPOSE: Declare a port
- ENTRYPOINT: The command to run when Docker starts. Here, the jar service is run directly when the container starts.

> When adding or copying files to an image, if the target path is not specified, the files are added to the `/` path of the container by default.

#### 2. Build the image

First look at the directory where the Dockerfile is located

![image.png](/img/icecms/202305/1.png "image.png")

Execute the command in the current directory:

```
docker build -t file-server:test .


```

- file-server: the name of the image
- test: `tag` of the image. If not specified, the default value is `latest`
- `.` : This `.` must not be forgotten. The last `.` represents the context path of this execution. `ADD FileServer.jar file-server.jar` . The location of `FileServer.jar` in the middle is determined based on this `.` In the above Dockerfile, it means adding `FileServer.jar` and `config` folder in the current folder to the container.

View the image:

![image.png](/img/icecms/202305/2.png "image.png")

Build successful!

#### 3. Run the image

```
docker run -d --name file-server-test -p 9000:9000 -v /project/file-server:/project/file-server file-server:test


```

Container operation status

![image.png](/img/icecms/202305/3.png "image.png")

You can see that the container runs successfully.

#### 4. Submit the image to DockerHub

##### 4.1 Register a DockerHub account and create a repository

I created a repository called `file-server` .

Reference: [Docker repository management](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fdocker%2Fdocker-repository.html "https://www.runoob.com/docker/docker-repository.html")

##### 4.2 Using docker login

slightly

##### 4.3 Submitting an Image

`docker tag <existing-image> <hub-user>/<repo-name>[:<tag>]`

![image.png](/img/icecms/202305/4.png "image.png")

If we only want the container, how do we submit the container to the warehouse?

Make the container into an image first, and then upload it.

`docker commit <exiting-Container> <hub-user>/<repo-name>[:<tag>]`

If the tag is not specified, it means latest.

##### 4.5 Push image to remote repository

`docker push <hub-user>/<repo-name>:<tag>`

![image.png](/img/icecms/202305/5.png "image.png")

It may take a little longer.

Go to the repository to view the image:

![image.png](/img/icecms/202305/6.png "image.png")

This push to the warehouse is successful, and you can directly `docker pull` and then `docker run` to run it.

### Dockerfile common commands

<table>
<thead><tr>
<th>Order</th>
<th>describe</th>
</tr></thead>
<tbody>
<tr>
<td>FROM</td>
<td>Base image</td>
</tr>
<tr>
<td>MAINTAINER</td>
<td>Maintainer information</td>
</tr>
<tr>
<td>ADD</td>
<td>Add files to the image (automatically decompress)</td>
</tr>
<tr>
<td>COPY</td>
<td>Add files to the image (without decompressing)</td>
</tr>
<tr>
<td>USER</td>
<td>Set the user who runs the RUN command</td>
</tr>
<tr>
<td>ENV</td>
<td>Setting Environment Variables</td>
</tr>
<tr>
<td>RUN</td>
<td>Commands executed when creating an image</td>
</tr>
<tr>
<td>ENTRYPOINT</td>
<td>The command executed when the container starts (cannot be overwritten)</td>
</tr>
<tr>
<td>CMD</td>
<td>The command executed when the container is started (only the last command is executed if there are multiple commands)</td>
</tr>
<tr>
<td>EXPOSE</td>
<td>Declare the port to be opened (actually, you still need to run docker run -p port1:port2)</td>
</tr>
<tr>
<td>VOLUME</td>
<td>Directory Mapping</td>
</tr>
<tr>
<td>ONBUILD</td>
<td>Commands automatically executed during build</td>
</tr>
</tbody>
</table>

### Container-related blog posts

- [Docker Minimalist Introduction: Use Docker-Compose to run a website traffic statistics demo](https://www.cnblogs.com/AD-milk/p/16174417.html)
- [Docker Minimal Introduction: Using Docker-Compose to Build a Redis Cluster](https://www.cnblogs.com/AD-milk/p/16200539.html)