function openpopup() {
    document.getElementById('popup').style.display = 'block';
}
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}
// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
// })
function generateTable() {
    var users = new Array();
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    if(document.getElementById("m").checked)
    {
        var gen=document.getElementById("m").value;
    }
    else if(document.getElementById("f").checked){
        var gen=document.getElementById("f").value;
    }
    else{
        var gen=document.getElementById("o").value;
    }
    var skill=new Array();
    if(document.getElementById("java").checked)
    {
        skill.push(document.getElementById("java").value);
    }
    if(document.getElementById("js").checked)
    {
        skill.push(document.getElementById("js").value);
    }
    if(document.getElementById("node").checked)
    {
        skill.push(document.getElementById("node").value);
    }
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

 users.push([fname,lname,gen,skill,email,pass]);
    var table = document.createElement('table');
    var columnCount = users[0].length;
    var row = table.insertRow(-1);
 for (var i = 0; i < columnCount; i++) {
     var headerCell = document.createElement("td");
     headerCell.innerHTML = users[0][i];
     row.appendChild(headerCell);
 }

 //Add the data rows.
 for (var i = 1; i < users.length; i++) {
     row = table.insertRow(-1);
     for (var j = 0; j < columnCount; j++) {
         var cell = row.insertCell(-1);
         cell.innerHTML = users[i][j];
     }
 }

 var dvTable = document.getElementById("generateTable");
 dvTable.appendChild(table);
 document.getElementById('popup').style.display = 'none';
}




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