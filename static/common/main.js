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
	/**
	 * ---- 引入配置文件 ----
	 */
	require('./config');
	
	/**
	 * ---- 全局引用 ----
	 */
	require("../libs/jquery/jquery-1.8.3.min");//--全局引用JQuery-1.8.3
	require("../libs/react/build/react.min");//--全局引用ReactJS
	require("../libs/vue/vue.min");//--全局引用Vue.js

	/**
	 * 获取当前页面名，不包含后缀".html"
	 */
	function getCurrentPage() {
		var urls = location.href.split("/");
		var page = urls[urls.length - 1];

		//TODO：将修改后缀名
		return page.split(".html")[0];
	}

	/**
	 * ---- 分发模块 ----
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
	//判断是否自动load（说明：~-1=0），参考：http://ask.dcloud.net.cn/question/3742
	if (!~module.id.indexOf('?1')){
		exports.load();
	}
});
