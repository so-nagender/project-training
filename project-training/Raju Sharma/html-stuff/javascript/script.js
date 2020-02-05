// Opening pop up function
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}
// popup closing function
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
var table = document.createElement('table'); // globle table variable for table creation and table header ....
// header function 
function header_table() {
    var headers = ["Name", "email", "Gender","email","Address","Text Area"];
    var row = table.insertRow(-1);
    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerHTML = headers[i];
        row.appendChild(headerCell);
    }
} 

header_table(); // one time header calling...

// Creating table using js 
  
form.addEventListener('submit', generateTable);
function generateTable(event) {
    event.preventDefault();
    console.log('-----evet------',event);
    var len = event.target.elements.length;
    row = table.insertRow(-1);
    for(let j = 0;j< len-2;j++) {
        if(j == 2 || j==3 || j == 4) {
            if(event.target.elements[j].checked) {
                var cell = row.insertCell();
                console.log(event.target.elements[j].value);
                cell.innerHTML = event.target.elements[j].value;    
            }
        }
        else {
            var cell = row.insertCell();
            console.log(event.target.elements[j].value);
            cell.innerHTML = event.target.elements[j].value;
        }
    }
    var dvTable = document.getElementById("generateTable");
    dvTable.innerHTML = "";
    
    dvTable.appendChild(table);
    document.getElementById('popup').style.display = 'none';
}