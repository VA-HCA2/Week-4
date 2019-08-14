"use strict";

window.onload= function(){

   let para=document.getElementById("para");
   let inputpara=document.getElementById("paramessage");
   let imgs = document.getElementsByTagName("img")

    para.onkeypress=function(){
        let message=para.value.length;
        let count=50-Number(message);
        inputpara.innerHTML="Characters Left "+count;
   }
   
   for (let i = 0; i < imgs.length; i++) {
      imgs[i].onmouseover = function() {
          imgs[i].style.width = "400px";
          imgs[i].style.height = "400px";

      }
      imgs[i].onmouseout = function() {
          imgs[i].style.width = "300px";
          imgs[i].style.height = "300px";

      }
  }
}