var form = document.getElementById("signup");
form.addEventListener("submit",setCookie);
function setCookie(event) {
    var field_name = event.target.elements[0].value + event.target.elements[1].value + event.target.elements[2].value + event.target.elements[3].value;
    // set value attribute false like flag set.
    var field_value = false;
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
    if (user == "false") {
      var d = new Date();
      d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      var value=true;
      var name=username;
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
      window.open("http://127.0.0.1:5500/project-training/Raju%20Sharma/html-stuff/bootstrap/dashboard.html", "_self");
    } 
    else if(user == "true") {
      window.open("http://127.0.0.1:5500/project-training/Raju%20Sharma/html-stuff/bootstrap/dashboard.html", "_self");
    }
    else
    {
      alert("username and password not matched");
    }
  }
  function logout() {
    var cookie = decodeURIComponent(document.cookie);
    var arr = cookie.split(';');
    for(var i = 0; i < arr.length; i++) {
    user=false;
    if(user==false) {
      window.open("http://127.0.0.1:5500/project-training/Raju%20Sharma/html-stuff/bootstrap/dashboard.html");
    }
    else {
      window.open("http://127.0.0.1:5500/project-training/Raju%20Sharma/html-stuff/bootstrap/home.html?")
    }
  }
}

  // function checklogedin()
  // {
  //   var decodedCookie = decodeURIComponent(document.cookie);        
  //   var ca = decodedCookie.split(';');
  //   var arr=[];
  //   for(var i = 0; i < ca.length; i++) {
  //     var temp=ca[i].split('=');
  //     if(temp[1]=="true")
  //     {
  //       window.open("http://127.0.0.1:5500/project-training/Raju%20Sharma/html-stuff/bootstrap/dashboard.html", "_self")
  //     }
  //   }
  // }



  // function checkCookie() {
  //   var x=document.getElementsByClassName("name");
  //   var username=x[0].value+x[1].value;
  //   var user=getCookie(username);
  //   if (user == "false") {
  //     var d = new Date();
  //     d.setTime(d.getTime() + (102460601000));
  //     var expires = "expires=" + d.toGMTString();
  //     var cvalue=true;
  //     var cname=username;
  //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  //     window.open("http://127.0.0.1:5500/dashboard.html", "_self");
  //   } 
  //   else if(user== "true") {
  //     window.open("http://127.0.0.1:5500/dashboard.html", "_self");
  //   }
  //   else
  //   {
  //     alert("username and password not matched");
  //   }
  // }


