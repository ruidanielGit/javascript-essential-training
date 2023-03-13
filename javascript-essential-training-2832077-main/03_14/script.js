/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const hPotter = new Book(
  "Harry Potter",
  "J. K. Rolling",
  "English",
  560,
  "December 5, 2018 15:00:00 PST"
);
const bible = new Book(
  "Holy Bible",
  "Mateus e João",
  "Portuguese",
  800,
  "March 26, 2018 15:00:00 PST"
);
const alchemist = new Book(
  "The Alchesmist",
  "Paulo Coelho",
  "Portuguese",
  355,
  "January 24, 2018 15:00:00 PST"
);
const dAnneFrank = new Book(
  "The Diary of Anne Frank",
  "Anne Frank",
  "Portuguese",
  230,
  "April 21, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log(hPotter);
console.log(bible);
console.log(alchemist);
console.log(dAnneFrank);
