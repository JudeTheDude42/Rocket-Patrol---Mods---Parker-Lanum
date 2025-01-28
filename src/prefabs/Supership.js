class Supership extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      this.points = pointValue; // store pointValue
      this.plusminus=(((Math.floor(Math.random()*2))*2)-1)
      this.moveSpeed = this.plusminus*game.settings.spaceshipSpeed
    }
  
    update() {
      // move spaceship left
      this.x -= this.moveSpeed*2;
  
      // wrap from left to right edge
      switch (this.plusminus){
        case 1:
          if (this.x <= -this.width) {
          this.x = game.config.width+this.width;
          }
          break
        case -1:
          if (this.x >= game.config.width+this.width) {
            this.x = 0-this.width;
          }
          break
      }
    }

    reset(){
        this.x=game.config.width
    }
  }