---
id: idea_environment_config
title: IDEA development environment preparation
sidebar_label: IDEA development environment preparation
---

# IDEA development environment preparation

## 1. jdk configuration

Download and install jdk reference: [Documentation](/docs/project-code/environment/jdk-config)

Configure JDK in IDEA

Setting is idea configuration, Project Structure is project configuration

![](/img/icecms/202302/jdk_image/img_2.png)

Click Project Structure to enter the project configuration, select the JDK you installed, and then click Apply

![](/img/icecms/202302/jdk_image/img_3.png)

Click Modules, select the installed jdk, and then click Apply

![](/img/icecms/202302/jdk_image/img_4.png)

SDKs configuration, select the jdk you installed

![](/img/icecms/202302/jdk_image/img_5.png)

## 2. Maven configuration

Download and install Maven: [Documentation](/docs/project-code/environment/maven_config.md)

Maven configuration in IDEA

Open the setting in idea, as shown below:

![](/img/icecms/202302/maven_img/img_15.png)

Configure Maven path

![](/img/icecms/202302/maven_img/img_16.png)

## 3. Tomcat configuration

IDEA configures tomcat startup

The first step is to open idea and click Run -&gt; EDit Configurations

![](/img/icecms/202302/tomcat_img/img_3.png)

After entering, click the + sign, drop down and select Tomcat Server -&gt; local

![](/img/icecms/202302/tomcat_img/img_18.png)

Select the path where you unzipped the tomcat file you downloaded.

![](/img/icecms/202302/tomcat_img/img_19.png)

Then click Add war package to be deployed, and then click Apply

![](/img/icecms/202302/tomcat_img/img_22.png)

![](/img/icecms/202302/tomcat_img/img_20.png)

![](/img/icecms/202302/tomcat_img/img_23.png)

After configuring the Deployment, look at the server again, the URL address has been changed

![](/img/icecms/202302/tomcat_img/img_24.png)

IDEA starts the configured tomcat 9

![](/img/icecms/202302/tomcat_img/img_21.png)

The startup is successful, but Chinese garbled characters appear on the console

![](/img/icecms/202302/tomcat_img/img_25.png)

Open: apache-tomcat-9.0.65 -&gt; conf -&gt; logging.properties

Find the content shown in the figure below, comment it out, and add it again below to change UTF-8 to GBK

![](/img/icecms/202302/tomcat_img/img_26.png)

Restart tomcat to solve the garbled console problem

![](/img/icecms/202302/tomcat_img/img_27.png)

tomcat started successfully

![](/img/icecms/202302/tomcat_img/img_28.png)
