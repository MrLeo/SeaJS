# [SeaJS学习笔记](https://github.com/MrLeo/SeaJS)

> [SeaJS官方文档](http://seajs.org/docs/#docs)

# `目录结构`

\SeaJS
- | -- web：页面文件，如：index.html
- | -- static：静态文件
	- | -- css：样式文件
	- | -- img：图片文件
	- | -- js：业务相关的JS模块文件
		- | -- **common**：业务相关的共通JS模块文件
		- | -- **module**： 业务相关的data模块
		- | -- **pageController**： 与web文件夹中的页面文件同名的模块，如：index.js
	- |-- libs: 插件包
		- | -- **main.js**： `页面调用seaJS入口,包含seajs的配置信息`
		- | -- **lib**： `插件包`
		- | -- **tools**： `与业务无关的工具包`
		- | -- seajs： seaJS原始插件包
		- | -- jquery： JQuery插件包
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

# seajs.config

> seajs配置信息,更多配置信息参照：https://github.com/seajs/seajs/issues/262

```javascript
seajs.config({
	/* ---- 请根据Web服务(IIS/Apache...)和项目结构调整base的路径 ---- */
	/**
		* 模块标识：
		* 		https://github.com/seajs/seajs/issues/258
		* 		http://segmentfault.com/a/1190000000354302
		* 		(1) 相对路径	："../lib",
        * 		(2) 顶级标识	："path/to/lib",
    	* 		(3) 根路径		："/lib"
		* 注意：paths、alias 中尽量使用【顶级标识】、【根路径】、【绝对路径】，不要使用【相对标识】，因为在不同深度的模块引用时会解析为不同的路径。
		*/
	paths: {	//--设置常用路径的别名
		'common'	: 'static/js/common', 				//--业务共通过模块
		'module'	: 'static/js/module', 				//--业务数据、功能模块
		'page'		: 'static/js/pageController', 		//--页面对应的模块
		/* ---- 以下是和业务无关的库 ---- */
		'lib'		: 'static/libs',
		'tools'		: 'static/libs/tools', 				//--工具库
		/* ---- 第三方插件 ---- */
		'jquery'	: 'static/libs/jquery', 			//--JQuery库
		'sweetalert': 'static/libs/sweetalert/dist', 	//--SweetAlert
			
		'seajs'		: 'static/libs/seajs' 				//--seajs原始库
	},
	alias: {	//--设置常用模块的别名
		'base'		: 'common/base',
		'console'	: 'tools/console/log',
		'alert'		: 'sweetalert/sweetalert.min',
		'superslide': 'lib/super-slide/jquery.SuperSlide.2.1.1',
			
		'jquery'	: 'jquery/jquery-2.0.3'
	},
	base: '../',	//--TODO：配置根路径
	vars: {			//--变量配置
		'locale'	: 'zh-cn'
	},
	preload: [	//--预先加载
		//'plugin-text', 	//--加载模本等文本文件
		//'plugin-json', 	//--加载 JSON 数据
		//'plugin-coffee', 	//--加载 coffee 脚本
		//'plugin-less', 	//--加载 less 样式
		'jquery'
	],
	debug: true, 			//--调试模式
	charset: 'utf-8' 		//--文件编码
});
```

