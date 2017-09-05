<?php
include 'content.php';
$phone=isset($_GET['phone']) ? $_GET['phone']:'';
$password=isset($_GET['password']) ? $_GET['password']:'';
$sql="select * from regandlogin where phone='$phone'";
// echo $sql;
$result=$conn->query($sql);
// var_dump($result);
if($result->num_rows>0){
    echo "no";
}else{
    $password=md5($password);
    $sql="insert into regandlogin (phone,password) values('$phone','$password') ";
    $result=$conn->query($sql);
    if ($result) {
            echo "插入数据成功";
    } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>