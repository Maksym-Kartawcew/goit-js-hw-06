const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const listElement = document.createElement("LI");
  listElement.textContent = ingredient;
  list.append(listElement);
}

