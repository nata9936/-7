const categoriesEl = document.querySelectorAll(".item");

console.log(`В списке ${categoriesEl.length} категории`);

const itemEl = categoriesEl.forEach(function (item) {
  console.log(
    `Категория: ${item.firstElementChild.textContent}`,
    `Количество елементов: ${item.lastElementChild.children.length}`
  );
});
