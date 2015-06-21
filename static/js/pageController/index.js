define(function(require,exports,module){
	console.log("进入:",module.id);
	
	var $ = require('jquery'); //-引入JQuery
	var v = require('data/version');

	var text = "这是通过seajs引用jQuery写入的。</br></hr></br>"
				+ "版本号：" + v.version + "</br>"
				+ "作者：" + v.powerBy + "</br>"
				+ "简介：" + v.desc + "</br>";
	$('#output').html(text);
	
	var alert = require('alert');
	swal('test alert');
});