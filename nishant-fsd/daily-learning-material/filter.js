
function filter(obj,arr)
{
  var del=arr[0]
  delete obj[del]
}

let obj={a:4,b:'e',fg:23}
var arr=['o'];
filter(obj,arr)
console.log(obj);
