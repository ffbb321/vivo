function sendAjax(url, options) {
    // 设置默认值
    var _default = {
        method: 'GET',
        data: null,
        error: null,
        success: null,
        res:null
    }
    // 将传进来的参数替换默认值
    for (var i in options) {
        _default[i] = options[i];
    }
    // 对get请求方式拼接字符串
    var f = url.indexOf('?') > -1 ? '&' : '?';
    url += f + '_=' + Date.now();
    // 判断是不是get请求方式
    if (_default.method.toUpperCase == 'GET') {
        for (var j in _default.data) {
            url += '&' + j + '=' + _default[j];
        }
        // 将get方式请求的内容变为空,已经拼接完成
        _default.data = null;
    }
    // 设置请求头
    var xhr = new XMLHttpRequest();
    // 获取请求方式,请求路径,以及设置异步
    xhr.open(_default.method, url, true);
    // 将发送的内容转为字符串
    _default.data = JSON.stringify(_default.data);
    // 发送Ajax请求
    xhr.send(_default.data);
    // 监听Ajax请求的变化
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // debugger
            if (xhr.status == 200) {
                // 完成请求则接收服务器的返回的内容
                var val = xhr.responseText;
                // 将内容转为字符串格式
                val = JSON.parse(val);
                // 判断请求回来的信息的msg状态
                if(val.msg==201){
                    if (typeof _default.success == 'function') {
                        _default.success(val);
                    }
                };
                if (val.msg == 200 || val.msg == 1000) {
                    if (typeof _default.success == 'function') {
                        _default.success(val);
                    }
                }
                // 不符合则返回执行报错函数
            } else {
                if (typeof _default.error == 'function') {
                    _default.error(val);
                }
            }
        }
    }
}