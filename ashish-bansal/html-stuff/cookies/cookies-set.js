var form = document.getElementById('popup');
form.addEventListener('submit', setCookie);
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
    var isLoggedin = true
    var email = event.target.elements[0].value + event.target.elements[1].value ;
    console.log(email)
    var d = new Date();
    d.setTime(d.getTime() + (3*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = email + "=" + isLoggedin + ";" + expires + ";path=/";
    alert("completed");
}
