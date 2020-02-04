function openpopup() {
    document.getElementById('popup').style.display = 'block';
}
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}


function generateTable() {
    var customers = new Array();
    // customers.push(["Select Country","F_Name","L_Name","Select Gender","Select Skill","Enter Address","Phone Number","E-mail"]);
    // customers.push([1, "John Hammond", "United States"]);
    // customers.push([2, "Mudassar Khan", "India"]);
    // customers.push([3, "Suzanne Mathews", "France"]);
    // customers.push([4, "Robert Schidner", "Russia"]);
    // var table = document.createElement('table');
    // var columnCount = customers[0].length;


    var fname=document.getElementsById("fname").value;
    var lname=document.getElementsById("lname").value;

    var skill=new Array();
    if(document.getElementById("In").checked)
    {
        skill.push(document.getElementById("In").value);
    }
    if(document.getElementById("Am").checked)
    {
        skill.push(document.getElementById("Am").value);
    }
    if(document.getElementById("Ru").checked)
    {
        skill.push(document.getElementById("Ru").value);
    }
    if(document.getElementById("Ba").checked)
    {
        skill.push(document.getElementById("Ba").value);
    }

    if(document.getElementById("m").checked)
    {
        var gen=document.getElementById("m").value;
    }
    if(document.getElementById("f").checked)
    {
        var gen=document.getElementById("f").value;
    }
    else
    {
        var gen=document.getElementById("o").value;
    }




    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("td");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTable = document.getElementById("generateTable");
    dvTable.innerHTML= "";
    dvTable.appendChild(table);
    document.getElementById('popup').style.display = 'none';
}