<?php
 include 'content.php';
 $phone=isset($_GET['phone']) ? $_GET['phone']:'';
 $password=isset($_GET['password']) ? $_GET['password'] :'';
 $password=md5($password);
 $sql="select * from regandlogin where phone='$phone' and password='$password'";
 $result=$conn->query($sql);
 $r=$result->fetch_row();
 if($r[0]){
    echo "ok";
 }else{echo 'fail';}
 $conn->close();
?>