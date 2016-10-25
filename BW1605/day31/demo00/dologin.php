<?php
$name = $_POST['name'];
$pwd = $_POST['pwd'];

if($name == $pwd) {
    echo 'success';
} else {
    echo 'fail';
}

?>
