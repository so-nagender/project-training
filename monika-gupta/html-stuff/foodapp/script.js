var i = 0;
var j = 0;
var k = 0;
var l = 0;

function addItem1(){
  i += 1;
  burger.value = i;
  total.value = i+j+k+l;
}
function removeItem1(){
  if(i >0){
    i -= 1;
  }
  else{
    return;
  }
  burger.value = i;
  total.value = i+j+k+l;
}
function addItem2(){
  j += 1;
  pizza.value = j;
  total.value = i+j+k+l;
}
function removeItem2(){
  if(j >0){
    j -= 1;
  }
  else{
    return;
  }
  pizza.value = j;
  total.value = i+j+k+l;
}
function addItem3(){
  k += 1;
  noodles.value = k;
  total.value = i+j+k+l;
}
function removeItem3(){
  if(k >0){
    k -= 1;
  }
  else{
    return;
  }
  noodles.value = k;
  total.value = i+j+k+l;
}
function addItem4(){
  l += 1;
  pasta.value = l;
  total.value = i+j+k+l;
}
function removeItem4(){
  if(l >0){
    l -= 1;
  }
  else{
    return;
  }
  pasta.value = l;
  total.value = i+j+k+l;
}



