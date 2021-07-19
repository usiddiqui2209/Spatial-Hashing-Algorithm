/**
 * @class Canvas
 */
 
export default class Canvas {
	constructor(width, height) {
		// Create a canvas
		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		
		// Assign the context of the canvas to the canvas instance
		this.ctx = canvas.getContext('2d');
		
		// Append the canvas to the webpage
		document.body.appendChild(canvas);
	}
}