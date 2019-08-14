"use strict"

window.onload= function()
{
    const allInputTextFields=document.querySelectorAll("input[type='text']");
    const stateField=document.getElementById("state");
    let addressField = document.getElementById("addressSelector");
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
//Billing address hide div 
      addressField.onchange = function () 
      {   
        let billingForm = document.getElementById("billingAddress");
                    if (addressSelector.selectedIndex == "1") {

                        billingForm.style.display = "block";
                }
                else {
                    billingForm.style.display = "none";
                }
          }
}
