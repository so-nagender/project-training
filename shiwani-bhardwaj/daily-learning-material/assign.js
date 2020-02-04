        var user=[
            {name: 'rajat', address: 'gurgaon'},
            {name: 'vinay', address: 'dehradun'},
            {name: 'kavita', address: 'delhi'}
        ]
        
        
        function retrive(user)
        {
         var x=[]
        for(i=0;i<user.length;i++){
          x[user[i].name]=user[i].address

            }   
            return x;
          }
retrive(user)
           console.log(x)