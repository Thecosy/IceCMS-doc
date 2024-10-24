---
id: maven_config
title: Maven download and configuration
sidebar_label: Maven download and configuration
---

# Maven download and configuration

## 1. Maven download

Maven official website address: [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

Go to the Maven official website and click archives

![](/img/icecms/202302/maven_img/img.png)

Download version 3.6.2

![](/img/icecms/202302/maven_img/img_1.png)

![](/img/icecms/202302/maven_img/img_2.png)

![](/img/icecms/202302/maven_img/img_3.png)

Find the downloaded compressed package and unzip it

![](/img/icecms/202302/maven_img/img_4.png)

## 2. Configure environment variables

In the search box on the lower left corner of the computer, enter: Control Panel

![](/img/icecms/202302/jdk_image/jdk_8.png)

Control Panel -&gt; System and Security -&gt; System

![](/img/icecms/202302/jdk_image/jdk_9.png)

Advanced System Settings -&gt; Advanced -&gt; Environment Variables

![](/img/icecms/202302/jdk_image/jdk_10.png)

Create a new environment variable named MAVEN_HOME and set the value to the path where Maven is unzipped.

![](/img/icecms/202302/maven_img/img_5.png)

Double-click Path, enter the interface, and click Edit Text

![](/img/icecms/202302/maven_img/img_6.png)

## 3. Verify that Maven is installed and configured successfully

Press the win+r shortcut key to open the command window, enter the cmd command, and click OK

![](/img/icecms/202302/jdk_image/img.png)

Enter the command to view the version:

```
mvn -version
```

![](/img/icecms/202302/maven_img/img_7.png)

Setting file configuration, custom Maven repository (if not customized, there is a default repository)

Create a folder on disk named maven_repository (you can customize the name according to your own habits).

![](/img/icecms/202302/maven_img/img_8.png)

Open the Maven installation directory and select the setting.xml file in the conf folder

![](/img/icecms/202302/maven_img/img_9.png)

Edit the file settings.xml

Find the localRepository configuration in settings.xml and modify it to the directory of the created maven_repository folder

For example: D:\idea\maven\maven_repository

![](/img/icecms/202302/maven_img/img_10.png)

To check whether the settings have been successful, enter the following command in the console:

```
mvn help:system，
```

![](/img/icecms/202302/maven_img/img_11.png)

![](/img/icecms/202302/maven_img/img_12.png)

If BUILD SUCCESS appears, it means the execution is successful.

Find the newly created maven_repository folder and check if there is an org folder in it

If a file is generated inside, it means the modification is successful.

![](/img/icecms/202302/maven_img/img_13.png)

Change the Maven download mirror address to Alibaba source

After installing Maven, you should promptly modify the mirror address downloaded by Maven

The image added here is the Alibaba Cloud Central Image

![](/img/icecms/202302/maven_img/img_14.png)
