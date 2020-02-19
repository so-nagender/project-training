

/*s
var form = document.getElementById('userDetails');
console.log("form>>>>>>>", form);
var table = document.createElement('table');
var customers = new Array();
customers.push(["FirstName", "LastName", "Email", "Password","Gender","Address","Country"]);
var columnCount = customers[0].length;
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("th");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }

function handler(event) {
    console.log('handler called', event);
    event.preventDefault();  
    document.getElementById('popup').style.display = 'none';
        
        
    
        //Add the data rows.
        // for (var i = 1; i < customers; i++) {

            row = table.insertRow(-1);
            for (var i = 0; i < form.elements.length; i++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = form.elements[i].value;
                row.appendChild(cell);
            
            }
         }

    
        var dvTable = document.getElementById("generateTable");
        dvTable.innerHTML = " ";
        dvTable.appendChild(table);
    
}






var first = form.addEventListener('submit', handler);



// function generateTable() {
    // var customers = new Array();
    // customers.push(["Customer Id", "Name", "Country"]);
    // customers.push([1, "John Hammond", "United States"]);
    // customers.push([2, "Mudassar Khan", "India"]);
    // customers.push([3, "Suzanne Mathews", "France"]);
    // customers.push([4, "Robert Schidner", "Russia"]);
    // var table = document.createElement('table');
    // var columnCount = customers[0].length;
    // var row = table.insertRow(-1);
    // for (var i = 0; i < columnCount; i++) {
    //     var headerCell = document.createElement("th");
    //     headerCell.innerHTML = customers[0][i];
    //     row.appendChild(headerCell);
    // }

    // //Add the data rows.
    // for (var i = 1; i < customers.length; i++) {
    //     row = table.insertRow(1);
    //     for (var j = 0; j < columnCount; j++) {
    //         var cell = row.insertCell(-1);
    //         cell.innerHTML = customers[i][j];
    //     }
    // }

    // var dvTable = document.getElementById("generateTable");
    // dvTable.innerHTML = " ";
    // dvTable.appendChild(table);
//     document.getElementById('popup').style.display = 'none';
    
//     dvTable.style.width = "400px";
//     dvTable.style.padding = "0px 0px 0px 0px";
//     dvTable.style.margin =" 0px 0px 0px 405px";
// }

// function generateTable(){

//     var person = new Array();
//     person.push(["First name"])


// }

*/

/*

function openpopup() {
    document.getElementById('popup').style.display = 'block';
}
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}

//var customers = new Array();
//customers.push(["FirstName", "LastName", "Email", "Password","Gender","Address","Country"]);
var form = document.getElementById('userDetails');
console.log("form>>>>>>>", form);
var table = document.createElement('table');
var customers = new Array();
customers.push(["FirstName", "LastName", "Email", "Password","Gender","Address","Country"]);
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
        document.getElementById('popup').style.display ='none';
            
            
        //Add the data rows.
        // for (var i = 1; i < customers; i++) {
         row = table.insertRow(-1);
         for (var i = 1; i < form.elements.length; i++) {
            var cell = row.insertCell(-1);
            var val = '';                
            if ((form.elements[i].type == 'radio' && form.elements[i].checked) || (form.elements[i].type == 'checkbox' && form.elements[i].checked) || form.elements[i].type == 'text'|| form.elements[i].type == 'number'||form.elements[i].type == 'password'||form.elements[i].type == 'select-one'||form.elements[i].type == 'email'||form.elements[i].name == 'comment' || (form.elements[i].type == 'textarea')){
                    var val = form.elements[i].value;
                    cell.innerHTML = val;
                    row.appendChild(cell);   
            }
                             
        }
    var dvTable = document.getElementById("generateTable");
    dvTable.appendChild(table);
    
}
*/

function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}

var form = document.getElementById('userDetails');
var table = document.createElement('table');
var customers = ["FirstName", "LastName", "Email", "Password","Gender","Address","Country"];

var row = table.insertRow(-1);
for (var i = 0; i < customers.length; i++) {
    var headerCell = document.createElement("th");
    headerCell.innerHTML = customers[i]; 
    row.appendChild(headerCell);
}
        
form.addEventListener('submit', handler);
function handler(event) {
    // popup.close();
    event.preventDefault();
    // console.log('evetn>>>>>>>>>>>>>',event);
    var m = event.target.elements.length;
    //var table = document.createElement('table');
        row = table.insertRow(-1);
        var text = "";
        for (var i = 0; i < form.elements.length; i++) {
            //var cell = row.insertCell(-1);
            //var val = '';                
            if ((form.elements[i].type == 'radio' && form.elements[i].checked) || (form.elements[i].type == 'checkbox' && form.elements[i].checked) || form.elements[i].type == 'text'|| form.elements[i].type == 'number'||form.elements[i].type == 'password'||form.elements[i].type == 'select-one'||form.elements[i].type == 'email'||form.elements[i].name == 'comment' || (form.elements[i].type == 'textarea')){
                    var cell = row.insertCell(-1);
                    var val = ''; 
                    var val = form.elements[i].value;
                    cell.innerHTML = val;
                row.appendChild(cell);   
            }
                             
        }
    var dvTable = document.getElementById("generateTable");
    dvTable.appendChild(table);
    
}

