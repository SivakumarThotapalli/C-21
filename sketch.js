var R1
var R2
var R3
var R4
function setup() {
  createCanvas(1200,800);
R1=createSprite(600,400,50,80);
R1.shapeColor="green";
R1.debug=true;
R2=createSprite(400,200,80,30);
R2.shapeColor="green";
R2.debug=true
R3=createSprite(300,400,50,80);
R3.shapeColor="green";
R3.debug=true
R4=createSprite(800,400,50,80);
R4.shapeColor="green";
R4.debug=true
}

function draw() {
  background(0);
R2.x=World.mouseX;
R2.y=World.mouseY;
if (isTouching(R2,R4)){
R2.shapeColor="blue";
R4.shapeColor="blue";
}
else {
  R2.shapeColor="green";
  R4.shapeColor="green";
}
  drawSprites();
}
