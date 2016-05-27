define(function(require, exports, module) {
	/**
	 * 获取URL参数
	 * @param {Object} name 参数名
	 */
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
	exports.getQueryString = getQueryString();

	/**
	 * 获取URL参数
	 * @param {Object} paramKey 参数名
	 */
	function getParam(paramKey) {
		//获取当前URL
		var url = location.href;
		//获取要取得的get参数位置
		var get = url.indexOf(paramKey + "=");
		if (get == -1) {
			return false;
		}
		//截取字符串
		var getParamStr = url.slice(paramKey.length + get + 1);
		//判断截取后的字符串是否还有其他get参数
		var nextparam = getParamStr.indexOf("&");
		if (nextparam != -1) {
			getParamStr = getParamStr.slice(0, nextparam);
		}
		return decodeURIComponent(getParamStr);
	}
	exports.getParam = getParam();

	/**
	 * 添加url参数
	 * @param {Object} url 待添加参数的URL地址
	 * @param {Object} paramKey 参数名
	 * @param {Object} paramVal 参数值
	 */
	function addParam(url, paramKey, paramVal) {
		var andStr = "?";
		var beforeparam = url.indexOf("?");
		if (beforeparam != -1) andStr = "&";
		return url + andStr + paramKey + "=" + encodeURIComponent(paramVal);
	}
	exports.addParam = addParam();

	/**
	 * 删除url参数
	 * @param {Object} url 待删除参数的URL地址
	 * @param {Object} paramKey 参数名
	 */
	function delParam(url, paramKey) {
		var urlParam = url.substr(url.indexOf("?") + 1);
		var beforeUrl = url.substr(0, url.indexOf("?"));
		var nextUrl = "";
		var arr = new Array();
		if (urlParam != "") {
			var urlParamArr = urlParam.split("&");
			for (var i = 0; i < urlParamArr.length; i++) {
				var paramArr = urlParamArr[i].split("=");
				if (paramArr[0] != paramKey) {
					arr.push(urlParamArr[i]);
				}
			}
		}
		if (arr.length > 0) nextUrl = "?" + arr.join("&");
		url = beforeUrl + nextUrl;
		return url;
	}
	exports.delParam = delParam();
	
	/**
	 * 将json对象转为url参数
	 * @param {Object} param
	 * @param {Object} key
	 * @example
	 * 	var obj = {
	 *		"name": 'tom',
	 *		"class": {
	 *			"className": 'class1'
	 *		},
	 *		"classMates": [{
	 *			"name": 'lily'
	 *		}]
	 *	};
	 *	console.log(parseParam(obj));//name=tom&class.className=class1&classMates[0].name=lily
	 *	console.log(parseParam(obj, 'stu'));//stu.name=tom&stu.class.className=class1&stu.classMates[0].name=lily
	 */
	function parseParam(param, key) {
		var paramStr = "";
		if (param instanceof String || param instanceof Number || param instanceof Boolean) {
			paramStr += "&" + key + "=" + encodeURIComponent(param);
		} else {
			$.each(param, function(i) {
				var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
				paramStr += '&' + parseParam(this, k);
			});
		}
		return paramStr.substr(1);
	};
});