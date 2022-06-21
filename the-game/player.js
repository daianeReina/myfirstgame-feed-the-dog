class Player {
  constructor() {
    this.left = 650;
    this.top = 180;
    this.width = 100;
    this.height = 130;
  }
 

  preload() {
    this.img = loadImage("../Images/dog-tongue.png")
  }


  drawPlayer() {
    push();
    fill(168, 123, 81);
    ellipse(this.left + 140, this.top + 70, 200, 100)// this is the body's dog :)
    pop();
    image(this.img, this.left, this.top, this.width, this.height)
    
    
  }

  moveUp() {
    if (keyIsDown(ARROW_UP)) {
      this.top -= 5;

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
