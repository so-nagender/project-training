function Math(a,b){
    this.num1=a;
    this.num2=b;
}
Math.prototype.add=function(){
    return this.num1 + this.num2;
}

var math = new Math(1, 2)
console.log(math.add())