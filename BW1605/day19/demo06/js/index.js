/**
 * Created by Tean on 2016/9/18.
 */

window.onload = function () {


    var li = document.getElementById('bannerImg').getElementsByTagName('li'),
        nav = document.getElementById('bannerNav').getElementsByTagName('li'),
        ban = document.getElementById('banner');

    var timer; // 定时器
    var speed = 1000; // 轮播切换速度
    var cur = 0; // 当前显示的帧数
    var len = li.length; // 轮播的帧数


    timer = setInterval(tt, speed);

    // 改nav里的li添加onmouseover事件
    for(var i = 0; i < len; i++) {
        nav[i].cur = i;
        nav[i].onmouseover = function () {
            // 把当前的下标赋值给cur
            cur = this.cur;
            banner()
        };
    }

    function banner() {
        for(var j = 0; j < len; j++) {
            if(j == cur) {
                li[j].className = 'on';
                nav[j].className = 'on';
            } else {
                li[j].className = '';
                nav[j].className = '';
            }
        }
    }

    // 改banner添加onmouseover
    ban.onmouseover = function () {
        clearInterval(timer);
    };

    // 改banner添加onmouseout
    ban.onmouseout = function () {

        timer = setInterval(tt, speed);

    };

    function tt() {
        // 获取下一个要显示的帧数
        cur++;
        // 如果是最后一帧，则返回第一帧
        if(cur == len) {
            cur = 0;
        }
        // 切换帧数
        banner();
    }

};
