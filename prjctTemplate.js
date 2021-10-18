


function preload(){
  obsticle1Img=loadImage("Haunter.webp")
  obsticle2Img=loadImage("Gengar.webp")
  obsticle3Img=loadImage("Onix.webp")
 
function setup() {
  createCanvas(displayWidth,displayHeight);
  o=createSprite(400,0,800,800)
  o.addAnimation("oggy",)
  o.addAnimation("friend1",)
  o.addAnimation("friend2",)
  o.addAnimation("friend3",)
 
 
  
  gengargroup=createGroup();
 Hauntergrp=createGroup();
  onixgrp=createGroup();
 

  rectMode(CENTER);


}

function draw() {
  background(0);
 if(gameState==="play"){
  spaceship.x=mouseX;
  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if (keyDown("space")) {
    createBullet(spaceship.x);
  }
  

  
  
  
  var select_enemy = Math.round(random(0,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_enemy == 0) {
      createonix();
    } else if (select_enemy == 1) {
      creategengar();
    } else if (select_enemy == 2) {
      createhaunter();
    } 
    
  }

  if(o.isTouching(enemyGroup)){
    
    gameState="end"
  }
 }else if(gameState==="end"){
  
   enemyGroup.setLifetimeEach(0);
   enemyGroup.setVelocityYEach(0);
   
   textSize(30);
   fill("red")
   text("MISSION FAILED",displayWidth/2-100,120)
 }

  
}
  
  drawSprites();
  textSize(20);
  fill("green")
  text("ENEMY DESTROYED: "+ score, 10, 30);
}


function createonix() {
  var onix = createSprite();
  
  onixgroup.add(onix);
  enemyGroup.add(onix)
}

function createGengar() {
  var gengar = createSprite();
  
  gengargrp.add(Gengar);
  enemyGroup.add(Gengar)
}

function createhaunter() {
  var Gengar = createSprite(Math.round(random(30, displayWidth-100)), 0, 10, 10);
  
  hauntergrp.add(haunter);
  enemyGroup.add(haunter);
  
}

function spawnObstecals (){
  
}


  

