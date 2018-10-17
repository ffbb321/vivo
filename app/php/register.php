<?php
// 获取输入框的值
$json = file_get_contents("php://input");
// 将输入框的字符串格式转换成对象
$json = json_decode($json);
// 定义两个变量存储该对象的两个值
$username = $json->username;
$password= $json->password;
// 设置php的字符编码为utf-8
header("Content-type:text/html charset=utf-8");
// 连接数据库
$coon = new mysqli('localhost', 'root', '', 'loginuser', '3306');
//读取编码
$coon->query("SET CHARACTER SET 'utf8'");  
//写入编码
$coon->query("SET NAMES 'utf8'");
// 查询语句
if($password==''){
    $serach_sql = "SELECT * FROM login_user WHERE username = '$username'";
    // sql插入语句
    $result = $coon->query($serach_sql);
    $rows = $result->fetch_assoc();
    if ($rows) {
        $arr = array("msg" => "200", "data" => "用户名已经存在");
        echo json_encode($arr);
    } else {
        $arr = array("msg" => "1000", "data" => "用户名可以使用");
        echo json_encode($arr);
    }
}
if($password!=''){
    $insert_sql="INSERT INTO login_user (username,pass)VALUES('$username','$password')";
    $result1 = $coon->query($insert_sql);
    $arr = array("msg" => "201");
        echo json_encode($arr);
}





?>