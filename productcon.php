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
            <div id="top">
                <a href="#" class="logo"></a>
                <ul class="topul">
                    <li><a href="#">NEX系列</a></li>
                    <li><a href="#">X系列</a></li>
                    <li><a href="#">Z系列</a></li>
                    <li><a href="#">Y系列</a></li>
                    <li><a href="#">商城</a></li>
                    <li><a href="#">专卖店</a></li>
                    <li><a href="#">Funtouch OS</a></li>
                    <li><a href="#">服务</a></li>
                    <li><a href="#">社区</a></li>
                </ul>
                <div class="search iconfont icon-sousuo">
                    
                </div>
                <div class="my iconfont icon-profile">
                    <ul class="my_sec">
                        <li><a href="vivologin.html">购物车</a></li>
                        <li><a href="vivologin.html">我的订单</a></li>
                        <li><a href="vivologin.html">我的商城</a></li>
                        <li><a href="vivologin.html">登录/注册</a></li>
                    </ul>
                </div>
            </div>
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
                <div id="Bottom">
                    <ul class="Titlist">
                        <li>
                            <a href="#">
                                <i class="iconfont icon-zhengpinbaozhang2 titsize"></i>
                                官方正品
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="iconfont icon-favorite titsize"></i>
                                满68包邮
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="iconfont icon-30 titsize"></i>
                                30天退换货
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="iconfont icon-shouhouguanli titsize"></i>
                                全国网点售后
                            </a>
                        </li>
                    </ul>
                    <div class="conList">
                        <ul class="conListLef">
                            <li>热门链接</li>
                            <li>官方商城</li>
                            <li>选购手机</li>
                            <li>选购配件</li>
                            <li>选购碎屏保</li>
                            <li>以旧换新</li>
                        </ul>
                        <ul class="conListLef">
                            <li>在线购买</li>
                            <li>官方商城</li>
                            <li>选购手机</li>
                            <li>选购配件</li>
                            <li>选购碎屏保</li>
                            <li>以旧换新</li>
                        </ul>
                        <ul class="conListLef">
                            <li>服务支持</li>
                            <li>官方商城</li>
                            <li>选购手机</li>
                            <li>选购配件</li>
                            <li>选购碎屏保</li>
                            <li>以旧换新</li>
                        </ul>
                        <ul class="conListLef">
                            <li>vivo社区</li>
                            <li>官方商城</li>
                            <li>选购手机</li>
                            <li>选购配件</li>
                            <li>选购碎屏保</li>
                            <li>以旧换新</li>
                        </ul>
                        <ul class="conListLef">
                            <li>关于vivo</li>
                            <li>官方商城</li>
                            <li>选购手机</li>
                            <li>选购配件</li>
                            <li>选购碎屏保</li>
                            <li>以旧换新</li>
                        </ul>
                        <div class="conListRi">
                            <img src="images/phone_03.jpg" alt="">
                        </div>
                    </div>
                    <p class="tital">
                        Copyright ©2011-2018 广东步步高电子工业有限公司 版权所有 保留一切权利 | 隐私政策 | 法律声明 | 粤B2-20080267 | 粤ICP备05100288号
                    </p>
                </div>
        </div>
        <ul class="fixList">
            <li>
                <a href="shopcar.html">
                    <i class="iconfont icon-gouwuche fixTit"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-kefu fixTit" ></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-iconfonticon4 fixTit" style="font-size: 30px"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-fanhuidingbu fixTit" ></i>
                </a>
            </li>
        </ul>
        <div id="addDown">
        </div>
        <div class="addBox">
            <p class="addDownCon"><i class="iconfont icon-oksignlarge addDownConOk"></i>商品已成功加入购物车!</p>
            <button type="button" class="goPay">去结算</button>
            <button class="goOn" type="button">继续逛逛</button>
        </div>
    </div>
    <script src="js/procon.js"></script>
    <script>
        procon.init();
    </script>
</body>
</html>