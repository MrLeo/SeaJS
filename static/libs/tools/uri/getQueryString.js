define(function (require, exports, module) {
    module.exports = { // 或者通过 module.exports 提供整个接口
        'getQueryString': function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    }
});
