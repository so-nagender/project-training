var form = document.getElementById('popup');
form.addEventListener('submit', setCookie);

function setCookie(event){
    event.preventDefault();
    var isLoggedin = true
    var email = event.target.elements[0].value + event.target.elements[1].value ;
    console.log(email)
    var d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = email + "=" + isLoggedin + ";" + expires + ";path=/";
    alert("completed");
}
