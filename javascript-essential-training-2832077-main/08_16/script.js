/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

const outputHtmlArticle = (objectData, className) => {
  let articleContent = `
    <figure class="backpack__image">
      <img src=${objectData.image} alt="" />
    </figure>
    <h1 class="backpack__name">${objectData.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        objectData.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        objectData.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${objectData.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        objectData.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        objectData.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        objectData.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        objectData.lidOpen ? "open" : "closed"
      }</span></li>
    </ul> 
`;
  return articleContent;
};

const challenge = (data, className) => {
  data.forEach((item) => {
    let article = document.createElement("article");
    article.innerHTML = outputHtmlArticle(item);
    article.classList.add(className);

    // Set article ID to the backpack.id property
    article.setAttribute("id", item.id);
    const main = document.querySelector(".maincontent");
    main.append(article);
  });
};

