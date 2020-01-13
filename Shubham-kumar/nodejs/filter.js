function filter(x,y)
    {   

        for (i =0; i<y.length; i++)
        {
          
            delete x[y[0]]
        }
        
        
        
    }







var source = {a: 4, b: 'e', fg: 23}
console.log(source);
filter(source, ['fg','gg'])
console.log(source);
// output
// {a: 4, b: "e"}