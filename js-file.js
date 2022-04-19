const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clearBtn');

function createBlock() {
    const square = document.createElement('div');
    square.style.border = '1px solid black';
    square.addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = 'red';
    });
    /*square.addEventListener("mouseleave", function(event) {
        event.target.style.backgroundColor = 'white';
    }); */
    container.appendChild(square);
}

let gridSize = 16;

function createGrid() {
    gridSize = prompt('What size grid would you like?');
    let gridTemplateColumns = 'repeat('+gridSize+', 1fr)';
    container.style.gridTemplateColumns = gridTemplateColumns;
    container.style.gridTemplateRows = gridTemplateColumns;

    for (let i = 0; i < gridSize * gridSize; i++) {
        createBlock();
    }
}

function resetGrid() {

}

createGrid();