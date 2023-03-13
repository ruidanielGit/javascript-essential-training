/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log("Lenght: " + collection.length);
console.log(collection[0]);
console.log(collection[1]);
collection[1] = true;
console.log(collection[1]);
//add an item to the array
collection[collection.length] = "new item";
collection[9] = 23;
console.log(collection);
console.log(collection[8]);
