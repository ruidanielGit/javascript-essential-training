/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
/**
 * Creates a Computer object
 */
const computer = {
  name: "Computer",
  ram: "8gb",
  graphics_card: {
    //graphics_card its a nested object
    name: "rx590 sapphire Edition",
    memory: "8gb",
    color: "blue",
  },
  stateON: true,
};

console.log("Ram capacity:", computer.ram);
console.log("Graphics card info:", computer.graphics_card);
console.log("Graphics card color:", computer.graphics_card.color);
