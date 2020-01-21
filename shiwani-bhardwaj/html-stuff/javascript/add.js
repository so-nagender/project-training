function addpeople(){
  
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    // var mobile = document.getElementById('cn').value;
 


    var table = document.getElementsByTagName('table')[0];
     var newRow=table.insertRow(1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    // var cell4 = newRow.insertCell(3);

  
    
   cell1.innerHTML =fname;
   cell2.innerHTML =lname;
   cell3.innerHTML =email;
//    cell4.innerHTML =cn;
}

    

