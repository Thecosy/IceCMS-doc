---
id: allinterface
title: 全部接口
sidebar_label: 全部接口
---

# Spring Boot IceCMS API V3.4


**简介**:Spring Boot IceCMS API V3.4


**HOST**:127.0.0.1:8181


**联系人**:


**Version**:3.4


**接口路径**:/v2/api-docs?group=前端分组


[TOC]






# Mini接口


## 获取重要文章


**接口地址**:`/Mini/GetArticleBtmatter`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|authorId||integer(int32)|integer(int32)|
|authorName||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|keyword||string||
|loveNum||integer(int32)|integer(int32)|
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|profile||string||
|sortClass||string||
|status||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"authorId": 0,
		"authorName": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"keyword": "",
		"loveNum": 0,
		"ownerTag": 0,
		"postNum": 0,
		"profile": "",
		"sortClass": "",
		"status": "",
		"thumb": "",
		"title": ""
	}
]
```


## 根据别名获取全部圈子(分页)


**接口地址**:`/Mini/getAllSquare/{id}/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|limit|limit|path|true|integer(int32)||
|otherName|otherName||true|string||
|page|page|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquarePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|SquareVO|
|&emsp;&emsp;addTime|创建时间|string||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorImg||string||
|&emsp;&emsp;commentDisabled||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;content||string||
|&emsp;&emsp;copyfrom||string||
|&emsp;&emsp;createTime|生成时间|string||
|&emsp;&emsp;deleted||integer(int32)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;httpUrl||string||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;image||string||
|&emsp;&emsp;inputer||string||
|&emsp;&emsp;iselite||integer(int32)||
|&emsp;&emsp;keyword||string||
|&emsp;&emsp;lastPost|最后评论时间|string||
|&emsp;&emsp;loveNum||integer(int32)||
|&emsp;&emsp;media||string||
|&emsp;&emsp;ontop||integer(int32)||
|&emsp;&emsp;postNum||integer(int32)||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;sortName||string||
|&emsp;&emsp;title||string||
|&emsp;&emsp;titleColor||string||
|&emsp;&emsp;titlefontSize||string||
|&emsp;&emsp;titlefontType||integer(int32)||
|&emsp;&emsp;type||integer(int32)||
|&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;userid||integer(int32)||
|pages||integer(int64)|integer(int64)|
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorImg": "",
			"commentDisabled": "",
			"commentNum": 0,
			"content": "",
			"copyfrom": "",
			"createTime": "",
			"deleted": 0,
			"hits": 0,
			"httpUrl": "",
			"id": 0,
			"image": "",
			"inputer": "",
			"iselite": 0,
			"keyword": "",
			"lastPost": "",
			"loveNum": 0,
			"media": "",
			"ontop": 0,
			"postNum": 0,
			"sortClass": "",
			"sortName": "",
			"title": "",
			"titleColor": "",
			"titlefontSize": "",
			"titlefontType": 0,
			"type": 0,
			"updateTime": "",
			"userid": 0
		}
	],
	"pages": 0,
	"total": 0
}
```


## 根据id获取文章内容


**接口地址**:`/Mini/getArticleById/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|文章id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|authorId||integer(int32)|integer(int32)|
|authorName||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|keyword||string||
|loveNum||integer(int32)|integer(int32)|
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|profile||string||
|sortClass||string||
|status||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
{
	"addTime": "",
	"authorId": 0,
	"authorName": "",
	"className": "",
	"commentNum": 0,
	"createTime": "",
	"hits": 0,
	"id": 0,
	"intro": "",
	"keyword": "",
	"loveNum": 0,
	"ownerTag": 0,
	"postNum": 0,
	"profile": "",
	"sortClass": "",
	"status": "",
	"thumb": "",
	"title": ""
}
```


## 获取首页轮播图


**接口地址**:`/Mini/getCarousel`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Map«string,object»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取最新资源列表


**接口地址**:`/Mini/getNewResource/{resourceNum}/{filter}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleNum|数量||true|string||
|filter|filter|path|true|string||
|resourceNum|resourceNum|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|author||string||
|authorThumb||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|ownerTag||integer(int32)|integer(int32)|
|price||string||
|profile||string||
|sortClass||string||
|status||string||
|subhead||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"author": "",
		"authorThumb": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"ownerTag": 0,
		"price": "",
		"profile": "",
		"sortClass": "",
		"status": "",
		"subhead": "",
		"thumb": "",
		"title": ""
	}
]
```


## 根据id获取资源内容


**接口地址**:`/Mini/getResourceById/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Resource|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|authorId||integer(int32)|integer(int32)|
|carousel||string||
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|isFree||integer(int32)|integer(int32)|
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|price||string||
|resAddress||string||
|resPassword||string||
|resourceStatus||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||
|videoAddress||string||


**响应示例**:
```javascript
{
	"addTime": "",
	"authorId": 0,
	"carousel": "",
	"commentDisabled": "",
	"content": "",
	"copyfrom": "",
	"createTime": "",
	"deleted": 0,
	"filePath": "",
	"fullTitle": "",
	"hits": 0,
	"htmlPath": "",
	"httpUrl": "",
	"id": 0,
	"inputer": "",
	"intro": "",
	"isFree": 0,
	"iselite": 0,
	"keyword": "",
	"lastPost": "",
	"loveNum": 0,
	"ontop": 0,
	"ownerRemark": "",
	"ownerTag": 0,
	"postNum": 0,
	"price": "",
	"resAddress": "",
	"resPassword": "",
	"resourceStatus": 0,
	"sortClass": 0,
	"status": "",
	"subhead": "",
	"tempPath": "",
	"thumb": "",
	"title": "",
	"titleColor": "",
	"titlefontSize": "",
	"titlefontType": 0,
	"updateTime": "",
	"videoAddress": ""
}
```


## 获取全部分类列表


**接口地址**:`/Mini/getSquareClasslist`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquareClass|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|describes||string||
|father||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|imgclass||string||
|isFree||boolean||
|name||string||
|num||integer(int32)|integer(int32)|
|otherName||string||
|price||integer(int32)|integer(int32)|
|top||boolean||


**响应示例**:
```javascript
[
	{
		"describes": "",
		"father": 0,
		"id": 0,
		"imgclass": "",
		"isFree": true,
		"name": "",
		"num": 0,
		"otherName": "",
		"price": 0,
		"top": true
	}
]
```


# Web信息接口


## 获取聊天记录


**接口地址**:`/WebchatMessages/getChatMessages/{sender}/{receiver}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|receiver|receiver|path|true|integer(int32)||
|sender|sender|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取聊天好友列表


**接口地址**:`/WebchatMessages/getMessageList/{userid}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userid|userid|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 发送聊天消息


**接口地址**:`/WebchatMessages/sendChatMessage/{sender}/{receiver}/{message}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|message|message|path|true|string||
|receiver|receiver|path|true|integer(int32)||
|sender|sender|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Web公告接口


## 获取全部公告列表


**接口地址**:`/WebAnnouncements/getAnnouncementslist`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Announcements|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|author||string||
|content||string||
|created|创建时间|string||
|id||integer(int32)|integer(int32)|
|isActive||integer(int32)|integer(int32)|
|title||string||
|updated|更新时间|string||


**响应示例**:
```javascript
[
	{
		"author": "",
		"content": "",
		"created": "",
		"id": 0,
		"isActive": 0,
		"title": "",
		"updated": ""
	}
]
```


## 获取指定数量的公告列表


**接口地址**:`/WebAnnouncements/getAnnouncementslistByNum/{num}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|num|num|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Announcements|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|author||string||
|content||string||
|created|创建时间|string||
|id||integer(int32)|integer(int32)|
|isActive||integer(int32)|integer(int32)|
|title||string||
|updated|更新时间|string||


**响应示例**:
```javascript
[
	{
		"author": "",
		"content": "",
		"created": "",
		"id": 0,
		"isActive": 0,
		"title": "",
		"updated": ""
	}
]
```


# Web圈子分类接口


## 根据分类id获取分类信息


**接口地址**:`/WebaSquareClass/getArticleClassByotherName/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|otherName|otherName||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquareClass|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|describes||string||
|father||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|imgclass||string||
|isFree||boolean||
|name||string||
|num||integer(int32)|integer(int32)|
|otherName||string||
|price||integer(int32)|integer(int32)|
|top||boolean||


**响应示例**:
```javascript
{
	"describes": "",
	"father": 0,
	"id": 0,
	"imgclass": "",
	"isFree": true,
	"name": "",
	"num": 0,
	"otherName": "",
	"price": 0,
	"top": true
}
```


## 根据分类id获取文章数量


**接口地址**:`/WebaSquareClass/getArticleClassNum/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取全部分类列表


**接口地址**:`/WebaSquareClass/getSquareClasslist`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquareClass|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|describes||string||
|father||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|imgclass||string||
|isFree||boolean||
|name||string||
|num||integer(int32)|integer(int32)|
|otherName||string||
|price||integer(int32)|integer(int32)|
|top||boolean||


**响应示例**:
```javascript
[
	{
		"describes": "",
		"father": 0,
		"id": 0,
		"imgclass": "",
		"isFree": true,
		"name": "",
		"num": 0,
		"otherName": "",
		"price": 0,
		"top": true
	}
]
```


# Web圈子广场接口


## 新增圈子


**接口地址**:`/Websquare/create`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|square|圈子对象|body|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据别名获取全部圈子(分页)


**接口地址**:`/Websquare/getAllSquare/{id}/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|limit|limit|path|true|integer(int32)||
|otherName|otherName||true|string||
|page|page|path|true|integer(int32)||
|type|type|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquarePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|SquareVO|
|&emsp;&emsp;addTime|创建时间|string||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorImg||string||
|&emsp;&emsp;commentDisabled||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;content||string||
|&emsp;&emsp;copyfrom||string||
|&emsp;&emsp;createTime|生成时间|string||
|&emsp;&emsp;deleted||integer(int32)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;httpUrl||string||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;image||string||
|&emsp;&emsp;inputer||string||
|&emsp;&emsp;iselite||integer(int32)||
|&emsp;&emsp;keyword||string||
|&emsp;&emsp;lastPost|最后评论时间|string||
|&emsp;&emsp;loveNum||integer(int32)||
|&emsp;&emsp;media||string||
|&emsp;&emsp;ontop||integer(int32)||
|&emsp;&emsp;postNum||integer(int32)||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;sortName||string||
|&emsp;&emsp;title||string||
|&emsp;&emsp;titleColor||string||
|&emsp;&emsp;titlefontSize||string||
|&emsp;&emsp;titlefontType||integer(int32)||
|&emsp;&emsp;type||integer(int32)||
|&emsp;&emsp;updateTime|更新时间|string||
|&emsp;&emsp;userid||integer(int32)||
|pages||integer(int64)|integer(int64)|
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorImg": "",
			"commentDisabled": "",
			"commentNum": 0,
			"content": "",
			"copyfrom": "",
			"createTime": "",
			"deleted": 0,
			"hits": 0,
			"httpUrl": "",
			"id": 0,
			"image": "",
			"inputer": "",
			"iselite": 0,
			"keyword": "",
			"lastPost": "",
			"loveNum": 0,
			"media": "",
			"ontop": 0,
			"postNum": 0,
			"sortClass": "",
			"sortName": "",
			"title": "",
			"titleColor": "",
			"titlefontSize": "",
			"titlefontType": 0,
			"type": 0,
			"updateTime": "",
			"userid": 0
		}
	],
	"pages": 0,
	"total": 0
}
```


## 根据id获取圈子内容


**接口地址**:`/Websquare/getSquareById/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|圈子id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquareVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|author||string||
|authorImg||string||
|commentDisabled||string||
|commentNum||integer(int32)|integer(int32)|
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|hits||integer(int32)|integer(int32)|
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|image||string||
|inputer||string||
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|media||string||
|ontop||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|sortClass||string||
|sortName||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|type||integer(int32)|integer(int32)|
|updateTime|更新时间|string||
|userid||integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"addTime": "",
	"author": "",
	"authorImg": "",
	"commentDisabled": "",
	"commentNum": 0,
	"content": "",
	"copyfrom": "",
	"createTime": "",
	"deleted": 0,
	"hits": 0,
	"httpUrl": "",
	"id": 0,
	"image": "",
	"inputer": "",
	"iselite": 0,
	"keyword": "",
	"lastPost": "",
	"loveNum": 0,
	"media": "",
	"ontop": 0,
	"postNum": 0,
	"sortClass": "",
	"sortName": "",
	"title": "",
	"titleColor": "",
	"titlefontSize": "",
	"titlefontType": 0,
	"type": 0,
	"updateTime": "",
	"userid": 0
}
```


## 评论点赞


**接口地址**:`/Websquare/likeClickComment/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|评论id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Web圈子评论接口


## 增加评论


**接口地址**:`/WebSquareComment/addPlanetComment`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "addTime": "",
  "content": "",
  "id": 0,
  "loveNum": 0,
  "parentId": 0,
  "postId": 0,
  "profile": "",
  "responder": "",
  "responderId": 0,
  "reviewers": "",
  "reviewersId": 0,
  "status": 0,
  "toUserId": 0,
  "type": 0,
  "userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|PlanetComment|评论分类对象||true|string||
|SquareComment|SquareComment|body|true|SquareComment|SquareComment|
|&emsp;&emsp;addTime|创建时间||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;loveNum|||false|integer(int32)||
|&emsp;&emsp;parentId|||false|integer(int32)||
|&emsp;&emsp;postId|||false|integer(int32)||
|&emsp;&emsp;profile|||false|string||
|&emsp;&emsp;responder|||false|string||
|&emsp;&emsp;responderId|||false|integer(int32)||
|&emsp;&emsp;reviewers|||false|string||
|&emsp;&emsp;reviewersId|||false|integer(int32)||
|&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;toUserId|||false|integer(int32)||
|&emsp;&emsp;type|||false|integer(int32)||
|&emsp;&emsp;userId|||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据文章id查看对应评论数


**接口地址**:`/WebSquareComment/getPlanetCommentnum/{planetId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|planetId|评论id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据文章id查询评论


**接口地址**:`/WebSquareComment/getPlanetIdComment/{postId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|postId|postId|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquareCommentVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|content||string||
|id||integer(int32)|integer(int32)|
|loveNum||integer(int32)|integer(int32)|
|parentId||integer(int32)|integer(int32)|
|postId||integer(int32)|integer(int32)|
|profile||string||
|reply||array|SquareComment|
|&emsp;&emsp;addTime|创建时间|string||
|&emsp;&emsp;content||string||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;loveNum||integer(int32)||
|&emsp;&emsp;parentId||integer(int32)||
|&emsp;&emsp;postId||integer(int32)||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;responder||string||
|&emsp;&emsp;responderId||integer(int32)||
|&emsp;&emsp;reviewers||string||
|&emsp;&emsp;reviewersId||integer(int32)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;toUserId||integer(int32)||
|&emsp;&emsp;type||integer(int32)||
|&emsp;&emsp;userId||integer(int32)||
|responder||string||
|responderId||integer(int32)|integer(int32)|
|reviewers||string||
|reviewersId||integer(int32)|integer(int32)|
|status||integer(int32)|integer(int32)|
|toUserId||integer(int32)|integer(int32)|
|userId||integer(int32)|integer(int32)|


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"content": "",
		"id": 0,
		"loveNum": 0,
		"parentId": 0,
		"postId": 0,
		"profile": "",
		"reply": [
			{
				"addTime": "",
				"content": "",
				"id": 0,
				"loveNum": 0,
				"parentId": 0,
				"postId": 0,
				"profile": "",
				"responder": "",
				"responderId": 0,
				"reviewers": "",
				"reviewersId": 0,
				"status": 0,
				"toUserId": 0,
				"type": 0,
				"userId": 0
			}
		],
		"responder": "",
		"responderId": 0,
		"reviewers": "",
		"reviewersId": 0,
		"status": 0,
		"toUserId": 0,
		"userId": 0
	}
]
```


## 评论点赞


**接口地址**:`/WebSquareComment/likeClickComment/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|评论id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Web文章分类接口


## 根据分类id获取文章数量


**接口地址**:`/WebarticleClass/getArticleClassNum/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取全部分类列表


**接口地址**:`/WebarticleClass/getArticleClasslist`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleClass|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|describes||string||
|father||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|imgclass||string||
|name||string||
|num||integer(int32)|integer(int32)|
|otherName||string||
|top||boolean||


**响应示例**:
```javascript
[
	{
		"describes": "",
		"father": 0,
		"id": 0,
		"imgclass": "",
		"name": "",
		"num": 0,
		"otherName": "",
		"top": true
	}
]
```


# Web文章接口


## 查询文章(分页)


**接口地址**:`/WebArticle/FindAllArticle/{content}/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|内容|path|true|string||
|limit|总量|path|true|string||
|page|页数|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticlePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ArticleVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;authorId||integer(int32)||
|&emsp;&emsp;authorName||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;keyword||string||
|&emsp;&emsp;loveNum||integer(int32)||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;postNum||integer(int32)||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|pages||integer(int64)|integer(int64)|
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"authorId": 0,
			"authorName": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"keyword": "",
			"loveNum": 0,
			"ownerTag": 0,
			"postNum": 0,
			"profile": "",
			"sortClass": "",
			"status": "",
			"thumb": "",
			"title": ""
		}
	],
	"pages": 0,
	"total": 0
}
```


## 根据作者name查询对应头像


**接口地址**:`/WebArticle/FindProfileByName/{name}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|name|作者名称|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取重要文章


**接口地址**:`/WebArticle/GetArticleBtmatter`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|authorId||integer(int32)|integer(int32)|
|authorName||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|keyword||string||
|loveNum||integer(int32)|integer(int32)|
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|profile||string||
|sortClass||string||
|status||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"authorId": 0,
		"authorName": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"keyword": "",
		"loveNum": 0,
		"ownerTag": 0,
		"postNum": 0,
		"profile": "",
		"sortClass": "",
		"status": "",
		"thumb": "",
		"title": ""
	}
]
```


## 统计文章喜欢量+1


**接口地址**:`/WebArticle/articles/{id}/love`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|文章id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 统计文章浏览量+1


**接口地址**:`/WebArticle/articles/{id}/view`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|文章id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 文章查询(全部)


**接口地址**:`/WebArticle/findarticles/{content}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|模糊查询标题|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Article|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|articleStatus||integer(int32)|integer(int32)|
|authorId||integer(int32)|integer(int32)|
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||string||
|postNum||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"articleStatus": 0,
		"authorId": 0,
		"commentDisabled": "",
		"content": "",
		"copyfrom": "",
		"createTime": "",
		"deleted": 0,
		"filePath": "",
		"fullTitle": "",
		"hits": 0,
		"htmlPath": "",
		"httpUrl": "",
		"id": 0,
		"inputer": "",
		"intro": "",
		"iselite": 0,
		"keyword": "",
		"lastPost": "",
		"loveNum": 0,
		"ontop": 0,
		"ownerRemark": "",
		"ownerTag": "",
		"postNum": 0,
		"sortClass": 0,
		"status": "",
		"subhead": "",
		"tempPath": "",
		"thumb": "",
		"title": "",
		"titleColor": "",
		"titlefontSize": "",
		"titlefontType": 0,
		"updateTime": ""
	}
]
```


## 文章查询(预览)


**接口地址**:`/WebArticle/findarticlesbynum/{content}/{num}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|模糊查询标题|path|true|string||
|num|num|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Article|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|articleStatus||integer(int32)|integer(int32)|
|authorId||integer(int32)|integer(int32)|
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||string||
|postNum||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"articleStatus": 0,
		"authorId": 0,
		"commentDisabled": "",
		"content": "",
		"copyfrom": "",
		"createTime": "",
		"deleted": 0,
		"filePath": "",
		"fullTitle": "",
		"hits": 0,
		"htmlPath": "",
		"httpUrl": "",
		"id": 0,
		"inputer": "",
		"intro": "",
		"iselite": 0,
		"keyword": "",
		"lastPost": "",
		"loveNum": 0,
		"ontop": 0,
		"ownerRemark": "",
		"ownerTag": "",
		"postNum": 0,
		"sortClass": 0,
		"status": "",
		"subhead": "",
		"tempPath": "",
		"thumb": "",
		"title": "",
		"titleColor": "",
		"titlefontSize": "",
		"titlefontType": 0,
		"updateTime": ""
	}
]
```


## 获取全部文章列表(分页)


**接口地址**:`/WebArticle/getAllArticle/{page}/{limit}/{click}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|click|click|path|true|integer(int32)||
|limit|总量|path|true|string||
|page|页数|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticlePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ArticleVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;authorId||integer(int32)||
|&emsp;&emsp;authorName||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;keyword||string||
|&emsp;&emsp;loveNum||integer(int32)||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;postNum||integer(int32)||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|pages||integer(int64)|integer(int64)|
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"authorId": 0,
			"authorName": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"keyword": "",
			"loveNum": 0,
			"ownerTag": 0,
			"postNum": 0,
			"profile": "",
			"sortClass": "",
			"status": "",
			"thumb": "",
			"title": ""
		}
	],
	"pages": 0,
	"total": 0
}
```


## 获取所有文章数量


**接口地址**:`/WebArticle/getAllArticleNumber`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据author获取文章


**接口地址**:`/WebArticle/getAllArticlebyAuthor/{author}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|author|author|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Article|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|articleStatus||integer(int32)|integer(int32)|
|authorId||integer(int32)|integer(int32)|
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||string||
|postNum||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"articleStatus": 0,
		"authorId": 0,
		"commentDisabled": "",
		"content": "",
		"copyfrom": "",
		"createTime": "",
		"deleted": 0,
		"filePath": "",
		"fullTitle": "",
		"hits": 0,
		"htmlPath": "",
		"httpUrl": "",
		"id": 0,
		"inputer": "",
		"intro": "",
		"iselite": 0,
		"keyword": "",
		"lastPost": "",
		"loveNum": 0,
		"ontop": 0,
		"ownerRemark": "",
		"ownerTag": "",
		"postNum": 0,
		"sortClass": 0,
		"status": "",
		"subhead": "",
		"tempPath": "",
		"thumb": "",
		"title": "",
		"titleColor": "",
		"titlefontSize": "",
		"titlefontType": 0,
		"updateTime": ""
	}
]
```


## 根据id获取文章内容


**接口地址**:`/WebArticle/getArticleById/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|文章id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleContentVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|authorId||integer(int32)|integer(int32)|
|authorName||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|content||string||
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|keyword||string||
|loveNum||integer(int32)|integer(int32)|
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|profile||string||
|sortClass||string||
|status||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
{
	"addTime": "",
	"authorId": 0,
	"authorName": "",
	"className": "",
	"commentNum": 0,
	"content": "",
	"createTime": "",
	"hits": 0,
	"id": 0,
	"intro": "",
	"keyword": "",
	"loveNum": 0,
	"ownerTag": 0,
	"postNum": 0,
	"profile": "",
	"sortClass": "",
	"status": "",
	"thumb": "",
	"title": ""
}
```


## 获取文章下一页(标题)


**接口地址**:`/WebArticle/getLastnewsArticle/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取最新文章列表


**接口地址**:`/WebArticle/getNewArticle/{articleNum}/{check}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleNum|数量|path|true|string||
|check|条件|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|authorId||integer(int32)|integer(int32)|
|authorName||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|keyword||string||
|loveNum||integer(int32)|integer(int32)|
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|profile||string||
|sortClass||string||
|status||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"authorId": 0,
		"authorName": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"keyword": "",
		"loveNum": 0,
		"ownerTag": 0,
		"postNum": 0,
		"profile": "",
		"sortClass": "",
		"status": "",
		"thumb": "",
		"title": ""
	}
]
```


## 获取文章上一页(标题)


**接口地址**:`/WebArticle/getPrenewsArticle/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Web文章评论接口


## 增加评论


**接口地址**:`/WebArticleComment/addArticleComment`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleComment|文章分类对象|body|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查看文章对应评论数


**接口地址**:`/WebArticleComment/getArticleCommentnum/{articleId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleId|文章id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 最新评论


**接口地址**:`/WebArticleComment/getNewArticleComment/{num}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|num|数量|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleCommentVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|articleId||integer(int32)|integer(int32)|
|articleName||string||
|content||string||
|email||string||
|foreignId||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|parentId||integer(int32)|integer(int32)|
|profile||string||
|userId||integer(int32)|integer(int32)|
|username||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"articleId": 0,
		"articleName": "",
		"content": "",
		"email": "",
		"foreignId": 0,
		"id": 0,
		"parentId": 0,
		"profile": "",
		"userId": 0,
		"username": ""
	}
]
```


## 根据文章id查询对应的评论


**接口地址**:`/WebArticleComment/getallArticleComment/{articleId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleId|文章id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ArticleComment|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|articleId||integer(int32)|integer(int32)|
|content||string||
|email||string||
|foreignId||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|parentId||integer(int32)|integer(int32)|
|profile||string||
|userId||integer(int32)|integer(int32)|
|username||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"articleId": 0,
		"content": "",
		"email": "",
		"foreignId": 0,
		"id": 0,
		"parentId": 0,
		"profile": "",
		"userId": 0,
		"username": ""
	}
]
```


# Web标签接口


## 获取全部tag


**接口地址**:`/WebTag/getAllTag`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|AllTag|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|color||string||
|effect||string||
|id||integer(int32)|integer(int32)|
|tagName||string||


**响应示例**:
```javascript
[
	{
		"color": "",
		"effect": "",
		"id": 0,
		"tagName": ""
	}
]
```


## 根据id获取tag名称


**接口地址**:`/WebTag/getTagByList/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|AllTag|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|color||string||
|effect||string||
|id||integer(int32)|integer(int32)|
|tagName||string||


**响应示例**:
```javascript
{
	"color": "",
	"effect": "",
	"id": 0,
	"tagName": ""
}
```


# Web用户接口


## 修改密码


**接口地址**:`/Websuser/ChangePassword/{jwt}/{yuanPassWord}/{NewPassWord}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|NewPassWord|新密码|path|true|string||
|jwt|jwt|path|true|string||
|userid|用户id|path|true|string||
|yuanPassWord|原密码|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 修改用户信息


**接口地址**:`/Websuser/ChangeUser`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "academic": "",
  "birthday": "",
  "createTime": "",
  "email": "",
  "gender": 0,
  "height": "",
  "integral": 0,
  "intro": "",
  "lastLogin": "",
  "monthly": "",
  "name": "",
  "openid": "",
  "password": "",
  "permanent": "",
  "phone": "",
  "profile": "",
  "role": "",
  "status": 0,
  "userId": 0,
  "userage": 0,
  "username": "",
  "vipDisableTip": true,
  "vipExpireDate": "",
  "vipValidDate": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|user|user|body|true|User|User|
|&emsp;&emsp;academic|||false|string||
|&emsp;&emsp;birthday|||false|string||
|&emsp;&emsp;createTime|生成时间||false|string||
|&emsp;&emsp;email|||false|string||
|&emsp;&emsp;gender|||false|integer(int32)||
|&emsp;&emsp;height|||false|string||
|&emsp;&emsp;integral|||false|integer(int32)||
|&emsp;&emsp;intro|||false|string||
|&emsp;&emsp;lastLogin|||false|string(date-time)||
|&emsp;&emsp;monthly|||false|string||
|&emsp;&emsp;name|||false|string||
|&emsp;&emsp;openid|||false|string||
|&emsp;&emsp;password|||false|string||
|&emsp;&emsp;permanent|||false|string||
|&emsp;&emsp;phone|||false|string||
|&emsp;&emsp;profile|||false|string||
|&emsp;&emsp;role|||false|string||
|&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;userId|||false|integer(int32)||
|&emsp;&emsp;userage|||false|integer(int32)||
|&emsp;&emsp;username|||false|string||
|&emsp;&emsp;vipDisableTip|||false|boolean||
|&emsp;&emsp;vipExpireDate|||false|string(date-time)||
|&emsp;&emsp;vipValidDate|||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 根据用户名判断是否是管理员


**接口地址**:`/Websuser/CheckAdmin/{userid}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userid|用户名id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 注册账号


**接口地址**:`/Websuser/Create`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|password|密码|query|true|string||
|username|用户名|query|true|string||
|academic|学历|query|false|string||
|birthday|生日|query|false|string(date)||
|createTime|生成时间|query|false|string(date-time)||
|email|邮箱|query|false|string||
|gender|性别|query|false|string||
|height|身高|query|false|ref||
|integral||query|false|integer(int32)||
|intro||query|false|string||
|lastLogin||query|false|string(date-time)||
|monthly|月收入|query|false|string||
|name|姓名|query|false|string||
|openid||query|false|string||
|permanent|永久地址|query|false|string||
|phone||query|false|string||
|profile||query|false|string||
|role||query|false|string||
|status|验证码状态|query|false|ref||
|userId||query|false|integer(int32)||
|userage|年龄|query|false|ref||
|vipDisableTip||query|false|boolean||
|vipExpireDate||query|false|string(date-time)||
|vipValidDate||query|false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 微信登录注册


**接口地址**:`/Websuser/CreateWeChatLogin`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|code|query|true|string||
|scene|scene|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 邮箱找回密码


**接口地址**:`/Websuser/FindPassword`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|验证码|query|true|string||
|email|邮箱|query|true|string||
|password|新密码|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 手机号找回密码


**接口地址**:`/Websuser/FindPasswordPhone`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|验证码|query|true|string||
|password|新密码|query|true|string||
|phone|手机号|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 找回密码发送手机号验证码


**接口地址**:`/Websuser/FindPasswordSendCode`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|email|邮箱|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 找回密码发送邮箱验证码


**接口地址**:`/Websuser/FindPasswordSendEmail`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|email|邮箱|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 短信登录


**接口地址**:`/Websuser/Messagelogin/{phone}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|phone|手机号|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 短信登录验证


**接口地址**:`/Websuser/MessageloginCheck/{phone}/{code}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|验证码|query|true|string||
|phone|手机号|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 微信登录


**接口地址**:`/Websuser/WeChatLogin`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 微信登录验证


**接口地址**:`/Websuser/WeChatLoginCheck/{scene}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|scene|scene|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 获取当前登录用户的详细信息


**接口地址**:`/Websuser/getCurrentUserInfo`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|Authorization|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 获取当前用户的订单信息


**接口地址**:`/Websuser/getCurrentUserOrders`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|Authorization|header|false|string||
|limit|每页数量|query|false|integer(int32)||
|page|页码|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 根据id获取用户信息


**接口地址**:`/Websuser/getUserInfobyid/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 登录


**接口地址**:`/Websuser/login`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|password|密码|query|true|string||
|username|用户名|query|true|string||
|academic||query|false|string||
|birthday||query|false|string||
|createTime|生成时间|query|false|string(date-time)||
|email||query|false|string||
|gender||query|false|integer(int32)||
|height||query|false|string||
|integral||query|false|integer(int32)||
|intro||query|false|string||
|lastLogin||query|false|string(date-time)||
|monthly||query|false|string||
|name||query|false|string||
|openid||query|false|string||
|permanent||query|false|string||
|phone||query|false|string||
|profile||query|false|string||
|role||query|false|string||
|status||query|false|integer(int32)||
|userId||query|false|integer(int32)||
|userage||query|false|integer(int32)||
|vipDisableTip||query|false|boolean||
|vipExpireDate||query|false|string(date-time)||
|vipValidDate||query|false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


## 邮箱验证


**接口地址**:`/Websuser/testemail/{email}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|email|email|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|msg||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": ""
}
```


# Web设置接口


## 获取首页轮播图


**接口地址**:`/WebSitting/getCarousel`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|DispositionCarousel|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|button||string||
|id||integer(int32)|integer(int32)|
|img||string||
|introduce||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"button": "",
		"id": 0,
		"img": "",
		"introduce": "",
		"title": ""
	}
]
```


## 获取首页四大金刚


**接口地址**:`/WebSitting/getFourKingKong`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|HomeSetting|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|colorLeft||string||
|colorRight||string||
|featureEnabled||string||
|featureSrc||string||
|featureTitle||string||
|id||integer(int32)|integer(int32)|


**响应示例**:
```javascript
[
	{
		"colorLeft": "",
		"colorRight": "",
		"featureEnabled": "",
		"featureSrc": "",
		"featureTitle": "",
		"id": 0
	}
]
```


## 获取所有设置


**接口地址**:`/WebSitting/getSetting`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Setting|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|banquan||string||
|beian||string||
|comment_show||boolean||
|h5Show||boolean||
|id||integer(int32)|integer(int32)|
|imageFormat||boolean||
|sitLogo||string||
|sitSrc||string||
|sitTitle||string||


**响应示例**:
```javascript
{
	"banquan": "",
	"beian": "",
	"comment_show": true,
	"h5Show": true,
	"id": 0,
	"imageFormat": true,
	"sitLogo": "",
	"sitSrc": "",
	"sitTitle": ""
}
```


# Web资源分类接口


## 根据classid查询对应的资源分类名称


**接口地址**:`/WebResourceClass/getResourceClassNameByid/{classId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|分类id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取全部资源分类列表


**接口地址**:`/WebResourceClass/getResourceClasslist`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceClass|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|describes||string||
|father||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|imgclass||string||
|name||string||
|num||integer(int32)|integer(int32)|
|otherName||string||
|top||boolean||


**响应示例**:
```javascript
[
	{
		"describes": "",
		"father": 0,
		"id": 0,
		"imgclass": "",
		"name": "",
		"num": 0,
		"otherName": "",
		"top": true
	}
]
```


# Web资源接口


## 查询资源(分页)


**接口地址**:`/WebResource/FindAllResource/{content}/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|内容|path|true|string||
|limit|总量|path|true|string||
|page|页数|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourcePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ResourceVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorThumb||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;price||string||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;subhead||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorThumb": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"ownerTag": 0,
			"price": "",
			"profile": "",
			"sortClass": "",
			"status": "",
			"subhead": "",
			"thumb": "",
			"title": ""
		}
	],
	"total": 0
}
```


## 资源查询(预览)


**接口地址**:`/WebResource/findresourcebynum/{content}/{num}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|内容|path|true|string||
|num|总量|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Resource|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|authorId||integer(int32)|integer(int32)|
|carousel||string||
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|isFree||integer(int32)|integer(int32)|
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|price||string||
|resAddress||string||
|resPassword||string||
|resourceStatus||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||
|videoAddress||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"authorId": 0,
		"carousel": "",
		"commentDisabled": "",
		"content": "",
		"copyfrom": "",
		"createTime": "",
		"deleted": 0,
		"filePath": "",
		"fullTitle": "",
		"hits": 0,
		"htmlPath": "",
		"httpUrl": "",
		"id": 0,
		"inputer": "",
		"intro": "",
		"isFree": 0,
		"iselite": 0,
		"keyword": "",
		"lastPost": "",
		"loveNum": 0,
		"ontop": 0,
		"ownerRemark": "",
		"ownerTag": 0,
		"postNum": 0,
		"price": "",
		"resAddress": "",
		"resPassword": "",
		"resourceStatus": 0,
		"sortClass": 0,
		"status": "",
		"subhead": "",
		"tempPath": "",
		"thumb": "",
		"title": "",
		"titleColor": "",
		"titlefontSize": "",
		"titlefontType": 0,
		"updateTime": "",
		"videoAddress": ""
	}
]
```


## 获取全部资源列表(分页)


**接口地址**:`/WebResource/getAllResource/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|总量|path|true|string||
|page|页数|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourcePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ResourceVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorThumb||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;price||string||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;subhead||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorThumb": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"ownerTag": 0,
			"price": "",
			"profile": "",
			"sortClass": "",
			"status": "",
			"subhead": "",
			"thumb": "",
			"title": ""
		}
	],
	"total": 0
}
```


## 获取所有资源数量


**接口地址**:`/WebResource/getAllResourceNumber`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据author获取资源


**接口地址**:`/WebResource/getAllResourcebyAuthor/{author}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|author|author|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Resource|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|authorId||integer(int32)|integer(int32)|
|carousel||string||
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|isFree||integer(int32)|integer(int32)|
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|price||string||
|resAddress||string||
|resPassword||string||
|resourceStatus||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||
|videoAddress||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"authorId": 0,
		"carousel": "",
		"commentDisabled": "",
		"content": "",
		"copyfrom": "",
		"createTime": "",
		"deleted": 0,
		"filePath": "",
		"fullTitle": "",
		"hits": 0,
		"htmlPath": "",
		"httpUrl": "",
		"id": 0,
		"inputer": "",
		"intro": "",
		"isFree": 0,
		"iselite": 0,
		"keyword": "",
		"lastPost": "",
		"loveNum": 0,
		"ontop": 0,
		"ownerRemark": "",
		"ownerTag": 0,
		"postNum": 0,
		"price": "",
		"resAddress": "",
		"resPassword": "",
		"resourceStatus": 0,
		"sortClass": 0,
		"status": "",
		"subhead": "",
		"tempPath": "",
		"thumb": "",
		"title": "",
		"titleColor": "",
		"titlefontSize": "",
		"titlefontType": 0,
		"updateTime": "",
		"videoAddress": ""
	}
]
```


## 获取热门资源


**接口地址**:`/WebResource/getHotResources/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|获取数量|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|author||string||
|authorThumb||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|ownerTag||integer(int32)|integer(int32)|
|price||string||
|profile||string||
|sortClass||string||
|status||string||
|subhead||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"author": "",
		"authorThumb": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"ownerTag": 0,
		"price": "",
		"profile": "",
		"sortClass": "",
		"status": "",
		"subhead": "",
		"thumb": "",
		"title": ""
	}
]
```


## 获取文章下一页(标题)


**接口地址**:`/WebResource/getLastnewsResource/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取最新资源


**接口地址**:`/WebResource/getLatestResources/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|获取数量|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|author||string||
|authorThumb||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|ownerTag||integer(int32)|integer(int32)|
|price||string||
|profile||string||
|sortClass||string||
|status||string||
|subhead||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"author": "",
		"authorThumb": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"ownerTag": 0,
		"price": "",
		"profile": "",
		"sortClass": "",
		"status": "",
		"subhead": "",
		"thumb": "",
		"title": ""
	}
]
```


## 获取最新资源列表


**接口地址**:`/WebResource/getNewResource/{resourceNum}/{filter}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleNum|数量||true|string||
|filter|filter|path|true|string||
|resourceNum|resourceNum|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|author||string||
|authorThumb||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|ownerTag||integer(int32)|integer(int32)|
|price||string||
|profile||string||
|sortClass||string||
|status||string||
|subhead||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"author": "",
		"authorThumb": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"ownerTag": 0,
		"price": "",
		"profile": "",
		"sortClass": "",
		"status": "",
		"subhead": "",
		"thumb": "",
		"title": ""
	}
]
```


## 获取文章上一页(标题)


**接口地址**:`/WebResource/getPrenewsResource/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取相关推荐资源


**接口地址**:`/WebResource/getRecommendedResources/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|获取数量|path|true|string||
|classId|分类ID（可选）|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|author||string||
|authorThumb||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|ownerTag||integer(int32)|integer(int32)|
|price||string||
|profile||string||
|sortClass||string||
|status||string||
|subhead||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"author": "",
		"authorThumb": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"ownerTag": 0,
		"price": "",
		"profile": "",
		"sortClass": "",
		"status": "",
		"subhead": "",
		"thumb": "",
		"title": ""
	}
]
```


## 根据分类ID和类型获取资源


**接口地址**:`/WebResource/getResourceByClassAndType/{page}/{limit}/{classId}/{type}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|分类ID|path|true|string||
|limit|每页数量|path|true|string||
|page|页数|path|true|string||
|type|类型：new(最新)、hot(下载量)、commend(评论数)、like(喜欢数)、recommend(推荐)|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourcePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ResourceVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorThumb||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;price||string||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;subhead||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorThumb": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"ownerTag": 0,
			"price": "",
			"profile": "",
			"sortClass": "",
			"status": "",
			"subhead": "",
			"thumb": "",
			"title": ""
		}
	],
	"total": 0
}
```


## 根据分类id获取资源内容


**接口地址**:`/WebResource/getResourceByClassId/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|分类id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime||string(date-time)|string(date-time)|
|author||string||
|authorThumb||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|intro||string||
|ownerTag||integer(int32)|integer(int32)|
|price||string||
|profile||string||
|sortClass||string||
|status||string||
|subhead||string||
|thumb||string||
|title||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"author": "",
		"authorThumb": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
		"intro": "",
		"ownerTag": 0,
		"price": "",
		"profile": "",
		"sortClass": "",
		"status": "",
		"subhead": "",
		"thumb": "",
		"title": ""
	}
]
```


## 根据id获取资源内容


**接口地址**:`/WebResource/getResourceById/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Resource|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|authorId||integer(int32)|integer(int32)|
|carousel||string||
|commentDisabled||string||
|content||string||
|copyfrom||string||
|createTime|生成时间|string||
|deleted||integer(int32)|integer(int32)|
|filePath||string||
|fullTitle||string||
|hits||integer(int32)|integer(int32)|
|htmlPath||string||
|httpUrl||string||
|id||integer(int32)|integer(int32)|
|inputer||string||
|intro||string||
|isFree||integer(int32)|integer(int32)|
|iselite||integer(int32)|integer(int32)|
|keyword||string||
|lastPost|最后评论时间|string||
|loveNum||integer(int32)|integer(int32)|
|ontop||integer(int32)|integer(int32)|
|ownerRemark||string||
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|price||string||
|resAddress||string||
|resPassword||string||
|resourceStatus||integer(int32)|integer(int32)|
|sortClass||integer(int32)|integer(int32)|
|status||string||
|subhead||string||
|tempPath||string||
|thumb||string||
|title||string||
|titleColor||string||
|titlefontSize||string||
|titlefontType||integer(int32)|integer(int32)|
|updateTime|更新时间|string||
|videoAddress||string||


**响应示例**:
```javascript
{
	"addTime": "",
	"authorId": 0,
	"carousel": "",
	"commentDisabled": "",
	"content": "",
	"copyfrom": "",
	"createTime": "",
	"deleted": 0,
	"filePath": "",
	"fullTitle": "",
	"hits": 0,
	"htmlPath": "",
	"httpUrl": "",
	"id": 0,
	"inputer": "",
	"intro": "",
	"isFree": 0,
	"iselite": 0,
	"keyword": "",
	"lastPost": "",
	"loveNum": 0,
	"ontop": 0,
	"ownerRemark": "",
	"ownerTag": 0,
	"postNum": 0,
	"price": "",
	"resAddress": "",
	"resPassword": "",
	"resourceStatus": 0,
	"sortClass": 0,
	"status": "",
	"subhead": "",
	"tempPath": "",
	"thumb": "",
	"title": "",
	"titleColor": "",
	"titlefontSize": "",
	"titlefontType": 0,
	"updateTime": "",
	"videoAddress": ""
}
```


## 根据类型获取资源


**接口地址**:`/WebResource/getResourceByType/{page}/{limit}/{type}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|每页数量|path|true|string||
|page|页数|path|true|string||
|type|类型：new(最新)、hot(下载量)、commend(评论数)、like(喜欢数)、recommend(推荐)|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourcePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ResourceVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorThumb||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;price||string||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;subhead||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorThumb": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"ownerTag": 0,
			"price": "",
			"profile": "",
			"sortClass": "",
			"status": "",
			"subhead": "",
			"thumb": "",
			"title": ""
		}
	],
	"total": 0
}
```


## 根据分类ID获取全部资源列表(分页)


**接口地址**:`/WebResource/getResourceFilter/{page}/{limit}/{rclass}/{filter}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|class|类别||true|string||
|filter|条件|path|true|string||
|limit|总量|path|true|string||
|page|页数|path|true|string||
|rclass|rclass|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourcePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ResourceVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;author||string||
|&emsp;&emsp;authorThumb||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;intro||string||
|&emsp;&emsp;ownerTag||integer(int32)||
|&emsp;&emsp;price||string||
|&emsp;&emsp;profile||string||
|&emsp;&emsp;sortClass||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;subhead||string||
|&emsp;&emsp;thumb||string||
|&emsp;&emsp;title||string||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"addTime": "",
			"author": "",
			"authorThumb": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
			"intro": "",
			"ownerTag": 0,
			"price": "",
			"profile": "",
			"sortClass": "",
			"status": "",
			"subhead": "",
			"thumb": "",
			"title": ""
		}
	],
	"total": 0
}
```


## 统计资源下载量+1


**接口地址**:`/WebResource/resource/{id}/download`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 统计资源喜欢量+1


**接口地址**:`/WebResource/resource/{id}/love`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 统计资源浏览量+1


**接口地址**:`/WebResource/resource/{id}/view`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Web资源评论接口


## 增加评论


**接口地址**:`/WebResourceComment/addResourceComment`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceComment|资源分类对象|body|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查看文章对应评论数


**接口地址**:`/WebResourceComment/getResourceCommentnum/{resourceId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceId|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据资源id查询对应的评论


**接口地址**:`/WebResourceComment/getallResourceComment/{resourceId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceId|资源id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResourceComment|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|content||string||
|email||string||
|foreignId||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
|parentId||integer(int32)|integer(int32)|
|profile||string||
|resourceId||integer(int32)|integer(int32)|
|userId||integer(int32)|integer(int32)|
|username||string||


**响应示例**:
```javascript
[
	{
		"addTime": "",
		"content": "",
		"email": "",
		"foreignId": 0,
		"id": 0,
		"parentId": 0,
		"profile": "",
		"resourceId": 0,
		"userId": 0,
		"username": ""
	}
]
```