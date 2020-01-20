var signup = document.getElementById('signup');
var signin = document.getElementById('signIn');
signup.addEventListener('submit', setCookie);
signin.addEventListener('submit', signontoweb);
// function createTable(event){
//     event.preventDefault();
//     console.log('evetn>>>>>>>>>>>>>',event);
//     // var n = event.target.elements.length;
//     var email = event.target.elements[0].value;
//     var password = event.target.elements[1].value;
//     setCookie(email,password);
//     console.log(email,password)
// }
function setCookie(event){
    event.preventDefault();
    var isLoggedin = true;
    var credentials = event.target.elements[0].value + event.target.elements[1].value ;
    console.log(credentials)
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
    console.log(ca,email, ca.indexOf(email));
    if(ca.indexOf(email) != -1){
        window.open('http://127.0.0.1:5500/html-stuff/firstAss/dashboard.html', '_self');
    }
    else{
        alert("signup first");
    }
    // for(var i = 0; i <ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //     c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //     var check =  c.substring(name.length, c.length);
    //     }
    // }
    // console.log(check);
    // if(check == "true"){
    //     alert("loggedin");
    // }
    // else{
    //     alert("signup first");
    // }
}
