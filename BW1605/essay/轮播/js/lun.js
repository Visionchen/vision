window.onload=function(){
    var linkLi=$('topics').getElementsByTagName('li');
    var index=0;
    var index2=0;
    for(var m=0;m<3;m++){
        $('topics').appendChild(linkLi[m].cloneNode(true));
    }
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
        if(index2==linkLi.length-2){
            index2=1;
            $('topics').style.left='0';
        }
        startMove($('topics'),{left:-index2*407})
    };
    
    var hotLi=$('hot').getElementsByTagName('li');
    $('hot').appendChild(hotLi[0].cloneNode(true));
    var hotLi1=$('sc-main-div').getElementsByTagName('li');
    $('sc-main-div').appendChild(hotLi1[0].cloneNode(true));
    
    function style1(){
        index--;
        if(index==-1){
            index=hotLi.length-2;
            var sum1=-(hotLi.length-1)*880+'px';
            var sum1_1=-(hotLi.length-1)*120+'px';
            $('hot').style.left=sum1;
            $('sc-main-div').style.top=sum1_1
        }
        startMove($('hot'),{left:-index*880});
        startMove($('sc-main-div'),{top:-index*120})
    }
   
    function style2(){
        index++;
        if(index==hotLi.length){
            index=1;
            $('hot').style.left='0'
            $('sc-main-div').style.top='0'
        }
        startMove($('hot'),{left:-index*880})
        startMove($('sc-main-div'),{top:-index*120})
    }
    /*///////////////////////////////////*/
    $('hot-left').onclick=function(){
        style1();
    };
    $('hot-right').onclick=function(){
        style2()
    };
   
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
  
    var index1=0;
    var lastLi=$('last-ul').getElementsByTagName('li');
    $('last-ul').appendChild(lastLi[0].cloneNode(true));
    var lastLi1=$('sf-p-ul').getElementsByTagName('li');
    $('sf-p-ul').appendChild(lastLi1[0].cloneNode(true));
  
    function style3(){
        index1--;
        if(index1==-1){
            index1=lastLi.length-2;
            var sum2=-(lastLi.length-1)*880+'px';
            var sum2_1=-(lastLi.length-1)*198+'px'
            $('last-ul').style.left=sum2;
            $('sf-p-ul').style.top=sum2_1
        }
        startMove($('last-ul'),{left:-index1*880})
        startMove($('sf-p-ul'),{top:-index1*198})
    }
  
    function style4(){
        index1++;
        if(index1==lastLi.length){
            index1=1;
            $('last-ul').style.left='0';
            $('sf-p-ul').style.top='0'
        }
        startMove($('last-ul'),{left:-index1*880});
        startMove($('sf-p-ul'),{top:-index1*198})
    }
    $('last-left').onclick=function(){
        style3()
    };
    $('last-right').onclick=function(){
        style4();
    };
   
    var timer2=null;
    timer2=setInterval(function(){
        style4();
    },2000);
    $('sf-ul').onmouseover=$('sf-p').onmouseover=$('arrow').onmouseover=function(){
        clearInterval(timer2)
    };
    $('sf-ul').onmouseout=$('sf-p').onmouseout=$('arrow').onmouseout=function(){
        timer2=setInterval(function(){
            style4();
        },2000);
    };
};/**
 * Created by Administrator on 2016/10/6.
 */
