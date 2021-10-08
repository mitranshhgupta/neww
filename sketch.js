var cloud,cloudImg,cloudchrashIMG
var ground,groundImg
var rocket,rocketImg
var dragon,dragonImg
var score=0
var PLAY = 1
var END = 0
var gameState= PLAY
var dragGroup,rockGroup
function preload(){
cloudImg=loadImage("plane.png")
groundImg=loadImage("real ground.jpg")
rocketImg=loadImage("misssile.png")
dragonImg=loadImage("mitu.png")
cloudchrashIMG=loadImage("crash.png")
}

function setup(){
 
    createCanvas(windowWidth,windowHeight)
    ground=createSprite(width/2,height/2,1000,1500)
ground.addImage("ground", groundImg)
ground.scale=1.5
//ground.velocityX=-4
if (ground.x<3000){
    ground.x=ground.width/2
  }
 
cloud=createSprite(150,610,100,100)
cloud.addImage("mainCharecter",cloudImg)
cloud.scale=0.5
cloud.addImage("colided",cloudchrashIMG)
dragGroup= new Group()
  rockGroup= new Group()


  cloud.setCollider("rectangle",0,0,600,220)
   cloud.debug=true
}

function draw(){
    background("white")
if (gameState==PLAY) {
   
  score = score+Math.round(getFrameRate()/60)
  cloud.y=World.mouseY
  spawn_missile()
  spawn_dragon()
  drawSprites();
  
  if (cloud.collide(dragGroup)) {
    gameState=END
}
if (cloud.collide(rockGroup)) {
  gameState=END
}
}
  
    else if (gameState==END) {
        rocket.velocityX=0
        dragon.velocityX=0
        cloud.velocity=0

        drawSprites();
        cloud.changeImage("colided",cloudchrashIMG)
        fill("red")
        textSize(80)
        text("Game Over",width/2-100,height/2)
        
    }
   
    

    fill("red")
    textSize(30)
    text("Score:"+score,width/2+200,50)

}
function spawn_missile(){
    if(frameCount %200==0){
        rocket=  createSprite(1200,random(1,600),100,100)
        rocket.addImage("rocket",rocketImg)
        rocket.velocityX=-3
      rocket.scale= 0.5   
      rocket.setCollider("rectangle",0,0,460,220)
      rocket.debug=true
      rockGroup.add(rocket)
     }
     
}
function spawn_dragon(){
    if(frameCount %300==0){
        dragon=  createSprite(1200,random(1,600),100,100)
        dragon.addImage("dragon",dragonImg)
        dragon.velocityX=-3
      dragon.scale= 0.5
      
      dragon.setCollider("rectangle",0,0,500,220)
      dragon.debug=true
      dragGroup.add(dragon)
     }
     
}
