/**
 * Created by Administrator on 2016/9/17.
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

function $(id){
    return document.getElementById(id);
}

function startMove(obj,args,fun){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for(var i in args){
            var sum=parseInt(getStyle(obj,i));
            var speed=(args[i]-sum)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(args[i]-sum!=0){
                obj.style[i]=sum+speed+'px';
                flag=false;
            }
            if(flag){
                clearInterval(obj.timer);
                fun&&fun();
            }
        }
    },30)
}/**
 * Created by Administrator on 2016/10/6.
 */
