function myAlert(msg) {


    // 创建阴影层
    var alertShadow = document.createElement('div');
    alertShadow.setAttribute('id', 'alertShadow');
    // 创建弹出层
    var alertBox = document.createElement('div');
    alertBox.setAttribute('id', 'alertBox');
    alertBox.innerHTML = '<h3 id="alertTitle">提示信息</h3><div id="alertMessage">'+msg+'</div> <div id="alertInput"> <input type="button" id="alertOK" value="确认"></div>';

    // 把阴影层和弹出层添加到body中
    document.body.appendChild(alertShadow);
    document.body.appendChild(alertBox);

    // 获取

    var alertTitle = document.getElementById('alertTitle');
    var alertOK = document.getElementById('alertOK');



    // 点击确定按钮删除弹出层
    alertOK.onclick = function () {
        alertShadow.parentNode.removeChild(alertShadow);
        alertBox.parentNode.removeChild(alertBox);

    };

    // 让弹出框垂直居中
    alertBox.style.marginTop = -(alertBox.offsetHeight / 2) + 'px';
    // 让弹出框可以拖拽
    alertTitle.onmousedown = function (e) {
        var event = e || window.event;
        this.style.cursor = 'move';
        // 获取坐标位置
        var x = event.clientX;
        var y = event.clientY;
    
        // 计算鼠标按下位置到弹出层的边缘之间的距离
        var w = x - alertBox.offsetLeft;
        var h = y - alertBox.offsetTop;
    
        // 移动鼠标
        document.onmousemove = function (e) {
    
            var event = e || window.event;
    
            // 获取坐标位置
            var _x = event.clientX;
            var _y = event.clientY;
    
            // 改变弹出层的位置
    
            alertBox.style.left = _x - w + (alertBox.offsetWidth / 2)  + 'px';
            alertBox.style.top = _y - h + (alertBox.offsetHeight / 2) + 'px';
        };
    
        // 鼠标释放
        document.onmouseup = function () {
    
            alertTitle.style.cursor = 'default';
            // 释放事件
            document.onmousemove = null;
            document.onmouseup = null;
        };
    
        return false;
    
    };

}