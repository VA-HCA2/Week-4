"use strict";

$(function() {
  let mydropDown = $("#categoriesddl");
  let objs;

  $.getJSON("data/products.json", function(data) {
    objs = data;
  }); // end of get JSON

  $("#categoriesddl").on("change", function() {

    $("#productBody").empty();
    $("#productHeader").empty();
    let categorySelection = mydropDown.val();

    //Table header
    let productHeader= $("<tr><th>Product ID</th><th>Product Name</th><th>&nbsp;</th><tr>");
    $("#productHeader").append(productHeader);
    // End of table header

    for (let i = 0; i < objs.Items.length; i++) {
      if (categorySelection == objs.Items[i].CategoryName) {
    //Table Body
        let str ="<tr><td>"+objs.Items[i].ProductID +"</td><td> <input readonly></input>"+objs.Items[i].ProductName +"</td><td>" +
          "<a href=details.html?ProductId=" +objs.Items[i].ProductID +">Details<a>" +"</td></tr>";
        $("#productTable tbody").append(str);
        //End of body table
      }
    }
  }); // end of on change
}); // end of ready fuction
