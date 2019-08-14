"use strict";

$(function() {
  let mytable = $("#detailsTable");
  let objs;

  $.getJSON("data/products.json", function(data) {
    objs = data;
    let urlParams = new URLSearchParams(location.search);
    let productid = urlParams.get("ProductId");

    for (let i = 0; i < objs.Items.length; i++) {
      if (productid == objs.Items[i].ProductID) {
        //Table Body
        let str =
          "<tr><td>" + "ProductID details.html?"+objs.Items[i].ProductID +
          "</td><tr>";

        $("#detailsBody tbody").append(str);
        //End of body table
      }
    }
  }); // end of get JSON
}); // end of ready fuction
