"use strict";
$(function() {
  let urlParams = new URLSearchParams(location.search);
  let productid = urlParams.get("id");

  $.getJSON("api/courses/"+productid, function(data) {
    let objs;
    objs = data;

   
        //Table Body

        let details =
          "<tr><td>  Id:</td><td><input type='text' value='" +
          objs.id +
          "'readonly/></td></tr>" + // First Row
          "<tr><td> Department: </td><td><input type='text' value='" +
          objs.dept +
          "'readonly/></td></tr>" + // Second Row
          "<tr><td> Course Number: </td><td><input type='text' value='" +
          objs.courseNum +
          "'readonly/></td></tr>" + // Third Row
          "<tr><td> Instructor: </td><td><input type='text' value='" +
          objs.instructor +
          "'readonly/></td></tr>"+ // Fourth Row
          "<tr><td> Start Date:</td><td><input type='text' value='" +
          objs.startDate +
          "'readonly/></td></tr>"+ // Fifth Row
          "<tr><td> Number of Days:</td><td><input type='text' value='" +
          objs.numDays +
          "'readonly/></td></tr>"; // Fifth Row

        $("#detailsTBody").append(details);
        //End of body table
  }); // end of get JSON
}); // end of ready fuction
