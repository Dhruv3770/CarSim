  
var car, wall;

var weight, speed;

function setup() {
  createCanvas(1600,400);

speed=random(50, 90);
weight=random(400, 1500);

  wall = createSprite(1500, 60, 200, height/2);
  wall.shapeColor = "blue";
  wall.debug = true;
  car = createSprite(50, 150,50,50);
  car.shapeColor = "white";
  car.debug = true;

  car.velocityX = speed;
  //fixedRect.velocityY = +5;

//  car.collide(wall);
}

function draw() {
  background(0,0,0);  
if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;
if(deformation>180){
car.shapeColor ="red";
}
if(deformation<180&&deformation>100){
car.shapeColor="yellow";
}
if(deformation<100){
car.shapeColor="green";
}
}
  drawSprites();
}