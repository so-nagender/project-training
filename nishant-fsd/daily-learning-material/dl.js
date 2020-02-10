var obj = {}
      function myFunction(arr) {
       
        for (let i of arr) {
           obj[arr[i].name]=arr[i].address
        }
        return obj
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
        }
      ];
myFunction(arr)