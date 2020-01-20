var signup = document.getElementById('signup');
signup.addEventListener('submit', addCookie);
var signin = document.getElementById('signin');
signin.addEventListener('submit', signtodashboard);

function addCookie(event){
    event.preventDefault();
    var isLoggedin = true;
    var credentials = event.target.elements[0].value + event.target.elements[1].value ;
    console.log(credentials)
    var d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = credentials + "=" + isLoggedin + ";" + expires + ";path=/";
}

function signtodashboard(event){
    event.preventDefault(); 
    var email = event.target.elements[0].value + event.target.elements[1].value+"=true";
    var name = email + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';').map(x => { return x.trim()} );
    console.log(ca,email, ca.indexOf(email));
    if(ca.indexOf(email) != -1){
        window.open('http://127.0.0.1:5500/monika-gupta/html-stuff/bootstrap_assignment/dashboard.html', '_self');
    }
    else{
        alert("Not signed-up");
    }
    
}