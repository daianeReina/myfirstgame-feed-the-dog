class Menu {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xRect = 200;
    this.yRect = 150;
    this.textSize = 30;
  }
  // setup() {
  //   this.textSize;
  //   this.textStart = text(
  //     "Click to Start",
  //     CANVAS_WIDTH / 2,
  //     CANVAS_HEIGHT - 50
  //   );
  //
  // }
  preload() {
    this.img = loadImage("../Images/background.png");
    this.myFont = loadFont("../Fonts/LuckiestGuy-Regular.ttf");
    // this.sound = loadSound("../Sounds/backgroundSound2.mp3");
  }

  drawBackground() {
    image(this.img, this.x, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
    textSize(70);
    fill(0, 0, 0, 51);
    text("CATCH THE BALL", CANVAS_WIDTH / 2 + 5, CANVAS_HEIGHT / 2 + 10); // the shadow
    fill("black");
    textSize(70);
    textFont(this.myFont);
    textAlign(CENTER);
    text("CATCH THE BALL", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    fill(0, 0, 0, 95);
    textSize(this.textSize);
    this.startText = text(
      "Click to Start",
      CANVAS_WIDTH / 2 + 2,
      CANVAS_HEIGHT / 1.5 + 5
    ); // the shadow
    fill("red");
    textSize(this.textSize);
    this.startText = text(
      "Click to Start",
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 1.5
    );
  }

  // changeTextSize() {
  //   this.textSize = 50;
  //   console.log("change the size");
  // }
}
