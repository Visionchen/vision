window.onload=function () {
    var img = document.getElementById('im').getElementsByTagName('li');
    var nav = document.getElementById('na').getElementsByTagName('li');
    var top = document.getElementById('to');
    var cur = 0;
    var len = nav.length;
    var timer;
    var speed = 1000;
    timer = setInterval(function () {

        cur++;
        if (cur == len) {
            cur = 0;
        }
        for (var j = 0; j < len; j++) {
            if (j == cur) {
                img[j].className = 'on_li';
                nav[j].className = 'to_li';
            } else {
                img[j].className = '';
                nav[j].className = '';
            }
        }

    }, speed);
    for (var i = 0; i < len; i++) {
        nav[i].cur = i;
        nav[i].onmouseover = function () {
            cur = this.cur;
            for (var j = 0; j < len; j++) {
                if (j == cur) {
                    img[j].className = 'on_li';
                    nav[j].className = 'to_li';
                } else {
                    img[j].className = '';
                    nav[j].className = '';
                }
            }
        }

    }
    top.onmouseover=function () {
        clearInterval(timer)
    };
    top.onmouseout=function () {
        timer = setInterval(function () {
            cur++;
            if (cur == len) {
                cur = 0;
            }
            for (var j = 0; j < len; j++) {
                if (j == cur) {
                    img[j].className = 'on_li';
                    nav[j].className = 'to_li';
                } else {
                    img[j].className = '';
                    nav[j].className = '';
                }
            }

        }, speed);
    }
};/**
 * Created by Administrator on 2016/9/19.
 */
