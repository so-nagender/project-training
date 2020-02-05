
function calculatePrime(input){
    let data = '';
    arr = [];
    prime = "";
    for(let i =1;i<input;i++){
        arr[i]  = true;
    }
    for(let i=2;i<=Math.sqrt(input);i++){
        for (let j= i+1;j<input;j++){
            if(j%i===0){
                arr[j] = false;
            }

        }
        
    }

    for(let i = 2;i<input;i++){
        if(arr[i] === true){
            prime = prime +" " + i.toString();
        }
    }
    
    console.log(prime);
}

calculatePrime(50);

