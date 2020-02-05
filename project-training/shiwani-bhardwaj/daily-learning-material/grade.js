let grade = function(currentmarks,totalmarks)
{
let percent =(currentmarks/totalmarks)*100
if (percent>=90)
{
    grade='O'
    //console.log(mygrade)
}
else if (percent>=80)
{
    grade='A'
   // console.log(mygrade)
}
else if (percent>=70)
{
    grade='B'
    //console.log(mygrade)
}
else if (percent>=60)
{
    grade='C'
    //console.log(mygrade)
}
else if (percent>=50)
{
    grade='D'
   // console.log(mygrade)
}
else 
{
    console.log('fail')
}
return ` percentage is ${percent}`// throwing error 
}
grade(80,100)

