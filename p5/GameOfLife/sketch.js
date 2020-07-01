function createGrid(cols, rows){
	// This function creates the 2D array that will represent the grid
	let array2D = new Array(cols);

	for (let i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(rows).fill(0);
	}
	return array2D;
}

let grid;

function setup() {
	grid = createGrid(3,4);
	grid.forEach(x => console.log(x));
}

function draw() {
}

setup();