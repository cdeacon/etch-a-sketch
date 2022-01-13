const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;

const grid = document.getElementById('grid');
const clearButton = document.getElementById('clear');
clearButton.onclick = () => reloadGrid();

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = currentColor;
}

function reloadGrid() {
    clearGrid();
    let gridSize = Number.parseInt(prompt("What dimension for etch-a-sketch? Please enter a number between 1 and 100"));
    while (!Number.isInteger(gridSize) || gridSize < 1 || gridSize > 100){
        gridSize = Number.parseInt(prompt("What dimension for etch-a-sketch? Please enter a number between 1 and 100"));
    }

    createGrid(gridSize);
  }
  
  function clearGrid() {
    grid.innerHTML = ''
  }

  window.onload = () => {
    createGrid(DEFAULT_SIZE)
  }
