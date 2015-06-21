define(function(require,exports,module){
	console.log("进入:",module.id);
	
	var $ = require('jquery'); //-引入JQuery
	var v = require('data/version');
	var d = require('tools/convert/date');

	var text = "这是通过seajs引用jQuery写入的。</br><hr></br>"
				+ "版本号：" + v.version + "</br>"
				+ "作者：" + v.powerBy + "</br>"
				+ "简介：" + v.desc + "</br>";
	$('#output').html(text);
	
	setInterval(function(){
		$('#date').html(d.DateFormat(''+(new Date()),'yyyy-MM-dd hh:mm:ss'));
	},1000)
	
	var alert = require('alert');
	swal("版本号：" + v.version + "\n" + "作者：" + v.powerBy + "\n" + "简介：" + v.desc);
});