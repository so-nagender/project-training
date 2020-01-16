function popup(){
    document.getElementById('popup').style.display = 'block';    
}

function closepopup(){
    document.getElementById('popup').style.display = 'none';    
}
var form = document.getElementById('popup');
form.addEventListener('submit', createTable);
function createTable(event){
    event.preventDefault();
    console.log('evetn>>>>>>>>>>>>>',event);
    var n = event.target.elements.length;

    var table = document.createElement('table');

    row = table.insertRow(-1);
    var text = "";
    
    for(let i = 0;i<n-2;i++){
        if(i == 2 ||i==3 ||i ==4){
            if(event.target.elements[i].checked){
                var cell = row.insertCell();
                console.log(event.target.elements[i].value);
                cell.innerHTML = event.target.elements[i].value;    
            }
        }
        else if(i == 12 ||i==13 ||i ==10 || i ==11){
            if(event.target.elements[i].checked){
                 text = text + ", " + event.target.elements[i].value;
                 console.log(event.target.elements[i].value)
            } 
        }
        else{
            var cell = row.insertCell();
            console.log(event.target.elements[i].value);
            cell.innerHTML = event.target.elements[i].value;
        }
    }
    // console.log(text);
    var cell = row.insertCell();
    cell.innerHTML = text; 
    var dvTable = document.getElementById("generateTable");
    dvTable.appendChild(row);
    document.getElementById('generateTable').style.fontSize = '10px';
}



