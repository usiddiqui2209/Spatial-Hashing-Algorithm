import Vector2D from './math/Vector2D';

/**
 * @class Particle
 */

export default class Particle {
	constructor(px, py, vx, vy, canvasCtx) {
		// Store the position of the particle
		this.position = new Vector2D(px, py);
		
		// Store the speed of the particle
		this.speed = new Vector2D(vx, vy);
		
		// Initialise the spatial hash variable
		this.spatialHash = null;
		
		// Store the canvas instance
		this.ctx = canvasCtx;
	}
	
	// Update the position of the particle
	updatePosition(px, py) {
		this.position = new Vector2D(px, py);
	}
	
	checkBounds() {
		// If the particle is outside of the x bounds, reverse the x velocity
		if (this.position.x < 0 || this.position.x > this.ctx.canvas.width) {
			this.speed = this.speed.reverseX();
		}
		
		// If the particle is outside of the y bounds, reverse the y velocity
		if (this.position.y < 0 || this.position.y > this.ctx.canvas.height) {
			this.speed = this.speed.reverseY();
		}
	}
	
	setSpatialHash(hash) {
		// Update the spatial hash of the particle
		this.spatialHash = hash;
	}
	
	render() {
		const particleRadius = 3;
		const x = this.position.x;
		const y = this.position.y;
		
		// Render particle to the canvas
		this.ctx.beginPath();
		this.ctx.arc(x, y, particleRadius, 0, 2 * Math.PI);
		this.ctx.fill();
	}
}