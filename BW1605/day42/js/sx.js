/**
 * Created by Administrator on 2016/11/4.
 */




$(function () {

    $('.top-right').click(function () {
        $(this).parent().hide();
    });

    $.get('http://192.168.1.123:8080/api/Pro',function (data) {
        var allData = data.list;
        common(allData);
    },'json');
    function common(allData) {
        var html ='';
        for(var i in allData){
            var oneData = allData[i];
            if(oneData.endTime){
                html +='<div class="source"><div class="resource"><a href="#"><ul><li class="resource-li1"><div class="resource-title">'+oneData.name+'</div></li><li class="resource-li2"><div class="resource-con cf"><div class="resource-con1"><div class="act">年化收益率</div><div class="act-val">'+oneData.yearGet+'%</div></div><div class="resource-con2"><div class="act">期限</div><div class="act-val">'+oneData.totalDate+'</div></div><div class="resource-con3"><div class="over cf"><div class="over-ui"><div class="over-u" style="width: '+Math.floor(oneData.currentMoney /oneData.totalMoney *100)+'%"></div></div><div class="over-val" >'+Math.floor(oneData.currentMoney /oneData.totalMoney *100)+'%</div></div><a href="#" class="a-input" style="background-color:#999999;">还款中</a></div></div></li></ul></a></div></div>'
            }else{
                html +='<div class="source"><div class="resource"><a href="#"><ul><li class="resource-li1"><div class="resource-title">'+oneData.name+'</div></li><li class="resource-li2"><div class="resource-con cf"><div class="resource-con1"><div class="act">年化收益率</div><div class="act-val">'+oneData.yearGet+'%</div></div><div class="resource-con2"><div class="act">期限</div><div class="act-val">'+oneData.totalDate+'</div></div><div class="resource-con3"><div class="over cf"><div class="over-ui"><div class="over-u" style="width: '+Math.floor(oneData.currentMoney /oneData.totalMoney *100)+'%"></div></div><div class="over-val" >'+Math.floor(oneData.currentMoney /oneData.totalMoney *100)+'%</div></div><a href="#" class="a-input" style="background-color: #0a8ddf;">立即投资</a></div></div></li></ul></a></div></div>'
            }
        }
        $('.allData').append(html);
    }
});


/////////////////////
// new function () {
//     var _self = this;
//     _self.width = 640; // 设置默认最大宽度
//     _self.fontSize = 50; // 默认字体大小
//     _self.widthProportion = function () {
//         var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
//         return p;
//     };
//     _self.changePage = function () {
//         document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
//     };
//     _self.changePage();
//     window.addEventListener('resize', function () {
//         _self.changePage();
//     }, false);
// };