var form = document.getElementById("signup");
form.addEventListener("submit",setCookie);
function setCookie(event) {
    var field_name = event.target.elements[0].value + event.target.elements[1].value + event.target.elements[2].value + event.target.elements[3].value;
    // set value attribute crossponding to the name that is fname, lname and password.
    var field_value = event.target.elements[0].value + event.target.elements[1].value + event.target.elements[3].value;
    //exoiration variable for 10days
    var exp = 10;
    var d = new Date();
    d.setTime(d.getTime() + (exp * 24 * 60 * 60 * 1000));
    var expiration_time = "expires=" + d.toGMTString();
    document.cookie = field_name + "=" + field_value + ";" + expiration_time + ";path=/"; // set cookies...
}
// Getting cookies values from the browser...
function getCookies(field_name) {
    var name = field_name + "=";
    var cookie = decodeURIComponent(document.cookie);
    var arr = cookie.split(';');
    for(var i = 0; i < arr.length; i++) {
      var temp = arr[i];
      while (temp.charAt(0) == ' ') {
        temp = temp.substring(1);
      }
      if (temp.indexOf(name) == 0) {
        return temp.substring(name.length, temp.length);
      }
    }
    return "";
  }
  // Check function for the log in...
  function login() {
    var element=document.getElementsByClassName("userdetails");
    var username=element[0].value+element[1].value;
    var user=getCookies(username);
    if (user != "") {
       window.open("http://127.0.0.1:5500/project-training/Raju%20Sharma/html-stuff/bootstrap/dashboard.html", "_blank");
    } 
    else {
       alert("username password not matched");
    }
  }