var form =document.getElementById("sign_up_details")

console.log("form>>>>>>>", form);

form.addEventListener('submit', setCookie);

function setCookie(event)
{
    event.preventDefault(); 
    key = form.elements.name.value+form.elements.psw.value;
    value=false;
    var expiresAttribute = new Date(Date.now()+60*1000 ).toString();
    document.cookie=key+"="+value+";"+expiresAttribute;
    var saved_cookie = document.cookie
    
}


// function readCookies()
// {
     
//     var str = document.cookie.split(';')
//     console.log(str[1])
    
// }
// readCookies()

(function () {
     
    var str = document.cookie.split(';')
    console.log(str[0])
    
})()

// signupform ends here


// signin form starts here

var form1 =document.getElementById("sign_in_details")
form1.addEventListener('submit', gcookies);
function gcookies(event1)
{
    event1.preventDefault(); 
    key= form1.elements.name.value+form1.elements.psw.value;
    var str = document.cookie.split(';')
    key2 = form1.elements.name.value+form1.elements.psw.value;
    for(let i=0; i<str.length; i++)
    {
        while(str[i].charAt(0)==' ')
        {
            str[i] = str[i].substring(1);
        }
        var temp = str[i].split("=")
        if(temp[0]==key2){
            document.cookie=temp[0]+"="+true+";"
            window.open("http://127.0.0.1:5500/dashboard.htm")
            
            
        }
    }
    
    
   
    
}

