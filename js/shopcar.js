var shopcar=(function(){
    return{
        init:function(){
            var $cartBox=document.querySelector('.cartBox');
            this.$proNameTit=$cartBox.querySelector('.proNameTit');
            this.$proPrione=$cartBox.querySelector('.proPrione');
            this.$numVal=$cartBox.querySelector('.numVal');
            this.$subTotal=$cartBox.querySelector('.subTotal');
            this.$numAdd=$cartBox.querySelector('.numAdd');
            this.$numDec=$cartBox.querySelector('.numDec');
            this.getdata();
            this.event();
        },
        event:function(){
            var _this=this;
            this.$numAdd.onclick=function(){
                if(_this.$numVal.value<5){
                    _this.$numVal.value=_this.$numVal.value-0+1;
                    _this.$subTotal.innerHTML=_this.$proPrione.innerHTML* _this.$numVal.value+'';
                }
            }
            this.$numDec.onclick=function(){
                if(_this.$numVal.value>1&&_this.$numVal.value<=5){
                    _this.$numVal.value-=1;
                    _this.$subTotal.innerHTML=_this.$proPrione.innerHTML* _this.$numVal.value+'';
                }
            }

        },
        getdata:function(){
            this.carList=JSON.parse(localStorage.shopCar||'[]');
            for(var i=0;i<this.carList.length;i++){
                this.$proNameTit.innerHTML=this.carList[i].items[0].name;
                this.$proPrione.innerHTML=this.carList[i].items[0].price;
                this.$numVal.value=this.carList[i].items[0].num;
                this.$subTotal.innerHTML=Number( this.$proPrione.innerHTML)*Number(this.$numVal.value);
            }
        },
        changeData:function(){
            
        }
    }

}())