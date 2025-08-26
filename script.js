let count = 0;
const counter = document.getElementById("counter");
const hamster = document.getElementById("hamster");
const colorPicker = document.getElementById("color-picker");

const savedCount = localStorage.getItem("hamsterPets");
if (savedCount) {
  count = parseInt(savedCount, 10);
  counter.textContent = "Pats " + count;
}

const savedColor = localStorage.getItem("hamsterBg");
if (savedColor) {
  document.body.style.background = savedColor;
  colorPicker.value = savedColor;
}

hamster.addEventListener("click", () => {
  count++;
  counter.textContent = "Pats " + count;
  localStorage.setItem("hamsterPets", count);

  hamster.classList.remove("animate");
  void hamster.offsetWidth;
  hamster.classList.add("animate");
});

colorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  document.body.style.background = color;
  localStorage.setItem("hamsterBg", color);
});
