/**
 * Created by Administrator on 2016/9/17.
 */
window.onload=function () {
    setInterval(show, 1000);
   function show() {
       var sum = document.getElementById('su').getElementsByTagName('li');
       var img = document.getElementById('imh').getElementsByTagName('li');
       for (var i = 0, len = img.length; i < len; i++) {
           (function (x) {
               sum[x].onmouseover = function () {
                   for (var j = 0; j < len; j++) {
                       if (j == x) {
                           sum[j].className = 'yi';
                           img[j].style.display = 'block';
                       } else {
                           sum[j].className = '';
                           img[j].style.display = 'none';
                       }
                   }
               };
           }(i))
       }
   }
    show();
}