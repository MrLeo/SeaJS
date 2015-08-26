/*                     _ooOoo_
 *                    o8888888o
 *                    88" . "88
 *                    (| -_- |)
 *                    O\  =  /O
 *                 ____/`---'\____
 *               .'  \\|     |//  `.
 *              /  \\|||  :  |||//  \
 *             /  _||||| -:- |||||-  \
 *             |   | \\\  -  /// |   |
 *             | \_|  ''\---/''  |   |
 *             \  .-\__  `-`  ___/-. /
 *           ___`. .'  /--.--\  `. . __
 *        ."" '<  `.___\_<|>_/___.'  >'"".
 *       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *       \  \ `-.   \_ __\ /__ _/   .-` /  /
 *  ======`-.____`-.___\_____/___.-`____.-'======
 *                     ‘=---=’
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *             佛祖保佑       永无BUG
 *
 *        源码地址：https://github.com/MrLeo/SeaJS
 */
define(function (require, exports, module) {
	/*---- seajs配置信息,更多配置信息参照：https://github.com/seajs/seajs/issues/262 ----*/
	seajs.config({
		/* ---- 请根据Web服务(IIS/Apache...)和项目结构调整base的路径 ---- */
		/**
		 * 模块标识：
		 * 		https://github.com/seajs/seajs/issues/258
		 * 		http://segmentfault.com/a/1190000000354302
		 * 		(1) 相对路径	："../libs",
		 * 		(2) 顶级标识	："path/to/libs",
		 * 		(3) 根路径		："/libs"
		 * 注意：paths、alias 中尽量使用【顶级标识】、【根路径】、【绝对路径】，不要使用【相对标识】，因为在不同深度的模块引用时会解析为不同的路径。
		 */
		paths: {	//--设置常用路径的别名
			'common'	: 'static/js/common', 				//--业务共通过模块
			'model'		: 'static/js/model', 				//--业务数据、功能模块
			'page'		: 'static/js/pageController', 		//--页面对应的模块
			/* ---- 以下是和业务无关的库 ---- */
			'libs'		: 'static/libs',					//--插件包
			'tools'		: 'static/libs/tools', 				//--工具库
			/* ---- 第三方插件 ---- */
			'jquery'	: 'static/libs/jquery', 			//--JQuery库
			'sweetalert': 'static/libs/sweetalert/dist', 	//--SweetAlert
			
			'seajs'		: 'static/libs/seajs' 				//--seajs原始库
		},
		alias: {	//--设置常用模块的别名
			'base'		: 'common/base',
			'ko'		: 'libs/knockoutjs/knockout-3.3.0',
			'console'	: 'tools/console/log',
			'alert'		: 'sweetalert/sweetalert.min',
			'superslide': 'libs/super-slide/jquery.SuperSlide.2.1.1',
			
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

	/*---- 获取当前页面名，不包含后缀".html" ----*/
	function getCurrentPage() {
		var urls = location.href.split("/");
		var page = urls[urls.length - 1];

		//TODO：将修改后缀名
		return page.split(".html")[0];
	}

	/**
	 * ---- 加载页面对应的js ----
	 * js文件名要和对应页面的文件名相同
	 * @param {URIString} basePath 基础路径，非必须参数
	 */
	exports.load = function(basePath) {
		if (basePath) {
			seajs.config({
				'base': basePath
			});
		}

		try{
			require.async(['page/' + getCurrentPage()], function(page) {
				//--异步加载多个模块，在加载完成时，执行回调
			});
		}catch(e){}
	};

	//example：seajs.use('../static/libs/main.js?1');
	//判断是否自动load（说明：~-1=0）
	if (!~module.id.indexOf('?1')) exports.load();
});