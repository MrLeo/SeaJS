define(function(require, exports, module) {
	exports.info = function(msg) {
		try {
			console.log(msg);
		} catch (e) {
			alert(msg);
		}
	}
});