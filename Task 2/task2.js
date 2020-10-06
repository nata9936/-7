const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = ingredients.map((ingredient) => {
  const temp = document.createElement("li");
  temp.textContent = ingredient;

  return temp;
});

const listEl = document.querySelector("ul");
listEl.append(...listIngredients);

console.log(listEl);
