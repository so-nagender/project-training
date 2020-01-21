var signup = document.getElementById('signup');
signup.addEventListener('submit', setCookie);
var signin = document.getElementById('signin');
signin.addEventListener('submit', getCookie);

function setCookie(val) {
    var form = val.target.elements[0].value + val.target.elements[1].value ;
    var form1 = val.target.elements[0].value + val.target.elements[1].value;
    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = form + "=" + form1 + ";" + expires + ";path=/";
}

function getCookie(val){
    val.preventDefault(); 
    var email = val.target.elements[0].value + val.target.elements[1].value;

    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    console.log(ca,email, ca.indexOf(email));
    if(ca.indexOf(email) != ""){
        window.open('http://127.0.0.1:5500/html-stuff/bootstrap_assignment/dashboard.html', '_self');
    }
    else{
        alert("Incorrect email or password");
    }
}