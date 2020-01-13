// filter({a: 4, b: 'e', fg: 23}, ['fg'])
// // output
// // {a: 4, b: "e"}


obj = {
    'a' : 4,
    'b': 'e',
    'fg' : 23,
}

var filter = function(obj,query){
    delete obj[query]
    console.log(obj)
};

filter(obj,'fg')