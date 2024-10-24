---
id: icecms_with_run
title: Compilation and operation of IceCMS
sidebar_label: Compilation and operation of IceCMS
---

# Compilation and operation of IceCMS

- **Here we take idea as an example to demonstrate the operation of eclipse.**

## 1- Compile

Before compiling, please configure the Maven environment and JDK environment of your current computer.

- 1. Maven environment configuration:
- 2. JDK environment configuration:

1- Open Terminal

![img.png](/img/icecms/202302/jpress/jpress_6.png)

2-Enter the compilation command **mvn clean package** and press Enter to wait for the compilation to end![img.png](/img/icecms/202302/ice cms/Icecms_7.png)

- 3-Compilation is finished![img.png](/img/icecms/202302/jpress/jpress_8.png)

## 2- Run

- 1- Find the project startup class and **click the green arrow to start the project**![img.png](/img/icecms/202302/jpress/jpress_9.png)

- 2- If the following interface appears, it means the startup is successful![img.png](/img/icecms/202302/jpress/jpress_10.png)

- 3- After starting the project, you can **access our homepage in the local environment through http://127.0.0.1:8080 or http://localhost:8080**

- 4- If we download and start it for the first time, we will enter the IceCMS graphical installation page **and the installation process will automatically create a database and table.**![img.png](/img/icecms/202302/jpress/jpress_11.png)

- 5- Then click Next and fill in the corresponding information and click Next![img.png](/img/icecms/202302/jpress/jpress_12.png)

- 6- Then fill in the corresponding information, click Finish and wait for a while![img.png](/img/icecms/202302/jpress/jpress_13.png)

- 7- A pop-up window appears indicating that the installation is successful![img.png](/img/icecms/202302/jpress/jpress_14.png)

- 8-After successful installation, you need to find **the two files install.lock and jboot.properties** in the project file **stater-&gt;target-&gt;classes folder![img.png](/img/icecms/202302/jpress/jpress_15.png)

- 9- Then copy these two files to the **starter-&gt;src-&gt;main-&gt;resource** directory

> Note-&gt;Because whether IceCMS is installed depends on these two files, when executing the mvn clean command, Maven will clear all files under the target, so JPress will go through the installation process again, so you need to copy these two files to the resources directory

![img.png](/img/icecms/202302/jpress/jpress_16.png)

- 10- Visit jpress homepage

> We can access our homepage through http://localhost:8181

- 11- Access jpress backend

> We can access our backend through http://localhost:8181/admin

![img.png](/img/icecms/202302/jpress/jpress_17.png)

- 12- Enter your account number, password and verification code and enter the backend **. IceCMS has been compiled and run successfully.**![img.png](/img/icecms/202302/jpress/jpress_18.png)
