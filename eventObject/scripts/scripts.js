"use strict";

window.onload= function(){

   let para=document.getElementById("para");
   let inputpara=document.getElementById("paramessage")
   let imgs=document.getElementsByClassName("images")

    para.onkeypress=function(){
        let message=para.value.length;
        let count=50-Number(message);
        inputpara.innerHTML="Characters Left "+count;
   }
   
}