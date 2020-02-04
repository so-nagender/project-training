var x=document.getElementById("signup");
x.addEventListener("submit",addcookie);
  function addcookie(event)
  {
    console.log(event)
   var cname=event.target.elements[0].value + event.target.elements[1].value;
   var isloggedin='false';
   var exdays=10;
   setCookie(cname,isloggedin,exdays);
  }

function setCookie(cname,cvalue,exdays) {
  event.preventDefault();
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var y = document.getElementById("signin")
y.addEventListener("submit",checkCookie)

function checkCookie(event){
  event.preventDefault();
  var text = event.target.elements[0].value + event.target.elements[1].value;
  var decodedCookie = decodeURIComponent(document.cookie);
  var arr = []
  arr = decodedCookie.split(';');
  var arr1 = []
  var counter = 0;
  for (let i = 0;i<arr.length;i++){
    arr1.push(arr[i].split('='));
  }
  console.log(text)
  console.log(arr1)
  for(let i = 0;i<arr1.length;i++){
    if(arr1[i][0] == text){
      console.log('hi')
      var s ="true";
      document.cookie = text + "=" + s + ";" + ";path=/";
      counter = counter +1;
      break;
    }
  }
  if(counter == 0){
    alert("sign up first")
  }
  else{
    window.open('http://127.0.0.1:5500/dashboard.html','_self');
  }

}