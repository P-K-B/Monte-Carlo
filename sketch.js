function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(14);
  parameters = new parameters();
  buttons = new buttons();
  x = 50;
  y = 300;
  y_w = windowHeight - y - 40;
  x_w = y_w;
  rect(x, y, x_w, y_w);
}