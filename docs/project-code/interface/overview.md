---
sidebar_position: 1
---

# 全部接口

# Spring Boot Knife4j or swagger-bootstrap-ui API V1.0


**简介**:Spring Boot Knife4j or swagger-bootstrap-ui API V1.0


**HOST**:localhost:8181


**联系人**:IceCMS


**Version**:1.0


**接口路径**:/v2/api-docs?group=ICE分组


[TOC]






# Web圈子分类接口


## 根据分类别名获取分类信息


**接口地址**:`/WebaSquareClass/getArticleClassByotherName/{otherName}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|otherName|otherName|path|true|string||


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
|top||integer(int32)|integer(int32)|


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
	"top": 0
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
|top||integer(int32)|integer(int32)|


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
		"top": 0
	}
]
```


# Web圈子广场接口


## 新增圈子


**接口地址**:`/Websquare/create/{SortName}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|SortName|SortName|path|true|string||
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


**接口地址**:`/Websquare/getAllSquare/{otherName}/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|limit|path|true|integer(int32)||
|otherName|otherName|path|true|string||
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
|top||integer(int32)|integer(int32)|


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
		"top": 0
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
|&emsp;&emsp;author||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
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
			"author": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
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
|author||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
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
		"author": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
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
|author||string||
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
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|sortClass||string||
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
		"author": "",
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
		"ownerTag": 0,
		"postNum": 0,
		"sortClass": "",
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
|author||string||
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
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|sortClass||string||
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
		"author": "",
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
		"ownerTag": 0,
		"postNum": 0,
		"sortClass": "",
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
|&emsp;&emsp;author||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
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
			"author": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
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
|200|OK|Article|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|articleStatus||integer(int32)|integer(int32)|
|author||string||
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
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|sortClass||string||
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
{
	"addTime": "",
	"articleStatus": 0,
	"author": "",
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
	"ownerTag": 0,
	"postNum": 0,
	"sortClass": "",
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
|author||string||
|className||string||
|commentNum||integer(int32)|integer(int32)|
|createTime||string(date-time)|string(date-time)|
|hits||integer(int32)|integer(int32)|
|id||integer(int32)|integer(int32)|
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
		"author": "",
		"className": "",
		"commentNum": 0,
		"createTime": "",
		"hits": 0,
		"id": 0,
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
|addTime|创建时间|string||
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


**接口地址**:`/Tag/getAllTag`


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
|id||integer(int32)|integer(int32)|
|tagName||string||


**响应示例**:
```javascript
[
	{
		"id": 0,
		"tagName": ""
	}
]
```


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
|id||integer(int32)|integer(int32)|
|tagName||string||


**响应示例**:
```javascript
[
	{
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
|id||integer(int32)|integer(int32)|
|tagName||string||


**响应示例**:
```javascript
{
	"id": 0,
	"tagName": ""
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
|cosBucketName||string||
|cosClientConfig||string||
|cosIntage||string||
|cosSecretId||string||
|cosSecretKey||string||
|id||integer(int32)|integer(int32)|
|imageFormat||boolean||
|isCos||boolean||
|sitLogo||string||
|sitTitle||string||


**响应示例**:
```javascript
{
	"banquan": "",
	"beian": "",
	"comment_show": true,
	"cosBucketName": "",
	"cosClientConfig": "",
	"cosIntage": "",
	"cosSecretId": "",
	"cosSecretKey": "",
	"id": 0,
	"imageFormat": true,
	"isCos": true,
	"sitLogo": "",
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
|top||integer(int32)|integer(int32)|


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
		"top": 0
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
|articleStatus||integer(int32)|integer(int32)|
|author||string||
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
|isFree||boolean||
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
|sortClass||string||
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
		"author": "",
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
		"isFree": true,
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
		"sortClass": "",
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
|articleStatus||integer(int32)|integer(int32)|
|author||string||
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
|isFree||boolean||
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
|sortClass||string||
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
{
	"addTime": "",
	"articleStatus": 0,
	"author": "",
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
	"isFree": true,
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
	"sortClass": "",
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


# 后台分类管理接口


## 删除文章分类


**接口地址**:`/articleClass/DeleteArticleClass/{id}`


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


## 获取文章分类列表(分页)


**接口地址**:`/articleClass/allArticleClass/{page}/{limit}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


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
|200|OK|ArticleClassPageVO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ArticleClass|
|&emsp;&emsp;describes||string||
|&emsp;&emsp;father||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;imgclass||string||
|&emsp;&emsp;name||string||
|&emsp;&emsp;num||integer(int32)||
|&emsp;&emsp;otherName||string||
|&emsp;&emsp;top||integer(int32)||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"describes": "",
			"father": 0,
			"id": 0,
			"imgclass": "",
			"name": "",
			"num": 0,
			"otherName": "",
			"top": 0
		}
	],
	"total": 0
}
```


## 获取全部分类列表


**接口地址**:`/articleClass/getAllClassName`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ClassNameVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|name||string||


**响应示例**:
```javascript
[
	{
		"name": ""
	}
]
```


## 根据id值查询对应的分类名称


**接口地址**:`/articleClass/getClassNameById/{id}`


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


## 新建文章分类


**接口地址**:`/articleClass/newArticleClass`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleClass|文章分类对象|body|true|string||


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


# 后台圈子分类管理接口


## 根据id删除圈子分类评论


**接口地址**:`/squareClass/DelectSquareClassById/{id}`


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


## 获取圈子分类列表(分页)


**接口地址**:`/squareClass/allSquareClass/{page}/{limit}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


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
|200|OK|SquareClassPageVO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|SquareClass|
|&emsp;&emsp;describes||string||
|&emsp;&emsp;father||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;imgclass||string||
|&emsp;&emsp;isFree||boolean||
|&emsp;&emsp;name||string||
|&emsp;&emsp;num||integer(int32)||
|&emsp;&emsp;otherName||string||
|&emsp;&emsp;price||integer(int32)||
|&emsp;&emsp;top||integer(int32)||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
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
			"top": 0
		}
	],
	"total": 0
}
```


## 获取全部分类列表


**接口地址**:`/squareClass/getAllClassName`


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
|top||integer(int32)|integer(int32)|


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
		"top": 0
	}
]
```


## 根据id值查询对应的分类名称


**接口地址**:`/squareClass/getClassNameById/{id}`


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


## 新建分类


**接口地址**:`/squareClass/newSquareClass`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


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
  "top": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|articleClass|文章分类对象||true|string||
|squareClass|squareClass|body|true|SquareClass|SquareClass|
|&emsp;&emsp;describes|||false|string||
|&emsp;&emsp;father|||false|integer(int32)||
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;imgclass|||false|string||
|&emsp;&emsp;isFree|||false|boolean||
|&emsp;&emsp;name|||false|string||
|&emsp;&emsp;num|||false|integer(int32)||
|&emsp;&emsp;otherName|||false|string||
|&emsp;&emsp;price|||false|integer(int32)||
|&emsp;&emsp;top|||false|integer(int32)||


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


# 后台圈子管理接口


## 根据id修改圈子内容


**接口地址**:`/square/ChangeSquareById/{id}/{content}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|content|path|true|string||
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


## 根据id删除圈子


**接口地址**:`/square/DelectSquareById/{id}`


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


## 获取全部圈子用户


**接口地址**:`/square/GetAllSquareUser`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|User|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|created||string(date-time)|string(date-time)|
|email||string||
|gender||string||
|integral||integer(int32)|integer(int32)|
|intro||string||
|lastLogin||string(date-time)|string(date-time)|
|name||string||
|password||string||
|profile||string||
|role||string||
|status||integer(int32)|integer(int32)|
|userAge||integer(int32)|integer(int32)|
|userId||integer(int32)|integer(int32)|
|username||string||
|vipDisableTip||boolean||
|vipExpireDate||string(date-time)|string(date-time)|
|vipValidDate||string(date-time)|string(date-time)|


**响应示例**:
```javascript
[
	{
		"created": "",
		"email": "",
		"gender": "",
		"integral": 0,
		"intro": "",
		"lastLogin": "",
		"name": "",
		"password": "",
		"profile": "",
		"role": "",
		"status": 0,
		"userAge": 0,
		"userId": 0,
		"username": "",
		"vipDisableTip": true,
		"vipExpireDate": "",
		"vipValidDate": ""
	}
]
```


## 根据别名获取全部圈子(分页)


**接口地址**:`/square/getAllSquare/{otherName}/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|limit|path|true|integer(int32)||
|otherName|otherName|path|true|string||
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


# 后台圈子评论管理接口


## 根据id修改圈子内容评论


**接口地址**:`/squareComment/ChangeSquareById/{id}/{content}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|content|path|true|string||
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


## 根据id删除圈子评论


**接口地址**:`/squareComment/DelectSquareById/{id}`


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


## 获取全部圈子评论(分页)


**接口地址**:`/squareComment/getAllSquare/{page}/{limit}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|limit|limit|path|true|integer(int32)||
|otherName|otherName||true|string||
|page|page|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|SquareComment|
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
|responder||string||
|responderId||integer(int32)|integer(int32)|
|reviewers||string||
|reviewersId||integer(int32)|integer(int32)|
|status||integer(int32)|integer(int32)|
|toUserId||integer(int32)|integer(int32)|
|type||integer(int32)|integer(int32)|
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
		"responder": "",
		"responderId": 0,
		"reviewers": "",
		"reviewersId": 0,
		"status": 0,
		"toUserId": 0,
		"type": 0,
		"userId": 0
	}
]
```


# 后台文章管理接口


## 根据id删除文章


**接口地址**:`/article/DelectArticleById/{id}`


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


## 根据id修改文章


**接口地址**:`/article/ReviseArticleById/{id}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "addTime": "",
  "articleStatus": 0,
  "author": "",
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
  "ownerTag": 0,
  "postNum": 0,
  "sortClass": "",
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
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|article|article|body|true|Article|Article|
|&emsp;&emsp;addTime|创建时间||false|string||
|&emsp;&emsp;articleStatus|||false|integer(int32)||
|&emsp;&emsp;author|||false|string||
|&emsp;&emsp;commentDisabled|||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;copyfrom|||false|string||
|&emsp;&emsp;createTime|生成时间||false|string||
|&emsp;&emsp;deleted|||false|integer(int32)||
|&emsp;&emsp;filePath|||false|string||
|&emsp;&emsp;fullTitle|||false|string||
|&emsp;&emsp;hits|||false|integer(int32)||
|&emsp;&emsp;htmlPath|||false|string||
|&emsp;&emsp;httpUrl|||false|string||
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;inputer|||false|string||
|&emsp;&emsp;intro|||false|string||
|&emsp;&emsp;iselite|||false|integer(int32)||
|&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;lastPost|最后评论时间||false|string||
|&emsp;&emsp;loveNum|||false|integer(int32)||
|&emsp;&emsp;ontop|||false|integer(int32)||
|&emsp;&emsp;ownerRemark|||false|string||
|&emsp;&emsp;ownerTag|||false|integer(int32)||
|&emsp;&emsp;postNum|||false|integer(int32)||
|&emsp;&emsp;sortClass|||false|string||
|&emsp;&emsp;status|||false|string||
|&emsp;&emsp;subhead|||false|string||
|&emsp;&emsp;tempPath|||false|string||
|&emsp;&emsp;thumb|||false|string||
|&emsp;&emsp;title|||false|string||
|&emsp;&emsp;titleColor|||false|string||
|&emsp;&emsp;titlefontSize|||false|string||
|&emsp;&emsp;titlefontType|||false|integer(int32)||
|&emsp;&emsp;updateTime|更新时间||false|string||
|id|文章id||true|string||


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


## 新增文章(修改)


**接口地址**:`/article/create`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|article|文章|body|true|string||


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


## 获取全部文章(分页)


**接口地址**:`/article/getAllArticle/{page}/{limit}`


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
|200|OK|ArticlePageVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ArticleVO|
|&emsp;&emsp;addTime||string(date-time)||
|&emsp;&emsp;author||string||
|&emsp;&emsp;className||string||
|&emsp;&emsp;commentNum||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;hits||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
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
			"author": "",
			"className": "",
			"commentNum": 0,
			"createTime": "",
			"hits": 0,
			"id": 0,
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


## 根据id获取文章


**接口地址**:`/article/getArticleById/{id}`


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
|200|OK|Article|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|addTime|创建时间|string||
|articleStatus||integer(int32)|integer(int32)|
|author||string||
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
|ownerTag||integer(int32)|integer(int32)|
|postNum||integer(int32)|integer(int32)|
|sortClass||string||
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
{
	"addTime": "",
	"articleStatus": 0,
	"author": "",
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
	"ownerTag": 0,
	"postNum": 0,
	"sortClass": "",
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
```


# 后台设置接口


## 获取全部轮播图


**接口地址**:`/Sitting/getAllDispositionCarousel`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|setting|设置||true|string||


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


## 获取oss配置


**接口地址**:`/Sitting/getCosSetting`


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
|cosBucketName||string||
|cosClientConfig||string||
|cosIntage||string||
|cosSecretId||string||
|cosSecretKey||string||
|id||integer(int32)|integer(int32)|
|imageFormat||boolean||
|isCos||boolean||
|sitLogo||string||
|sitTitle||string||


**响应示例**:
```javascript
{
	"banquan": "",
	"beian": "",
	"comment_show": true,
	"cosBucketName": "",
	"cosClientConfig": "",
	"cosIntage": "",
	"cosSecretId": "",
	"cosSecretKey": "",
	"id": 0,
	"imageFormat": true,
	"isCos": true,
	"sitLogo": "",
	"sitTitle": ""
}
```


## 修改设置


**接口地址**:`/Sitting/setSetting`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|setting|设置|body|true|string||


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


## 修改设置


**接口地址**:`/Sitting/setSettingCos`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|setting|设置|body|true|string||


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


# 后台评论管理接口


## 增加评论


**接口地址**:`/ArticleComment/addArticleComment`


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


**接口地址**:`/ArticleComment/getArticleCommentnum/{articleId}`


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


## 根据文章id查询对应的评论


**接口地址**:`/ArticleComment/getallArticleComment/{articleId}`


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


## 获取全部评论


**接口地址**:`/ArticleComment/getallArticleComments`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


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


# 后台资源分类管理接口


## 删除资源分类


**接口地址**:`/ResourceClass/DeleteResourceClass/{id}`


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


## 获取资源分类列表(分页)


**接口地址**:`/ResourceClass/allResourceClass/{page}/{limit}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


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
|200|OK|ResourceClassPageVO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data||array|ResourceClass|
|&emsp;&emsp;describes||string||
|&emsp;&emsp;father||integer(int32)||
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;imgclass||string||
|&emsp;&emsp;name||string||
|&emsp;&emsp;num||integer(int32)||
|&emsp;&emsp;otherName||string||
|&emsp;&emsp;top||integer(int32)||
|total||integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"data": [
		{
			"describes": "",
			"father": 0,
			"id": 0,
			"imgclass": "",
			"name": "",
			"num": 0,
			"otherName": "",
			"top": 0
		}
	],
	"total": 0
}
```


## 获取全部分类列表


**接口地址**:`/ResourceClass/getAllClassName`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ClassNameVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|name||string||


**响应示例**:
```javascript
[
	{
		"name": ""
	}
]
```


## 根据id值查询对应的分类名称


**接口地址**:`/ResourceClass/getClassNameById/{id}`


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


## 新建资源分类


**接口地址**:`/ResourceClass/newResourceClass`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceClass|文章分类对象|body|true|string||


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


# 后台资源管理接口


## 根据id删除资源


**接口地址**:`/resource/DelectResourceById/{id}`


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


## 新增资源(修改)


**接口地址**:`/resource/create`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resource|资源|body|true|string||


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


## 获取全部资源(分页)


**接口地址**:`/resource/getAllResource/{page}/{limit}`


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


## 根据id获取资源


**接口地址**:`/resource/getResourceById/{id}`


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
|articleStatus||integer(int32)|integer(int32)|
|author||string||
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
|isFree||boolean||
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
|sortClass||string||
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
{
	"addTime": "",
	"articleStatus": 0,
	"author": "",
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
	"isFree": true,
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
	"sortClass": "",
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
```


# 后台资源评论管理接口


## 获取全部评论


**接口地址**:`/ResourceComment/getAllResourceComments`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


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


# 图片工具类Api


## 上传图片(添加文字水印)


**接口地址**:`/ImageApi/addwatermarkimageUpload/{title}/{content}`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content|内容|path|true|string||
|editormd-image-file|图片Formate|formData|true|string||
|title|标题|path|true|string||


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


## 上传图片


**接口地址**:`/ImageApi/updateimage`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|editormd-image-file|图片Formate|formData|true|string||


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


# 微信支付API


## 用户取消订单


**接口地址**:`/Pay-api/wx-pay/cancel/{orderNo}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|orderNo|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 下载账单


**接口地址**:`/Pay-api/wx-pay/downloadbill/{billDate}/{type}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|billDate|billDate|path|true|string||
|type|type|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（登陆）


**接口地址**:`/Pay-api/wx-pay/login-native/{productId}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId|资源id|path|true|string||
|userid|用户id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 支付通知


**接口地址**:`/Pay-api/wx-pay/native/notify`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


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


## 查询退款：测试用


**接口地址**:`/Pay-api/wx-pay/query-refund/{refundNo}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|refundNo|refundNo|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 查询订单：测试订单状态用


**接口地址**:`/Pay-api/wx-pay/query/{orderNo}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|orderNo|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 获取账单url：测试用


**接口地址**:`/Pay-api/wx-pay/querybill/{billDate}/{type}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|billDate|billDate|path|true|string||
|type|type|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 退款结果通知


**接口地址**:`/Pay-api/wx-pay/refunds/notify`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


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


## 申请退款


**接口地址**:`/Pay-api/wx-pay/refunds/{orderNo}/{reason}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|orderNo|path|true|string||
|reason|reason|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（临时）


**接口地址**:`/Pay-api/wx-pay/temp-native/{resourceId}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceId|商品id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（调试）


**接口地址**:`/Pay-api/wx-pay/test-native/{productId}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId|商品id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（Vip）


**接口地址**:`/Pay-api/wx-pay/vip-native/{price}/{userid}/{payid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|payid|支付id|path|true|string||
|price|价格|path|true|string||
|userid|用户id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（VipIntegral）


**接口地址**:`/Pay-api/wx-pay/vipIntegral-native/{price}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|price|价格|path|true|string||
|userid|用户id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


# 支付宝支付API


## 支付宝异步回调


**接口地址**:`/Pay-api/ali-pay/alipay/notify`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


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


## 支付宝同步回调


**接口地址**:`/Pay-api/ali-pay/alipay/return`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


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


## 用户取消订单


**接口地址**:`/Pay-api/ali-pay/cancel/{orderNo}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|订单编号|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（登陆）


**接口地址**:`/Pay-api/ali-pay/login-ftof/{resourceId}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceId|商品id|path|true|string||
|userid|用户id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 申请退款


**接口地址**:`/Pay-api/ali-pay/refunds/{orderNo}/{reason}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|orderNo|path|true|string||
|reason|reason|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（临时）


**接口地址**:`/Pay-api/ali-pay/temp-ftof/{resourceId}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceId|商品id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（测试）


**接口地址**:`/Pay-api/ali-pay/test-ftof/{productId}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productId|商品id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（vip）


**接口地址**:`/Pay-api/ali-pay/vip-ftof/{price}/{userid}/{payid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|payid|支付id|path|true|string||
|price|价格|path|true|string||
|userid|用户id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 调用统一下单API，生成支付二维码（vipIntegral）


**接口地址**:`/Pay-api/ali-pay/vipIntegral-ftof/{price}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|price|价格|path|true|string||
|userid|用户id|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


# 测试商品管理


## 商品列表


**接口地址**:`/api/product/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 测试接口


**接口地址**:`/api/product/test`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


# 测试商品订单管理


## 根据id查询订单列表


**接口地址**:`/Pay-api/order-info/PaylistById/{userId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|userId|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 订单列表


**接口地址**:`/Pay-api/order-info/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 查询本地订单状态(userid和resourceid)


**接口地址**:`/Pay-api/order-info/query-order-status-Bytrue/{userid}/{resourceid}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceid|resourceid|path|true|string||
|userid|userid|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


## 根据订单号查询本地订单状态


**接口地址**:`/Pay-api/order-info/query-order-status/{orderNo}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|orderNo|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||object||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": ""
}
```


# 用户登陆验证接口


## 修改名称


**接口地址**:`/User/ChangeName/{jwt}/{name}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jwt|jwt|path|true|string||
|name|名称|path|true|string||
|userid|用户id|path|true|string||


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


## 修改密码


**接口地址**:`/User/ChangePassword/{jwt}/{yuanPassWord}/{NewPassWord}/{userid}`


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


**接口地址**:`/User/ChangeUser/{jwt}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jwt|jwt|path|true|string||
|user|用户对象|body|true|string||


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


**接口地址**:`/User/CheckAdmin/{userid}`


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


## 检测会员是否有效


**接口地址**:`/User/CheckVip/{id}`


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


## 注册账号


**接口地址**:`/User/Create`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Newuser|用户对象||true|string||
|created||query|false|string(date-time)||
|email||query|false|string||
|gender||query|false|string||
|integral||query|false|integer(int32)||
|intro||query|false|string||
|lastLogin||query|false|string(date-time)||
|name||query|false|string||
|password||query|false|string||
|profile||query|false|string||
|role||query|false|string||
|status||query|false|integer(int32)||
|userAge||query|false|integer(int32)||
|userId||query|false|integer(int32)||
|username||query|false|string||
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


## 绑定邮箱


**接口地址**:`/User/CreateEmail/{jwt}/{email}/{userid}`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|email|邮箱|path|true|string||
|jwt|jwt|path|true|string||
|userid|用户id|path|true|string||


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


## 会员充值


**接口地址**:`/User/CreateVip/{id}/{payid}/{order}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||
|order|订单|path|true|string||
|payid|支付id|path|true|string||


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


## 根据用户id获取用户信息


**接口地址**:`/User/GetUserInfoByid/{id}`


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
|200|OK|User|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|created||string(date-time)|string(date-time)|
|email||string||
|gender||string||
|integral||integer(int32)|integer(int32)|
|intro||string||
|lastLogin||string(date-time)|string(date-time)|
|name||string||
|password||string||
|profile||string||
|role||string||
|status||integer(int32)|integer(int32)|
|userAge||integer(int32)|integer(int32)|
|userId||integer(int32)|integer(int32)|
|username||string||
|vipDisableTip||boolean||
|vipExpireDate||string(date-time)|string(date-time)|
|vipValidDate||string(date-time)|string(date-time)|


**响应示例**:
```javascript
{
	"created": "",
	"email": "",
	"gender": "",
	"integral": 0,
	"intro": "",
	"lastLogin": "",
	"name": "",
	"password": "",
	"profile": "",
	"role": "",
	"status": 0,
	"userAge": 0,
	"userId": 0,
	"username": "",
	"vipDisableTip": true,
	"vipExpireDate": "",
	"vipValidDate": ""
}
```


## 积分充值


**接口地址**:`/User/UpdateIntegral/{id}/{integral}/{order}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|string||
|integral|积分|path|true|string||
|order|订单|path|true|string||


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


## 验证Token


**接口地址**:`/User/checkToken`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|request|header里的token值||true|string||


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


## 登陆


**接口地址**:`/User/login`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|user|用户对象||true|string||
|created||query|false|string(date-time)||
|email||query|false|string||
|gender||query|false|string||
|integral||query|false|integer(int32)||
|intro||query|false|string||
|lastLogin||query|false|string(date-time)||
|name||query|false|string||
|password||query|false|string||
|profile||query|false|string||
|role||query|false|string||
|status||query|false|integer(int32)||
|userAge||query|false|integer(int32)||
|userId||query|false|integer(int32)||
|username||query|false|string||
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


## 后台登陆


**接口地址**:`/User/loginAdmin`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|user|用户对象||true|string||
|created||query|false|string(date-time)||
|email||query|false|string||
|gender||query|false|string||
|integral||query|false|integer(int32)||
|intro||query|false|string||
|lastLogin||query|false|string(date-time)||
|name||query|false|string||
|password||query|false|string||
|profile||query|false|string||
|role||query|false|string||
|status||query|false|integer(int32)||
|userAge||query|false|integer(int32)||
|userId||query|false|integer(int32)||
|username||query|false|string||
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


# 用户角色信息接口


## 获取全部用户名称


**接口地址**:`/UserRole/getAllUserName`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|UserNameVO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|username||string||


**响应示例**:
```javascript
[
	{
		"username": ""
	}
]
```


## 获取全部角色信息


**接口地址**:`/UserRole/getAllUserRole`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Role|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|id||integer(int32)|integer(int32)|
|name||string||
|sort||string||


**响应示例**:
```javascript
[
	{
		"id": 0,
		"name": "",
		"sort": ""
	}
]
```

