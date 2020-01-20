
function filter(a,b){
    for(i=0;i< b.length;i++)
    {
        delete a[b[i]]
    }
}
var obj1  = {a: 4, b: 'e', fg: 23}
var arr1 = ['fg']
filter(obj1,['fg'])
console.log(obj1)

