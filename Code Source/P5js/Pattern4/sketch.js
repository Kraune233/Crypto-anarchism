let particles = [] ;
var analyzer;
var fade;          
var fadeAmount = 1

function setup() {
 
 frameRate(40)
	createCanvas(700, 500);    
 
	fade=0;
  //横着间隔
 	for(var i=0;i<width;i+=20){
      //高的间隔
	  for(var o=0;o<height;o+=10){
        particles.push({
			
         x:i,y:o,clr:color(random(200),random(200),250+frameCount,255)
			
        })
      }
     }
}

function draw() {
  background(200,200,200,7);
	//background(136,213,185,2);
	noStroke();
    
	for(var i=0;i<particles.length;i++){
	   let p =particles[i];
       fill(235+frameCount,127+frameCount,fade)
        
        if (fade<0) fadeAmount=1; 
        if (fade>255) fadeAmount=-10; 
         fade += fadeAmount; 
		ellipse(p.x+30 ,p.y+30 ,2);
		 p.x+=(noise(p.x/200,p.y/200,3000)-0.6)*3;
		 p.y+=(noise(p.x/200,p.y/200,30000)-0.5)*3;
	}
}
