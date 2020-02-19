var form = document.getElementById("signup");
// var d = document.getElementById("signin");
form.addEventListener("submit",addcookie);
// d.addEventListener("submit",getCookie);
function addcookie(event){ 
   event.preventDefault();
   var isLoggedIn = "false";
   var cname = event.target.elements[2].value+event.target.elements[3].value;
  //  alert(cname + cvalue)
   var expiredays = 10;
   setCookie(cname,isLoggedIn,expiredays);
  }
function setCookie(cname,cvalue,expiredays) {
  event.preventDefault();
  var d = new Date();
  d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// function getCookie() {
//   event.preventDefault();
//   var arr = [];
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var arr = decodedCookie.split(';');
//   var arr1 = [];
//   for(let i = 0; i < arr.length; i++){
//     arr1.push(arr[i].split('='))
//   }
//   console.log(arr1);
//   // for(var i = 0; i < ca.length; i++) {
//   //   var c = ca[i];
//   //   while (c.charAt(0) == ' ') {
//   //     c = c.substring(1);
//   //   }
//   //   if (c.indexOf(name) == 0) {
//   //     return c.substring(name.length, c.length);
//   //   }
//   // }
//   // return "";
// }

function checkCookie() {
  var x = document.getElementsByClassName("name");
  var username = x[0].value + x[1].value;
  var user = getCookie(username);
  if (user != "") {
    window.open("http://127.0.0.1:5500/dashboard.html", "_self");
  } else {
     alert("username password not matched");
  }
}