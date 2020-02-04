console.log("done")
function openpopup(){
    document.getElementById('popup').style.display='block';
}
function closepopup(){
    document.getElementById('popup').style.display='none';
}

var form=document.getElementById("userdetails")
console.log("-----event------", form);
var table = document.createElement('table');
var customers = new Array();
customers.push(["First name", "Last name","gender", "discount", "address"]);
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
 document.getElementById('popup').style.display = 'none';
 row = table.insertRow(-1);
 let checkbox = null;
 for (var i = 0; i < form.elements.length; i++) 
            {

                let element = form.elements[i];
                console.log('element.type?????',element.type);
        
                if ((element.type === 'radio' && element.checked) ||  element.type === 'text')
                {
                    {
                        
                    console.log(element.type, element.checked);
                    let cell = row.insertCell(-1);
                    cell.innerHTML = element.value;
                 
                    }
                }
                if( element.type === 'checkbox' && element.checked)  
                {  
                   if(!checkbox){
                    checkbox = row.insertCell(-1);
                    console.log(checkbox);
                   } 
                    console.log (element.checked);
                    checkbox.innerHTML = checkbox.innerHTML + ' ' + element.value;
                    console.log('check.innerHTML>>>>>>>>>', checkbox.innerHTML);
                    'coupons bankoffer discount'
                }
                 
                   
                  
                }       
            }
            checkbox = null;
        

        
            // function displayRadioValue() { 
            //     var ele = document.getElementsByClassName('gender'); 
                  
            //     for(i = 0; i < ele.length; i++) { 
            //         if(ele[i].checked) 
            //         console.log('element');
            //              document.getElementById("result").innerHTML = "gender: "+ele[i].value; 
            //     } 
            // } 
        
            var dvTable = document.getElementById("generateTable");
            dvTable.innerHTML = " ";
            dvTable.appendChild(table);
        
    
    // function printChecked(){
	// 	var items=document.getElementsByName('discount');
	// 	var selectedItems="";
	// 	for(var i=0; i<items.length; i++){
	// 		if(items[i].type=='checkbox' && items[i].checked==true)
	// 			selectedItems+=items[i].value+"\n";
	// 	}
	// 	alert(selectedItems);
	// }		
  
    
        var First = '';
     form.addEventListener('submit', handler);
 

    // customers.push(["55915 ","SHIWANI","INDIA"]);
    // customers.push(["55916 ","SHUBHAM","UK"]);
    // customers.push(["55917 ","SHIWA","US"]);
    // customers.push(["55918 ","ROBERT","FRANCE"]);
   
    // adding the data members
    // for (var i = 1; i < customers.length; i++) {
    //     row = table.insertRow(-1);
    //     for (var j = 0; j < columnCount; j++) {
    //         var cell = row.insertCell(-1);
    //         cell.innerHTML = customers[i][j];
    //     }
    //     var dvTable=document.getElementById("generateTable");
    //      console.log("table>>>>>", table);
    //     dvTable.appendChild(table);
    //     document.getElementById('popup').style.display='none';
    //}
    // var table = document.createElement('table');
   
    // var x = document.getElementsByClassName("cl");
    // row = table.insertRow(-1);
    // for(let j = 0;j<x.length;j++){
        // var cell = row.insertCell(-1);
        
        // console.log(x[j].value);
        // cell.innerHTML = x[j].value;
    // }
  



    