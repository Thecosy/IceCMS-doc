---
id: fasttest
title: Mini Program First Review Operation Guide
sidebar_label: Mini Program First Review Operation Guide
---

# Mini Program First Review Operation Guide

> Mini Program First Review Operation Guide Before starting a mini program, you need to register a mini program. If you have a certified public account (service account), you can refer to Tencent's official manual to quickly register a mini program in the service account. https://kf.qq.com/touch/wxappfaq/170427RRbmMr170427bIVryQ.html After registration, please complete the following operations:

## 1. Fill in the mini program information

If you are registering your mini program for the first time, you need to fill in the basic information of the mini program, such as name, icon, description, service category, etc.

![image.png](/img/icecms/202301/1736bd28c35912c8.png "image.png")

### 1.1 Social -&gt; Community/Forum

For service category, you need to fill in "Social-&gt;Community/Forum", select "Non-profit Internet Information Service Registration Approval", and upload a screenshot of the ICP domain name registration. However, the subject of the domain name must be the same as the subject of the mini program. (Registration information query website: https://beian.miit.gov.cn/#/Integrated/index), as shown in the example below ![image-1.png](/img/icecms/202301/1736bd2d483408fc.png "image-1.png")![image-2.png](/img/icecms/202301/1736bd317feb1d27.png "image-2.png") Examples

## 2. Fill in the content

First, make sure that the content in the mini program is filled and no page is blank; then check whether there is any obvious test text in the content, such as "test", "test", "111222".

## 3. Service categories

Check if the service category of the mini program has applied for "Social-&gt;Community/Forum". If not, you can add it in the mini program details. The required qualifications can be found in 1.1 ![image-3.png](/img/icecms/202301/1736bd3740e19257.png "image-3.png")

## 4. Mini Program Review

Find the version released by "Xiangtian Xugong" in "Version Management" and click "Submit for Review". ![image-4.png](/img/icecms/202301/1736bd3c9b221d12.png "image-4.png")

### 4.1 UGC scenario information security description

If you do not fill in the UGC description when the Mini Program is first reviewed, a window will pop up to fill in the UGC description. Fill it in as shown below. Mechanism description: Use the content security API recommended by the platform, and there is also manual review and approval ![image-5.png](/img/icecms/202301/1736bd3fa5e923a6.png "image-5.png")

### 4.2 Fill in submission information

If there are no special circumstances, you don't need to fill in the optional fields. Write "New version submission", "New features", etc. in the version description. There is no hard requirement. After filling it out, you can submit it for review. ![image-6.png](/img/icecms/202301/1736bd428578c566.png "image-6.png")

### 4.3 Update User Privacy Protection Agreement

When submitting version information, you may be asked to update the privacy protection agreement. You can fill it out according to the picture below. If there are other collection requirements, you can consult us in the relevant after-sales group. ![image-7.png](/img/icecms/202301/1736bd4585295cf1.png "image-7.png")

## 5. Release

Since we are a social category, the first review time is 1+7 natural days, 1 day of internal review by WeChat (actually it may take only one or two hours), 7 days of secondary review by the local cybersecurity and informatization department, and after 7 days, you will be notified to pre-release. At this time, you can log in to the version management of the mini program platform to release it. If you want to review the version later, you only need to fill in the submission information again, and it will only be reviewed by WeChat internally, and will not enter the second review.

## Appendix: Common reasons for failed trials

### 1. Failure due to category reasons

#### 1.2 Review failed due to lack of XXX category

Some customers have a shopping mall or a points mall, and the mall has some food, clothing and other products on the shelves, which requires corresponding categories to be added. Some categories require qualifications. If you do not meet the qualification requirements, you need to remove the products from the shelves and then submit them for review.

### 2. Failure due to lack of access to the security API

Our system actually accesses the security API interface provided by the mini program, but due to packaging errors, it may not be connected, so we need to test and verify it. Post a post with the following content in the mini program beta version.

### 3. Failure due to lack of content on some interfaces

You need to go to this interface to fill in some data. If it is a section or channel, you can also disable it first and release it after it is approved.

### 4. Failure due to test data

You need to delete the relevant test content and then check whether there is other test content.
