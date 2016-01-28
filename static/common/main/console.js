define(function(require, exports, module) {
	exports.log = function() {
		if (window.console && console.log) {
			console.log('c%[LEO]', 'color:red', arguments);
		} else {
			alert(msg);
		}
	}
});