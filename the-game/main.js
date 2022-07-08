const game = new Game();
const menu = new Menu();

let textStart; //to change the text when mouse hover

let scene; // Determine whether the game has started

function setup() {
  scene = 0; //initialy the game has not started
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundMusic.play();
  backgroundMusic.loop();
  backgroundMusic.setVolume(0.1);
  userStartAudio();
  textSize(50);
}

function preload() {
  game.preload();
  menu.preload();
  //song = loadSound("../Sounds/backgroundSound.mp3");
}

function draw() {
  clear();
  //console.log("Function draw - scene:" + scene);
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
