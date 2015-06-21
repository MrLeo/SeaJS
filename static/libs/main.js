define(function(require, exports, module) {
	//seajs配置信息
	seajs.config({
		base: '/SeaJS/static/js', //设置根路径
		alias: { //设置常用模块的别名
			'jquery': '../../libs/jquery/jquery-2.0.3'
		},
		paths: { //设置常用路径
			'commen': 'commen',//业务共通过模块
			'data': 'data',//数据、配置信息
			'page': 'pageController',//页面对应的模块
			/*以下是和业务无关的库*/
			'tools' : '../../libs/tools',//工具库
			'jquery': '../../libs/jquery',//JQuery库
			'seajs' : '../../libs/seajs'//seajs原始库
		}
	});

	//获取当前页面名，不包含".html"
	function getCurrentPage() {
		var urls = location.href.split("/");
		var page = urls[urls.length - 1];
		return page.split(".html")[0];
	}

	//加载页面对应的js
	exports.load = function(basePath) {
		if (basePath) {
			seajs.config({
				'base': basePath
			});
		}
		console.log("controller", getCurrentPage());
		require.async('page/' + getCurrentPage());
	};

	if (!~module.id.indexOf('?auto')) {
		console.log("auto load controller");
		exports.load();
	}
});