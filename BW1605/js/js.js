/**
 * Created by Administrator on 2016/9/26.
 */

function getStyle(obj, attr) {
    var result;
    if(obj.currentStyle) {
        result = obj.currentStyle[attr];
    } else {
        result = getComputedStyle(obj, null)[attr];
    }
    return result;
}
function $(id) {
    return document.getElementById(id);
}
function animate(obj, json, fn) {
    // 避免连续点击按钮
    clearInterval(obj.timer);
    // 开始运动
    obj.timer = setInterval(function () {
        var flag = true; // 假设所有动画都执行完毕
        for(var attr in json) {   // {width:200}    attr:width   json[attr]  => 200
            // 获取当前当前对象的attr属性值
            var val = parseInt(getStyle(obj, attr));
            // 获取当前对象的attr属性的目标值
            var target = json[attr];
            // 获取速度
            var speed = (target - val) / 6;
            speed = target > val ? Math.ceil(speed) : Math.floor(speed);
            if(val != target) {
                obj.style[attr] = val + speed + 'px';
                flag = false;
            }
        }
        // 当所有动画都执行完毕后才关闭定时器
        if(flag == true) {
            clearInterval(obj.timer);
            // 判断用户是否传入回调函数
            // !!fn && fn();
            if(fn) {
                fn();
            }
        }
    }, 30);
}