// var form = document.getElementById('formData');
// form.addEventListener('submit',customerData);

function customerData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        var data = {
            firstname : document.getElementById('fname').value,
            lastname : document.getElementById('lname').value
        };
         if (this.readyState == 4) {
                console.log(data);
         }
    };
    xhttp.open("GET", "http://www.google.com ", true);
    xhttp.send();
}