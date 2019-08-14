"use strict";
$(function(){

    $("#intRate").focus();

    (function() {
        $('form > input').keyup(function() {
    
            var empty = false;
            $('form > input').each(function() {
                if ($(this).val() =='') {
                    empty = true;
                }
            });
    
            if (empty) {
                $("#formId").attr('disabled', 'disabled'); 
            } else {
                $("#formId").removeAttr('disabled');
            }
        });
    })()

    $("#mortageBtn").on("click",function(){
        
        let intRate=$("#intRate").val();
        intRate=parseFloat(intRate);
            
        let  loanLength=$("#loanLength").val();
        loanLength=parseFloat( loanLength);

        let princpl=$("#princpl").val();
        princpl=parseFloat(princpl);

        let apr=intRate/1200;
        let term=loanLength*12;

        // Calculate mortgage

        let mrtg= princpl*(apr* Math.pow((1 + apr), term))/(Math.pow((1 + apr), term)-1);
        const monthlyPaymentField=$("#monthlyPayment")
        monthlyPaymentField.val(mrtg.toFixed(2));

        let totalCost=mrtg*term
        const totalCst=$("#totalCst");
        totalCst.val(totalCost.toFixed(2)) ;
    });
});