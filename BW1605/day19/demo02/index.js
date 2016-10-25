/**
 * Created by Tean on 2016/9/17.
 */
window.onload = function () {


    var nav = document.getElementById('bannerNav').getElementsByTagName('li');
    var img = document.getElementById('bannerImg').getElementsByTagName('li');

    for(var i = 0, len = nav.length; i < len; i++) {

        (function(x) {
            nav[x].onmouseover = function () {

                for(var j = 0; j < len; j++) {

                    if(j == x) {
                        nav[j].className = 'focus';
                        img[j].style.display = 'block';
                    } else {
                        nav[j].className = '';
                        img[j].style.display = 'none';
                    }

                }

            };
        }(i));


    }





    /////////////////////////////////////////////////////////////////////

    var jd = document.getElementById('jd');
    var jdSon = document.getElementById('jdSon');
    jd.onmouseover = function () {

        this.style.backgroundColor = '#fff';
        this.style.borderLeft = '1px solid #ccc';
        this.style.borderRight = '1px solid #ccc';
        this.style.borderBottom = '1px solid #fff';

        jdSon.style.display = 'block';

    };
    jd.onmouseout = function () {

        this.style.backgroundColor = 'transparent';
        this.style.borderLeft = '1px solid transparent';
        this.style.borderRight = '1px solid transparent';
        this.style.borderBottom = '1px solid transparent';

        jdSon.style.display = 'none';

    };



};