// function setup() { 
//     createCanvas(400, 400);
//   } 
  
//   function draw() { 
//     // ellipse(50, 50, 80, 80);
//     background(220);
//   }

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}