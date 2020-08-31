var banana, bananaimage, bananagroup
var obstacle, obstacleimage, obstaclegroup
var Background,backimage,ground
var score
var player, player_running
function preload(){
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  backimage = loadImage("jungle.jpg");
  
  bananaimage = loadImage ("banana.jpg");
  obsacleimage = loadImage ("stone.jpg");
}
function setup() {
  createCanvas(400, 400);
  ground = createSprite(200,200,800,10);
  Background = addImage("background", backimage);
  Background.VelocityX=-3;
  ground.visibility=false;
  player = createSprite(50,350,50,50)
  player = addAnimation("player",player_running)
  
  
}

function draw() {
  background(220);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (banana.isTouching(player)){
    score=0+2;
    destroy=banana;
  }
  switch(score){
    case 10: player.scale=0.12;
             break;
    case 20: player.scale=0.14;
             break;
    case 30: player.scale=0.16;
             break;
    case 40: player.scale=0.18;
             break;
             default: break;
  }
  if (obstacle.isTouching(player)){
    player.scale=0.10
  }
  stroke("white")
textSize(20)
fill("white")
text("score: "+score,500,50)
  
  
  
  
}
function bananagroup() {
  banana = createSprite(random(230,270),450,800,10);
  banana = addImage("banana", bananaimage);
  banana.velocityY=-3;
  bananaGroup.addSprite=banana
  
  
}
function obstaclegroup() {
  obstacle = createSprite(random(230,270),450,800,10);
  obstacle = addImage("banana", bananaimage);
  obstacle.velocityY=-3;
  obstacleGroup.addSprite=obstacle
  
  
}

