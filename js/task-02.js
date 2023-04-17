const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

const listContent = ingredients.map((ingredient) => {
  return `<li class="item">${ingredient}</li>`;
}).join("");

list.innerHTML = listContent;