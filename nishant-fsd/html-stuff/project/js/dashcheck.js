function checklogedout()
{
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  var arr=[];
  for(var i = 0; i < ca.length; i++) {
    var temp=ca[i].split('=');
    if(temp[1]=="false")
    {
      window.open("http://127.0.0.1:5500/index.html", "_self")
    }
  }
}
  function logout()
  {
    var temp;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var arr=[];
    for(var i = 0; i < ca.length; i++) {
       temp=ca[i].split('=');
    }
   var cname=temp[0];
   var cvalue=false;
   var exdays=10;
   setCookie(cname,cvalue,exdays);
  }

function setCookie(cname,cvalue,exdays) {
  event.preventDefault();
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  window.open("http://127.0.0.1:5500/index.html", "_self")
}
