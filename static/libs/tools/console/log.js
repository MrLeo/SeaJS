define(function(require, exports, module) {
	exports.log = function(msg) {
		if (window.console && console.log) {
            console.log(msg);
        }
        else {
            alert(msg);
        }
	}
});