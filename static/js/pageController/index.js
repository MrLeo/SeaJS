define(function(require,exports,module){
	console.log("进入:",module.id);
	
	var $ = require('jquery'); //-引入JQuery

	$('#output').text("这是通过seajs引用jQuery写入的。"); 
	
	var alert = require('alert');
	swal('test alert');
});