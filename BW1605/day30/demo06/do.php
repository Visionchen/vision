<?php
//   do.php?callback=xxx
$fn = $_GET['callback'];

$json = '{"name":"tomg","age":24,"gender":"male"}';

echo "$fn($json)";  // xxx(json)


?>
