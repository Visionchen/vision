/**
 * Created by Administrator on 2016/11/9.
 */
$(function () {
    var page = 1;
    $('.go').click(function () {
        page++;
        $.get('http://192.168.1.123:8080/api/Pro?p='+page,function (data) {
            var allData = data.list;
            if(allData.length == 0){
                $('.go').html('已全部加载')
            }else{
                common(allData);
            }
        },'json');
    });

    $.get('http://192.168.1.123:8080/api/Pro',function (data) {
        var allData =  data.list;
        common(allData);
    },'json');
    function common(allData) {
        var html = '';
        for(var i in allData){
            var oneData = allData[i];
            if(oneData.endTime){
                html += '<div class="o-li"><a href="#"><div class="contain-li"><div class="resource-title">'+oneData.name+'</div><div class="all-span"><span>'+oneData.yearGet+'%</span><span>'+oneData.totalDate+'</span><span>￥'+oneData.totalMoney/10000+'.00万</span><span>'+oneData.repayType+'</span></div><div class="state cf"><div class="state-text">还款中</div><div class="state-time">满标时间:'+oneData.endTime+'</div></div></div></a></div>';
            }else{
                html += '<div class="o-li"><a href="#"><div class="contain-li"><div class="resource-title">'+oneData.name+'</div><div class="all-span"><span>'+oneData.yearGet+'%</span><span>'+oneData.totalDate+'</span><span>￥'+oneData.totalMoney/10000+'.00万</span><span>'+oneData.repayType+'</span></div><div class="per cf"><div class="percent"><div class="percent-cont" style="width:'+(oneData.currentMoney /oneData.totalMoney *100)+'%"></div></div><div class="percent-num">进度'+Math.floor(oneData.currentMoney /oneData.totalMoney *100)+'%</div></div></div></a></div>';
            }
        }
        $('.all_data').append(html);
    }
});