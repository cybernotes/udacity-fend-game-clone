// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.height = 45;
  this.width = 65;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  'use strict';
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  this.xOffscreen = 504;
  this.startX = -90;
  if (this.x >= this.xoffscreen) {
    this.x = this.startX;
    this.randomSpeed();
  }

  this.checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  'use strict';
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.height = 90;
  this.width = 40;
  this.sprite = 'images/char-boy.png';
};
Player.prototype.render = function() {
  "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.update = function(dt) {
  'use strict';
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(pressKey) {
  'use strict';
  switch (pressKey) {
    case 'left':
      this.x -= 101;
      break;
    case 'up':
      this.x += 83;
      break;
    case 'rght':
      this.x += 101;
      break;
    case 'down':
      this.y += 83;
      break;
  };
  if (this.x > 400) {
    this.x = 400;
  };
  if (this.y > 435) {
    this.y = 436;
  };
  if (this.x < 0) {
    this.x = 0;
  };
  if (this.y < 0) {
    alert("You've Made it!")
    this.reset();
  };
};
Enemy.prototype.checkCollision = function() {
  'use strict';
  if (this.x < player.x + player.width &&
    this.x + this.width > player.x &&
    player.y + player.height > this.y &&
    this.height + this.y > player.y) {
    player.reset();
  };
};

Player.prototype.rest = function() {
  'use strict';
  this.x = 200;
  this.y = 415;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
  bug1 = new Enemy(0, 100, 100),
  bug2 = new Enemy(0, 250, 150),
  bug3 = new Enemy(0, 150, 130)
];
allEnemies.push(bug1, bug2, bug3);
var player = new Player(200, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});