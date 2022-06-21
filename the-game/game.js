class Game {
  constructor() {
    //this going be Bob, our little dog
    this.player = new Player();
    //i need to create an array because the game has serveral balls
    this.balls = [];
  }
  
  preload() {
    this.player.preload();
    this.balls.preload();
  }

  play() {
    this.player.drawPlayer();
    //the player just need do move up and down
    this.player.moveUp();
    this.player.moveDown();

    //the balls
    //with the FrameCount you can control how much balls you want
    //how can I randon the balls in the game?
    if (frameCount % 75 === 0) {
      this.balls.push(new Balls());
    }

    this.balls = this.balls.filter((ball) => {
      ball.drawBalls();

      return ball.left <= ball.width + 50;
    });
  }
}
