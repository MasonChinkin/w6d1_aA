function MovingObject() {}

function Ship() {}

function Asteroid() {}

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype)
  this.prototype.constructor = this
}

Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

let s = new Ship()
let a = new Asteroid()