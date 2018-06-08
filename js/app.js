

'use strict';


//initialize the game:

/*
let gameOver = false;

window.onload = function() {
  init();
}
*/

let allEnemies = [];

let Player = [];



    class Enemy {
    constructor(x, y, speed = 1) {
        this.x = x;
        this.y = y;
        this.location = ( x, y);
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';

    };
        
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    update(dt) {    

this.x += 100 * this.speed * dt;   

//collision detection


if (parseInt(this.x)+ 100 >= playerX && parseInt(this.x) <= playerX + 40 &&
    this.y === playerY)
    {console.log("Game over :-()");
    player.reset();
    window.alert("Game Over");

  };   






render(); {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.row * tileHeight - entityOffesetY);
};
    };


//Player class: 

superClass; Player ;
constructor(col = 3, row = 4) {

  this.col = col;
  this.row = row;
  this.sprite = 'images/char-princess-girl.png';
  this.runs = runs;
  this.hit = hit;


render(); {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
    };







// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


array; allEnemies = [ new Enemy(-8, 60, 3), new Enemy(0, 140, 10), new Enemy(-5, 300, 15)];

array; player = new Player( 200, 380);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.


/*document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
}); */  

    

superClass; init(){
    gameStarted() = true;


{}}
}
