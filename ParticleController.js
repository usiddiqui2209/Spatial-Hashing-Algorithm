import Particle from './Particle';

/**
 * @class ParticleController
 */

export default class ParticleController {
	constructor(numParticles, canvasCtx) {
		// Store the canvas context variable
		this.ctx = canvasCtx;
		
		// Initialise particle array
		this.particles = [];
		
		// Create particle array
		this.initParticles(numParticles);
		
		// Draw the particles
		//this.renderParticles();
	}
	
	initParticles(numParticles) {
		// Store the maximum bounds of the particles
		const wx = this.ctx.canvas.width;
		const wy = this.ctx.canvas.height;
		
		// Create the particles
		for(let i = 0; i < numParticles; i++) {
			// Generate the position of the particle
			const px = Math.floor(Math.random() * wx);
			const py = Math.floor(Math.random() * wy);
			
			// Generate the velocity of the particle
			const vMax = 0.1;
			const v = Math.random() * vMax;
			const angle = Math.random() * (2 * Math.PI);
			const vx = v * Math.cos(angle);
			const vy = v * Math.sin(angle);
			
			// Create a particle instance
			const particle = new Particle(px, py, vx, vy, this.ctx);
			
			// Append the particle instance to the particle array
			this.particles.push(particle);
		}
	}
	
	performTimestep(dt) {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		
		// Loop through the array of particles
		for(let particle of this.particles) {
			// Calculate the new position of the particles
			const x = particle.position.x + (particle.speed.x * dt);
			const y = particle.position.y + (particle.speed.y * dt);
			
			// Update the position of the particle
			particle.updatePosition(x, y);
			
			// Render the new position of the particle
			particle.render();
			
			// If particle is out of bounds, update the speed
			particle.checkBounds();
		}
	}
}