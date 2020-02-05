var signup = document.getElementById('signup');
var signin = document.getElementById('signIn');
signup.addEventListener('submit', setCookie);
signin.addEventListener('submit', signontoweb);

function setCookie(event){
    event.preventDefault();
    var isLoggedin = false;
    var credentials = event.target.elements[0].value + event.target.elements[1].value ;
    var d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = credentials + "=" + isLoggedin + ";" + expires + ";path=/";
}

function signontoweb(event){
    event.preventDefault(); 
    var email = event.target.elements[0].value + event.target.elements[1].value+"=true";
    var name = email + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';').map(x => { return x.trim()} );
    if(ca.indexOf(email) != -1){
        window.open('http://127.0.0.1:5500/html-stuff/firstAss/dashboard.html', '_self');
    }
    else{
        alert("signup first");
    }
}

window.onload = (event) => {
    myScript(event);
  };

function myScript(event){
    var newarr = [];
    var decodedCookie = decodeURIComponent(document.cookie);
    var arr = decodedCookie.split(';');
    counter = 0;
    for (i = 0;i <arr.length ;i++){
        newarr.push(arr[i].split("="));
    }
    for(i = 0;i < newarr.length;i++){
        if(newarr[i][1] == "true"){
            counter = 1
            break;
        }
    }
    if(counter != 0 ){
        window.open('http://127.0.0.1:5500/html-stuff/firstAss/dashboard.html','_self');
    }
}
