/*

A quick JS exercise: Please create a function filter 
which takes an object and an array containing names of the properties to be filtered out. 
It then returns a new object containing properties that were not filtered out.

Example:
filter({a: 4, b: 'e', fg: 23}, ['fg'])
// output:   {a: 4, b: "e"}
*/


var ob={a: 4, b: 'e', fg: 23};
var arr1= ['fg','a'];
var v=function filter(o,arr)
{
    for(var i=0;i<arr.length;i++)
    {
        delete o[arr[i]];
    }
    console.log(o);
}
v(ob,arr1)