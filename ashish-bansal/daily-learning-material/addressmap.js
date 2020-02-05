

// Create a function which outputs an object containing name to address mapping like the following:
// {rajat: "gurgaon", vinay: "dehradun", kavita: "delhi"}

var arr = [
    {name: 'rajat', address: 'gurgaon'},
    {name: 'vinay', address: 'dehradun'},
    {name: 'kavita', address: 'delhi'}
]


function addressMap(arr){
    var x = new Object();
    for(let i = 0;i<arr.length;i++){
        x[arr[i].name] = arr[i].address;
    }
    console.log(x);
}

addressMap(arr);
