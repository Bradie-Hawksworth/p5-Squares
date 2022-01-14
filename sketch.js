//The setup() function is called once when the program starts.
//https://p5js.org/reference/#/p5/setup
function setup() {
  createCanvas(400, 400);
  
}

//Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called.
//https://p5js.org/reference/#/p5/draw
function draw() {
  background(220);
  
  //Create a square at x:10 y:20 size:50
  // https://p5js.org/reference/#/p5/square
  square(20,20,50);
}
