var count = 0;
function cc(card) {
  // Only change code below this line
    var str = /[JQKA]/;
    if (card > 1 && card <7){
    count++;
}
else if(card === 10 || String(card).match(str)){
    count--;
}
if (count>0)
    console.log (count + " " + "Bet");
else
console.log (count + " " +  "Hold");
// Only change code above this line
}
cc(2);
// Add/remove calls to test your function.
// Note: Only the last will display
