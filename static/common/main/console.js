define(function (require, exports, module) {
    exports.log = function () {
        if (window.console && console.log) {
            console.log('[LEO]',arguments);
        }
        else {
            alert(msg);
        }
    }
});