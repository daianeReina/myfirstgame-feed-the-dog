class Menu {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xRect = 200;
    this.yRect = 150;
  }

  preload() {
    this.img = loadImage("../Images/background.png");
    this.myFont = loadFont("../Fonts/LuckiestGuy-Regular.ttf");
  }

  drawBackground() {
    image(this.img, this.x, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
    fill("black");
    textSize(70);
    textFont(this.myFont);
    textAlign(CENTER);
    text("CATCH THE BALL", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 3);
    textSize(30);
    text("Click to Start", CANVAS_WIDTH / 2, CANVAS_HEIGHT - 50);
  }
}
