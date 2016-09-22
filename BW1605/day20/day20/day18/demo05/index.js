window.onload = function() {

    var btn = document.getElementById('getName');
    var show = document.getElementById('show');

    var names = ['拉登', '奥巴马', '普京', '三胖', '毛憋', '安倍', '黄帝', '蚩尤', '尧', '老猪'];

    var timer;  // 定时器

    var flag = true; // boolean类型   true：第一次点击   false:第二次点击

    btn.onclick = function() {
        if(flag == true) {   // 第一次点击

            timer = setInterval(function() {
                // 产生一个随机数  0 ~ names.length
                var num = Math.floor(Math.random() * names.length);
                show.innerHTML = names[num];
            }, 10);

            flag = false;
            this.value = '停止';

        } else {  // 第二次点击
            clearInterval(timer);
            flag = true;
            this.value = '开始';
        }
    };
    var all = document.getElementById('all');
    var name = '';
    for(var i = 0; i < names.length; i++) {
        name += '<span>' + names[i] + '</span>';
    }
    all.innerHTML = name;
};
