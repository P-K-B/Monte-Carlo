// 'use strict';
var manag;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(14);
  // create_control(40, 30);
  // create_window(40, 220, 500, 500);
  // create_log(600, 220, 400, 500);
  parameters = new parameters();
  buttons = new buttons();
  x = 50;
  y = 300;
  y_w = windowHeight - y - 40;
  x_w = y_w;
  rect(x, y, x_w, y_w);
  // manag.Draw_frame();
}

function draw() {}