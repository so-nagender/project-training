var d = document.getElementById("signin");
d.addEventListener("submit",getCookie);
function getCookie(event) {
    event.preventDefault();
    var arr = [];
    var c = 0;
    var text = event.target.elements[0].value + event.target.elements[1].value;
    var str = text.trim();
    var decodedCookie = decodeURIComponent(document.cookie);
    var arr = decodedCookie.split(';');
    var arr1 = [];
    for(let i = 0; i < arr.length; i++){
      arr1.push(arr[i].split('='))
    }
    console.log(arr1);
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i][0].trim() == str){
            cname = str;
            cvalue = "true";
            c++;
            document.cookie = cname + "=" + cvalue + ";" + ";path=/"
         }
        }
    if(c == 1){
        window.open('http://127.0.0.1:5500/dashboard.html','_self');
    }
    else{
        alert('Signup first');
    }
    // alert('Signup first');
}