// SPAGHETTI CODE WARNING!!!
let mode;
let text_t;

function setup() {
  w = 1024;
  h = 768;

  button1 = createSlider(0, 255, 0);
  button1.position(50, 12)
  button1.style("width", "100px")
  button2 = createSlider(0, 255, 0);
  button2.position(50, 47)
  button2.style("width", "100px")
  button3 = createSlider(0, 255, 0);
  button3.position(50, 82)
  button3.style("width", "100px")
  button4 = createSlider(0, 100, 0);
  button4.position(300, 12)
  button4.style("width", "100px")
  button5 = createSlider(0, 100, 4)
  button5.position(300, 47)
  button5.style("width", "100px")
  button6 = createInput('')
  button6.position(300, 82)
  button6.style("width", "130px")
  button7 = createButton('Save Image')
  button7.position(500, 12)
  button7.mousePressed(saveRoutine)
  button8 = createButton('Clear Canvas')
  button8.position(500, 47)
  button8.mousePressed(clearCanvas)
  button9x = createButton('Resize Canvas')
  button9x.position(500, 82)
  button9x.mousePressed(resizeCanvas_t)

  // begin drawing types
  let text1 = createP("Drawing Modes (Default: Circles)")
  text1.position(650, 0)

  mode = createRadio();
  mode.option("Squares")
  mode.option("Circles")
  mode.option("Erase")
  mode.option("Text")
  mode.style('width', '480px');
  mode.position(650, 40)
  // end drawing mode stuff

  //const rgbvalues = createP("RGB Values")
  //rgbvalues.position(650, 50)

  red1 = createInput(str(button1.value()))
  red1.style("width", "30px")
  red1.position(155, 14)
  red1.input(updateR)

  green1 = createInput(str(button2.value()))
  green1.style("width", "30px")
  green1.position(155, 49)
  green1.input(updateG)

  blue1 = createInput(str(button3.value()))
  blue1.style("width", "30px")
  blue1.position(155, 84)
  blue1.input(updateB)

  colorV = createButton("")
  colorV.position(450, 12)
  colorV.style("border", "2px solid black")
  colorV.style("height", "95px")
  colorV.style("width", "40px")
  colorV.style("cursor", "default")
  colorV.style("outline", "none")

  const canvassize = createP("Canvas Size")
  canvassize.position(650, 50)
  widthX = createInput(str(w))
  widthX.position(650, 85)
  widthX.style("width", "30px")
  // widthX.input(updateX)

  widthY = createInput(str(h))
  widthY.position(695, 85)
  widthY.style("width", "30px")
  // widthY.input(updateY)

  const by = createP("x")
  by.position(685, 69)
  
  // begin text drawing mode
  text_m = createP("Text")
  text_m.position(735, 50)
  
  text_v = ''
  text_v = createInput('', 'text')
  text_v.position(735, 85)
  
  weightV = createInput("")
  weightV.style("width", "25px")
  weightV.position(405, 12)
  weightV.input(updatew_box)
  
  thicknessV = createInput("")
  thicknessV.style("width", "25px")
  thicknessV.position(405, 47)
  thicknessV.input(updatet_box)

  const rt = createP('Red', 20, 13)
  const gt = createP('Green', 20, 53)
  const bt = createP('Blue', 20, 93)

  const wt = createP('Stroke Weight')
  wt.position(200, 0)
  const lt = createP('Line Thickness')
  lt.position(200, 33)
  const fn = createP('Image Name')
  fn.position(200, 66)
  
  fps = createP("Frame Rate: " + frameRate())
  setTimeout(FPS, 500)
  
  black = createButton("")
  black.position(105, 120)
  black.style("border", "1px solid black")
  black.style("height", "15px")
  black.style("width", "15px")
  black.style("outline", "none")
  black.style("background-color", "#000000")
  black.mousePressed(butBlack)

  wh = createButton("")
  wh.position(125, 120)
  wh.style("border", "1px solid black")
  wh.style("height", "15px")
  wh.style("width", "15px")
  wh.style("outline", "none")
  wh.style("background-color", "#FFFFFF")
  wh.mousePressed(butWhite)

  red2 = createButton("")
  red2.position(145, 120)
  red2.style("border", "1px solid black")
  red2.style("height", "15px")
  red2.style("width", "15px")
  red2.style("outline", "none")
  red2.style("background-color", "#880000")
  red2.mousePressed(butRed)

  cyan = createButton("")
  cyan.position(165, 120)
  cyan.style("border", "1px solid black")
  cyan.style("height", "15px")
  cyan.style("width", "15px")
  cyan.style("outline", "none")
  cyan.style("background-color", "#AAFFEE")
  cyan.mousePressed(butCyan)

  purp = createButton("")
  purp.position(185, 120)
  purp.style("border", "1px solid black")
  purp.style("height", "15px")
  purp.style("width", "15px")
  purp.style("outline", "none")
  purp.style("background-color", "#CC44CC")
  purp.mousePressed(butPurple)

  gree = createButton("")
  gree.position(205, 120)
  gree.style("border", "1px solid black")
  gree.style("height", "15px")
  gree.style("width", "15px")
  gree.style("outline", "none")
  gree.style("background-color", "#00CC55")
  gree.mousePressed(butGreen)

  blue4 = createButton("")
  blue4.position(225, 120)
  blue4.style("border", "1px solid black")
  blue4.style("height", "15px")
  blue4.style("width", "15px")
  blue4.style("outline", "none")
  blue4.style("background-color", "#0000AA")
  blue4.mousePressed(butBlue)

  yell = createButton("")
  yell.position(245, 120)
  yell.style("border", "1px solid black")
  yell.style("height", "15px")
  yell.style("width", "15px")
  yell.style("outline", "none")
  yell.style("background-color", "#EEEE77")
  yell.mousePressed(butYellow)
  
  button9 = createButton("Set Background Color")
  button9.position(750, 115)
  button9.mousePressed(setBG)
  
  let drawingArea = createCanvas(w, h);
  
  license = createImg("https://licensebuttons.net/p/zero/1.0/88x31.png", "CC0 (Public Domain) License")
  license.position(30, h)
}

function resizeCanvas_t() {
  w = widthX.value()
  h = widthY.value()
  resizeCanvas(w, h)
  print("size is now: " + w + "x" + h)
}

function updatew_box() {
  button4.value(this.value())
}

function updatet_box() {
  button5.value(this.value())
}

function butBlack() {
  button1.value(0)
  button2.value(0)
  button3.value(0)
}

function butWhite() {
  button1.value(255)
  button2.value(255)
  button3.value(255)
}

function butRed() {
  button1.value(136)
  button2.value(0)
  button3.value(0)
}

function butCyan() {
  button1.value(170)
  button2.value(255)
  button3.value(238)
}

function butPurple() {
  button1.value(204)
  button2.value(68)
  button3.value(204)
}

function butGreen() {
  button1.value(0)
  button2.value(204)
  button3.value(85)
}

function butBlue() {
  button1.value(0)
  button2.value(0)
  button3.value(170)
}

function butYellow() {
  button1.value(238)
  button2.value(238)
  button3.value(119)
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

function FPS() {
  fps.html("Frame Rate: " + int(frameRate()) + " ")
  setTimeout(FPS, 500)
}

function draw() {
  const r = button1.value();
  const g = button2.value();
  const b = button3.value();
  const w = button4.value();
  const t = button5.value();
  
  thicknessV.value(t)
  weightV.value(w)

  red1.value(r)
  green1.value(g)
  blue1.value(b)

  let rgb = "rgb(" + r + ", " + g + ", " + b + ")"

  colorV.style("background-color", rgb)

  const m = mode.value();

  if (mouseIsPressed) {
    if (m === "Circles") {
      strokeWeight(w);
      fill(r, g, b);
      circle(mouseX, mouseY, t, t);
    } else if (m === "Squares") {
      strokeWeight(w);
      fill(r, g, b);
      square(mouseX, mouseY, t);
    } else if (m === "Erase") {
      p5.instance.drawingContext.globalCompositeOperation = 'destination-out';
    } else if (m === "Text") {
      const flexTape = text_v.value();
      fill(r, g, b);
      text(flexTape, mouseX, mouseY)
    } else {
      strokeWeight(w);
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
  license.position(30, h) // update license position to accomodate the canvas
  
}
