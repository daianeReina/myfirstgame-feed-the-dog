class Game {
  constructor() {
    //this going be Bob, our little dog
    this.player = new Player(playerScore);
    //i need to create an array because the game has serveral balls
    this.balls = [];
    this.ballsImages = [];
  }

  preload() {
    this.ballImg = loadImage("../Images/ball1.png");
    for(let i = 0)
    this.player.preload();
  }

  play() {
    this.player.drawPlayer();
    //the player just need do move up and down
    this.player.moveUp();
    this.player.moveDown();

    //the balls is my obstacles
    //with the FrameCount you can control how much balls you want
    //how can I randon the balls in the game?
    if (frameCount % 180 === 0) {
      if (!this.balls.length) {
        this.balls.push(new Balls(this.ballImg));
      }
    }

    this.balls = this.balls.filter((ball) => {
      ball.drawBalls();

      let result = ball.x <= CANVAS_WIDTH + 50 && !ball.dogCatchTheBall;

      //console.log(result)

      return result;
    });

    //Collision
    for (let ball of this.balls) {
      if (this.isCollinding(this.player, ball)) {
        ball.catchTheBall();

        this.player.score++;

        //console.log('collision')
      }
    }
  }

  isCollinding(player, ball) {
    //console.log('isCollinding')
    // conditions for true collision

    // Bottom of Player > Top of Ball
    const bottonOfPlayer = player.y + player.height;
    const topOfBall = ball.y;
    const isBottonOfPlayerBiggerThanTopOfBall = bottonOfPlayer >= topOfBall;

    // Top of Player <= Bottom of Ball  >>>as vezes dá true
    const topOfPlayer = player.y;
    const bottonOfBall = ball.y + ball.diameter;
    const isTopOfPlayerSmallerThanBottonOfBall = topOfPlayer <= bottonOfBall;

    // Left of Player <= Right of Ball >>>as vezes dá true
    const leftOfPlayer = player.x;
    const rightOfBall = ball.x + ball.diameter;
    const isLeftOfPlayerSmallerThanRightOfBall = leftOfPlayer <= rightOfBall;

    // Right of Player >= Left of Ball >>>sempre dá true
    const rightOfPlayer = player.x + player.width;
    const leftOfBall = ball.x;
    const isRightOfPlayerBiggerThanLeftOfBall = rightOfPlayer >= leftOfBall;

    let result =
      isBottonOfPlayerBiggerThanTopOfBall &&
      isTopOfPlayerSmallerThanBottonOfBall &&
      isLeftOfPlayerSmallerThanRightOfBall &&
      isRightOfPlayerBiggerThanLeftOfBall;

    //console.log(result);

    return result;
  }
}
