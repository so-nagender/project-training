var obj = [
    {name: 'rajat', address: 'gurgaon'},
    {name: 'vinay', address: 'dehradun'},
    {name: 'kavita', address: 'delhi'}
];

var newObj = new Object();

function user(add){
    for(var i=0; i<add.length; i++){
        newObj[add[i].name] = add[i].address;
    }
    return newObj;
}
console.log(user(obj));




