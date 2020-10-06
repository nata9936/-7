const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  counterValue.textContent = counter.value;
});
