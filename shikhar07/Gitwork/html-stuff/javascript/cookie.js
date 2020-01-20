var x=document.getElementById("signup");
  x.addEventListener("submit",addcookie);
  function addcookie(event)
  {
   var cname=event.target.elements[0].value+event.target.elements[1].value+event.target.elements[2].value;
   var cvalue=event.target.elements[0].value+event.target.elements[1].value;
   alert(cname+cvalue)
   var exdays=10;
   setCookie(cname,cvalue,exdays);
  }

function setCookie(cname,cvalue,exdays) {
  event.preventDefault();
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var x=document.getElementsByClassName("name");
  var username=x[0].value+x[1].value;
  var user=getCookie(username);
  if (user != "") {
    window.open("http://127.0.0.1:5500/dashboard.html", "_self");
  } else {
     alert("username password not matched");
  }
}