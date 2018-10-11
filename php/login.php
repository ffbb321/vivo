<?php
    $json = file_get_contents("php://input");
    // 将输入框的字符串格式转换成对象
    $json = json_decode($json);
    // 定义两个变量存储该对象的两个值
    $username = $json->username;
    $password = $json->password;
    // 设置php的字符编码为utf-8
    header("Content-type:text/html charset=utf-8");
    // 连接数据库
    $coon = new mysqli('localhost', 'root', '', 'loginuser', '3306');
    //读取编码   
    $coon->query("SET CHARACTER SET 'utf8'");
    //写入编码
    $coon->query("SET NAMES 'utf8'");
    // sql查询语句
    $search_sql = "SELECT * from login_user WHERE username = '$username' and pass = '$password'";
    // 执行查询语句
    $result = $coon->query($search_sql);
    // 对结果进行遍历，没有则为null
    $rows = $result ->fetch_assoc();
    // 判断用户名称和密码是否正确,返回对应结果,存在返回200,不存在返回1000
    if ($rows) {
        $arr = array("msg" => "200", "data" => "用户名正确");
        echo json_encode($arr);
    } else {
        $arr = array("msg" => "1000", "data" => "账号名或密码错误");
        echo json_encode($arr);
    }

?>