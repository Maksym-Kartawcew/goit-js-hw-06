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
  const listElement = document.createElement("LI"); 
  listElement.textContent = ingredient;
  return listElement;
})

list.innerHTML = listContent.join('');