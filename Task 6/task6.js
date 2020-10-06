// #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }

const input = document.querySelector("#validation-input");

input.addEventListener("focus", () => {
  input.classList = "";
});

input.addEventListener("blur", onInputValidation);

function onInputValidation() {
  if (
    input.value.length < Number(input.dataset.length) ||
    input.value.length > Number(input.dataset.length)
  ) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}
