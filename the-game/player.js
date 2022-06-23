class Player {
  constructor(span) {
    this.x = 650;
    this.y = 180;
    this.width = 100;
    this.height = 130;
    this.score = 0;
    this.span = span;
  }

  preload() {
    this.img = loadImage("../Images/dog-tongue.png");
  }

  drawPlayer() {
    this.span.innerText = this.score;
    push();
    fill(168, 123, 81);
    ellipse(this.x + 140, this.y + 70, 200, 100); // this is the body's dog :)
    pop();
    image(this.img, this.x, this.y, this.width, this.height);
  }

  moveUp() {
    if (keyIsDown(ARROW_UP)) {
      this.y -= 5;

      if (this.y <= 0) {
        this.y = 0;
      }
    }
  }

  moveDown() {
    if (keyIsDown(ARROW_DOWN)) {
      this.y += 5;

      if (this.y >= CANVAS_HEIGHT - this.height) {
        this.y = CANVAS_HEIGHT - this.height;
      }
    }
  }
}
