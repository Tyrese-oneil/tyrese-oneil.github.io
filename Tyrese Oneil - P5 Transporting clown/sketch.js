






//declare and initialize global variables named x, y, d, and pigEyesX
let x = 100;
let y = 200;
let d = 100;
let clownEyesX;
let clownEyesY;

function setup() {
  createCanvas(400, 400);
  
    x = width/2;
  y = height/2;
}

function draw() {
   if (mouseIsPressed){
   
    background(random(255), random(255),random(255));
     
         
     textSize(32);
     text('Transport', 10, 90);
     fill(255);
text('Hold', 10, 30);
fill(255);
text('to', 10, 60);

  
  }
  else{
    //drawing a grass land background
    
    textSize(32);
     text('Transport', 10, 90);
     fill(0);
text('Hold', 10, 30);
fill(0);
text('to', 10, 60);
    fill(34,139,34);
    rect(x-255, y+120, 800 ,165)
    
    
  }
  
 
  clownEyesX = map(mouseX, 0, width, -5, 5, 1);
  clownEyesY = map(mouseY, 0, height, -5, 5, 1);
  

  
   //draw clown neck
  fill(255,190,180);
  rect(x-16, y+90, 30 ,45)
  
    //draw clown head
  fill(225,195,2);
  ellipse(x,y+220, 145, 190);
  
 //draw clown hat
  fill(55,75,200);
  rect(x-38, y-130, 70 ,45)
  
  //draw clown hair left
  fill(255,20,180);
  ellipse(x-75,y-45, 67, 40);
  ellipse(x-45,y-65, 77, 40);
  ellipse(x-45,y-85, 77, 20);
  
  //draw clown hair right
  fill(255,20,180);
  ellipse(x+75,y-45, 67, 40);
  ellipse(x+45,y-65, 77, 40);
  ellipse(x+35,y-85, 77, 20);
  
  
  //draw clown ears
  ellipse(x-74,y, 21, 31);
  ellipse(x+74,y, 21, 31);
  
  //draw clown ears
  fill(255,190,180);
  ellipse(x-74,y, 21, 31);
  ellipse(x+74,y, 21, 31);
   
 
  
  //draw clown head
  fill(255,190,180);
  ellipse(x,y, 135, 190);
  
  

  
  
  //draw clown eye makeup
  fill(0);
  ellipse(x-25, y-35, 32,55);
  ellipse(x+25, y-35, 32,55);
  
  
  
  //draw clown eye makeup part 2
  fill(255);
  ellipse(x-25, y-30, 32,55);
  ellipse(x+25, y-30, 32,55);
  
 
  //draw clown eyes
  fill(105,235,200);
  ellipse(x-25, y-20, 20,25);
  ellipse(x+25, y-20, 20,25);
    
 
  
  //draw clown pupils
  fill(0);
  ellipse(x-25 + clownEyesX, y-20 + clownEyesY, 6,6);
  ellipse(x+25 + clownEyesX, y-20 + clownEyesY, 6,6);
  

  
  
  //draw clown beard
  fill(255,230,180);
  ellipse(x,y+50, 160, 90);
  
 
  //draw clown nose
  fill(255,5,10);
  ellipse(x,y,45,40);
  
  //draw clown nose shine
  fill(255,153,100);
  ellipse(x-6,y-10,15,10);
  
 //draw clown mouth
  fill(0);
  ellipse(x,y+45, 30,1);
  
 
  
 if (mouseIsPressed){
     fill(0);
  ellipse(x,y+45, 70,30);
 
    
  //draw clown eyes
  fill(random(255), random(255),random(255));
 ellipse(x-25, y-20, 20,25);
  ellipse(x+25, y-20, 20,25);
    
   




  
    
    
  }
}

