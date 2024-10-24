---
id: baota
title: Pagoda deployment
sidebar_label: Pagoda deployment
---

# Pagoda deployment

## [#Basic](#%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF) Information

### [#download](#%E4%B8%8B%E8%BD%BD)

### [#Environmental](#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82) requirements

#### [#Server](#%E6%9C%8D%E5%8A%A1%E7%AB%AF)

<table>
<thead><tr>
<th>Operating Environment</th>
<th>Required version</th>
<th>Recommended version</th>
</tr></thead>
<tbody>
<tr>
<td>JDK</td>
<td>&gt;=1.8</td>
<td>1.8</td>
</tr>
<tr>
<td>Mysql</td>
<td>&gt;=5.7</td>
<td>5.7</td>
</tr>
<tr>
<td>nginx or apache</td>
<td>No restrictions</td>
<td>-</td>
</tr>
<tr>
<td>Redis</td>
<td>&gt;=6.0</td>
<td>7.0.0</td>
</tr>
</tbody>
</table>

#### [#front](#%E5%89%8D%E7%AB%AF) end

<table>
<thead><tr>
<th>Operating Environment</th>
<th>Required version</th>
<th>Recommended version</th>
</tr></thead>
<tbody><tr>
<td>Node.js</td>
<td>&gt;=14.18.1</td>
<td>14.18.1</td>
</tr></tbody>
</table>

## [#Baota](#%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E9%83%A8%E7%BD%B2-1-%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8) panel deployment- 1 - recommended

It is strongly recommended to use the Baota panel to deploy projects in a formal environment to make deployment more convenient and reduce deployment problems.

### [#Server](#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8E%AF%E5%A2%83%E8%AE%BE%E7%BD%AE) environment settings

- **Step 1** : Click [Software Store] - [Operation Environment], install Nginx, MySQL, and select MySQL version 5.7. Then search for redis and install it.

    hint

    When installing the software, use the fast installation method to avoid problems caused by some environments.

    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-1-1.png)
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-1-2.png)
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-1-3.png)

- **Step 2** : Click [Terminal], log in to the root account, and install Maven according to the system run command.

or

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-env-2.png)

### [#Database](#%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%BC%E5%85%A5) import

### [#](#%E6%BA%90%E7%A0%81%E7%BC%96%E8%AF%91) Source code compilation

hint

In this step, the source code is uploaded to the server and compiled into an executable jar package. If you are familiar with Java, it is recommended to compile it on the local computer to reduce the impact on the running server. You can skip the compilation step and upload the rar package directly.

- **Step 1** : Download the icecms compressed package and unzip it to the Baota Panel/www/wwwroot directory. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-1-1.png)
    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-1-2.png)
- **Step 2** : Open [File], find server/like-admin/src/main/resources in the project directory, copy the application-dev-example.yml file and rename it to application-dev.yml. This configuration is the background configuration. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-2.png)
- **Step 3** : Open the application-dev.yml file and set the relevant information according to the image content. The [upload-directory] item is the upload file directory, and the location can be set as needed. The [database] item is the Mysql related information, and the [redis] item is the Redis related information. If Redis has no password set, it can be left blank. This configuration is the background configuration. After setting, save the file. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-3.png)
- **Step 4** : Open [File] again, find server/like-front/src/main/resources in the project directory, copy the application-dev-example.yml file and rename it to application-dev.yml. This configuration is the front-end configuration. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-4.png)
- **Step 5** : Open the application-dev.yml file and set the relevant information according to the image content. The [upload-directory] item is the upload file directory, and the location can be set as needed. The [database] item is the Mysql related information, and the [redis] item is the Redis related information. If Redis has no password set, it can be left blank. This configuration is the front-end configuration. After setting, save the file. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-5.png)
- **Step 6** : Open the terminal, run the cd command to enter the server directory of the project directory, and run the compile command. The first compilation requires downloading dependencies, which will take a long time. After the compilation is successful, the terminal will display the following information. At the same time, the / server/like-admin/target/like-admin-1.0.0.jar file and / server/like-front/target/like-front-1.0.0.jar file are generated. These two jar file packages are required in the following steps.

```
cd /www/wwwroot/icecms/server
mvn clean install -Dmaven.test.skip=true -f pom.xml


```

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-code-6.png)

### [#Project](#%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C) Run

#### [#Backend](#%E5%90%8E%E5%8F%B0%E9%85%8D%E7%BD%AE) configuration

- **Step 1** : Open [Website] - [Java Project] - [Add Java Project], select [Spring_boot], add the project / server/like-admin/target/like-admin-1.0.0.jar package, set JDK. Set it to start automatically at boot, set it to separate the front and back ends, fill in "/api" for the back end URL, set the front end root directory to the project's / public/admin, fill in the front end domain name, and then [Submit]. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-1-1.png)

    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-1-2.png)

- **Step 2** : Find the background site you just added in the Java project of the website list, click [Settings]-[Pseudo-static], fill in the pseudo-static information below, and click [Save].

```
location / {
  try_files $uri $uri/ /index.html;
}


```

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-2.png)

- **Step 3** : Click [SSL]-[Let's Encrypt], select [File Verification], check the domain name, click [Apply], and wait for the https certificate application to be completed. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-admin-3.png)
- **Step 4** : Access the added backend domain name to access the backend. The default account is admin and the password is 123123. For security reasons, please change the password.

#### [#Front](#%E5%89%8D%E5%8F%B0%E9%85%8D%E7%BD%AE) Desk Configuration

hint

Note that the root directory of the front-end is different from that of the back-end because the front-end has PC and mobile terminals.

- **Step 1** : Open [Website] - [Java Project] - [Add Java Project], select [Spring_boot], add the project / server/like-front/target/like-front-1.0.0.jar package, set JDK. Set it to start automatically at boot, set it to separate the front and back ends, fill in "/api" for the back end URL, set the front end root directory to the project's / public, fill in the front end domain name, and then [Submit]. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-1-1.png)

    ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-1-2.png)

hint

Please note that the pseudo-static information on the front end is different from that on the back end because the front end has PC and mobile terminals.

- **Step 2** : Find the front-end site you just added in the Java project of the website list, click [Settings] - [Pseudo-static], fill in the pseudo-static information below, and click [Save].

```
location /pc {
  try_files $uri $uri/ /pc/index.html;
}

location /mobile {
  try_files $uri $uri/ /mobile/index.html;
}



```

![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-2.png)

- **Step 3** : Click [SSL]-[Let's Encrypt], select [File Verification], check the domain name, click [Apply], and wait for the https certificate application to be completed. ![](https://doc.likeadmin.cn/docs/java/images/readme/bt-run-front-3.png)

hint

It depends on whether the product contains PC or mobile version, which is different for each product.

- **Step 4** : PC web front-end access: https:// added front-end domain name/pc, you can access the PC side. If the product has a mobile web front-end access: https:// added front-end domain name/mobile, you can access the PC side. The default access domain name will automatically jump according to whether the visitor uses a PC or a mobile phone.
