/**
 * Created by Tean on 2016/9/27.
 */

window.onload = function () {


    var imgWrap = $('imgWrap');
    var index = 0; // 默认显示的元素下标
    // 获取轮播帧数
    var len = imgWrap.getElementsByTagName('li').length;

    setInterval(function () {
        index++;

        animate(imgWrap, {left:-730 * index}, function () {
            if(index == len - 1) {
                imgWrap.style.left = 0
                index = 0;
            }
        });




    }, 1000);


};
