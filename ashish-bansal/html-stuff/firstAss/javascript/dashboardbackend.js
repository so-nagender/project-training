function logout(){
    var newarr = [];
    var decodedCookie = decodeURIComponent(document.cookie);
    var arr = decodedCookie.split(';');
    for (i = 0;i <arr.length ;i++){
        newarr.push(arr[i].split("="));
    }
    for(i = 0;i < newarr.length;i++){
        if(newarr[i][1] == "true"){
            newarr[i][1] == "false";
            var credentials = newarr[i][0];
            var isLoggedin = "false";
            document.cookie = credentials + "=" + isLoggedin + ";"+ ";path=/";
            window.open('http://127.0.0.1:5500/html-stuff/firstAss/index.html','_self');
        }
    }
}

window.onload = (event) => {
    myScript(event);
  };
function myScript(event){
    debugger;
    var newarr = [];
    var decodedCookie = decodeURIComponent(document.cookie);
    var arr = decodedCookie.split(';');
    var counter = 0;
    for (i = 0;i <arr.length ;i++){
        newarr.push(arr[i].split("="));
    }
    for(i = 0;i < newarr.length;i++){
        if(newarr[i][1] == "true"){
            counter = 1
            break;
        }
    }
    if(counter == 0){
        window.open('http://127.0.0.1:5500/html-stuff/firstAss/index.html','_self');   
    }
}