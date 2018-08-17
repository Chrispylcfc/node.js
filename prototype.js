function user() {
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer) {
    targetPlayer.life += 1;
    this.life -= 1;
    console.log(this.name + " gave 1 life to " + targetPlayer.name);
  }
}

var bucky = new user();
var wendy = new user();
bucky.name = "Bucky";
wendy.name = "Wendy";

bucky.giveLife(wendy);
console.log("Bucky Life: " + bucky.life);
console.log("Wendy Life: " + wendy.life);

// You can add functions to all objects.
user.prototype.uppercut = function uppercut(targetPlayer) {
  targetPlayer.life -= 30;
  console.log(this.name + " just uppercutted " + targetPlayer.name);
}

wendy.uppercut(bucky);
console.log("Bucky Life: " + bucky.life);
console.log("Wendy Life: " + wendy.life);

// You can add properties to all objects.
user.prototype.magic = 60;
console.log("Bucky Magic: " + bucky.magic);
console.log("Wendy Magic: " + wendy.magic);
