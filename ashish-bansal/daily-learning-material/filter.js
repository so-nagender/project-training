// filter({a: 4, b: 'e', fg: 23}, ['fg'])
// // output
// // {a: 4, b: "e"}


obj = {
    'a' : 4,
    'b': 'e',
    'fg' : 23,
}

var arr = ['fg','a','g']

var filter = function(obj,query){
    for(i = 0;i<arr.length;i++){
        delete obj[arr[i]]
    }
    console.log(obj)
};

filter(obj,arr)