function openpopup(){
    document.getElementById('popup').style.display='block';
}
function closepopup(){
    document.getElementById('popup').style.display='none';
}
function generateTable(){
    var customers =new Array();
    customers.push(["CUSTOMER ID","NAME","COUNTRY"]);
    customers.push(["55915 ","SHIWANI","INDIA"]);
    customers.push(["55916 ","SHUBHAM","UK"]);
    customers.push(["55917 ","SHIWA","US"]);
    customers.push(["55918 ","ROBERT","FRANCE"]);
    var table = document.createElement('table');
    var columnCount=customers[0].length;
    var row=table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("th");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }
    // adding the data members
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
        var dvTable=document.getElementById("generateTable");
         console.log("table>>>>>", table);
        dvTable.appendChild(table);
        document.getElementById('popup').style.display='none';
    }
}