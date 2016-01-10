define("static/common-dist/main/uri-debug", [], function(require, exports, module) {
    module.exports = {
        /**
         * 获取URL参数
         * @param {Object} name 参数名
         */
        getQueryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    };
});
