import Canvas from './Canvas';
import ParticleController from './ParticleController';

/**
 * @class App
 */
 
class App {
 	constructor() {
 		// Define app config parameters
 		const numParticles = 50;
 		
 		// Define canvas config parameters
 		const canvasWidth = 800;
 		const canvasHeight = 800;
 		const gridX = 10;
 		const gridY = 10;
 		
 		// Define the timekeeper for the animation
 		this.timestamp = undefined;
 		
 		// Create a canvas instance
 		this.canvas = new Canvas(canvasWidth, canvasHeight);
 		
 		// Create a particle controller instance
 		this.particleController = new ParticleController(numParticles, this.canvas.ctx);
 		
 		// Run the simulation
 		window.requestAnimationFrame(this.animate.bind(this));
 	}
 	
 	animate(ts) {
 		// Edge case for the first frame
 		if (this.timestamp === undefined) {
 			this.timestamp = ts;
 		}
 		
 		// Calculate the elapsed time since the last frame
 		const dt = ts - this.timestamp;
 		this.timestamp = ts;
 		
 		// Perform the timestep calculation
 		this.particleController.performTimestep(dt);
 		
 		// Request the next animation frame
 		window.requestAnimationFrame(this.animate.bind(this));
 	}
}

const app = new App();