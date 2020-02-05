//form.addEventListener('submit', load);

function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //console.log('outer function')
      if (this.readyState == 4 ) {
         // console.log('inner jgbjkyhgikvh function')
         console.log('working')
        document.getElementById("resp").innerHTML = 'kuch v ho rha hai';
        var obj = new Object();
        obj.firstName = document.getElementById('f').value;
        obj.lastName = document.getElementById('l').value ;
        console.log(obj)
      }
    };
    xhttp.open("GET", "#", true);
    xhttp.send();
  }
