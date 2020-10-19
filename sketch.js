
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var gameState=1

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  monkey=createSprite(50,150)
  
  monkey.addAnimation("monkey run",monkey_running);
monkey.scale=0.09
  ground=createSprite(300,180,600,10)
  obstacleGroup= new Group();
FruitGroup=createGroup();
}


function draw() {
background("white");
  drawSprites();
  
  console.log(score)
 
  text("lifetime :"+score,100,30)
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
 
  if(gameState==1){
      spawnobstacles();
     score=score+Math.round(getFrameRate()/60);
  spawnbanana();
  text("Alive",100,100)
  if(monkey.isTouching(obstacleGroup)){
    
    gameState=2
  }
  }else if(gameState==2){
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    FruitGroup.setVelocityXEach(0);
     obstacleGroup.destroyEach(0);
    FruitGroup.destroyEach(0);
    textSize(30)
    text("monkey lost his life",100,100)
  }
  
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground)

}

function spawnobstacles(){
  if(frameCount%90===0){
    obstacles=createSprite(580,160)
    obstacles.addImage(obstacleImage)
    obstacles.velocityX=-3;
    obstacles.scale=0.08
    obstacleGroup.add(obstacles)
  }
}
function spawnbanana(){
  if(frameCount%60===0){
    banana=createSprite(580,80)
    banana.addImage(bananaImage)
    banana.velocityX=-2;
    banana.scale=0.08
    FruitGroup.add(banana)
  }
}




