const Asteroid = require('./asteroid');

function Game(options) {
  this.DIM_X = 800;
  this.DIM_Y = 800;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids()
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    options = { pos: this.randomPosition() }

    this.asteroids.push(
      new Asteroid(options)
    )
  }
}

Game.prototype.randomPosition = function() {
  return [Math.floor(Math.random() * this.DIM_X),
    Math.floor(Math.random() * this.DIM_Y)]
}

Game.prototype.draw = function(context) {
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].draw(context);
  }
}

Game.prototype.moveObjects = function(context) {
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].move();
  }
}

module.exports = Game