var PLAY=1;
var END=0;
gameState=PLAY;
var submarine, submarineImg;
var missile, missilesGroup, missileImg;
var background, backgroundImg;
var virus, virusImg;

function preload(){
  submarineImg = loadImage("submarine.png");
  missileImg = loadImage("missile.jpg");
  virusImg = loadImage("virus.png");




  backgroundImg = loadImage("underwater background.jpg");
}



function setup() {
  createCanvas(1200,400);
  submarine = createSprite(100, 200, 50, 50);
  submarine.addImage("submarine",submarineImg);
  submarine.scale = 0.2;

  background.velocityX=-5;



}

function draw() {
background(backgroundImg)
  if(gameState === PLAY){
   

  if(keyDown(UP_ARROW)){
    submarine.y = submarine.y - 5;
  }
  if(keyDown(DOWN_ARROW)){
    submarine.y = submarine.y + 5;
  }
  if(keyDown(LEFT_ARROW)){
    submarine.x = submarine.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    submarine.x = submarine.x + 5;
  }
  spawnvirus();
}
   
  drawSprites();
}
function spawnvirus(){
if(frameCount % 120 === 0){
  var virus = createSprite(1200,120,20,20);

  virus.velocityX = -5;
virus.y = Math.round(random(10,240));
  virus.addImage(virusImg);
virus.scale = 0.15;
virus.lifetime = 300;

}

}