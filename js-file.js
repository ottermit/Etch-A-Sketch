const container = document.querySelector('.container');
const makeGrid = document.querySelector('#makeGrid');
const deleteGrid = document.querySelector('#deleteGrid');


function createBlock() {
    const square = document.createElement('div');
    square.style.border = '1px solid black';
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "#" + randomColor;
    });
    /*square.addEventListener("mouseleave", function(event) {
        event.target.style.backgroundColor = 'white';
    }); */
    container.appendChild(square).className = "grid-square";
}

function userInput () {
    eraseGrid();
    let grid = prompt('What size grid would you like? 1-100');

    if (isNaN(grid)) {
        alert('That is not a valid number.');
        userInput();
    } else if (grid > 100 || grid < 1) {
        alert('Please enter a number between 1-100');
        userInput();
    } else {
        createGrid(grid);
    }
}

function createGrid(gridSize) {

    let gridTemplateColumns = 'repeat('+gridSize+', 1fr)';
    container.style.gridTemplateColumns = gridTemplateColumns;
    container.style.gridTemplateRows = gridTemplateColumns;

    for (let i = 0; i < gridSize * gridSize; i++) {
        createBlock();
    }
}

function eraseGrid() {
     document.querySelectorAll('.grid-square').forEach(
         (e) => e.parentNode.removeChild(e));
    }

makeGrid.addEventListener('click', userInput);
deleteGrid.addEventListener('click', eraseGrid);

createGrid();