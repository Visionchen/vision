/**
 * Created by Tean on 2016/8/8.
 */
window.onload = function() {


    // 获取所有的选项卡头
    var allLi = document.getElementById('tabHead').getElementsByTagName('li');

    // 获取所有的选项卡内容
    var allDiv = document.getElementById('tabContent').getElementsByTagName('div');


    // 循环遍历allLi集合，给每个li添加点击事件
    for(var i = 0, len = allLi.length; i < len; i++) {


        // 把当前的编号存在自己的对象中
        allLi[i].index = i;

        // 添加点击事件
        allLi[i].onclick = function () {

            for(var j = 0; j < len; j++) {
                if(j == this.index) {
                    allLi[j].className = 'focus';
                    allDiv[j].style.display = 'block';
                } else {
                    allLi[j].className = '';
                    allDiv[j].style.display = 'none';
                }
            }



            // // 去除所有的li上的class
            // for(var j = 0; j < len; j++) {
            //     allLi[j].className = '';
            //     // 隐藏所有的div
            //     allDiv[j].style.display = 'none';
            //     if(this.index == j) {
            //         allDiv[j].style.display ='block';
            //     }
            // }
            // // 把当前的li的class设置为focus
            // this.className = 'focus';

        };


    }



};