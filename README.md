# [SeaJS学习笔记](https://github.com/MrLeo/SeaJS)

> [SeaJS官方文档](http://seajs.org/docs/#docs)

# `目录结构`

\SeaJS
- | -- **README.md** ：框架结构说明
- | -- web ： 页面文件，如：index.html
- | -- static ：静态资源文件
	- | -- css ：CSS样式文件
	- | -- sass：SCSS预编译文件
	- | -- img ：图片文件
	- | -- common ：通用工具模块
	- | -- module ：业务相关的JS模块文件
		- | -- **base** ：业务相关的共通JS模块文件
		- | -- **page** ： 与web文件夹中的页面文件同名的模块，如：demo/index.js
		- | -- react ：通过jsx生成的React组件
	- | -- js ：非CMD规范的JS文件
	- | -- jsx ：React组件库
		- | -- **README.md** ： React 和 jsx 的相关说明
		- | -- **JSXTransformer.bat** ：转换jsx的CMD命令
	- | -- libs : 插件包
		- | -- **main.js** ： `页面调用seaJS入口,包含seajs的配置信息`
		- | -- **lib** ： `插件包`
		- | -- seajs ： seaJS原始插件包
		- | -- ...

***

# Get Start

1. 在**web**目录下创建HTML页面，eg.`index.html`
2. 在HTML文件</body>前引入seajs，并指定seajs入口模块

	```html
	<!--使用seajs引入相关js文件-->
	<script src="../static/libs/seajs/sea.js" type="text/javascript"></script>
	<script type="text/javascript"> seajs.use('../static/libs/main'); </script>
	```

3. 在**static/js/pageController**目录下创建与HTML同名的js文件，eg.`index.js`
5. 使用`define(function(require,exports,module){ });`定义模块
6. 使用`exports.FunctionName=function(){ };`或`module.exports={ FunctionName : function(){ } };`定义模块接口
4. 使用`require()`引入依赖的模块，eg.`var $ = require('jquery')`引入JQuery

***

# JSDoc

> [HBuilder官方文档](http://ask.dcloud.net.cn/article/129)

``` javascript
/**
 * 文档注释写在这里
 * @alias aliasName (使用@alias可以给一个变量或者函数指定一个别名，代码提示时会提示该别名)
 * @description 描述内容 (使用@description可以在代码提示时显示被描述变量或者函数的描述信息。)
 * @example 示例内容 (使用@example可以提示代码示例。)
 * @extends {Type} (使用@extends用于标识继承于某个类型。)
 * @param {Type[,Type,...]} ParameterName=[Value1|Value2[|Value3|...]] 参数描述 (使用@param可以描述一个函数的参数以及参数类型，HBuilder扩展了参数值域的写法（目前只支持字符串值域）)
 * @property {Type[,Type,...]} propertyName 属性描述 (使用@property可以描述一个对象的属性)
 * @constructor (使用@constructor可以标识一个函数是构造函数)
 * @type {Type[,Type,...]} (使用@type可以定义某个变量的类型)
 * @return {Type[,Type,...]} (使用@return可以描述一个对象的属性)
 * @throw {TypeError} 参数类型不匹配 (异常信息)
 */
```

***

# seajs.config

> seajs配置信息,更多配置信息参照：https://github.com/seajs/seajs/issues/262

```javascript
seajs.config({
	/* ---- 请根据Web服务(IIS/Apache...)和项目结构调整base的路径 ---- */
	/**
	 * 模块标识：
	 * 		https://github.com/seamodule/seamodule/issues/258
	 * 		http://segmentfault.com/a/1190000000354302
	 * 		(1) 相对路径		："../libs",
	 * 		(2) 顶级标识		："path/to/libs",
	 * 		(3) 根路径		："/libs"
	 * 注意：paths、alias 中尽量使用【顶级标识】、【根路径】、【绝对路径】，不要使用【相对标识】，因为在不同深度的模块引用时会解析为不同的路径。
	 */
	paths: {	//--设置常用路径的别名
		'base'			: 'static/module/base',					//--业务共通过模块
		'model'			: 'static/module/model',				//--业务数据、功能模块
		'page'			: 'static/module/controller',			//--页面对应的模块
		'react'			: 'static/module/react',				//--react模块文件

		/* ---- 以下是和业务无关的库 ---- */
		'common'		: 'static/common',					//--工具库
		'libs'			: 'static/libs',					//--插件包
		
		/* ---- 第三方插件 ---- */
		'jquery'		: 'static/libs/jquery',				//--JQuery库
		'zepto'			: 'static/libs/zepto',				//--zepto库
		'sweetalert'	: 'static/libs/sweetalert/dist',	//--SweetAlert
		
		/* ---- seajs ---- */
		'seajs'			: 'static/libs/seajs'				//--seajs原始库
	},
	alias: {	//--设置常用模块的别名
		'base'			: 'base/base',										//--base信息
		'vue'			: 'libs/vue/vue',									//--Vue.js MVVM风格双向数据绑定库
		'react'			: 'libs/react/build/react',							//--React.js 用于构建用户界面的JAVASCRIPT库
		'ko'			: 'libs/knockoutjs/knockout-3.3.0',					//--Knockout 动态数据
		'console'		: 'common/console/log',								//--console.log 日志输出
		'ajax'			: 'common/ajax/ajax',								//--javascript ajax
		'sweetalert'	: 'sweetalert/sweetalert.min',						//--sweetalert 弹出框
		'superslide'	: 'libs/super-slide/jquery.SuperSlide.2.1.1',		//--superslide 选项卡、轮播
		'lq'			: 'static/libs/lq-date/js/lq.datetimepick',			//--lq-date 日历控件
		'dateRange'		: 'static/libs/pickerDateRange/dateRange',			//--pickerDateRange 日期区间控件
		
		'jquery'		: 'jquery/jquery-1.8.3.min',						//--JQuery.v1.8.3
		'jquery-2.0.3'	: 'jquery/jquery-2.0.3.min'							//--JQuery.v2.0.3
	},
	base: '../',	//--TODO：配置根路径
	vars: {			//--变量配置
		'locale'	: 'zh-cn'
	},
	preload: [	//--预先加载
		//'plugin-text',	//--加载模本等文本文件
		//'plugin-json',	//--加载 JSON 数据
		//'plugin-coffee',	//--加载 coffee 脚本
		//'plugin-less',	//--加载 less 样式
		'jquery'
	],
	debug: true,			//--调试模式
	charset: 'utf-8'		//--文件编码
});
```

