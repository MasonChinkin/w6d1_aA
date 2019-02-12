const Util = require('./util');
const MovingObject = require('./moving-object');

function Asteroid(options) {
  options['color'] = 'black';
  options['radius'] = 20;
  options['vel'] = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  ];
  MovingObject.call(this, options);
}

Util.inherit(MovingObject, Asteroid);

module.exports = Asteroid;