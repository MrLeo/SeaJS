/*---- seajs配置信息,更多配置信息参照：https://github.com/seajs/seajs/issues/262 ----*/
seajs.config({
	/* ---- 请根据Web服务(IIS/Apache...)和项目结构调整base的路径 ---- */
	/**
	 * 模块标识：
	 * 		https://github.com/seajs/seajs/issues/258
	 * 		http://segmentfault.com/a/1190000000354302
	 * 		(1) 相对路径		："../libs",
	 * 		(2) 顶级标识		："path/to/libs",
	 * 		(3) 根路径		："/libs"
	 * 注意：paths、alias 中尽量使用【顶级标识】、【根路径】、【绝对路径】，不要使用【相对标识】，因为在不同深度的模块引用时会解析为不同的路径。
	 */
	paths: {	//--设置常用路径的别名
		'base'			: 'static/js/base',					//--业务共通过模块
		'model'			: 'static/js/model',				//--业务数据、功能模块
		'page'			: 'static/js/controller',			//--页面对应的模块
		'react'			: 'static/js/react',				//--react模块文件

		/* ---- 以下是和业务无关的库 ---- */
		'common'		: 'static/common',					//--工具库
		'libs'			: 'static/libs',					//--插件包
		
		/* ---- 第三方插件 ---- */
		'jquery'		: 'static/libs/jquery',				//--JQuery库
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