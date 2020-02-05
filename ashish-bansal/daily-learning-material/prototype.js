function user(myName){
    this.name = myName;
    this.life = 100;
    this.giveLife = function giveLife(targetName){
        targetName.life +=1;
        console.log(this.name + " gave life to " + targetName.name) 
    }

}

user.prototype.uppercut = function uppercut(targetPlayer){
   targetPlayer.life -= 20;
   console.log(this.name + " took 20 life of " +targetPlayer.name);

}

var bucky = new user("bucky");
var becky = new user("becky");

bucky.giveLife(becky);
console.log(becky.life)
bucky.uppercut(becky)
console.log(becky.life)




