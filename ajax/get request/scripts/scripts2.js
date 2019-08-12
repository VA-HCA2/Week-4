"use strict";
window.onload= function(){
    let btn=document.getElementById("lookUp");
    btn.onclick=lookupId;
}

function lookupId()
{
    let idNum=document.getElementById("idNum");
    //xhr This holds the Ajax request
    let xhr= new XMLHttpRequest;

    xhr.onreadystatechange=function(){

        if (this.readyState==4 && this.status==200)
        { 
            let resultTable= document.getElementById("tableID");
            resultTable.innerHTML="";
            let i=idNum.value;
            let json=JSON.parse(this.responseText);

              for (let i=0;i<json.length;i++)
                {
                let row = resultTable.insertRow(resultTable.rows.length)
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = "User ID:";
                cell2.innerHTML = json[i].id;
            
                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Name:";
                cell2.innerHTML = json[i].name;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Email:";
                cell2.innerHTML = json[i].email;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Address:";
                cell2.innerHTML = json[i].address.street;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "City:";
                cell2.innerHTML = json[i].address.city;

                row = resultTable.insertRow(resultTable.rows.length)
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "Zip Code:";
                cell2.innerHTML = json[i].address.zipcode;
            }
        }
    }

    let url="http://jsonplaceholder.typicode.com/users"; 
    xhr.open("GET",url,true);
    xhr.send(null);
}