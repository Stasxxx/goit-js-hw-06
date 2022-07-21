const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('ul');
console.log(ingredientsEl);

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList = 'item';
  itemEl.textContent = ingredient;
    
  return itemEl
});
}

const listEl = makeIngredientsList(ingredients);
ingredientsEl.after(...listEl);


