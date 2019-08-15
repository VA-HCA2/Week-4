"use strict";
$(function() {

    $("#saveButton").on("click", function() {
  
       $.post("api/courses",$("#newCourse").serialize(), function(data){
           window.location.href="index.html"
       })


        return false; 

    }); // end of on click
}); // end of ready fuction
