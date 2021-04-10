function setup() {
createCanvas(600, 600);
strokeWeight(12);
}
function draw() {
background(204);

fill(0, 0, 0);
rect(158, 165, 280, 150);
triangle(250,350,200,200,450,100);
triangle(300,400,200,200,500,200);
triangle(300,400,200,200,500,250);
triangle(300,400,200,200,500,300);
triangle(300,400,200,200,500,105);
triangle(300,200,200,200,300,105);
triangle(165,200,100,100,250,200);
triangle(165,200,150,100,250,200);
triangle(165,200,220,100,250,200);
triangle(165,200,275,100,250,200);
triangle(165,200,350,100,250,200);
triangle(165,200,420,100,250,200);
triangle(165,200,380,100,250,200);
triangle(100,200,250,100,250,200);
triangle(70,120,160,250,300,300);
triangle(20,120,160,250,300,300);
triangle(300,400,50,200,500,105);
triangle(300,300,50,200,500,105);

triangle(100,300,300,400,300,100);
triangle(200,300,100,300,250,200);





fill(196, 154, 108);
strokeWeight(5);
strokeJoin(ROUND);

ellipse (230, 770, 250, 700);; //left arm
ellipse (345, 770, 250, 700);; //right arm
ellipse (290, 720, 250, 700);; //body
ellipse(300, 300, 250, 250); //head

strokeWeight(0);
fill(32, 32, 32);
arc(300, 375, 50, 50, 50, PI + QUARTER_PI, CHORD);

fill(255, 0, 0);
arc(300, 375, 20, 20, 25, PI + QUARTER_PI, CHORD);


fill(255, 255, 255);
ellipse(250, 280, 40, 40); //left eye
ellipse(350, 280, 40, 40); //right eye


fill(32, 32, 32);
ellipse(250, 280, 15, 15); //left eye
ellipse(350, 280, 15, 15); //right eye



ellipse(300, 320, 35, 15); //nose

strokeWeight(3);
fill(224, 224, 224, 160);
rect(218, 247, 65, 65); //left glasses
rect(318, 247, 65, 65); //right glasses
line(285, 300, 315, 300);



}
