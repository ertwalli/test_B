'use strict';

var img;

function preload() {
  img = loadImage('data/pic.png');
}

function setup() {
  createCanvas(408, 581);
  image(img, 0, 100);
}

function draw() {
  var x1 = floor(random(width));
  var y1 = 50;

  var x2 = round(x1 + random(-7, 7));
  var y2 = round(y1 + random(-5, 5));

  var w = floor(random(10, 40));
  var h = height - 100;

  set(x2, y2, get(x1, y1, w, h));
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    image(img, 0, 100);
  }
}