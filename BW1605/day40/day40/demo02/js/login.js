/**
 * Created by Administrator on 2016/11/3.
 */
var psd = document.getElementById('psd'),
    code = document.getElementById('code'),
    text = document.getElementById('text'),
    login = document.getElementById('login'),
    x = document.getElementById('x'),
    eye = document.getElementById('eye');

psd.onkeyup = function () {
    var val = psd.value;
    if(val != '') {
        x.style.visibility = 'visible';
    }else {
        x.style.visibility = 'hidden';
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

