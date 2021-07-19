/**
 * @class Vector2D
 */

export default class Vector2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	// Return the magnitude of the vector instance
	magnitude() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	
	// Return a vector instance with the x-component reversed
	reverseX() {
		const x = -this.x;
		const y = this.y;
		return new Vector2D(x, y);
	}
	
	// Return a vector instance with the y-component reversed
	reverseY() {
		const x = this.x;
		const y = -this.y;
		return new Vector2D(x, y);
	}
	
	// Return a reversed vector instance
	reverse() {
		const x = -this.x;
		const y = -this.y;
		return new Vector2D(x, y);
	}
}