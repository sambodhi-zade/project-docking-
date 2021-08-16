var issimg,iss,bg,x;
var scimg1,scimg2,scimg3,scimg4;
var hasDocked = false;
var hasDocked,spacecraft;


function preload(){

  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg2 = loadImage("spacecraft2.png");
  scimg3 = loadImage("spacecraft3.png");
  scimg4 = loadImage("spacecraft4.png");
  bg = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(1000,600);
  
  iss = createSprite(530,260);
  iss.addImage(issimg);
  iss.scale = 1;
  rotate(360);

 spacecraft = createSprite(485,540);
 spacecraft.addImage(scimg);

 spacecraft.scale = 0.15;
 

}

function draw() {
  background(bg);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.y = spacecraft.y -2;

  }

  

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x -2;
    
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg4);
    spacecraft.x = spacecraft.x +2;
    
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scimg);
    spacecraft.y = spacecraft.y +2;
    
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x_10)){
    hasDocked = true;
    textSize(25);
    fill("white")
text("Docking Succesful", 200,300);
}


  drawSprites();

 

  
}