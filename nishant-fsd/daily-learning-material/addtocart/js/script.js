var total1=0
var total2=0
var grandtotal=0

function subtract()
{
if(total1>0){
total1-=1
grandtotal=total1+total2
document.getElementsByClassName("total").innerHTML = grandtotal
}
else
{
    total1=0
}
}

function add()
{
  total1+=1
  grandtotal=total1+total2
  document.getElementsByClassName("total").innerHTML = grandtotal
}

function subtract1()
{
    if(total2>0){
    total2-=1
    grandtotal=total1+total2
    document.getElementsByClassName("total").innerHTML = grandtotal
    }
    else
    {
        total2=0
    }
    }
    
function add1()
{
      total2+=1
      grandtotal=total1+total2
      document.getElementsByClassName("total").innerHTML = grandtotal
    }