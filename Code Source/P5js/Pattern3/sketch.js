let bubbles=[]
let self, c

function preload(){
self= loadImage('2.jpeg');

}

function setup() {
	createCanvas(500,500);
	for(let i=0; i<200; i++){
		bubbles.push(new colorbubble());
	}
}

function draw() {
  
	clear();
	for(let i=0; i<100; i++){
	bubbles.push(new colorbubble())
	}
	for(let colorbubble of bubbles){
		colorbubble.delete();
		colorbubble.display();
	}
}

class colorbubble {
	constructor(){
		this.pos= new p5.Vector(randomGaussian(width/2, height), random(0, height))
		this.vel= new p5.Vector(0, 0)
		this.acc= new p5.Vector(random(-0.1, 0.1), -0.05)
		this.size= random (1, 20)
	}
	delete(){
		if (this.pos.x > width + this.size*2 || this.pos.x < 0- this.size*2) {
	let index = bubbles.indexOf(this);
	bubbles.splice(index, 1);
   }
	}
	
	display(){
		noStroke();
		c=self.get(this.pos.x, this.pos.y)
		fill(c)
		ellipse(this.pos.x, this.pos.y, this.size)
	}
}