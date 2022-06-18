class Game {
  constructor() {
    //this going be Bob, our little dog
    this.player = new Player();
  }

  play() {
    this.player.drawPlayer();

    this.player.moveUp();
    this.player.moveDown();
  }
}
