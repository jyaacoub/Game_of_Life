const TILE_SIZE = 1; 	// pixel size of each tile. 
const ALIVE_PROB = 0.3; 	// The random-"alive" threshold.

const COLS = 150*10;
const ROWS = 84*10;

const FR = 9;  // FrameRate

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
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			randNum = Math.random();
			if (randNum < ALIVE_PROB) { 
				// If the "alive" threshold is met then the tile is active
				grid[r][c] = 1;
			} else{
				grid[r][c] = 0;
			}
		}
	}
	return grid;
}

function displayGrid(grid, gridlines){
	// This function is to display the grid.
	background(225);
	if (gridlines){
		stroke(0);
		strokeWeight(gridlines);
	} else{
		noStroke();
	}

	// fills in the tiles according to the grid numbers
	for (let c = 0; c < grid[0].length; c++) {
		for (let r = 0; r < grid.length; r++) {
			let x1 = c*TILE_SIZE;
			let y1 = r*TILE_SIZE;

			// 1 means the tile is active/alive
			if (grid[r][c]){
				fill(153);
				rect(x1,y1,TILE_SIZE,TILE_SIZE);
			}
		}
	}
}

function setup() {
	createCanvas(COLS*TILE_SIZE, ROWS*TILE_SIZE);
	frameRate(FR);

	grid = createGrid(COLS, ROWS);
	grid = randomizeGrid(grid);
	displayGrid(grid);
}

function updateGrid(grid){
	// This function creates a new grid based on the old one
	const numCols = grid[0].length;
	const numRows = grid.length;
	let newGrid = createGrid(numCols, numRows);

	for (let c = 0; c < numCols; c++) {
		for (let r = 0; r < numRows; r++) {
			// Each tile has 8 neighbors:
			let totalAliveNeighbors = 0;

			if (c > 1 && r > 1 ){
				totalAliveNeighbors += grid[r-1][c-1] + grid[r-1][c] + grid[r][c-1];
			}
			if (c < numCols-1 && r < numRows - 1){
				totalAliveNeighbors += grid[r+1][c+1] + grid[r+1][c] + grid[r][c+1];
			}
				if (c > 1 && r < numRows - 1){
				totalAliveNeighbors += grid[r+1][c-1];
			}
			if (c < numCols-1 && r > 1){
				totalAliveNeighbors += grid[r-1][c+1];
			}

			if (totalAliveNeighbors < 2 || totalAliveNeighbors > 3){
				newGrid[r][c] = 0;
			} else if (totalAliveNeighbors === 3){
				newGrid[r][c] = 1;
			}
		}
	}
	return newGrid;
}

function draw() {
	grid = updateGrid(grid);
	clear();
	displayGrid(grid);
}
