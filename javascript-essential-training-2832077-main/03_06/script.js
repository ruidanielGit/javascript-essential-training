/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
//dot notation, using dots to navigate throw the properties of the object
console.log("The pocket num value:", backpack.pocketNum);
console.log("Strap lenght L:", backpack.strapLength.left);

//bracket notation -> to pass a variable
var query = "pocketNum";
console.log("The pocket num value:", backpack[query]); //this script cant be done using dot notation
