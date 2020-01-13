console.log('hello world');

/* MODEL 
  This is the current state of the game. The indexes of the arrays represent x, and y 
  coordinates on a grid where the top left squar is 1,1. Here is a map:
  |model[1,1]|model[1,2]|model[1,3]|
  |model[2,1]|model[2,2]|model[2,3]|
  |model[3,1]|model[3,2]|model[3,3]|
*/

var model = [
    [0,0,0,0]
    [0,0,0,0]
    [0,0,0,0]
];

/* VIEW
  This renders the view of the game board based on the current state of the
  model array.
*/

/* CONROLLER
  This is how the player gives input to the game.
*/
