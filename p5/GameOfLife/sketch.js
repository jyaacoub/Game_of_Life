const TILE_SIZE = 10; 	// pixel size of each tile. 
const ALIVE_PROB = 0.3; 	// The random-"alive" threshold.
const START_COND = ['random', 'glider'];

const screenW = 1500;
const screenH =  840;

const COLS = Math.round(screenW / TILE_SIZE);
const ROWS = Math.round(screenH / TILE_SIZE);

const FR = 15;  // FrameRate

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

function insertGlider(grid, col, row){
	let x = col || Math.round(COLS/2);
	let y = row || Math.round(ROWS/2);

	// This function inserts a glider to the grid
	grid[y-1][x-1] = 0;
	grid[y-1][x] = 0;
	grid[y-1][x+1] = 1;

	grid[y][x-1] = 1;
	grid[y][x] = 0;
	grid[y][x+1] = 1;

	grid[y+1][x-1] = 0;
	grid[y+1][x] = 1;
	grid[y+1][x+1] = 1;

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
	createCanvas(screenW, screenH);
	frameRate(FR);

	// Creating and displaying the grid
	grid = createGrid(COLS, ROWS);

	if (START_COND.includes('random')){
		grid = randomizeGrid(grid);
	} else if (START_COND.includes('glider')){
		grid = insertGlider(grid);
	}
	

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

			// Determines if the tile will die or live or birth
			if (totalAliveNeighbors < 2 || totalAliveNeighbors > 3){
				newGrid[r][c] = 0;
			} else if (totalAliveNeighbors === 3){
				newGrid[r][c] = 1;
			} else {
				newGrid[r][c] = grid[r][c];
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
