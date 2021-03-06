var bullet, wall;
function setup() {
  createCanvas(1600,800);
  
  speed=random(55,90);
  weight=random(400, 1400) 
  thickness=random(55,90)
  bullet= createSprite(50, 200, 70 ,70);

  bullet.velocityX=speed;

  bullet.shapeColor=color(255);

  wall=createSprite(1500, 400, thickness, 600)

  wall.shapeColor=color(80, 80, 80)
}

function draw() {
  background(0);
  if (wall.x-bullet.x<(bullet.width+wall.width)/2)  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if (deformation>180){
      wall. shapeColor=color(255,0,0);
    }
    if(deformation>100 && deformation<180){
      wall.shapeColor=color(230,230,0)
    }
    if (deformation<100){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}