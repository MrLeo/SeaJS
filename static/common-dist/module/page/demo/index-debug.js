define("static/module/page/demo-dist/index-debug", [ "jquery-2.0.3-debug", "./version-debug", "common/convert/date-debug", "common/map/baidu-map-debug" ], function(require, exports, module) {
    var jQuery = require("static/libs/jquery/jquery-2.0.3.min-debug");
    var v = require("./version-debug");
    var d = require("common/convert/date-debug");
    var m = require("common/map/baidu-map-debug");
    require("static/libs/sweetalert/dist/sweetalert.min-debug");
    console.log("进入:", module.id);
    var $output = $("#output");
    $(".title", $output).html(v.desc + " - " + v.version);
    $(".version-info dt", $output).html(v.powerBy);
    $(".version-info dd", $output).html("这是通过seajs引用jQuery写入的。");
    $("#output").on("click", function() {
        swal("版本号：" + v.version + "\n" + "作者：" + v.powerBy + "\n" + "简介：" + v.desc);
    });
    setInterval(function() {
        $("#nowDate").html(d.DateFormat("" + new Date(), "yyyy-MM-dd hh:mm:ss"));
    }, 1e3);
    /*---- 获取地理位置坐标 Start ----*/
    var options = {
        enableHighAccuracy: true,
        maximumAge: 1e3
    };
    // navigator.geolocation 获取坐标
    if (navigator.geolocation) {
        console.log("浏览器支持geolocation");
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
        console.log("浏览器不支持geolocation");
    }
    // 获取坐标成功时
    function onSuccess(position) {
        var longitude = position.coords.longitude;
        //经度
        var latitude = position.coords.latitude;
        //纬度
        console.log(longitude, latitude);
        m.initMap("map", longitude, latitude);
        //初始化地图
        m.addMarker(longitude, latitude);
    }
    // 获取坐标失败时
    function onError(error) {
        switch (error.code) {
          case 1:
            swal("位置服务被拒绝");
            break;

          case 2:
            swal("暂时获取不到位置信息");
            break;

          case 3:
            swal("获取信息超时");
            break;

          case 4:
            swal("未知错误");
            break;
        }
    }
    /*---- 获取地理位置坐标 End ----*/
    swal("版本号：" + v.version + "\n" + "作者：" + v.powerBy + "\n" + "简介：" + v.desc);
    require("static/libs/knockoutjs/knockout-3.3.0-debug");
    var model = {
        datas: ko.observableArray([ {
            item: "2015-8-27"
        }, {
            item: "2015-8-26"
        }, {
            item: "2015-8-25"
        }, {
            item: "2015-8-24"
        }, {
            item: "2015-8-23"
        }, {
            item: "2015-8-22"
        }, {
            item: "2015-8-21"
        }, {
            item: "2015-8-20"
        } ])
    };
    ko.applyBindings(model, document.getElementById("koList"));
    require("static/libs/lq-date/js/lq.datetimepick-debug");
    $("#koList").on("click", "input", function(e) {
        e.stopPropagation();
        jQuery(this).lqdatetimepicker({
            css: "datetime-day",
            dateType: "D",
            selectback: function() {}
        });
        return false;
    });
});

define("static/module/page/demo-dist/version-debug", [], {
    version: "v0.1",
    powerBy: "Leo",
    desc: "学习SeaJS模块化编程"
});
