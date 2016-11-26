/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var ary = s.split('');
    ary.sort(); // ['a', 'a', 'b', 'b', 'c']
    var obj = {};
    for(var i in ary) {
        if(obj[ary[i]] == undefined) {
            obj[ary[i]] = 1;
        } else {
            obj[ary[i]] += 1;
        }
    }
    //console.log(obj);
    var array = [];  //   [{a:3, count:3, name:'a'}, {b:3, count:3,name:'b'}, {c:2, count:2, name:'c'}]
    for(var i in obj) {
        var s = {};
        s.count = obj[i];
        s.name = i;
        s[i] = obj[i];
        array.push(s);
    }
    array.sort(function(a, b) {
        return b.count - a.count;
    });
    var str = '';
    for(var i in array) {
        for(var j = 0; j < array[i].count; j++) {
            str += array[i].name;
        }
    }
    return str;
};

console.log(frequencySort('bbaaacccd'));

/**
 * Created by Administrator on 2016/9/17.
 */
window.onload=function(){
    var linkLi=$('topics').getElementsByTagName('li');
    var index=0;
    var index2=0;
    $('btn-left').onclick=function(){
        index2--;
        if(index2==-1){
            index2=linkLi.length-4;
            var sum=-(linkLi.length-3)*407+'px';
            $('topics').style.left=sum;
        }
        startMove($('topics'),{left:-index2*407});
    };
    $('btn-right').onclick=function(){
        index2++;
        if(index2==linkLi.length-4){
            index2=1;
            $('topics').style.left='0';
        }
        startMove($('topics'),{left:-index2*407})
    };
    /*第一部分*/
    var hotLi=$('hot').getElementsByTagName('li');
    $('hot').appendChild(hotLi[0].cloneNode(true));
    //函数一
    function style1(){
        index--;
        if(index==-1){
            index=hotLi.length-2;
            var sum1=-(hotLi.length-1)*880+'px';
            $('hot').style.left=sum1
        }
        startMove($('hot'),{left:-index*880})
    }
    //函数二
    function style2(){
        index++;
        if(index==hotLi.length){
            index=1;
            $('hot').style.left='0'
        }
        startMove($('hot'),{left:-index*880})
    }
    /*///////////////////////////////////*/
    $('hot-left').onclick=function(){
       style1();
    };
    $('hot-right').onclick=function(){
       style2()
    };
    //定时器一
    var timer1=null;
    timer1=setInterval(function(){
        style1();
    },2000);
    $('tim').onmouseover=function(){
        clearInterval(timer1)
    };
    $('tim').onmouseout=function(){
        timer1=setInterval(function(){
            style1();
        },2000);
    };
    ////////////////////////////////
    /*第四部分*/
    var index1=0;
    var lastLi=$('last-ul').getElementsByTagName('li');
    $('last-ul').appendChild(lastLi[0].cloneNode(true));
    //函数三
    function style3(){
        index1--;
        if(index1==-1){
            index1=lastLi.length-2;
            var sum2=-(lastLi.length-1)*880+'px';
            $('last-ul').style.left=sum2;
        }
        startMove($('last-ul'),{left:-index1*880})
    }
    //函数四
    function style4(){
        index1++;
        if(index1==lastLi.length){
            index1=1;
            $('last-ul').style.left='0'
        }
        startMove($('last-ul'),{left:-index1*880})
    }
    $('last-left').onclick=function(){
       style3()
    };
    $('last-right').onclick=function(){
      style4();
    };
    //定时器二
    var timer2=null;
    timer2=setInterval(function(){
        style4();
    },2000);
    $('sf-ul').onmouseover=$('arrow').onmouseover=function(){
        clearInterval(timer2)
    };
    $('sf-ul').onmouseout=$('arrow').onmouseout=function(){
        timer2=setInterval(function(){
            style4();
        },2000);
    };
};
function show(name, age) {
    console.log(name + ' ' + age);
}
function fn() {
    alert(this.name);
}
function fb() {
    consoe.log('duang');
}
var a = 3;
var c = 4;
function duang() {
    a + c;
}
