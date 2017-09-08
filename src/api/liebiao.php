<?php
include 'content.php';
$type=isset($_GET['type'])?$_GET['type']:'1';
$yema=isset($_GET['yema'])?$_GET['yema']:1;
$qty=isset($_GET['qty'])?$_GET['qty']:5;
$sql="select * from detail1 where type='$type'";
$result=$conn->query($sql);
$a=$result->fetch_All(MYSQLI_ASSOC);
$r=array(
    'data'=>array_slice($a,($yema-1)*$qty,$qty),
    'total'=>count($a)
);
echo json_encode($r,JSON_UNESCAPED_UNICODE);
?>