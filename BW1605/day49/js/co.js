function getStyle(obj, attr) {
    var result;
    if(obj.currentStyle) {
        result = obj.currentStyle[attr];
    } else {
        result = getComputedStyle(obj, null)[attr];
    }
    return result;
}
function $(id) {
    return document.getElementById(id);
}
function tu() {
  document.write('aahju') 
}
