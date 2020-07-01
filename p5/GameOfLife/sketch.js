const TILE_SIZE = 20; 	// pixel size of each tile. 
const ALIVE_PROB = 0.1; 	// The random-"alive" threshold.

const COLS = 75;
const ROWS = 42;

let grid;

function createGrid(cols, rows){
	// This function creates the 2D array that will represent the grid
	let array2D = new Array(rows);
	for (let i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(cols).fill(0);
	}
	return array2D;
}

function randomizeGrid(grid){
	// Fills the grid with random 1s and 0 according to a probabilty
	for (let c = 0; c < grid.length; c++) {
		for (let r = 0; r < grid[c].length; r++) {
			randNum = Math.random();
			if (randNum < ALIVE_PROB) { 
				// If the "alive" threshold is met then the tile is active
				grid[c][r] = 1;
			} else{
				grid[c][r] = 0;
			}
		}
	}
	return grid;
}

function displayGrid(grid){
	// This function is to display the grid.
	noStroke();

	// fills in the tiles according to the grid numbers
	for (let c = 0; c < grid[0].length; c++) {
		for (let r = 0; r < grid.length; r++) {
			let x1 = c*TILE_SIZE;
			let y1 = r*TILE_SIZE;
			let x2 = x1 + TILE_SIZE;
			let y2 = y1 + TILE_SIZE;

			// 1 means the tile is active/alive
			if (grid[r][c]){
				fill(153);
				rect(x1,y1,x2,y2);
			}else {
				fill(225);
				rect(x1,y1,x2,y2);
			}
		}
	}
}

function setup() {
	createCanvas(COLS*TILE_SIZE, ROWS*TILE_SIZE);
	grid = createGrid(COLS, ROWS);
	grid = randomizeGrid(grid);
	grid.forEach(x => console.log(x));
	displayGrid(grid);
}

function draw() {
}

setup();