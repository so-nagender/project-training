
// Create a function which outputs an object containing name to address mapping like the following:
// {rajat: "gurgaon", vinay: "dehradun", kavita: "delhi"}

var arr = [
    {name: 'rajat', address: 'gurgaon'},
    {name: 'vinay', address: 'dehradun'},
    {name: 'kavita', address: 'delhi'}
]


var x = {} 
arr.forEach(addressMap);
function addressMap(item){
    x[item.name] = item.address
}

console.log(x)