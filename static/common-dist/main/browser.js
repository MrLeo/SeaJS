/*! Leo  @  11-01-2016 */
define("static/common-dist/main/browser",[],function(a,b,c){c.exports={versions:function(){var a=navigator.userAgent;navigator.appVersion;return{trident:a.indexOf("Trident")>-1,presto:a.indexOf("Presto")>-1,webKit:a.indexOf("AppleWebKit")>-1,gecko:a.indexOf("Gecko")>-1&&-1==a.indexOf("KHTML"),mobile:!!a.match(/AppleWebKit.*Mobile.*/),ios:!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:a.indexOf("Android")>-1||a.indexOf("Linux")>-1,iPhone:a.indexOf("iPhone")>-1,iPad:a.indexOf("iPad")>-1,webApp:-1==a.indexOf("Safari"),isWeiXin:"micromessenger"==a.match(/MicroMessenger/i)}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}});