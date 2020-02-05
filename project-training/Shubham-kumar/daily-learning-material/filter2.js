/*const fruits = {
    apple: 28,
    orange: 17,
    pear: 54,
  }
  
  const arr = Object.keys(fruits)
  console.log(arr)

  for( var i = 0; i < arr.length; i++){ 
    if ( arr[i] === 'pear') {
      arr.splice(i, 1); 
    }
 }
  console.log(arr)

*/

  function filter(x)
    {   

        const arr = Object.keys(x)
        console.log(arr)
        for( var i = 0; i < arr.length; i++){ 
            if ( arr[i] === 'fg') {
              arr.splice(i, 1); 
            }
        // let obj = Object.fromEntries(arr);
        console.log(arr)
        
    }
}   
var source = {a: 4, b: 'e', fg: 23}
console.log(source);
filter(source)
console.log(source);
