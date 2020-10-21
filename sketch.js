var monkey ,  monkey , monkey_running

var banana ,BananaImage, obstacle,obstacleImage

var foodGroup, obstacleGroup

var survivalTime=0

var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  BananaImage = loadImage("banana.png");
obstaceImage =loadImage("obstacle.png"); 
  
}



function setup() {
 
 // createCanvas(600,600);  
  
ground = createSprite(400,350,900,10)
ground.velocityX = -4
ground.x=ground.width/2;

  


monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running); 
monkey.scale=0.1

foodGroup=new Group();  
obstacleGroup=new Group();
  
  
}


function draw() {
background(255); 
  
  monkey.collide(ground)
if(keyDown("space")) {
  monkey.velocityY = -15;
  
}
 
  
  
  
if(obstacleGroup.isTouching(monkey)){ ground.velocityX = 0; 
monkey.velocityY = 0; obstacleGroup.setVelocityXEach(0); foodGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1); foodGroup.setLifetimeEach(-1);
 } 

  
  
  
   monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  

  
  stroke("black"); 
  textSize(20); 
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  
spawnbanana();
spawnobstacle(); 
drawSprites();
}
function spawnbanana() {

  if (frameCount % 200 === 0) {
    banana = createSprite(600,250,40,10);
    banana.addImage(BananaImage)
    banana.y = Math.round(random(210,155))
    banana.scale = 0.1;
    banana.velocityX = -3;



banana.lifetime = 290;
foodGroup.add(banana)
   
monkey.depth=banana.depth+1
   
    
    }
}
function spawnobstacle() {
  
  
if (frameCount % 290 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.addImage(obstaceImage)
  
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;


 
obstacle.lifetime = 290
obstacleGroup.add(obstacle)
   
   
    
    
    }
}






var banana ,BananaImage, obstacle,obstacleImage

var foodGroup, obstacleGroup

var survivalTime=0

var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  BananaImage = loadImage("banana.png");
obstaceImage =loadImage("obstacle.png"); 
  
}



function setup() {
 
 // createCanvas(600,600);  
  
ground = createSprite(400,350,900,10)
ground.velocityX = -4
ground.x=ground.width/2;

  


monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running); 
monkey.scale=0.1

foodGroup=new Group();  
obstacleGroup=new Group();
  
  
}


function draw() {
background(255); 
  
  monkey.collide(ground)
if(keyDown("space")) {
  monkey.velocityY = -15;
  
}
 
  
  
  
if(obstacleGroup.isTouching(monkey)){ ground.velocityX = 0; 
monkey.velocityY = 0; obstacleGroup.setVelocityXEach(0); foodGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1); foodGroup.setLifetimeEach(-1);
 } 

  
  
  
   monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  

  
  stroke("black"); 
  textSize(20); 
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  
spawnbanana();
spawnobstacle(); 
drawSprites();
}
function spawnbanana() {

  if (frameCount % 200 === 0) {
    banana = createSprite(600,250,40,10);
    banana.addImage(BananaImage)
    banana.y = Math.round(random(210,155))
    banana.scale = 0.1;
    banana.velocityX = -3;



banana.lifetime = 290;
foodGroup.add(banana)
   
monkey.depth=banana.depth+1
   
    
    }
}
function spawnobstacle() {
  
  
if (frameCount % 290 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.addImage(obstaceImage)
  
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;


 
obstacle.lifetime = 290
obstacleGroup.add(obstacle)
   
   
    
    
    }
}





