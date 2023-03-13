/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let randomItems = ["Pen", "Laptop", "Bear", "Water", "Phone", true, 2, null];

console.log(randomItems);

randomItems.pop();

randomItems.unshift(randomItems[randomItems.length - 1]);

randomItems.sort();

console.log(
  randomItems.find(function (element) {
    return element === "Laptop";
  })
);

randomItems.splice(
  randomItems.findIndex(function (element) {
    return element === "Laptop";
  }),
  1
);

console.log(randomItems);
