let color = "black";
let click = true

let sizeValue = document.querySelector("#sizeValue")


function createGrid(size) { // CREATE A GRID
    let grid = document.querySelector("#grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) { // CREATE A FUNCTION TO COLOR THE EACH DIV
        let gridElement = document.createElement("div");
        gridElement.addEventListener('mouseover', colorSquare);
        gridElement.addEventListener('mousedown', colorSquare)
        gridElement.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", gridElement);
    }
    updatesizeValue(size)
}

createGrid(16);

function changeSize(input) {
    createGrid(input);
    updatesizeValue(size)
}

function updatesizeValue(size) {
    let sizeValue = document.querySelector("#sizeValue")
    sizeValue.innerHTML = `${size} X ${size}`
}

function colorSquare() {
    if(click) {
        if(color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}


function resetGrid() {
    let grid = document.querySelector("#grid");
    let gridElement = grid .querySelectorAll("div");
    gridElement.forEach((div) => div.style.backgroundColor = 'white');
}