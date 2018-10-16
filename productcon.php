<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>宝贝详情</title>
    <link rel="stylesheet" type="text/css" href="css/iconfont.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/comon.css">
    <link rel="stylesheet" href="css/procon.css">
</head>
<body>
    <?php
        $name = isset($_GET['name']) ? $_GET['name'] : 'procon';
        $json = json_decode(file_get_contents("json/".$name.".json"));
    ?>
    <div id="vivo">
        <div id="topbg">
        </div>
        <div id="navi">
            <a href="vivoshouye.html">商品首页<i class="iconfont icon-arrow-right-copy"></i></a>
            <a href="#">手机产品<i class="iconfont icon-arrow-right-copy"></i></a>
            <span>X系列</span>
        </div>
        <div id="procon">
            <div class="proimg">
                <div class="proPicBox">
                    <img class="proPic" src=<?php echo $json->pic?> alt="">
                    <img class="prosale" src="images/sale.png" alt="">
                </div>
                <div class="proBigPic">
                    <img src=<?php echo $json->pic?> alt="">
                </div>
                <ul class="proPicList">
                    <li><img class="Listpic" src=<?php echo $json->pic?> alt=""></li>
                    <li><img class="Listpic" src=<?php echo $json->pic?> alt=""></li>
                    <li><img class="Listpic" src=<?php echo $json->pic?> alt=""></li>
                </ul>
            </div>
            <div class="proprice">
                <h2 class="proPriTit" data-id=<?php echo $json->id?>>
                    <?php
                        echo $json->name
                    ?>
                </h2>
                <h3 class="choLarge choList">选择版本容量</h3>
                <div class="choLar">
                    <div class="lar1">
                        <?php
                            echo $json->capacity[0]
                        ?>
                    </div>
                    <div class="lar2">
                        <?php
                            echo $json->capacity[1]
                        ?>
                    </div>
                </div>
                <h3 class="choList choNum">数量</h3>
                <div class="choNumBox">
                    <div class="numDec">-</div>
                    <input class="numVal" type="text" value="1" readonly>
                    <div class="numAdd">+</div>
                    <span class="quota">(每人限购5部)</span>
                </div>
                <p class="priceTag">￥<span class="priTagNum"><?php
                        echo $json->price
                    ?>
                </span>元</p>
                <p class="suport">商品支持:<i class="iconfont icon-oksignlarge"></i>花呗分期<i class="iconfont icon-oksignlarge"></i>以旧换新</p>  
                <div class="buyBox">
                    <button type="button" class="buynow">立即购买</button>
                    <button type="button" class="addCar">加入购物车</button>    
                </div>
            </div>
        </div>
        <div id="Bottombg">
        </div>
        <ul class="fixList">
        </ul>
        <div id="addDown">
        </div>
        <div class="addBox">
            <p class="addDownCon"><i class="iconfont icon-oksignlarge addDownConOk"></i>商品已成功加入购物车!</p>
            <button type="button" class="goPay">去结算</button>
            <button class="goOn" type="button">继续逛逛</button>
        </div>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/procon.js"></script>
    <script>
        $("#topbg").load("vivoshouye.html #topbg");
        $("#Bottombg").load("vivoshouye.html #Bottombg");
        $(".fixList").load("vivoshouye.html .fixList");
        procon.init();
    </script>
</body>
</html>