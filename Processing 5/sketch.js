/*
  Setting up Profile using P5.js - loading image through Urls and writing something about myself...
  Author: Sadip Giri (sadipgiri@bennington.edu)
*/

var canvasHeight = 360;
var canvasWidth = 640;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  img = createImg('https://avatars3.githubusercontent.com/u/14111239?s=400&u=450f6389a09cb00e31f51947f2aeb983db278a24&v=4');
  img.hide();
}

function draw() {
	width = 250;
	height = 250;
  image(img, canvasWidth/3, canvasHeight/3, width, height); 
	textSize(32);
	text('Sadip Giri', 250, 100);
}