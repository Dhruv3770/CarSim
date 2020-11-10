  
var car, wall;

var weight, speed;

function setup() {
  createCanvas(1600,400);

speed=random(50, 90);
weight=random(400, 1500);

  wall = createSprite(1500, 60, 200, height/2);
  wall.shapeColor = "wellow";
  wall.debug = true;
  car = createSprite(50, 150,50,50);
  car.shapeColor = "white";
  car.debug = true;

  car.velocityX = speed;
  //fixedRect.velocityY = +5;

  car.collide(wall);
}

function draw() {
  background(0,0,0);  

  if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = car.velocityX * (-1);
    wall.velocityX = wall.velocityX * (-1);
  }
  if (car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
    car.velocityY = car.velocityY * (-1);
    wall.velocityY = wall.velocityY * (-1);
  }


  drawSprites();
}