/* MODEL 
  This is the current state of the game. The indexes of the arrays represent x, and y 
  coordinates on a grid where the top left squar is 1,1. openSpots tracks the remaining
  valid moves, and the turn count tracks the number of turns that have occured. 
  Here is a map of the model:

  |model[1,1]|model[1,2]|model[1,3]|
  |model[2,1]|model[2,2]|model[2,3]|
  |model[3,1]|model[3,2]|model[3,3]|

*/
var wins = 0;
var losses = 0;
var victory = false;
var compVictory = false;
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
      if (model[y][x] === 1) {
       document.getElementById(x + 'x' + y).innerHTML = '<h3>X</h3>';
      }
      if (model[y][x] === 2) {
        document.getElementById(x + 'x' + y).innerHTML = '<h3>O</h3>';
      }
      if (model[y][x] === 0) {
        document.getElementById(x + 'x' + y).innerHTML = '';
      }
    }
  }
};
/* CONROLLER
  This is how the player gives input to the game.
*/
var playerMove = function(x,y) {
  if ((victory || compVictory) === true) {
      return;
  }
  console.log('player move start');
  if (model[y][x] === (1 || 2)) {
    alert("That is an illegal move. Please try again.");
  }
  if (model[y][x] === 0) {
    model[y][x] = 1;
    var index = openSpots.indexOf(x + 'x' + y);
    openSpots.splice(index, 1);
    turnCount++;
    render();
    checkVictory();
    if (victory === true) {
        wins++;
        document.getElementById('title').innerHTML=
            'You Win! <button onclick=resetBoard()>Try Again</button>';
    } else if (openSpots.length === 0) {
        document.getElementById('title').innerHTML= 
            'You Tie! <button onclick=resetBoard()>Try Again</button>';
    }
    computerMove(model);
    render();
    checkCompVictory();
    if (compVictory === true) {
        losses++;
        document.getElementById('title').innerHTML=
            'You Lose! <button onclick=resetBoard()>Try Again</button>';
    }
  }
};

var computerMove = function (model) {
  if (openSpots.length > 0) {
    var spotForCompMove = openSpots[Math.floor(Math.random() * Math.floor(openSpots.length - 1))];
    var newCoords = spotForCompMove.split('x');
    model[newCoords[1]][newCoords[0]] = 2;
    var index = openSpots.indexOf(spotForCompMove);
    openSpots.splice(index, 1);
    render();
  }
};

var resetBoard = function() {
  victory = false;
  compVictory = false;
  model = [
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0],
    [1,0,0,0],
  ];
  openSpots = ['1x1','1x2','1x3','2x1','2x2','2x3','3x1','3x2','3x3'];
  turnCount = 0;
  document.getElementById('title').innerHTML= 'Wins: ' + wins + ' Losses: ' + losses;
  render();
};

var checkCompVictory = function() {
  if ((model[1][1] == 2) && (model[1][2] == 2) && (model[1][3] == 2)) {compVictory = true};
  if ((model[2][1] == 2) && (model[2][2] == 2) && (model[2][3] == 2)) {compVictory = true};
  if ((model[3][1] == 2) && (model[3][2] == 2) && (model[3][3] == 2)) {compVictory = true};
  if ((model[1][1] == 2) && (model[2][1] == 2) && (model[3][1] == 2)) {compVictory = true};
  if ((model[1][2] == 2) && (model[2][2] == 2) && (model[3][2] == 2)) {compVictory = true};
  if ((model[1][3] == 2) && (model[2][3] == 2) && (model[3][3] == 2)) {compVictory = true};
  if ((model[1][1] == 2) && (model[2][2] == 2) && (model[3][3] == 2)) {compVictory = true};
  if ((model[1][3] == 2) && (model[2][2] == 2) && (model[3][1] == 2)) {compVictory = true};
};

var checkVictory = function() {
  if ((model[1][1] == 1) && (model[1][2] == 1) && (model[1][3] == 1)) {victory = true};
  if ((model[2][1] == 1) && (model[2][2] == 1) && (model[2][3] == 1)) {victory = true};
  if ((model[3][1] == 1) && (model[3][2] == 1) && (model[3][3] == 1)) {victory = true};
  if ((model[1][1] == 1) && (model[2][1] == 1) && (model[3][1] == 1)) {victory = true};
  if ((model[1][2] == 1) && (model[2][2] == 1) && (model[3][2] == 1)) {victory = true};
  if ((model[1][3] == 1) && (model[2][3] == 1) && (model[3][3] == 1)) {victory = true};
  if ((model[1][1] == 1) && (model[2][2] == 1) && (model[3][3] == 1)) {victory = true};
  if ((model[1][3] == 1) && (model[2][2] == 1) && (model[3][1] == 1)) {victory = true};
};