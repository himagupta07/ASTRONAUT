var bath, sleep, eat, exercise, drink, move, brush;
var bathImg,SleepImg,eatImg, exerciseImg, drinkImg, moveImg, brushImg;
var bg;
var astronaut;

function preload(){
bg= loadImage("images/iss.png");
sleep= loadImage("images/sleep.png");
bath= loadImage("images/bath1.png", "image/bath2.png");
eat= loadImage("images/eat1.png","images/eat2.png");
exercise= loadImage("images/gym1.png", "image/gym2.png", "image/gym11.png", "image/gym12.png");
brush= loadImage("images/brush.png");
drink= loadImage("images/drink1.png", "images/drink2.png");
move= loadImage("images/move.png", "image/move1.png");



function setup() {
  createCanvas(400, 400);

astronaut= createSprite(300,230);
astronaut.addAnimation("sleepImg", sleep);
astronaut.scale= 0.1;


  
}





function draw() {
  background(220);





  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushImg", brush);
    astranaut.changeAnimation("brushImg");
    astronaut.y= 350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("down_arrow")){
    astronaut.addAnimation("exerciseImg", exercise);
    astranaut.changeAnimation("exerciseImg");
    astronaut.y= 350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("left_arrow")){
    astronaut.addAnimation("eatImg", eat);
    astranaut.changeAnimation("eatImg");
    astronaut.y= 350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("right_arrow")){
    astronaut.addAnimation("bathImg", bath);
    astranaut.changeAnimation("bathImg");
    astronaut.y= 350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("m")){
    astronaut.velocityX= -3;
    astronaut.velocityY= 6;
  }

  
  }
}
