/**
 * Create a new element for a nav menu
 * Add unordered list with five items
 */

//add navigation menu to the DOM
const navContent = `
  <ul><a href="#">Home</a></ul>
  <ul><a href="#">Profile</a></ul>
  <ul><a href="#">Dark Mode</a></ul>
  <ul><a href="#">Contact</a></ul>
  <ul><a href="#">About</a></ul>
`;

//element nav
const mainNav = document.createElement("nav");
//creating a class in mainNav
mainNav.classList.add("main-navigation");

//element unordered list
const navList = document.createElement("ul");
//pass the navContent to the navList (correpends to the html)
navList.innerHTML = navContent;
//pass navList to mainNav
mainNav.appendChild(navList);

//pass the nav to the HTML doc using the .siteheader to position
document.querySelector(".siteheader").append(mainNav);
