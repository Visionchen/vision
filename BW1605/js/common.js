/**
 * Created by Tean on 2016/9/26.
 */


/**
 * 获取元素的样式  调用如：getStyle(box, 'width');
 * @param obj 要获取谁的样式
 * @param attr 要获取的样式属性名称
 * @return {String} 样式的属性值
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

/**
 * 根据id获取节点元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 动画
 * @param obj  要动画的元素
 * @param json  动画的属性和属性值
 * @param fn 回调函数
 */
function animate(obj, json, fn) {
    // 避免连续点击按钮
    clearInterval(obj.timer);
    // 开始运动
    obj.timer = setInterval(function () {

        var flag = true; // 假设所有动画都执行完毕
        for(var attr in json) {   // {width:200}    attr:width   json[attr]  => 200
            // 获取当前当前对象的attr属性值
            var val;
            if(attr == 'opacity'){
                val = getStyle(obj, attr) * 100;
            }else{
                 val = parseInt(getStyle(obj, attr));
            }

            // 获取当前对象的attr属性的目标值
            var target = json[attr];
            // 获取速度
            var speed = (target - val) / 6;
            speed = target > val ? Math.ceil(speed) : Math.floor(speed);
            if(val != target) {
                if(attr == 'opacity'){
                    obj.style.opacity = (val + speed) / 100 ;
                    obj.style.filter = 'alpha(opacity =' + (val + speed) +')';
                }else{
                    obj.style[attr] = val + speed + 'px';
                }

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