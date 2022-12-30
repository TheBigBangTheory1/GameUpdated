var backgroundImage, blackWidow, captainAmerica, doctorStrange, groot, hawkeye, hulk, ironMan, thor, vision, wanda, thanos, ultron, redSkull
var player
var playerCount = 0


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function preload(){
   backgroundImage = loadImage("background.jpg")
   blackWidow = loadImage("BlackWidow.png")
   captainAmerica = loadImage("CaptainAmerica.png")
   doctorStrange = loadImage("DoctorStrange.png")
   groot = loadImage("Groot.png")
   hawkeye = loadImage("Hawkeye.png")
   hulk = loadImage("Hulk.png")
   ironMan = loadImage("IronMan.png")
   thor = loadImage("Thor.webp")
   vision = loadImage("Vision.png")
   wanda = loadImage("Wanda.png")
   thanos = loadImage("thanos.png")
   ultron = loadImage("ultron.png")
   redSkull = loadImage("redSkull.png")
   

}


function draw() { 
    background(backgroundImage);
    if(keyDown("space")){
        spawnPlayer()
    }
    textSize(30)
    text("Player Count is:" + playerCount, 10,20)
    if(playerCount > 0 && playerCount%60==0){
        textSize(100)
        text("Whoa!!!", 600, 100)
    }
    drawSprites()
   }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnPlayer(){
    console.log("blahbalh")
    var player = createSprite(windowWidth/2, windowHeight/2, 20, 60)
    var rand = Math.round(random(1,10))
    switch(rand){
     case 1: player.addImage(blackWidow);
             player.scale = 0.4
             break;
     case 2: player.addImage(captainAmerica);
             player.scale = 0.4
             break;
     case 3: player.addImage(doctorStrange);
             player.scale = 0.2
             break;
     case 4: player.addImage(vision);
             player.scale = 0.25
             break;
     case 5: player.addImage(wanda);
            player.scale = 0.18
             break;
     case 6: player.addImage(ironMan);
             player.scale = 0.2
             break;
     case 7: player.addImage(hulk);
             player.scale = 0.8
             break;
     case 8: player.addImage(hawkeye);
             player.scale = 0.2
             break;
     case 9: player.addImage(thor);
             player.scale = 0.3
             break;
     case 10: player.addImage(groot);
              player.scale = 0.3
             break;
        
 }
  if(keyDown("space")){
    playerCount += 1
    
  }
  
}
