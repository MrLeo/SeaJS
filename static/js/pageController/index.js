define(function (require, exports, module) {
    var $ = require('jquery');
    var v = require('data/version');
    var d = require('tools/convert/date');
    var m = require('commen/baidu-map');
    var console = require('console');

    console.log("进入:", module.id);

    var text = "这是通过seajs引用jQuery写入的。</br><hr></br>" + "版本号：" + v.version + "</br>" + "作者：" + v.powerBy + "</br>" + "简介：" + v.desc + "</br>";
    $('#output').html(text);

    $('#output').on('click', function () {
        swal("版本号：" + v.version + "\n" + "作者：" + v.powerBy + "\n" + "简介：" + v.desc);
    });

    setInterval(function () {
        $('#date').html(d.DateFormat('' + (new Date()), 'yyyy-MM-dd hh:mm:ss'));
    }, 1000);

    /*---- 获取地理位置坐标 Start ----*/
    var options = {
        enableHighAccuracy: true,
        maximumAge: 1000
    }

    // navigator.geolocation 获取坐标
    if (navigator.geolocation) {
        console.log("浏览器支持geolocation");
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
        console.log("浏览器不支持geolocation");
    }

    // 获取坐标成功时
    function onSuccess(position) {
        var longitude = position.coords.longitude; //经度
        var latitude = position.coords.latitude; //纬度
        console.log(longitude, latitude);
        m.initMap('map', longitude, latitude); //初始化地图
        m.addMarker(longitude, latitude); //添加覆盖物
    }

    // 获取坐标失败时
    function onError(error) {
        switch (error.code) {
            case 1:
                alert("位置服务被拒绝");
                break;
            case 2:
                alert("暂时获取不到位置信息");
                break;
            case 3:
                alert("获取信息超时");
                break;
            case 4:
                alert("未知错误");
                break;
        }
    }

    /*---- 获取地理位置坐标 End ----*/

    var alert = require('alert');
    swal("版本号：" + v.version + "\n" + "作者：" + v.powerBy + "\n" + "简介：" + v.desc);
});