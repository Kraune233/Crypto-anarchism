let colors = ["#2c2060", "#4bd3e5", "#fffbe6", "#ffd919", "#ff4f19"];

var myScale = 2;

let agent = [];

let mySize;

function setup() {
  createCanvas(1000,1000);
  colorMode(HSB, 360, 100, 100,100);
	
	
	mySize = 20;
	
	for(let xx=0; xx < width + mySize;xx+=mySize)
	{
		for(let yy=0; yy < height + mySize;yy+=mySize)
		{
			agent.push(new Agent(xx,yy));
		}
	}
}

function draw() {
	

  for(let i=0;i < agent.length;i++)
  {
    agent[i].update();
  }
  
}



class Agent {
  constructor(x,y)
  {

		this.p = createVector(x,y);
		
		
		this.directionX = 1;
		this.directionY = 1;
		
    this.pOld  = createVector(this.p.x,this.p.y);
    
    this.step  = 15;
    
    this.color = generateColor(10);

    
    this.strokeWidth = 20;
  }
  
  update() {

	
		
		if (this.strokeWidth > 0)
		{
		  this.strokeWidth -= 0.1;
		}
		
		this.p.x += this.directionX*vector_field(this.p.x,this.p.y).x*this.step;
    this.p.y += this.directionY*vector_field(this.p.x,this.p.y).y*this.step;
		
    strokeWeight(this.strokeWidth);

		stroke(this.color);
		
		addBlur(this.strokeWidth);
    line(this.pOld.x,this.pOld.y,this.p.x,this.p.y);
    
    this.pOld.set(this.p);
			
  }
    
}



function vector_field(x,y) {
  
  x = map(x,0,width,0,myScale);
  y = map(y,0,height,0,myScale);
  
  let k1 = 5;     
  let k2 = 4;   
  
  let u = sin(k1*y) + cos(k2*x);
  let v = sin(k2*x) - sin(k1*x);
	
	if (y > 0)
	{
	  if (v > 0)
	  {
      v = -v;
	  }
	}
  return createVector(u,v);
}

function addBlur(mySize)
{
	drawingContext.shadowOffsetX = -mySize*0.01;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = mySize/4;
  drawingContext.shadowColor = 'black';
}

function generateColor(scale) {
	let temp = color(colors[floor(random(0,5))]);
	myColor = color(hue(temp) + randomGaussian() * scale,
		saturation(temp) + randomGaussian() * scale,
		brightness(temp) + randomGaussian() * scale,
		random(99,100));
	return myColor;
}