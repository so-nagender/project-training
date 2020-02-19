function openpopup() {
  document.getElementById('popup').style.display = 'block';
}
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
var form = document.getElementById('form1');
form.addEventListener('submit', generateTable);
function generateTable(event) {
    // popup.close();
    event.preventDefault();
    // console.log('evetn>>>>>>>>>>>>>',event);
    var m = event.target.elements.length;
    var table = document.createElement('table');
        row = table.insertRow(-1);
        var text = "";
        for(let i = 0;i<m-2;i++){
            if(i == 2 || i == 3 || i == 4){
                if(event.target.elements[i].checked) {
                    var cell = row.insertCell();
                    // console.log(event.target.elements[i].value);
                    cell.innerHTML = event.target.elements[i].value;    
                }
            }
            else if(i == 5 || i == 6 || i == 7){
                if(event.target.elements[i].checked){
                     text = text + ", " + event.target.elements[i].value;
                    //  console.log(event.target.elements[i].value)
                } 
            }
            else{
                var cell = row.insertCell();
                // console.log(event.target.elements[i].value);
                cell.innerHTML = event.target.elements[i].value;
            }
        }
        var cell = row.insertCell();
        cell.innerHTML = text; 
        var dvTable = document.getElementById("generateTable");
        dvTable.appendChild(row);
        document.getElementById('generateTable').style.fontSize = '10px';
        document.getElementById('popup').style.display = 'none';
    }
    // var users = new Array();
    // var fname = document.getElementById("firstname").value;
    // var lname = document.getElementById("lastname").value;
    // if(document.getElementById("m").checked)
    // {
    //     var gen=document.getElementById("m").value;
    // }
    // else if(document.getElementById("f").checked){
    //     var gen=document.getElementById("f").value;
    // }
    // else{
    //     var gen=document.getElementById("o").value;
    // }
    // var skill=new Array();
    // if(document.getElementById("java").checked)
    // {
    //     skill.push(document.getElementById("java").value);
    // }
    // if(document.getElementById("js").checked)
    // {
    //     skill.push(document.getElementById("js").value);
    // }
    // if(document.getElementById("node").checked)
    // {
    //     skill.push(document.getElementById("node").value);
    // }
    // var email = document.getElementById("email").value;
    // var pass = document.getElementById("pass").value;
    
//     var columnCount = users[0].length;
//     var row = table.insertRow(-1);
//  for (var i = 0; i < columnCount; i++) {
//      var headerCell = document.createElement("td");
//      headerCell.innerHTML = users[0][i];
//      row.appendChild(headerCell);
//  }

//  //Add the data rows.
//  for (var i = 1; i < users.length; i++) {
//      row = table.insertRow(-1);
//      for (var j = 0; j < columnCount; j++) {
//          var cell = row.insertCell(-1);
//          cell.innerHTML = users[i][j];
//      }
//  }

//  var dvTable = document.getElementById("generateTable");
//  dvTable.appendChild(table);
//  document.getElementById('popup').style.display = 'none';
// }




//     //  users.push(["First name", "Last name", "Gender", "Skills", "Email", "Password", "Permanent Address"]);
//     // users.push(["Virat", "Kohli", "Male", "Java", "abc@xyz.com", "Virat123", "India"]);
//     // users.push(["Rohit", "Sharma", "Male", "JavaScript", "abc@qwez.com", "Rohit123", "Mumbai"]);
//     // users.push(["Kedar", "Jadhav", "Male", "Java", "abcde@xyz.com", "Kedar123", "Delhi"]);
//     // users.push(["Jasprit", "Bumrah", "Male", "Nodejs", "1234@gamil.com", "boom123", "Punjab"]);
//     var table = document.createElement('table');
//     var columnCount = users[0].length;
//     var row = table.insertRow(-1);
//     for (var i = 0; i < columnCount; i++) {
//         var headerCell = document.createElement("th");
//         headerCell.innerHTML = users[0][i];
//         row.appendChild(headerCell);
//     }
//     for (var i = 1; i < users.length; i++) {
//         row = table.insertRow(-1);
//         for (var j = 0; j < columnCount; j++) {
//             var cell = row.insertCell(-1);
//             cell.innerHTML = users[i][j];
//         }
//     }
//     var dvTable = document.getElementById("generateTable");
//     dvTable.innerHTML = "";
//     dvTable.appendChild(table);
//     document.getElementById('popup').style.display = 'none';
// }