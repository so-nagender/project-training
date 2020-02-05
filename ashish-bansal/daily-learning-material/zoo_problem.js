function zoo(input){
    var n = input.length;
    var x = 0;
    var y = 0;
    for(let i = 0;i<n;i++){
        if(input[i]==="z"){
            x = x + 1;
        }
        else if (input[i]==="o"){
            y = y + 1;
        }
    }
    if(y == 2*x){
        console.log("Yes");
    }
    else{
        console.log("No");
    }    
}

zoo("zzzoooooo");