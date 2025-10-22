/*
----- Coding Tutorial by Patt Vira ----- 
Name: Pastel Gradient Screensaver
Video Tutorial: https://youtu.be/Mdt81-7-U18

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let balls = []; let num = 15;

function setup() {
  createCanvas(2560, 1440);
  
  for (let i=0; i<num; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(800, 1200);
    balls[i] = new Circle(x, y, r);
  }
  
}

function draw() {
  background(255);
  
  for (let i=0; i<num; i++) {
    balls[i].update();
    balls[i].display();
  }
  
}
