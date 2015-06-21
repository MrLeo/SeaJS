define(function(require, exports, module) {
	/* ---- seajs配置信息,更多配置信息参照：https://github.com/seajs/seajs/issues/262 ---- */
	seajs.config({
		/* ---- 请根据Web服务(IIS/Apache...)和项目结构调整base的路径 ---- */
		base: '/SeaJS/static/js', //--设置根路径
		paths: { //--设置常用路径的别名
			'commen'	: 'commen', 					//--业务共通过模块
			'data'		: 'data', 						//--数据、配置信息
			'page'		: 'pageController', 			//--页面对应的模块
			/* ---- 以下是和业务无关的库 ---- */
			'seajs'		: '../../libs/seajs', 			//--seajs原始库
			'jquery'	: '../../libs/jquery', 			//--JQuery库
			'alert'		: '../../libs/sweetalert/dist', //--SweetAlert
			'tools'		: '../../libs/tools' 			//--工具库
		},
		alias: { //--设置常用模块的别名
			'jquery'	: 'jquery/jquery-2.0.3',
			'alert'		: 'alert/sweetalert.min'
		},
		vars: { //--变量配置
			'locale'	: 'zh-cn'
		},
		preload: [ //--预先加载
			'jquery'
		],
		debug: true, //--调试模式
		charset: 'utf-8' //--文件编码
	});

	/* ---- 获取当前页面名，不包含".html" ---- */
	function getCurrentPage() {
		var urls = location.href.split("/");
		var page = urls[urls.length - 1];
		return page.split(".html")[0];
	}

	/* ---- 加载页面对应的js ---- */
	exports.load = function(basePath) {
		if (basePath) {
			seajs.config({
				'base': basePath
			});
		}
		require.async(['page/' + getCurrentPage()], function(page) {
			//--异步加载多个模块，在加载完成时，执行回调
		});
	};

	if (!~module.id.indexOf('?1')) //--判断是否自动load（说明：~-1=0）
		exports.load();
});