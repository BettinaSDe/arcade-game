

'use strict';

/* Global values and functions
==================== */
/*
const canvasWidth = 1000;
const tileWidth = 200; // for calculating movements and columns
const tileHeight = 160; // for calculating movements and rows

// offsets for pngs
const entityOffesetY = tileHeight, entityOffesetX = tileWidth/2;

// a couple of booleans to quickly check state of play in functions
/*let gameOver = false;
let gameStarted = false;
*/
//this function starts the game

/*window.onload = function() {
  init();
}

/*
// this function resets the game
function reset(){
    window.location.reload(true);
}

*/

// button for (re)starting game
const startButton = document.createElement('button');
startButton.setAttribute('class', 'startButton');
startButton.innerHTML = "Start the game";





    class Enemy {
    constructor(x, y, speed = 1) {

// Enemies our player must avoid
/*var Enemy = function(x, y, speed = 1) {  */
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started



        // Variables applied to each of our instances go here,
        this.x = x;
        this.y = y;
        this.location = ( x, y);
        this.speed = speed;


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    /*this.onCanvas = false;    */// for checking position on and off canvas
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
/*Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

this.x += 100 * this.speed * dt;   */

/*define collision */

/*
if (parseInt(this.x)+ 100 >= playerX && parseInt(this.x) <= playerX + 40 &&
    this.y === playerY)
    {console.log("Game over :-()");
    player.reset();
    window.alert("Game Over");

  };   */

    /*alllives.pop();
    playerLives -= 1
    if (playerPoints >= 50){
        playerPoints -= 50;
    }
}

checkLives();



};
*/
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.row * tileHeight - entityOffesetY);
};
};
*/
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class Player {
constructor(x, y, speed = 1) {

  this.x = x;
  this.y = y;
  this.sprite = 'images/char-princess-girl.png';
}


/*var playerX
var playerY

Player.prototype.update = function(){
  playerX = this.x;
  playerY = this.y;
}
*/

/
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
/*
render() {
    ctx.drawImage(Resources.get(this.sprite), (this.col * tileWidth) - tileWidth, this.row * tileHeight - entityOffesetY+10);
};
*/

/*
Player.prototype.handleInput = function(pressedKeys){
    if (pressedKeys === 'left' && this.x > 33){
        this.x -= 100;
    }
    else if (pressedKeys === 'up'&& this.y > 18){
        this.y -= 80;
    }
    else if (pressedKeys === 'right' && this.x < 400){
        this.x += 100
    }
    else if (pressedKeys === 'down' && this.y < 380){
        this.y += 80
    }
};

*/  /*
Player.prototype.reset = function(){
    this.x = 200;
    this.y = 380;
};


// possible X-axis positions on board
var columns = [ -5, -100, -200, -300, -400];
var enemyX;

// possible Y-axis positions on board
var rows = [ 60, 140, 220];
var enemyY;

var enemySpeed;

// this is to randomly pick locations for bugs
setInterval(function instances(){
    enemyX = columns[Math.floor(Math.random() * 5)],
    enemyY = rows[Math.floor(Math.random() * 3)],
    enemySpeed = Math.floor(Math.random() * 15),
    allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed));
},500)


let allEnemies = [];
let Player = [];


*/
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
/*
var allEnemies = [ new Enemy(-8, 60, 3), new Enemy(0, 140, 10), new Enemy(-5, 300, 15)];

var player = new Player( 200, 380);
*/


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
/*/*//*document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


/*function startGame(){
    gameStarted = true;
*/
/*window.onload = function() {
  init();
}
 */

document.querySelector('#button').addEventListener('click', function(init)

/* {
button.addEventListener('click', Resources.onReady(init))  3/
