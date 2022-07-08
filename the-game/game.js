class Game {
  constructor() {
    //this going be Bob, our little dog
    this.player = new Player(playerScore, playerLife);
    //i need to create an array because the game has serveral balls
    this.balls = [];
    this.ballsImages = [];
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
    backgroundMusic = loadSound("../Sounds/backgroundSound.mp3");
    //wrongBallSound = loadSound("../Sounds/mixkit-dog-whimper-sad-466.mp3");

    // Randomising the balls, i < 6 , because I have 6 Images.
    for (let i = 0; i < 6; i++) {
      this.ballsImages.push(loadImage("../Images/ball" + [i] + ".png"));
    }
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    //the player just need do move up and down.
    this.player.moveUp();
    this.player.moveDown();

    //the balls is my obstacles
    //with the FrameCount you can control how much balls you want
    //how can I randon the balls in the game?
    if (frameCount % 75 === 0) {
      if (!this.balls.length) {
        const indexRandomImage = int(random(0, 6));
        const image = this.ballsImages[indexRandomImage];
        if (indexRandomImage < 4) {
          this.balls.push(new GoodBall(image));
        } else {
          this.balls.push(new BadBall(image));
        }
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

        //Lifes of the Dog
        //Bob, the dog, has only 3 lifes when he catch a thorn ball (ball4 or ball5) he lost a life,
        //if he lost all of his lifes.. Game OVER
        //Lost a life
        if (ball.isGoodForYourHealth) {
          this.player.score++;
        } else {
          // wrongBallSound.play();
          // wrongBallSound.setVolume(0.1);
          // userStartAudio();
          if (this.player.life >= 1) {
            this.player.life -= 1;
          } else {
            fill("black");
            textSize(70);
            text("GAME OVER", CANVAS_WIDTH / 2 + 10, CANVAS_HEIGHT / 2 + 5);
            fill("white");
            textSize(70);
            text("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

            fill("black");
            textSize(40);
            text("Try Again", CANVAS_WIDTH / 2 + 10, CANVAS_HEIGHT / 1.5 + 5);
            fill("red");
            textSize(40);
            text("Try Again", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 1.5);

            noLoop();
          }
        }
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
