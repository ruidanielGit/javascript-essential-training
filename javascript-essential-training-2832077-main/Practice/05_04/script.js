/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

//***********Elements that I want to target*************

//- The Paragraph
const targetParagraph = document.querySelector("p");
console.log(targetParagraph);

//- Name of everyday backpack
const backpack = document.getElementById("pack01");
const backpackName = backpack.querySelector(".backpack__name");
console.log(backpackName.textContent);

//- Age of everyday backpack
const backpackFeatures = document.getElementById("pack01");
const backpackAge = backpackFeatures.querySelector(
  ".feature_backpack__age span"
); //use _ to navigate between a ' ' on the class name
console.log(backpackAge.textContent);

//- Frog backpack
const targetFrogBackpack = document.getElementById("pack02");
console.log(targetFrogBackpack.textContent);

//- Site footer
const targetSiteFooter = document.querySelector(".sitefooter");
console.log(targetSiteFooter.textContent);

//- All buttons
console.log(
  document
    .querySelectorAll("button")
    .forEach((item) => console.log(item.textContent))
);
