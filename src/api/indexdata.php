<?php
include 'content.php';
$shuoming=isset($_GET['shuoming'])?$_GET['shuoming']:'推荐';
$sql="select * from indexdata where shuoming='$shuoming'";
$result=$conn->query($sql);
$r=$result->fetch_All(MYSQLI_ASSOC);
$c=json_encode($r,JSON_UNESCAPED_UNICODE);
echo $c;
 $conn->close();
?>