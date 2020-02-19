// SPAGHETTI CODE WARNING!!!
let mode;

function setup() {
  w = 1024;
  h = 576;
  
  button1 = createSlider(0, 255, 0);
  button1.position(50, 12)
  button2 = createSlider(0, 255, 0);
  button2.position(50, 47)
  button3 = createSlider(0, 255, 0);
  button3.position(50, 82)
  button4 = createSlider(0, 100, 0);
  button4.position(300, 12)
  button5 = createSlider(0, 100, 4)
  button5.position(300, 47)
  button6 = createInput('')
  button6.position(300, 82)
  button7 = createButton('Save Image')
  button7.position(500, 12)
  button7.mousePressed(saveRoutine)
  button8 = createButton('Clear Canvas')
  button8.position(500, 47)
  button8.mousePressed(clearCanvas)
  button9 = createButton("Set Background Color")
  button9.position(855, 85)
  button9.mousePressed(setBG)
  
  // begin drawing types
  let text1 = createP("Drawing Modes (Default: Circles)")
  text1.position(650, 0)

  mode = createRadio();
  mode.option("Squares")
  mode.option("Circles")
  mode.style('width', '480px');
  mode.position(650, 40)
  // end drawing mode stuff
  
  const rgbvalues = createP("RGB Values")
  rgbvalues.position(650, 50)
  
  red1 = createInput(str(button1.value()))
  red1.style("width", "30px")
  red1.position(650, 85)
  red1.input(updateR)
  
  green1 = createInput(str(button2.value()))
  green1.style("width", "30px")
  green1.position(690, 85)
  green1.input(updateG)
  
  blue1 = createInput(str(button3.value()))
  blue1.style("width", "30px")
  blue1.position(730, 85)
  blue1.input(updateB)
  
  const canvassize = createP("Canvas Size")
  canvassize.position(770, 50)
  widthX = createInput(str(w))
  widthX.position(770, 85)
  widthX.style("width", "30px")
  widthX.input(updateX)
  
  widthY = createInput(str(h))
  widthY.position(770+45, 85)
  widthY.style("width", "30px")
  widthY.input(updateY)
  
  const by = createP("x")
  by.position(770+36, 70)
  
  const license = createImg("https://licensebuttons.net/p/zero/1.0/88x31.png", "CC0 (Public Domain) License")
  license.position(500, 82)
  
  const rt = createP('Red', 20, 13)
  const gt = createP('Green', 20, 53)
  const bt = createP('Blue', 20, 93)

  const wt = createP('Stroke Weight')
  wt.position(200, 0)
  const lt = createP('Line Thickness')
  lt.position(200, 33)
  const fn = createP('Image Name')
  fn.position(200, 66)
  let drawingArea = createCanvas(1024, 576);
  
}

function updateX() {
  w = this.value()
  resizeCanvas(this.value(), h)
  print("size is now: " + w + "x" + h)
}

function updateY() {
  h = this.value()
  resizeCanvas(w, this.value())
  print("size is now: " + w + "x" + h)
}

function setBG() {
  const r = button1.value();
  const g = button2.value();
  const b = button3.value();
  background(r, g, b)
}

function saveRoutine() {
  saveCanvas(canvas, button6.value())
}

function clearCanvas() {
  clear();
}

function updateR() {
  button1.value(this.value())
}

function updateG() {
  button2.value(this.value())
}

function updateB() {
  button3.value(this.value())
}

function draw() {
  const r = button1.value();
  const g = button2.value();
  const b = button3.value();
  const w = button4.value();
  const t = button5.value();
  
  red1.value(r)
  green1.value(g)
  blue1.value(b)
  
  const m = mode.value();

  if (mouseIsPressed) {
    strokeWeight(w);
    if (m === "Circles") {
      fill(r, g, b);
      circle(mouseX, mouseY, t, t);
    } else if (m === "Squares") {
      fill(r, g, b);
      square(mouseX, mouseY, t);
    } else {
      fill(r, g, b);
      circle(mouseX, mouseY, t, t); // default to circle
      // apparently, pmouseX and pmouseY
      // was causing the problem of
      // move cursor to the right: scales up
      // and vice versa
    }
  } else {
    fill(0);
  }
}
