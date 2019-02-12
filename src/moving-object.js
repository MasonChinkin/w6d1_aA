function MovingObject(options) {
  this.pos = options['pos']; // [x, y]
  this.vel = options['vel']; // [x-change, y-change]
  this.radius = options['radius'];
  this.color = options['color'];
}

MovingObject.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.beginPath();

  context.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  context.fill()
}

MovingObject.prototype.move = function () {
  this.position[0] += this.vel[0];
  this.position[1] += this.vel[1];
}

module.exports = MovingObject;