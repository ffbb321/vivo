var shopcar={init:function(){this.$cartBox=document.querySelector(".cartBox"),this.$proNameTit=this.$cartBox.querySelector(".proNameTit"),this.$proPrione=this.$cartBox.querySelector(".proPrione"),this.$numVal=this.$cartBox.querySelector(".numVal"),this.$subTotal=this.$cartBox.querySelector(".subTotal"),this.$numAdd=this.$cartBox.querySelector(".numAdd"),this.$numDec=this.$cartBox.querySelector(".numDec"),this.$isCar=document.querySelector(".isCar"),this.$totPriCon=document.querySelector(".totPriCon"),this.$nothing=document.querySelector(".nothing"),this.$cartBoxCon=document.querySelector(".cartBoxCon"),this.getdata(),this.event()},event:function(){var t=this;this.$numAdd.onclick=function(){t.$numVal.value<5&&(t.$numVal.value=t.$numVal.value-0+1,t.$subTotal.innerHTML=t.$proPrione.innerHTML*t.$numVal.value+"",t.$totPriCon.innerHTML=t.$subTotal.innerHTML),t.changeLocal()},this.$numDec.onclick=function(){1<t.$numVal.value&&t.$numVal.value<=5&&(t.$numVal.value-=1,t.$subTotal.innerHTML=t.$proPrione.innerHTML*t.$numVal.value+"",t.$totPriCon.innerHTML=t.$subTotal.innerHTML),t.changeLocal()}},getdata:function(){this.carList=JSON.parse(localStorage.shopCar||"[]"),0==this.carList.length&&(this.$isCar.innerHTML="",this.$isCar.className="noproBg",this.$nothing.style.display="block");for(var t=0;t<this.carList.length;t++)this.$nothing.style.display="none",this.$isCar.className="isCar",this.$proNameTit.innerHTML=this.carList[t].items[0].name,this.$proPrione.innerHTML=this.carList[t].items[0].price,this.$numVal.value=this.carList[t].items[0].num,this.$subTotal.innerHTML=Number(this.$proPrione.innerHTML)*Number(this.$numVal.value),this.$totPriCon.innerHTML=this.$subTotal.innerHTML},changeLocal:function(){for(var t=this,i=0;i<t.carList.length;i++)t.carList[i].items[0].name=t.$proNameTit.innerHTML,t.carList[i].items[0].price=t.$proPrione.innerHTML,t.carList[i].items[0].num=t.$numVal.value;localStorage.shopCar=JSON.stringify(t.carList)},delpro:function(){this.$cartBox.onclick=function(t){((t=t||window.event).target||t.srcElement).className}}};