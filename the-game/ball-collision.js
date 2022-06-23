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
    this.speed = random(5, 10);
    this.img = img;
    this.dogCatchTheBall = false;
  }

  drawBalls() {
    // this conditinal statement is because in the coodinate Y I want to the ball to bounce, in the top and in the botton.
    if (this.y > CANVAS_HEIGHT - this.diameter) {
      this.dy = -this.dy;
    } else if (this.y < 0) {
      this.dy = -this.dy;
    }

    this.x = this.x + this.dx * this.speed;
    this.y = this.y + this.dy * this.speed;

    image(this.img, this.x, this.y, this.diameter, this.diameter);
  }

  catchTheBall() {
    this.dogCatchTheBall = true;
  }
}

// deleteTheBall() {
//   this.x = -10;
//   this.y = random(50, 450);
// }
// class Balls {
//   constructor() {
//     this.width = CANVAS_WIDTH;
//     this.height = CANVAS_HEIGHT;
//     this.left = -10; // X-COORDINATE -- it will start off canvas before the begin of the canvas.
//     this.top = random(50, 450); // Y-COORDINATE
//     this.speed = random(5, 15);

//     this.d = 50; // the diameter of the cicle
//     this.x = this.d / 2;
//     this.y = random(50, 450);
//     angleMode(DEGREES);
//     this.direction = 45;
//     this.dx = cos(this.direction);
//     this.dy = sin(this.direction);
//   }

//   drawBalls() {
//     push();
//     fill("white");
//     //rect(this.left, this.top, this.width, this.height)

//     if (this.x < this.d / 2) {
//       this.dx = -this.dx;
//     } else if (this.y > CANVAS_HEIGHT - this.d / 2) {
//       this.dy = -this.dy;
//     } else if (this.y < this.d / 2) {
//       this.dy = -this.dy;
//     }

//     this.x = this.x + this.dx * this.speed;
//     this.y = this.y + this.dy * this.speed;

//     this.left = this.x;
//     this.top = this.y;
//     circle(this.left, this.top, this.d);
//     //image(this.img, this.left, this.top);
//     pop();
//   }
// }
