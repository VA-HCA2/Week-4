"use strict";
$(function() {
  let urlParams = new URLSearchParams(location.search);
  let productid = urlParams.get("ProductId");

  $.getJSON("data/products.json", function(data) {
    let objs;
    objs = data;

    for (let i = 0; i < objs.Items.length; i++) {
      if (productid == objs.Items[i].ProductID) {
        //Table Body

        let details =
          "<tr><td> Product Id:</td><td><input type='text' value='" +
          objs.Items[i].ProductID +
          "'readonly/></td></tr>" + // First Row
          "<tr><td> Name: </td><td><input type='text' value='" +
          objs.Items[i].ProductName +
          "'readonly/></td></tr>" + // Second Row
          "<tr><td> Unit Price: </td><td><input type='text' value='" +
          objs.Items[i].UnitPrice +
          "'readonly/></td></tr>" + // Third Row
          "<tr><td> Discontinued: </td><td><input type='text' value='" +
          objs.Items[i].Discontinued +
          "'readonly/></td></tr>"; // Fourth Row

        $("#detailsTBody").append(details);
        // If statement to change the color of Discoutinued

        if (objs.Items[i].Discontinued == "true") {
          $('tr:contains("Discontinued") td input').css({
            color: "red"
          });
        }
        //$("#detailsTable tbody").append(details); Same but here I am looking for the table and then the tbody
        //End of body table
      }
    }
  }); // end of get JSON

  $("#editButton").on("click", function() {
    $("#buttons").show();
    $("#editButton").hide();
  });
}); // end of ready fuction
