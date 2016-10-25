<?php

// 获取用户名
$name = $_GET['name'];  //   xxx.com/xxx.php?name=xxx

// 假设是从数据库中读取的所有用户名
$ary = array('admin', 'root', 'sa', 'administrator', 'guest');

// 是否存在
$flag = false;

// 判断用户名是否存在上面的数组中
foreach($ary as $val) {
    if($val == $name) {
        $flag = true;
    }
}

if($flag) {
    echo 'ok';
} else {
    echo 'fail';
}


?>
