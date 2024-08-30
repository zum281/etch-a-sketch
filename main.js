const root = document.documentElement;
const grid = document.querySelector(".grid");
const sizeInput = document.getElementById("size");
const sizeSpanValue = document.getElementById("sizeSpan");
const colorInput = document.getElementById("color");
const clearButton = document.getElementById("clear");

var color = "#000";
colorInput.value = color;

root.style.setProperty("--main-color", color);

sizeInput.value = 16;
sizeSpanValue.textContent = `${sizeInput.value} x ${sizeInput.value}`;

sizeInput.addEventListener("input", () => {
  sizeSpanValue.textContent = `${sizeInput.value} x ${sizeInput.value}`;
  deleteGrid();
  createGrid(sizeInput.value);
});

colorInput.addEventListener("input", () => {
  color = colorInput.value;
  root.style.setProperty("--main-color", color);
});

clearButton.addEventListener("click", () => {
  colorInput.value = "#000";
  color = "#000";
  root.style.setProperty("--main-color", color);
  deleteGrid();
  createGrid(sizeInput.value);
});

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    grid.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = color;
    });
  }
};

const deleteGrid = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.remove();
  });
};

createGrid(sizeInput.value);

const squares = document.querySelectorAll(".square");
