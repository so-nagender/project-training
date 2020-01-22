var obj = [
    {name: 'rajat', address: 'gurgaon'},
    {name: 'vinay', address: 'dehradun'},
    {name: 'kavita', address: 'delhi'}
];



function user(add){
    var newObj = new Object();
    for(var i=0; i<add.length; i++){
        newObj[add[i].name] = add[i].address;
    }
    return newObj;
}
console.log(user(obj));
console.log((user(obj)).rajat);




