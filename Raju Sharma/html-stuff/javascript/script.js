    // Opening pop up function
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}
// pop up closing function
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
var table = document.createElement('table'); // globle table variable for table and header ....
// header function 
function header_table()
{
    var customers = new Array();
    customers.push(["Name", "email", "Gender","email","Address","Text Area"]);
   
    var columnCount = customers[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }
}
header_table(); // one time header calling...

// Creating table using js 
var form = document.getElementById('popup');
form.addEventListener('submit', generateTable);
function generateTable() {
    event.preventDefault();
    console.log('evetn>>>>>>>>>>>>>',event);

    var customers = new Array();
    var x = document.getElementsByClassName("tak");
    row = table.insertRow(-1);
    for(let j = 0;j<x.length;j++){
        if(j == 2 ||j==3 ||j ==4){
            if(x[j].checked){
                var cell = row.insertCell();
                console.log(x[j].value);
                cell.innerHTML = x[j].value;    
            }
        }
        else{
            var cell = row.insertCell();
            console.log(x[j].value);
            cell.innerHTML = x[j].value;
        }
    }
    var dvTable = document.getElementById("generateTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
    document.getElementById('popup').style.display = 'none';
}
