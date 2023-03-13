/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

//add to rear of array
//backpackContents.push("pencil", 5);

//add to front of array
//backpackContents.unshift("hello");

//remove the first item
//backpackContents.shift();

//remove last item
//backpackContents.pop();

//we choose how we want to separate the items on this list, just writing inside the method join
//console.log(backpackContents.join(" * "));

//backpackContents.forEach(function (item) {
//  item = `<li>${item}</li>`;
//  console.log(item);
//});

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
