/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates div element with data from object
 */

const theDivContent = {
  title: "The div title",
  firstP: "the first paragraph content",
  secondP: "the second paragraph content",
};

const addClass = function (className) {
  document.querySelector("main").setAttribute("main", className);
};

const addElement = (content) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <h1>${content.title}</h1>
  <p>${content.firstP}</p>
  <p>${content.secondP}</p>`;
  return newDiv;
};

addClass("anewclass");
const main = document.querySelector("main");
main.append(addElement(theDivContent));
