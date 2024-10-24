---
id: jdk-config
title: JDK download, installation and configuration
sidebar_label: JDK download, installation and configuration
---

# JDK download, installation and configuration

JDK official website address: [https://www.oracle.com/java/](https://www.oracle.com/java/)

### 1. Download JDK

Enter the official website, locate: Java -&gt; Java SE -&gt; Oracle JDK and click to enter, as shown below:

![jdk_1](/img/icecms/202302/jdk_image/jdk_1.png "jdk_1.png")

Select Java archive, scroll down the page, and select Java SE 8 (8u202 and earlier)

![jdk_2](/img/icecms/202302/jdk_image/jdk_2.png "jdk_2.png")

Download jdk-8u202-windows-x64.exe

![jdk_3](/img/icecms/202302/jdk_image/jdk_3.png "jdk_3.png")

![](/img/icecms/202302/jdk_image/jdk_7.png)

### 2. JDK installation

Download jdk to your local computer, find the file, double-click the .exe application, and run jdk to install it.

![](/img/icecms/202302/jdk_image/jdk_4.png)

Enter the jdk installation interface and click Next

![](/img/icecms/202302/jdk_image/jdk_5.png)

The installation location can be default or customized, and then just keep clicking Next until completed.

![](/img/icecms/202302/jdk_image/jdk_6.png)

### 3. Configure environment variables for jdk1.8

In the search box on the lower left corner of the computer, enter: Control Panel

![](/img/icecms/202302/jdk_image/jdk_8.png)

Control Panel -&gt; System and Security -&gt; System

![](/img/icecms/202302/jdk_image/jdk_9.png)

Advanced System Settings -&gt; Advanced -&gt; Environment Variables

![](/img/icecms/202302/jdk_image/jdk_10.png)

Create a new environment variable, the variable name is JAVA_HOME, the variable value is the path where jdk is installed

![](/img/icecms/202302/jdk_image/jdk_11.png)

Double-click Path with your mouse. If you have installed JDK, click Edit. If you are installing for the first time, click New.

![](/img/icecms/202302/jdk_image/jdk_12.png)

### 4. Verify whether jdk is configured successfully

Press the win+r shortcut key to open the command window, enter the cmd command, and click OK

![](/img/icecms/202302/jdk_image/img.png)

Input command:

```
java -version
```

If you can see the installed jdk version, the configuration is successful

![](/img/icecms/202302/jdk_image/img_1.png)
