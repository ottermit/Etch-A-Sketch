const container = document.querySelector('.container');

function createBlock() {
    const square = document.createElement('div');
    //square.style.height = '10px';
    //square.style.width = '10px';
    square.style.border = '1px solid black';
    container.appendChild(square);
}

function createGrid () {
   let numRows = 16;

   for (let i = 0; i < numRows * numRows; i++) {
       createBlock();
   }
}

createGrid();