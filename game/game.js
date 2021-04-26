var ballx = 300;
var bally = 300;
var ball2x = 300;
var ball2y = 300;
var ballSize = 80;
var ball3x = 300;
var ball3y = 300; 
var ball4x = 300;
var ball4y = 300;
var ball5x = 300;
var ball5y = 300;
var ball6x = 300;
var ball6y = 300;
var ball7x = 300;
var ball7y = 300;
var score =0;
var gameState = "L1";
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('https://johnjsantos91.github.io/img/trash4.gif');  // cat.jpg needs to be next to this .js file
  img2 = loadImage('https://johnjsantos91.github.io/img/water.gif');
  img3 = loadImage('https://johnjsantos91.github.io/img/fish4.gif');
  img4 = loadImage('https://johnjsantos91.github.io/img/trash5.gif');
  img5 = loadImage('https://johnjsantos91.github.io/img/fish2.gif');
  img6 = loadImage('https://johnjsantos91.github.io/img/fish3.gif');
  img7 = loadImage('https://johnjsantos91.github.io/img/fish6.gif');
  img8 = loadImage('https://johnjsantos91.github.io/img/fish5.gif');
// you can link to an image on your github account
  //img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textSize(20);

} // end setup


function draw() {
  
  background(img2);
  if (gameState == "L1"){
  levelOne();
  }
  if (gameState =="L2"){
    levelTwo();
  }
    if (gameState =="L3"){
    levelThree();
  }
    if (gameState =="L4"){
    levelFour();
  }
    if (gameState =="L5"){
    levelFive();
  }
    if (gameState =="L6"){
    levelSix();  
    }
    
    if (gameState =="L7"){
    levelSeven();  
    }
    
    
text(("score: " + score), width/2, 40);
} // end draw

function levelOne(){
  
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  
  if(distToBall <ballSize) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  } 
  if (score>=5){
  gameState ="L2";
  }
  
  image(img, ballx, bally, ballSize, ballSize);
  line(ballx + ballSize/2, bally + ballSize/2, mouseX, mouseY);
  
  

  
  //ellipse(ballx, bally, ballSize, ballSize);
  
} //end level one


function levelTwo(){
  
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToBall2 = dist(ball2x, ball2y, mouseX, mouseY);
  
  if(distToBall <ballSize) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  
  if(distToBall2 <ballSize) {
   ball2x=random(width);
   ball2y=random(height);
    score = score -1;
  }
  if (score>=10){
    gameState ="L3"; 
   }


//  line(ballx, bally, mouseX, mouseY);
  
  image(img, ballx, bally, ballSize, ballSize);
  image(img3, ball2x, ball2y, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);

  
} //end level Two


function levelThree(){
  
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToBall2 = dist(ball2x, ball2y, mouseX, mouseY);
  var distToBall3 = dist(ball3x, ball3y, mouseX, mouseY);

    if(distToBall <ballSize) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  
  if(distToBall2 <ballSize) {
   ball2x=random(width);
   ball2y=random(height);
    score = score -1;
  }

if(distToBall3 <ballSize) {
   ball3x=random(width);
   ball3y=random(height);
   score = score +1;
}   
   
      if (score>=15){
    gameState ="L4"; 
}

      
//  line(ballx, bally, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, ballSize, ballSize);
  image(img3, ball2x, ball2y, ballSize, ballSize);
  image(img4, ball3x, ball3y, ballSize, ballSize);
  
} //end level three


function levelFour(){
  
  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToBall2 = dist(ball2x, ball2y, mouseX, mouseY);
  var distToBall3 = dist(ball3x, ball3y, mouseX, mouseY);
  var distToBall4 = dist(ball4x, ball4y, mouseX, mouseY);
    

  if(distToBall <ballSize) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  
  if(distToBall2 <ballSize) {
   ball2x=random(width);
   ball2y=random(height);
    score = score -1;
  }

  if(distToBall3 <ballSize) {
   ball3x=random(width);
   ball3y=random(height);
   score = score +1;
  }   
   
  if(distToBall4 <ballSize) {
   ball4x=random(width);
   ball4y=random(height);
   score = score-1;
  }

      if (score>=20){
    gameState ="L5"; 
}

      
//  line(ballx, bally, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, ballSize, ballSize);
  image(img3, ball2x, ball2y, ballSize, ballSize);
  image(img4, ball3x, ball3y, ballSize, ballSize);
  image(img5, ball4x, ball4y, ballSize, ballSize);
} //end level Four


function levelFive(){
  
  text("Level 5", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToBall2 = dist(ball2x, ball2y, mouseX, mouseY);
  var distToBall3 = dist(ball3x, ball3y, mouseX, mouseY);
  var distToBall4 = dist(ball4x, ball4y, mouseX, mouseY);
  var distToBall5 = dist(ball5x, ball5y, mouseX, mouseY);

  if(distToBall <ballSize) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  
  if(distToBall2 <ballSize) {
   ball2x=random(width);
   ball2y=random(height);
    score = score -1;
  }

  if(distToBall3 <ballSize) {
   ball3x=random(width);
   ball3y=random(height);
   score = score +1;
  }   
   
  if(distToBall4 <ballSize) {
   ball4x=random(width);
   ball4y=random(height);
   score = score-1;
  }
  if(distToBall5 <ballSize) {
   ball5x=random(width);
   ball5y=random(height);
   score = score-1;
  }

      if (score>=25){
    gameState ="L6"; 
}

      
//  line(ballx, bally, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, ballSize, ballSize);
  image(img3, ball2x, ball2y, ballSize, ballSize);
  image(img4, ball3x, ball3y, ballSize, ballSize);
  image(img5, ball4x, ball4y, ballSize, ballSize);
  image(img6, ball5x, ball5y, ballSize, ballSize); 


} //end level five

function levelSix(){
  
  text("Level 6", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  var distToBall2 = dist(ball2x, ball2y, mouseX, mouseY);
  var distToBall3 = dist(ball3x, ball3y, mouseX, mouseY);
  var distToBall4 = dist(ball4x, ball4y, mouseX, mouseY);
  var distToBall5 = dist(ball5x, ball5y, mouseX, mouseY);
  var distToBall6 = dist(ball6x, ball6y, mouseX, mouseY);

  if(distToBall <ballSize) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  
  if(distToBall2 <ballSize) {
   ball2x=random(width);
   ball2y=random(height);
    score = score -1;
  }

  if(distToBall3 <ballSize) {
   ball3x=random(width);
   ball3y=random(height);
   score = score +1;
  }   
   
  if(distToBall4 <ballSize) {
   ball4x=random(width);
   ball4y=random(height);
   score = score-1;
  }
  if(distToBall5 <ballSize) {
   ball5x=random(width);
   ball5y=random(height);
   score = score-1;
  }
  if(distToBall6 <ballSize) {
   ball6x=random(width);
   ball6y=random(height);
   score = score-1;
  }

      if (score>=30){
    gameState ="L7"; 
}

      
//  line(ballx, bally, mouseX, mouseY);
  
  //ellipse(ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, ballSize, ballSize);
  image(img3, ball2x, ball2y, ballSize, ballSize);
  image(img4, ball3x, ball3y, ballSize, ballSize);
  image(img5, ball4x, ball4y, ballSize, ballSize);
  image(img6, ball5x, ball5y, ballSize, ballSize); 
  image(img7, ball6x, ball6y, ballSize, ballSize);
  image(img8, ball7x, ball7y, ballSize, ballSize);


} //end level six

function levelSeven(){
  
  text("THANK YOU FOR PLAYING", width/2, height/2);
  
      


} //end level six
