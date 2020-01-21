var arr = [
    {name: 'rajat', address: 'gurgaon'},
    {name: 'vinay', address: 'dehradun'},
    {name: 'kavita', address: 'delhi'}
]
var obj = {};
function result(arr) {
    for (i in arr) {
        obj[arr[i].name]=arr[i].address;
    }
    return obj;
}
console.log(result(arr));
console.log(obj.rajat);