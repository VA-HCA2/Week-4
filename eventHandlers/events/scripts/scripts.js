"use strict"

window.onload= function()
{
    const allInputTextFields=document.querySelectorAll("input[type='text']");
    const stateField=document.getElementById("state");
    const dropDownList=document.getElementsByClassName("billingAddress");
    for (let i=0; i < allInputTextFields.length; i++)
    {
        allInputTextFields[i].onfocus=function(){
            this.style.backgroundColor="tan";
        };
        allInputTextFields[i].onblur=function(){
            this.style.backgroundColor="";
        };
    }
        stateField.oninput=function(){
        stateField.value=stateField.value.toUpperCase();
       };
      dropDownList.onchange = function () 
      {   
          let selectedOption=dropDownList.value;

              if (selectedOption==dropDownList[i].value) {
                    selectedOption[i].parentNode.style.display = "block";
                    console.log("hello");
                }
                else {
                    selectedOption[i].parentNode.style.display = "none";
                }
          }
}


 