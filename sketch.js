
var r ;
var g ;
var b;
var circle
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
 //green or r, g, b


function setup(){ 

  createCanvas(1500,400);
  circle= createSprite(600,200,20,20);
}


function draw(){
  background(r,b,g);
circle.x = mouseX;     
circle.y = mouseY;
  r = map(mouseX,0,500,0,255);
  b = map(mouseX,0,1000,0,68);
  g = map(mouseX,0,1500,0,155);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  
drawSprites();
}