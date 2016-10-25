/**
 * Created by Tean on 2016/10/9.
 */

function $(id) {
    return document.getElementById(id);
}

function css(obj, attr) {

    if(obj.currentStyle) {
        return obj.currentStyle[attr];  // IE
    } else {
        return getComputedStyle(obj)[attr]; // 标准
    }

}

function animate(obj, args, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var attr in args) {
            // 获取obj对象的attr属性的当前值
            var cur;
            if(attr == 'opacity') {
                cur = css(obj, attr) * 100;
            } else {
                cur = parseInt(css(obj, attr));
            }
            // 获取obj对象的attr属性的目标值
            var target = args[attr];
            // 算出速度
            var speed = (target - cur) / 6;
            speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
            // 判断是否到达目标值，如果没有达到，则运动
            if(cur != target) {
                if(attr == 'opacity') {
                    obj.style.opacity = (cur + speed) / 100;
                    obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';  // 'alpha(opacity=80)'
                } else {
                    obj.style[attr] = cur + speed + 'px';
                }
                flag = false; // 只要有一个动画没有执行完毕，都要把flag设置为false
            }
        }
        // 判断是否所有的动画都执行完毕
        if(flag) {
            clearInterval(obj.timer);
            // 执行回调函数（判断用户有没有传入回调函数）
            !!callback && callback();
        }
    }, 30);
}


