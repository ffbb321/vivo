var shopcar=(function(){
    return{
        init:function(){
            this.$cartBox=$('.cartBox');
            this.$proNameTit=$('.proNameTit');
            this.$proPrione=$('.proPrione');
            this.$numVal=$('.numVal');
            this.$subTotal=$('.subTotal');
            this.$numAdd=$('.numAdd');
            this.$numDec=$('.numDec');
            this.$isCar=$('.isCar');
            this.$totPriCon=$('.totPriCon');
            this.$nothing=$('.nothing');
            this.$cartBoxCon=$('.cartBoxCon');
            this.$delpro=$('.delpro');
            this.getdata();
            this.event();
            this.delpro();
        },
        event:function(){
            var _this=this;
            this.$numAdd.click(
                function(){
                    if(_this.$numVal.val()<5){
                        _this.$numVal.val(_this.$numVal.val()-0+1);
                        console.log(_this.$numVal.val())
                        _this.$subTotal.html(_this.$proPrione.html()* _this.$numVal.val()+'');
                        _this.$totPriCon.html(_this.$subTotal.html());
                    }
                    _this.changeLocal();
                }
            )
            this.$numDec.click(
                function(){
                    if(_this.$numVal.val()>1&&_this.$numVal.val()<=5){
                        console.log(_this.$numVal.val())
                        _this.$numVal.val(_this.$numVal.val()-1);
                        _this.$subTotal.html(_this.$proPrione.html()* _this.$numVal.val()+'');
                        _this.$totPriCon.html(_this.$subTotal.html());
                    }
                    _this.changeLocal();
                }
            )
        },
        getdata:function(){
            this.carList=JSON.parse(localStorage.shopCar||'[]');
            if(this.carList.length==0){
                 this.$isCar.html('');
                 this.$isCar.className='noproBg';
                 this.$nothing.css({"display":"block"});
             }
            for(var i=0;i<this.carList.length;i++){
                // this.$cartBox.cloneNode(true);
                // console.log(this.$cartBox)
                this.$nothing.css({"display":"none"});
                this.$isCar.className='isCar';
                this.$proNameTit.html(this.carList[i].items[0].name);
                this.$proPrione.html(this.carList[i].items[0].price);
                this.$numVal.val(this.carList[i].items[0].num);
                this.$subTotal.html(Number( this.$proPrione.html())*Number(this.$numVal.val()));
                this.$totPriCon.html(this.$subTotal.html());
                // this.$cartBoxCon.appendChild(this.$cartBox);
                // console.log(this.$cartBoxCon)
            }
        },
        changeLocal:function(){
            var _this=this;
            for(var i=0;i<_this.carList.length;i++){
                _this.carList[i].items[0].name=_this.$proNameTit.html();
                _this.carList[i].items[0].price=_this.$proPrione.html();
                _this.carList[i].items[0].num=_this.$numVal.val();
            }
            localStorage.shopCar=JSON.stringify(_this.carList);    
        },
        delpro:function(){
            var _this=this;
           this.$delpro.click(function(){
               $('#delDown').css("display","block");
               $('.delBox').css("display","block");
           })
           $('.delyes').click(function(){
                $('#delDown').css("display","none");
                $('.delBox').css("display","none");
                localStorage.clear();
                _this.getdata();

           })
           $('.delno').click(function(){
            $('#delDown').css("display","none");
            $('.delBox').css("display","none");
           })
        }
    }
 
}())