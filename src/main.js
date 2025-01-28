// Parker Lanum
// Rocket Patrol 2: Rocket Geniuses
// 1:45pm
//
// Added Supership that moves at lightning speeds but worth 100 points (+5 pts)
// Added a timer (+3 pts)
// Added planets to the background (+1 pt)
// Added a parallax background (+3 pts)
// Added time gained on hits and time lost on misses (+5 pts)
// Added player movement after firing (+1 pt)
// Added High Score (+1 pt)
// Added random direction of spaceship movement (+1 pt)

"use strict"

let config = {
     type: Phaser.AUTO,
     width: 640,
     height: 480,
     scene: [ Menu, Play ],
  }

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT