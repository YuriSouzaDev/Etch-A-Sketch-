let color = "black";
let click = true;


function createGrid(size) { // CREATE A GRID
    let grid = document.querySelector("#grid");
    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let gridElement = document.createElement("div");
        gridElement.addEventListener('mouseover', colorSquare);
        gridElement.addEventListener('mousedown', colorSquare)
        gridElement.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", gridElement);
    }
    updatesizeValue(size)
}

createGrid(16);

function changeSize(input) { //TO CHANGE THE NUMBER OF DIVS
    createGrid(input);
    updatesizeValue(size);
}

function updatesizeValue(size) { // SHOW HOW MANY DIVS ARE CREATED
    let sizeValue = document.querySelector("#sizeValue");
    sizeValue.innerHTML = `${size} X ${size}`;
}

function colorSquare() { // RAINBOW MODE
    if(click) {
        if(color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {// SWITH BETWEEN RAIBOW MODE AND ERASER
    color = choice;
}


function resetGrid() { // CLEAR THE GRID
    let grid = document.querySelector("#grid");
    let gridElement = grid .querySelectorAll("div");
    gridElement.forEach((div) => div.style.backgroundColor = 'white');
}