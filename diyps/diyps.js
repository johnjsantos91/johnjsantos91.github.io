var img;
var img2;
var img3;
var img4;
var initials ='JJS'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('https://johnjsantos91.github.io/images/bear1.jpg');  // cat.jpg needs to be next to this .js file
  img2 = loadImage('https://johnjsantos91.github.io/images/boba1.gif');
  img3 = loadImage('https://johnjsantos91.github.io/images/cup.gif');
  img4 = loadImage('https://johnjsantos91.github.io/images/amongus.gif');
// you can link to an image on your github account
  //img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(800, 800);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(0, 0, 150, 10);
    strokeWeight(2);
    //line(10, 10, mouseX, mouseY);
    image(img2, mouseX-20, mouseY-20, 50, 50);
    
  } else if (toolChoice == '2') { // second tool

    stroke(0, 100, 80, 80);
    strokeWeight(2);
    //line(500, 380, mouseX, mouseY);
    image(img3, mouseX-20, mouseY-20, 600, 600);
    
  } else if (toolChoice == '3') { // third tool
    
    fill(random(255), random(255), random(255), random(255));
    stroke(0, 0, 0, 20);
    noStroke();
    ellipse(mouseX, mouseY, 5*(pmouseX-mouseX), 5*(pmouseY-mouseY));
    
    
  } else if (toolChoice == '4') {

    fill(102, 0, 0, 10);
    noStroke();
    rect(mouseX, mouseY, 20, 60);
    
  } else if (key == '5') { // this tool calls a function
  noStroke();
    
    fill(102, 0, 0, 20);
    noStroke();
    rect(mouseX, mouseY, 5*(pmouseX-mouseX), 5*(pmouseY-mouseY));
    
    
  } else if (toolChoice == '6') {

    strokeWeight(1);
    stroke(0, 0, 0, 100);
    fill(random(255), random(255), random(255), random(255));
 ellipse(mouseX, mouseY, 9, 9);
 
  } else if (toolChoice == '7') {
strokeWeight(1);
stroke(0, 0, 0, 100);
    fill(153, 255, 153, 10);
    rect(mouseX, mouseY, 20, 20);
    
    
  } else if (toolChoice == '8') {

    fill(100, 200, 100);
    strokeWeight(1);
    stroke(random(255), random(255), random(255), random(255));
   
     var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
 strokeWeight(weight);
 line(mouseX, mouseY, pmouseX, pmouseY);

    
    
  } else if (toolChoice == '9') {

   stroke(0, 0, 0, );
    strokeWeight(1);
    fill(300, 100, 0, 80);
    //rect(mouseX, mouseY, 20, 20);
    image(img4, mouseX-20, mouseY-20, 50, 50);
    
    
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 50, 25);
    
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
