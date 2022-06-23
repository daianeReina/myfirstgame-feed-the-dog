const game = new Game();

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  background("green");
  game.play();
}

function preload() {
  game.preload();
}
