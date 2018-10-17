
move(".wrapperBox","opacity",100)
function move(ele, attr, target) {
    if(typeof ele == 'string') {
        ele = document.querySelector(ele);
    }
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        var init = parseFloat(getStyle(ele, attr));
        if(attr == 'opacity') {
            init *= 100;
        }
        var speed = (target - init) / 20;
        if(speed > 0) {
            speed = Math.ceil(speed);
        } else {
            speed = Math.floor(speed);
        }
        init += speed;
        if(init == target) {
            init = target
            clearInterval(ele.timer);
        }
        if(attr == 'opacity') {
            ele.style[attr] = init / 100;
        } else {
            ele.style[attr] = init + 'px';
        }
    }, 1000)

}
function getStyle(ele, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}


var swiper = (function() {
    var $box = document.querySelector('.wrapperBox');
    var $imgLiAll = $box.children;
    var $uubox = document.querySelector('.uu');
    var $circleLiAll = $uubox.children; 
    var timer = '';
    return  {
        // 初始化函数
        init: function() {
            this.event();
            this.autoPlay();
        },
        //事件处理函数(所有的事件处理都写在这个函数里)
        event: function() {
            var _this = this;
            $uubox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName == 'LI') {
                    var val = target.innerHTML;
                    _this.showImage(val - 1);
                    _this.autoPlay(val - 1);
                }
            }
        },
        showImage: function(index) {
            index = index || 0;
            for(var i = 0; i < $circleLiAll.length; i++) {
                // 把所有的小圆圈的class清空
                $circleLiAll[i].className = '';
                // 所有图片都隐藏
                $imgLiAll[i].style.display = 'none';
            }
            // 给对应的小圆圈添加样式
            $circleLiAll[index].className = 'current';
            $imgLiAll[index].style.display = 'block';
        },
        autoPlay: function(index) {
            index = index || 0;
            var _this = this;
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if(index >= $imgLiAll.length) {
                    index = 0;
                }
                _this.showImage(index);
            }, 3000)
        }
    }

}())
swiper.init();
