//wccchallenge - reflection
//reflection for reflection - comments for your reflection
//click to mix
let n=9;
function setup(){
  c=min(windowWidth,windowHeight)*0.8;
	//what is our size in this universe - what space/dimension do you occupy

	createCanvas(c,c);//what shall you paint on the canvas of this day?
  y=-c;//what are the variable within you and of you?
  background(255);//this background is the childhood of this canvas - what is the background on which you paint?
    noFill()//how can you be empty?
}
function draw(){
  translate(c/2,c/2);//we all have transformations. to move is to transform. What is your transformation?
  for(let j=1;j<n;j++){//what are the loops in which you find yourself?
    for(let i=0;i<n;i++){//do you have loops within loops?
      push();//when do you compartmentalize yourself? thoughts?
      rotate(i*TWO_PI/n);//with enough mirrors we can rotate about ourselves - who, what, where is your mirror?
      thoughts(abs(c*sin(frameCount/((j)*500))),c/5+j*50);//what do your thoughts look like
      pop()//what awakens you?
    }
  }
}

function thoughts(t,r){
  v=map(t,0,c,0,355);//map your thoughts
  stroke(v*abs(sin(t/300)),v*abs(sin(t/500)),v*abs(sin(t/100))); //color your breath
  y=-r*2+t//manipulate your variables
  circle(0,y,r);//this is where thought becomes a stroke on the canvas
}

function mousePressed(){
  n=int(random(3,42))//evolve and change
}