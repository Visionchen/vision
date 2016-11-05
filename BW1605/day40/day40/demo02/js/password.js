/**
 * Created by Administrator on 2016/11/3.
 */
var code = document.getElementById('code');
var timer;
var psd = document.getElementById('psd'),
    code = document.getElementById('code'),
    text = document.getElementById('text'),
    login = document.getElementById('login'),
    x = document.getElementById('x'),
    eye = document.getElementById('eye');

 function fn() {
    code.setAttribute('onclick','');
    clearInterval(timer);
    var time = 60;
    timer = setInterval(fun,100);
    function fun() {
        time--;
        code.innerHTML = '已发送（' + time + 's）';
        code.style.background = '#bfbfbf';
        if (time == 0) {
            clearInterval(timer);
            code.style.background = '#1e93ed';
            code.innerHTML = '再次获取';
            code.setAttribute('onclick','fn()');
        }
    }
}

psd.onkeyup = function () {
    var val = psd.value;
    if(val != '') {
        x.style.visibility = 'visible';
    }else {
        x.style.visibility = 'hidden';
    }
    if(code.value == '' || text.value == '' || psd.value == '') {
        login.style.background = '#ddd';
    } else if(code.value != '' && text.value != '' && psd.value != ''){
        login.style.background = '#ed0070';

    }

};

x.onclick = function () {
    psd.value = '';
    x.style.visibility = 'hidden';
};


var flag = true;
eye.onclick = function () {
    if (flag) {
        psd.setAttribute("type","text");
        eye.style.color = 'blue';
        flag = false;
    } else {
        psd.setAttribute("type","password");
        eye.style.color = 'black';
        flag = true;
    }

};


text.onkeyup = function () {
        if(code.value == '' || text.value == '' || psd.value == '') {
            login.style.background = '#ddd';
        } else if(code.value != '' && text.value != '' && psd.value != ''){
            login.style.background = '#ed0070';

        }
};
code.onkeyup = function () {
    if(code.value == '' || text.value == '' || psd.value == '') {
        login.style.background = '#ddd';
    } else if(code.value != '' && text.value != '' && psd.value != ''){
        login.style.background = '#ed0070';

    }
};


