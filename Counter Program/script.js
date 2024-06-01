let decreaseBtn = document.querySelector(".decrease");
let increaseBtn = document.querySelector(".increase");
let resetBtn = document.querySelector(".reset");
let value = document.getElementById("value");
let currValue = 0;

decreaseBtn.addEventListener("click", () => {
  currValue -= 1;
  value.textContent = currValue;
  value.style.color = currValue < 0 ? "red" : "green";
});

increaseBtn.addEventListener("click", () => {
  currValue += 1;
  value.textContent = currValue;
  value.style.color = currValue < 0 ? "red" : "green";
});

resetBtn.addEventListener("click", () => {
  currValue = 0;
  value.textContent = currValue;
  value.style.color = "black";
});
