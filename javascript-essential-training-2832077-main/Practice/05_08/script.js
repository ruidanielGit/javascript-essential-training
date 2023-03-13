/**
 * Find an element and add two different classes
 * Remove only one of the new classes
 * Add a new attribute to an element
 * Request the value of the attribute
 * Change the value of the attribute
 * Add some inline CSS to an element by specifying the style property and setting its value
 * Query the style property of an element in the console to get a list of all the style properties available
 */

document.querySelector("title").classList.add("new_class");

document.querySelector(".maincontent").classList.add("other_class");

document.querySelector(".maincontent").classList.remove("other_class");

document.querySelector("title").setAttribute("id", "titleId");

console.log(document.querySelector("title").getAttribute("id"));

document.querySelector("title").setAttribute("id", "replaceTitleID");

document.querySelector(".site-title").style.color = "green";
document.querySelector(".site-title").style.backgroundColor = "pink";

console.log(document.querySelector(".site-title").style);
