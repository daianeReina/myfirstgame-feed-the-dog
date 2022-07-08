class Balls {
  constructor(img) {
    this.x = -10; //because it will start off the canvas
    this.y = random(50, 450);
    this.diameter = 50;
    this.radius = this.diameter / 2;
    angleMode(DEGREES);
    this.direction = 45;
    this.dx = cos(this.direction);
    this.dy = sin(this.direction);
    this.speed = random(10, 20);
    this.img = img;
    this.dogCatchTheBall = false;
    this.angle = 0;
  }

  drawBalls() {
    // this conditinal statement is because in the coodinate Y I want to the ball to bounce, in the top and in the botton.
    push();
    if (this.y > CANVAS_HEIGHT - this.diameter) {
      this.dy = -this.dy;
    } else if (this.y < 0) {
      this.dy = -this.dy;
    }

    this.x = this.x + this.dx * this.speed;
    this.y = this.y + this.dy * this.speed;

    // rotate(this.angle);
    // imageMode(CENTER);
    // this.angle += 5;

    image(this.img, this.x, this.y, this.diameter, this.diameter);
    pop();
    // fill(255, 50);
    // rect(this.x, this.y, this.diameter, this.diameter);
  }

  catchTheBall() {
    this.dogCatchTheBall = true;
  }
}
class GoodBall extends Balls {
  constructor(img) {
    super(img);
    this.isGoodForYourHealth = true;
  }
}

class BadBall extends Balls {
  constructor(img) {
    super(img);
    this.isGoodForYourHealth = false;
  }
}
