function openpopup() {
    document.getElementById('popup').style.display='block';
}
function closepopup() {
    document.getElementById('popup').style.display='none';
}
var x=document.getElementById('frm');
x.addEventListener('submit', generateTable);
function generateTable(event) {
    event.preventDefault();
    var table = document.createElement('table');
    var columnCount = event.target.elements.length;
     var row = table.insertRow(-1);
     var arr=new Array();
    //Add the data rows.
        for (var j = 0; j < columnCount; j++) {
            if(event.target.elements[j].type=="radio" &&event.target.elements[j].checked|| event.target.elements[j].type=="text")
            {
                var cell = row.insertCell(-1);
                cell.innerHTML =event.target.elements[j].value;    
            }
            else if(event.target.elements[j].type=="checkbox" &&event.target.elements[j].checked)
            {
                arr.push(event.target.elements[j].value);
            }
        }
        var cell = row.insertCell(-1);
        cell.innerHTML =arr;
    

    var dvTable = document.getElementById("generateTable");
    dvTable.appendChild(row);
    document.getElementById('popup').style.display = 'none';
}
