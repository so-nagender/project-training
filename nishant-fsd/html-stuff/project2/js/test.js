var obj={}
function myFunction(arr) {
       
    for (let i of arr) {

       obj[i.name]=i.address
    }
    return obj;
  }

  var arr = [{
      name: 'rajat',
      address: 'gurgaon'
    },
    {
      name: 'vinay',
      address: 'dehradun'
    },
    {
      name: 'kavita',
      address: 'delhi'
    },
    {
        name: 'kavita',
        address: 'delhi'
      }
    
  ];
myFunction(arr)
console.log(obj.rajat)