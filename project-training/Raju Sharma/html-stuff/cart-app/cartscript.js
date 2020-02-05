var count = 0;
function decreaseNumber() {
   
    if(count > 0){
        count --;
        document.getElementById('burger').innerHTML = count;
    }
    else {
        alert('kuch nhi hoga ')
    }
}
function increaseNumber() {
        if(count == 0) {
            ++count;
            document.getElementById('burger').innerHTML = count;
        }
        else {
            count++;
        document.getElementById('burger').innerHTML = count;
        }
}
function decreaseNumber1() {
   
    if(count > 0){
        count --;
        document.getElementById('pizza').innerHTML = count;
    }
    else {
        alert('kuch nhi hoga ')
    }
}
function increaseNumber1() {
        if(count == 0) {
            ++count;
            document.getElementById('pizza').innerHTML = count;
        }
        else {
            count++;
        document.getElementById('pizza').innerHTML = count;
        }
}
