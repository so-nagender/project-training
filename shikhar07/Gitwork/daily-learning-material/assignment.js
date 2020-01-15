//filter({a: 4, b: 'e', fg: 23}, ['fg'])
// output
// {a: 4, b: "e"}
object = {
   'a' : 4,
   'b' : 'e',
   'fg' : 23,
} 
function filterOut(){
var arr = ['fg', 'ag', 'gg'];
for(i=0;i<arr.length;i++){
   delete object[arr[i]]
}
 };
 var filtered = [object].filter(filterOut);  
console.log(filtered);
