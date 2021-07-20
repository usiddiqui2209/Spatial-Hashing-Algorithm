/**
 * @class GridController
 */

export default class GridController {
	constructor(gridX, gridY, canvasCtx) {
		this.gridX = gridX;
		this.gridY = gridY;
		this.ctx = canvasCtx;
		
		this.init();
	}
	
	init() {
		// Calculate the size of the cells based on the grid size
		this.cellSizeX = this.ctx.canvas.width / this.gridX;
		this.cellSizeY = this.ctx.canvas.height / this.gridY;
	}
	
	getSpatialHash(px, py) {
		// Get the spatial hash from the position
		const [cellX, cellY] = this.positionToGridCell(px, py);
		return this.gridCellToIndex(cellX, cellY);
	}
	
	positionToGridCell(px, py) {
		// Calculate the cell value corresponding to a position on the grid
		const cellX = Math.max(Math.floor(px / this.cellSizeX), 0);
		const cellY = Math.max(Math.floor(py / this.cellSizeY), 0);
		return [cellX, cellY];
	}
	
	gridCellToIndex(cellX, cellY) {
		// Map the 2D grid to the 1D array
		return (cellY * this.gridX) + cellX;
	}
	
	indexToGridCell(index) {
		// Map the 1D array to the 2D grid
		const cellY = Math.floor(index / this.gridX);
		const cellX = index - (cellY * this.gridX);
		return [cellX, cellY];
	}
	
	gridCellToCellDimensions(cellX, cellY) {
		// Calculate the dimensions of a given cell
		const xMin = cellX * this.cellSizeX;
		const xMax = xMin + this.cellSizeX;
		const yMin = cellY * this.cellSizeY;
		const yMax = yMin + this.cellSizeY;
		
		return [[xMin, xMax], [yMin, yMax]];
	}
}