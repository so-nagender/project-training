function anagram(string1,string2){
    arr1 = string1.split("")
    arr2 = string2.split("")
    n1 = arr1.length;
    n2 = arr2.length;
    count = 0;
    // console.log(arr1)
    // console.log(arr2)
    //console.log(n1,n2);
    if(n1>n2){
        for(let i=0;i<n2;i++){
            for(let j=0;j<n1;j++){
                if(arr2[i] == arr1[j]){
                    arr2[i] = 0;
                    arr1[j] = 0;
                    break;
                }
            }
        }
    }
    else{
        for(let i=0;i<n1;i++){
            for(let j=0;j<n2;j++){
                    if(arr1[i] == arr2[j]){
                    console.log(arr1[i],arr2[j]);
                    arr1[i] = 0;
                    arr2[j] = 0;
                    break;
                }
            }
        }
    }
    
    for(let i =0;i<n1;i++){
        if(arr1[i]!=0){
            count++;
        }
    }
    for(let i =0;i<n2;i++){
        if(arr2[i]!=0){
            count++;
        }
    }

    console.log(count);
    
}
anagram("abc","cde");