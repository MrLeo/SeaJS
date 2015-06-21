define(function(require, exports, module) {
	// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
	// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
	function format(date,fmt) {
		var d = new Date(date);
		var o = {
			"M+": d.getMonth() + 1, //月份 
			"d+": d.getDate(), //日 
			"h+": d.getHours(), //小时 
			"m+": d.getMinutes(), //分 
			"s+": d.getSeconds(), //秒 
			"q+": Math.floor((d.getMonth() + 3) / 3), //季度 
			"S": d.getMilliseconds() //毫秒 
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		//console.log(d, date, o, fmt);
		return fmt;
	}
	exports.DateFormat = format;
});