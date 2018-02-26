/**
 * Created by wigo.chen on 2016/5/18.
 */
/*测试环境*/
 var SERVICE_URL = 'http://app01.datagroup.ccdata.com:8888/aqplus/s/';
/*正式环境*/
//var SERVICE_URL = "http://aqplus.nielsenccdata.com/aqplus/s/";
function callService(url, data, success, error, type, isAsync){
    if(url != "login" && url != "register" &&　url != "sendCheckCode" && url != "sendResetPasswdInfo" && url != "validateResetPasswdInfo" && url != "resetPasswd")
        checkLogin(true);
    if(!success){
        success = function (data) {}
    }
    if(!error){
        error = function (data) {}
    }
    if(!isAsync){
        isAsync = true;
    }
    if(!type)
        type = "post";
    return $.ajax({
        url : SERVICE_URL + url,
        data : data,
        type : type,
        async : isAsync,
        dataType : "json"
        // timeout: 5000
    }).done(function (data) {
        success(data);
    }).fail(function (data) {
        error(data);
    }).complete(function (XMLHttpRequest, textStatus) {
        // console.log(textStatus);
        // console.log(XMLHttpRequest);
    });
}