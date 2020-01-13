/* MODEL 
  This is the current state of the game. The indexes of the arrays represent x, and y 
  coordinates on a grid where the top left squar is 1,1. Here is a map:
  |model[1,1]|model[1,2]|model[1,3]|
  |model[2,1]|model[2,2]|model[2,3]|
  |model[3,1]|model[3,2]|model[3,3]|
*/

var model = [
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0],
];

var openSpots = ['1x1','1x2','1x3','2x1','2x2','2x3','3x1','3x2','3x3'];

var turnCount = 0;

/* VIEW
  This renders the view of the game board based on the current state of the
  model array.
*/

var render = function() {
  for (var i = 1; i < model.length; i++){
    var y = i;
    for (var j = 1; j < model[i].length; j ++) {
      var x = j;
      if (model[x][y] === 1) {
       document.getElementById(x + 'x' + y).innerHTML = '<h3>X</h3>';
      }
      if (model[x][y] === 2) {
        document.getElementById(x + 'x' + y).innerHTML = '<h3>O</h3>';
      }
    }
  }
};

/* CONROLLER
  This is how the player gives input to the game.
*/

var playerMove = function(x,y) {
  console.log('player move start');
  if (model[x][y] === 0) {
    model[x][y] = 1;
    var index = openSpots.indexOf(x + 'x' + y);
    openSpots.splice(index, 1);
    turnCount = 0
    computerMove(model);
  } else {
    alert("That is an illegal move. Please try again.");
  }
};

var computerMove = function (model) {
  if (openSpots.length > 0) {
    var spotForCompMove = openSpots[Math.floor(Math.random() * Math.floor(openSpots.length - 1))];
    var newCoords = spotForCompMove.split('x');
    model[newCoords[0]][newCoords[1]] = 2;
    var index = openSpots.indexOf(spotForCompMove);
    openSpots.splice(index, 1);
  }
  render();
  console.log('computer move success');
};