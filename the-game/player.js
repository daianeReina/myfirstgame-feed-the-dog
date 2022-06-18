class Player {
  constructor() {
    this.left = 650;
    this.top = 200;
    this.width = 100;
    this.height = 100;
  }
  // I need to add the image, for now lets try works the square
  //preload() {this.img = loadImage("")}

  drawPlayer() {
    push();
    fill("black");
    rect(this.left, this.top, this.width, this.height);
    pop();
  }

  moveUp() {
    if (keyIsDown(ARROW_UP)) {
      this.top -= 5;
      // 25 is just to be a space between the border
      if (this.top <= 0) {
        this.top = 0;
      }
    }
  }

  moveDown() {
    if (keyIsDown(ARROW_DOWN)) {
      this.top += 5;

      if (this.top >= CANVAS_HEIGHT - this.height) {
        this.top = CANVAS_HEIGHT - this.height;
      }
    }
  }
}
