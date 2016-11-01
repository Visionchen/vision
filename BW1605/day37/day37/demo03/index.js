var tb = document.getElementById('tb');

function del(elem) {
    var tr = elem.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
    event.preventDefault();
}

function edit(elem) {
    // 获取第一个td
    var firstTd = elem.parentNode.parentNode.getElementsByTagName('td')[0];

    if(elem.innerHTML != '保存') {
        elem.innerHTML = '保存';
        // 获取第一个td里的文本
        var txt = firstTd.innerHTML;
        // 把第一个td里的文本换成输入框
        firstTd.innerHTML = '<input type="text" value="' + txt + '">';
        // 把该输入框得到焦点
        firstTd.getElementsByTagName('input')[0].focus();
        firstTd.getElementsByTagName('input')[0].select();
    } else {
        elem.innerHTML = '编辑';
        // 获取第一个td里的文本框的内容
        var val = firstTd.getElementsByTagName('input')[0].value;
        firstTd.innerHTML = val;
    }

    event.preventDefault();
}


function add() {

    var tr = document.createElement('tr');
    tr.innerHTML = '<td><input type="text"></td><td><a href="#" onclick="edit(this)">保存</a> <a href="#" onclick="del(this)">删除</a></td>';

    tb.getElementsByTagName('tbody')[0].appendChild(tr);
    
    tr.getElementsByTagName('input')[0].focus();


}
