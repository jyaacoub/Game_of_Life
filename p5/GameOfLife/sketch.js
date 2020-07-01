const TILE_SIZE = 20; // pixel size of each tile. 
let grid;
const rows = 42;
const cols = 75;

function createGrid(cols, rows){
	// This function creates the 2D array that will represent the grid
	let array2D = new Array(cols);
	for (let i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(rows).fill(0);
	}
	return array2D;
}

function randomizeGrid(grid, probability){
	// Fills the grid with random 1s and 0 according to a probabilty

	//TODO: Finish randomizer for Grid.


}

function displayGrid(grid){
	// This function is to display the grid.
	stroke(0,255,0);

	// Adds gridlines:
	let width = grid.length * TILE_SIZE;
	let height = grid[0].length * TILE_SIZE;
	
	// vertical lines
	for (let i = 0; i < width; i+=TILE_SIZE) {
		line(i, 0, i, height);
	}

	//horizontal lines
	for (let i = 0; i < height; i+=TILE_SIZE) {
		line(0, i, width, i);
	}

	// fills in the tiles according to the grid numbers
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			// 1 means the tile is active/alive
			if (grid[i][j]){
			} else{ // 0 means the tile is disabled/dead
			}
			// TODO: add fill tile functionality.
		}
	}
}

function setup() {
	createCanvas(cols*TILE_SIZE, rows*TILE_SIZE);
	background(100);
	grid = createGrid(cols, rows);
	grid = randomizeGrid();
	displayGrid(grid);
}

function draw() {
}

setup();