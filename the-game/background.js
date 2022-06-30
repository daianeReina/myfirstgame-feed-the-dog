class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  preload() {
    this.img = loadImage("../Images/background.png");
  }

  drawBackground() {
    image(this.img, this.x, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
