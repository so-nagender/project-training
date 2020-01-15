function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
function openpopup() {
    document.getElementById('popup').style.display = 'block';
}

function generateTable() {
    var customers = new Array();
    customers.push(["Customer Id", "Name", "Country"]);
    customers.push([1, "John Hammond", "United States"]);
    customers.push([2, "Mudassar Khan", "India"]);
    customers.push([3, "Suzanne Mathews", "France"]);
    customers.push([4, "Robert Schidner", "Russia"]);
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
        row = table.insertRow(1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTable = document.getElementById("generateTable");
    dvTable.innerHTML = " ";
    dvTable.appendChild(table);
    document.getElementById('popup').style.display = 'none';
    
    dvTable.style.width = "400px";
    dvTable.style.padding = "0px 0px 0px 0px";
    dvTable.style.margin =" 0px 0px 0px 405px";
}