





function myAlert(msg) {
    var alertShadow = document.createElement('div');
    alertShadow.className = 'alert-shadow';
    var alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = '<div class="alert-head" id="alertHead">信息提示</div><div class="alert-info">' + msg + '</div><div class="alert-btn"><input type="button" value="确定" id="alertBtnOK"></div>';

    document.body.appendChild(alertShadow);
    document.body.appendChild(alertBox);
    var height = alertBox.offsetHeight / 2;
    alertBox.style.marginTop = -height +'px';

    // 点击确定关闭窗口
    var btnOk = document.getElementById('alertBtnOK');
    btnOk.onclick = function() {
        document.body.removeChild(alertShadow);
        document.body.removeChild(alertBox);
    };
    // 拖拽
    var alertHead = document.getElementById('alertHead');
    alertHead.onmousedown = function(e) {
        var e = e || window.event;
        this.style.cursor = 'move';
        var x = e.clientX;
        var y = e.clientY;

        var l = alertBox.offsetLeft + alertBox.offsetWidth / 2;
        var t = alertBox.offsetTop + height;

        document.onmousemove = function(e) {
            var e = e || window.event;
            var _x = e.clientX;
            var _y = e.clientY;

            alertBox.style.left = _x - x + l + 'px';
            alertBox.style.top = _y - y + t + 'px';

        };
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            alertHead.style.cursor = 'default';
        };
        return false;
    };

}
