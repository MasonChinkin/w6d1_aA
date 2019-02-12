const Game = require('./game');
const MovingObject = require('./moving-object');
const Asteroid = require('./asteroid');

window.Game = Game;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener('DOMContentLoaded', function (event) {
  var canvas = document.getElementById('game-canvas');
  var context = canvas.getContext('2d');

  g = new Game()

  
})