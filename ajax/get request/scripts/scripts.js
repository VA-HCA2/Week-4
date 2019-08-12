"use strict";
window.onload= function(){
    let btn=document.getElementById("lookUp");
    btn.onclick=lookupId;
}

function lookupId()
{
    let idNum=document.getElementById("idNum");
    let xhr= new XMLHttpRequest;

    xhr.onreadystatechange=function(){
        if (this.readyState==4 && this.status==200)
        {
            let resultTable= document.getElementById("tableID");
            resultTable.innerHTML="";
            let json=JSON.parse(this.responseText);

                let row = resultTable.insertRow(resultTable.rows.length)
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = "User ID:";
                cell2.innerHTML = json.id;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "id:";
                cell2.innerHTML = json.userId;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Title:";
                cell2.innerHTML = json.title;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Completed:";
                cell2.innerHTML = json.completed;

        }
    }

    let url="http://jsonplaceholder.typicode.com/todos/"+idNum.value; 
    xhr.open("GET",url,true);
    xhr.send(null);
}