class Balls {
  constructor() {
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.left = -10; // X-COORDINATE -- it will start off canvas before the begin of the canvas.
    this.top = random(50, 450); // Y-COORDINATE
    this.speed = random(5, 15);

    this.d = 50; // the diameter of the cicle
    this.x = this.d / 2;
    this.y = random(50, 450);
    angleMode(DEGREES);
    this.direction = 45;
    this.dx = cos(this.direction);
    this.dy = sin(this.direction);
  }
  preload() {
    this.img = loadImage("../Images/ball1.png"); // I need to know how I can put an image instead a circle
  }

  drawBalls() {
    push();
    fill("white");
    //rect(this.left, this.top, this.width, this.height)

    if (this.x < this.d / 2) {
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
    //image(this.img, this.left, this.top);
    pop();
  }
}
