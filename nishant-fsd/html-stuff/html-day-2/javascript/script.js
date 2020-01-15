function openpopup() {
    document.getElementById('popup').style.display='block';
}
function closepopup() {
    document.getElementById('popup').style.display='none';
}
function generateTable() {

    var customers = new Array();
       var fname=document.getElementById("firstname").value;
       var lname=document.getElementById("lastname").value;
       if(document.getElementById("m").checked)
       {
           var gen=document.getElementById("m").value;
       }
       else 
       {
           var gen=document.getElementById("f").value;
       }
       var skill=new Array();
       if(document.getElementById("cpp").checked)
       {
           skill.push(document.getElementById("cpp").value);
       }
       if(document.getElementById("java").checked)
       {
           skill.push(document.getElementById("java").value);
       }
       if(document.getElementById("python").checked)
       {
           skill.push(document.getElementById("python").value);
       }

    customers.push([fname,lname,gen,skill]);
    var table = document.createElement('table');
    var columnCount = customers[0].length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("th");
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
    dvTable.appendChild(table);
    document.getElementById('popup').style.display = 'none';
}
