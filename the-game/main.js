const game = new Game();
const menu = new Menu();

let scene; // Determine whether the game has started

function setup() {
  scene = 0; //initialy the game has not started
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  textSize(50);
}

function preload() {
  game.preload();
  menu.preload();
}

function draw() {
  clear();
  console.log("Function draw - scene:" + scene);
  switch (scene) {
    case 0:
      background("yellow");
      menu.drawBackground();
      if (mouseIsPressed) {
        scene++;
      }
      break;

    case 1:
      background("yellow");
      game.play();
      break;
  }
}
