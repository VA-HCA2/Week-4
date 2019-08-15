"use strict";

$(function() {
  let objs;

  $.getJSON("/api/courses", function(data) {
    objs = data;

    //Table header
    let coursesHeader= $("<tr><th>Department ID</th><th>Course Number</th><th>&nbsp;</th><tr>");
    $("#coursesHeader").append(coursesHeader);
    // End of table header

    for (let i = 0; i < objs.length; i++) {
      
    //Table Body
        let str ="<tr><td>"+objs[i].dept +"</td><td>"+objs[i].courseNum +"</td><td>" +
          "<a href=details.html?id=" +objs[i].id+">Details<a>" +"</td></tr>";
        $("#coursesTable tbody").append(str);
        //End of body table
  
    }

}); // end of get JSON
}); // end of ready fuction
