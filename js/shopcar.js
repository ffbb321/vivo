var shopcar=(function(){
    return{
        init:function(){
            this.$cartBox=document.querySelector('.cartBox');
            this.$proNameTit=this.$cartBox.querySelector('.proNameTit');
            this.$proPrione=this.$cartBox.querySelector('.proPrione');
            this.$numVal=this.$cartBox.querySelector('.numVal');
            this.$subTotal=this.$cartBox.querySelector('.subTotal');
            this.$numAdd=this.$cartBox.querySelector('.numAdd');
            this.$numDec=this.$cartBox.querySelector('.numDec');
            this.$isCar=document.querySelector('.isCar');
            this.$totPriCon=document.querySelector('.totPriCon');
            this.$nothing=document.querySelector('.nothing');
            this.$cartBoxCon=document.querySelector('.cartBoxCon');
            this.getdata();
            this.event();
        },
        event:function(){
            var _this=this;
            this.$numAdd.onclick=function(){
                if(_this.$numVal.value<5){
                    _this.$numVal.value=_this.$numVal.value-0+1;
                    _this.$subTotal.innerHTML=_this.$proPrione.innerHTML* _this.$numVal.value+'';
                    _this.$totPriCon.innerHTML=_this.$subTotal.innerHTML;
                }
                _this.changeLocal();
            }
            this.$numDec.onclick=function(){
                if(_this.$numVal.value>1&&_this.$numVal.value<=5){
                    _this.$numVal.value-=1;
                    _this.$subTotal.innerHTML=_this.$proPrione.innerHTML* _this.$numVal.value+'';
                    _this.$totPriCon.innerHTML=_this.$subTotal.innerHTML;
                }
                _this.changeLocal();
            }

        },
        getdata:function(){
            this.carList=JSON.parse(localStorage.shopCar||'[]');
            if(this.carList.length==0){
                 this.$isCar.innerHTML='';
                 this.$isCar.className='noproBg';
                 this.$nothing.style.display='block';
             }
            for(var i=0;i<this.carList.length;i++){
                // this.$cartBox.cloneNode(true);
                // console.log(this.$cartBox)
                this.$nothing.style.display='none';
                this.$isCar.className='isCar';
                this.$proNameTit.innerHTML=this.carList[i].items[0].name;
                this.$proPrione.innerHTML=this.carList[i].items[0].price;
                this.$numVal.value=this.carList[i].items[0].num;
                this.$subTotal.innerHTML=Number( this.$proPrione.innerHTML)*Number(this.$numVal.value);
                this.$totPriCon.innerHTML=this.$subTotal.innerHTML;
                // this.$cartBoxCon.appendChild(this.$cartBox);
                // console.log(this.$cartBoxCon)
            }
        },
        changeLocal:function(){
            var _this=this;
            for(var i=0;i<_this.carList.length;i++){
                _this.carList[i].items[0].name=_this.$proNameTit.innerHTML;
                _this.carList[i].items[0].price=_this.$proPrione.innerHTML;
                _this.carList[i].items[0].num=_this.$numVal.value;
            }
            localStorage.shopCar=JSON.stringify(_this.carList);    
        },
        delpro:function(){
            var _this=this;
            this.$cartBox.onclick=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.className=='delpro'){
                    
                }

            }
        }
    }

}())