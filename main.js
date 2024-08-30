const grid = document.querySelector(".grid");
const sizeInput = document.getElementById("size");
const sizeSpanValue = document.getElementById("sizeSpan");

sizeInput.value = 16;
sizeSpanValue.textContent = `${sizeInput.value} x ${sizeInput.value}`;

sizeInput.addEventListener("input", () => {
  sizeSpanValue.textContent = `${sizeInput.value} x ${sizeInput.value}`;
  deleteGrid();
  createGrid(sizeInput.value);
});

var color = "#333";

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
