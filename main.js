const grid = document.querySelector(".grid");

var color = "#333";

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    grid.appendChild(square);
  }
}

createGrid(16);

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = color;
  });
});
