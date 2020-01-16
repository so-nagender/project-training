// console.log('loaded');
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}

var form = document.getElementById('userDetails');
console.log("form>>>>>>>", form);
var table = document.createElement('table');
var customers = new Array();
customers.push(["firstname", "lastname", "email", "password","Address","country","skills"]);
var columnCount = customers[0].length;
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("th");
            headerCell.innerHTML = customers[0][i]; 
            row.appendChild(headerCell);
        }

function handler(event) 
{
    console.log('handler called', event);
    event.preventDefault();  
    document.getElementById('popup').style.display = 'none';
    
    
        //Add the data rows.
        // for (var i = 1; i < customers; i++) {
            row = table.insertRow(-1);
            for (var i = 1; i < form.elements.length; i++) 
            {
                var cell = row.insertCell(-1);
                var val = '';                
                if ((form.elements[i].type == 'checkbox' && form.elements[i].checked) || form.elements[i].type == 'text'|| form.elements[i].type == 'number'||form.elements[i].type == 'password'||form.elements[i].type == 'select-one'||form.elements[i].type == 'email'||form.elements[i].type == 'textarea'){
                        var val = form.elements[i].value;
                        cell.innerHTML = val;
                        row.appendChild(cell);
            }
                                    
            }
        // }
        var dvTable = document.getElementById("generateTable");
        // dvTable.innerHTML = " ";
        dvTable.appendChild(table);
}
        
    







form.addEventListener('submit', handler);



