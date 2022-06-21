class Balls {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.left = -10; // X-COORDINATE -- it will start off canvas before the begin of the canvas.
    this.top = random(50, 450); // Y-COORDINATE
    this.speed = 5;

    this.d = 50; // the diameter of the cicle
    this.x = this.d / 2;
    this.y = random(50, 450);
    angleMode(DEGREES);
    this.direction = 45;
    this.dx = cos(this.direction);
    this.dy = sin(this.direction);
  }

  drawBalls() {
    push();
    fill("white");
    //rect(this.left, this.top, this.width, this.height)

    /*if (this.x > CANVAS_WIDTH - this.d / 2) {
        this.dx = -1 * this.dx;
    } else */ if (this.x < this.d / 2) {
      this.dx = -this.dx;
    } else if (this.y > CANVAS_HEIGHT - this.d / 2) {
      this.dy = -this.dy;
    } else if (this.y < this.d / 2) {
      this.dy = -this.dy;
    }

    this.x = this.x + this.dx * this.speed;
    this.y = this.y + this.dy * this.speed;

    this.left = this.x;
    this.top = this.y;
    circle(this.left, this.top, this.d);
    pop();
  }
}
