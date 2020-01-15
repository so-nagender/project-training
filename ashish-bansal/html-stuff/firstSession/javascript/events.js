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
    console.log("input events",event.target.elements);

    // var table = document.createElement('table');
    // var text = "";

    // var x = document.getElementsByClassName("formstyle");
    
    // row = table.insertRow(-1);
    // for(let j = 0;j<x.length;j++){
    //     if(j == 2 ||j==3 ||j ==4){
    //         if(x[j].checked){
    //             var cell = row.insertCell();
    //             console.log(x[j].value);
    //             cell.innerHTML = x[j].value;    
    //         }
    //     }
    //     else if(j == 12 ||j==13 ||j ==10 || j ==11){
    //         if(x[j].checked){
    //              text = text + ", " + x[j].value;
    //              console.log(x[j].value)
    //         } 
    //     }
    //     else{
    //         var cell = row.insertCell();
    //         console.log(x[j].value);
    //         cell.innerHTML = x[j].value;
    //     }
    // }
    // console.log(text);
    // var cell = row.insertCell();
    // cell.innerHTML = text; 
    // var dvTable = document.getElementById("generateTable");
    // dvTable.appendChild(row);
}



