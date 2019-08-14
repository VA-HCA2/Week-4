"use strict";
$(function() {
    
    // Hide hot Fudge if Waffle cone is selected
  $("input[name='iceCreamContainer']").change(function(){
    if ($("#waffleIncluded").is(":checked")){
    $("#hotFudge").hide();
    
    // Uncheck the value 

     $("#extraTopp").prop("checked",false)    
    }  
    else {
        $("#hotFudge").show();
    }
 
  }); 

  $("#totalPrice").on("click", function() {
  
    // $("#numOfScoops").on("change", function() {  This works for on change remove onclick for this to work
    let price = 0;
    let numOfScoops = $("#numOfScoops").val();
    if (numOfScoops == 1) {
      price += 2.5;
    } else if (numOfScoops == 2) {
      price += 3.75;
    } else {
      price += 5.00;
    }
    //   });
 
    let checkedWaffle=$("#waffleIncluded").prop("checked");
    if (checkedWaffle)
    {
        price+=1.00
    } 

    let extraTopp = $("#extraTopp").prop("checked");

    if (extraTopp) {
        price += 1.25;
    }

    let extraTopp2 = $("#extraTopp2").prop("checked");

    if (extraTopp2) {
        price += 0.25;
    }

    let extraTopp3 = $("#extraTopp3").prop("checked");

    if (extraTopp3) {
        price+= 0.75;
    }

    $("#priceDiv").fadeIn(2000);
    $("#totalCost").val(price.toFixed(2));
  });

});




   