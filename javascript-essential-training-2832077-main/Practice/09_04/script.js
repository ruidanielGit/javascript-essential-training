/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".container .grid");
let listItems = grid.querySelectorAll("li");
console.log(listItems);

listItems.forEach((item) =>
  item.addEventListener("click", (event) => {
    console.log(event);
    let currentColor = window.getComputedStyle(item).backgroundColor;
    console.log(currentColor);
    if (currentColor == "rgb(0, 0, 255)") {
      item.setAttribute("style", "background-color:hsl(112, 100%, 49%)");
    } else item.setAttribute("style", "background-color:rgb(0, 0, 255)");
  })
);

grid.addEventListener("mouseenter", (event) => {
  console.log(event);
  grid.setAttribute("style", "background-color:#ffcccc");
});

grid.addEventListener("mouseleave", (event) => {
  console.log(event);
  grid.setAttribute("style", "background-color:default");
});

const body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
  let currentColor = window.getComputedStyle(body).backgroundColor;
  console.log(event);
  if (currentColor == "rgba(0, 0, 0, 0)") {
    body.setAttribute("style", "background-color:rgb(97, 99, 101)");
    document.querySelector("h1").innerText = "Press 'Space Key' for Light Mode";
  } else {
    body.setAttribute("style", "background-color:rgba(0, 0, 0, 0)");
    document.querySelector("h1").innerText = "Press 'Space Key' for Dark Mode";
  }
});
