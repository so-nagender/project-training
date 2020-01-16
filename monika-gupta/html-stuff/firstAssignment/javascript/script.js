//open pop-up
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}
//close pop-up
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
var table = document.createElement('table');
// header function
function tableHeader() {
    var customers = new Array();
    customers.push(["Firstname", "Lastname","Gender","Contact-No.","Email","Address","Country","Skills"]);
    var columnCount = customers[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }
}
//calling header
tableHeader();

var form = document.getElementById("popup");
form.addEventListener('submit',generateTable);

function generateTable(event) {
    event.preventDefault();
    console.log('event',event);

    var customers = new Array();
    var gender;
    var text = "";

    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");

    var gender2 = document.getElementsByClassName("gender")
    for(let i = 0;i <= 2;i++) {
        if(gender2[i].checked) {
            gender = gender2[i];

        }    
    }
    
    var contactNo = document.getElementById("contactno");
    var email = document.getElementById("email");
    var address = document.getElementById("textarea");
    var country = document.getElementById("country");

    var skills = document.getElementsByClassName("skill");
    for(let i = 0;i <= 4;i++){
        if(skills[i].checked){
            text += skills[i].value + "<br>";

        }    
    }
        
    var row = table.insertRow();
     
    row.insertCell(0).innerHTML = firstName.value;
    row.insertCell(1).innerHTML = lastName.value;
    row.insertCell(2).innerHTML = gender.value;
    row.insertCell(3).innerHTML = contactNo.value;
    row.insertCell(4).innerHTML = email.value;
    row.insertCell(5).innerHTML = address.value;
    row.insertCell(6).innerHTML = country.value;
    row.insertCell(7).innerHTML = text;
     
    var dvTable = document.getElementById("generateTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
    document.getElementById('popup').style.display = 'none';
    document.getElementById('generateTable').style.fontSize = '15px';   
}