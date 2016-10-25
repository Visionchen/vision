// /**
//  * Created by Administrator on 2016/9/18.
//  */
// window.onload = function () {
//
//
//     var sui = document.getElementById('sui').getElementsByTagName('li');
//     var on = document.getElementById('on').getElementsByTagName('li');
//     var top=document.getElementById('top');
//     var timer;
//     var speed = 1000;
//     var cur = 0;
//     var len = on.length;
//     timer = setInterval(function () {
//         cur++;
//         if (cur == len) {
//             cur = 0;
//         }
//         for (var i = 0; i < len; i++) {
//             if (i == cur) {
//                 on[i].className = 'ro';
//                 sui[i].className = 'lo';
//             }
//             else {
//                 on[i].className = '';
//                 sui[i].className = '';
//             }
//         }
//
//     }, speed);
//     for ( var j=0;j<len;j++) {
//         sui[j].cur=j;
//         sui[j].onmouseover = function () {
//             cur=this.cur;
//             for (var i = 0; i < len; i++) {
//                 if (i == cur) {
//                     on[i].className = 'ro';
//                     sui[i].className = 'lo';
//                 }
//                 else {
//                     on[i].className = '';
//                     sui[i].className = '';
//                 }
//             }
//         }
//     }
//     top.onmouseover = function () {
//         clearInterval(timer);
//     }
//     top.onmouseout = function () {
//         timer = setInterval(function () {
//             cur++;
//             if (cur == len) {
//                 cur = 0;
//             }
//             for (var i = 0; i < len; i++) {
//                 if (i == cur) {
//                     on[i].className = 'ro';
//                     sui[i].className = 'lo';
//                 }
//                 else {
//                     on[i].className = '';
//                     sui[i].className = '';
//                 }
//             }
//
//         }, speed);
//     }
// };
///简化
window.onload = function () {
var sui = document.getElementById('sui').getElementsByTagName('li');
var on = document.getElementById('on').getElementsByTagName('li');
var top=document.getElementById('top');
var le=  document.getElementById('le');
var rig=  document.getElementById('rig');
var timer;
var speed = 2000;
var cur = 0;
var len = on.length;
    timer = setInterval(tt,speed);
for ( var j=0;j<len;j++) {
    sui[j].cur=j;
    sui[j].onmouseover = function () {
        cur=this.cur;
       mao();
    }
}
top.onmouseover = function () {
    clearInterval(timer);
}
top.onmouseout = function () {
    timer = setInterval(tt,speed);
}
    function tt() {

            cur++;
            if (cur == len) {
                cur = 0;
            }
            mao();
        }
    function mao(){
        for (var i = 0; i < len; i++) {
            if (i == cur) {
                on[i].className = 'ro';
                sui[i].className = 'lo';
            }
            else {
                on[i].className = '';
                sui[i].className = '';
            }
        }
    }
    le.onclick =function () {
        cur--;
        if(cur< 0){
            cur=len - 1;
        }
        mao();
    }
    rig.onclick =function () {
        cur++;
        if(cur==len){
            cur=0;
        }
        mao();
    }

};
