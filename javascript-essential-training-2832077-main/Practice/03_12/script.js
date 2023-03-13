/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Car from "./Car.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const firstCar = new Car("Mercedes", "White", 24000, 320);

const secondCar = new Car("Porsche", "Black", 10000, 360);

const thirdCar = new Car("Tesla", "Blue", 16000, 280);

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
