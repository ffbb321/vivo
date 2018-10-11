var procon = (function () {
    return {
        init: function () {
            this.$buynow = document.querySelector('.buynow');
            this.$addCar = document.querySelector('.addCar');
            this.$addDown=document.getElementById('addDown');
            this.$addBox=document.querySelector('.addBox');
            this.$goPay=document.querySelector('.goPay');
            this.$goOn=document.querySelector('.goOn');
            this.$numAdd=document.querySelector('.numAdd');
            this.$numDec=document.querySelector('.numDec');
            this.$numVal=document.querySelector('.numVal');
            this.$priTagNum=document.querySelector('.priTagNum');
            this.event();
            this.$proPriTit=document.querySelector('.proPriTit');
        },
        event: function () {
            var pricone=this.$priTagNum.innerHTML;
            var _this = this;
            this.$buynow.onclick = function () {
                location.href = 'vivologin.html';
            }
            this.$addCar.onclick = function () {
                _this.$addDown.style.display='block';
                _this.$addBox.style.display='block';
                var items={
                    name:_this.$proPriTit.innerHTML,
                    num:_this.$numVal.value,
                    price:pricone
                }
                var id=_this.$proPriTit.getAttribute('data-id');
                _this.addCarf(id,items)
            }
            this.$goOn.onclick=function(){
                _this.$addDown.style.display='none';
                _this.$addBox.style.display='none';
            }
            this.$goPay.onclick=function(){
                location.href='vivologin.html';
            }
            this.$numAdd.onclick=function(){
                if(_this.$numVal.value<5){
                    _this.$numVal.value=_this.$numVal.value-0+1;
                    _this.$priTagNum.innerHTML=pricone* _this.$numVal.value+'';
                }
            }
            this.$numDec.onclick=function(){
                if(_this.$numVal.value>1&&_this.$numVal.value<=5){
                    _this.$numVal.value-=1;
                    _this.$priTagNum.innerHTML=pricone* _this.$numVal.value+'';
                }
            }
           
        },
        addCarf:function(id,items){
            var shopCar=localStorage.shopCar||'[]';
            shopCar=JSON.parse(shopCar);
            for(var i=0;i<shopCar.length;i++){
                if(shopCar[i].id===id){
                    shopCar[i].items[0].num = Number(shopCar[i].items[0].num) + Number(items.num);
                    break;
                }
            }
            if(i===shopCar.length){
                shopCar.push({id:id,items:[items]});
            }
            localStorage.shopCar=JSON.stringify(shopCar);
        }
    }
}())
