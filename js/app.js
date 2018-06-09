

'use strict';


//initialize the game:

/*
let gameOver = false;  */
/*
window.onload = function() {
  init();
}  */
const canvasWidth = 1000;
const tileWidth = 200; // required metric
const tileHeight = 160; // required metric

// calculation
const entityOffsetY = tileHeight, entityOffsetX = tileWidth/2;


class Enemy {
    constructor() {
        constructor(x, y, speed = 1);
        {
            this.x = x;
            this.y = y;
            this.location = (x, y);
            this.speed = speed;
            this.sprite = 'images/enemy-bug.png';
        }
        ;
        // Update the enemy's position, required method for game
        // Parameter: dt, a time delta between ticks
        Enemy.prototype.update = function (dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
        };
        Enemy.prototype.render = function () {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };
        update(dt);
        {
            this.x += 100 * this.speed * dt;
            //collision detection
            if (parseInt(this.x) + 100 >= playerX && parseInt(this.x) <= playerX + 40 &&
                this.y === playerY) {
                console.log("Game over :-()");
                player.reset();
                window.alert("Game Over");
            }
            ;
           /* var allEnemies = [];
            allEnemies.push(enemy);
            const eBug1 = new Enemy(0, 220, 60);
            render();
            {
                ctx.drawImage(Resources.get(this.sprite), this.x, this.row * tileHeight - entityOffsetY);
            }
            ;   */
        }
        ;
        //Player class: 
        class Player {
            constructor() {
                constructor(col = 3, row = 4);
        {
            this.col = col;
            this.row = row;
            this.sprite = 'images/char-princess-girl.png';
            this.runs = runs;
            this.hit = hit;
            Player.prototype.render() = function () {
                ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
            };
        }
        ;
        // Now instantiate your objects.
        // Place all enemy objects in an array called allEnemies
        // Place the player object in a variable called player
        /*array; allEnemies = [ new Enemy(-8, 60, 3), new Enemy(0, 140, 10), new Enemy(-5, 300, 15)]; */
        
        // creating the enemies and putting them in the array

        var allEnemies = [];

     function createEnemies(numEnemies = 3){
    for (var i = 0; i < numEnemies; i++) {
    enemy = new Enemy;

    //position enemy
    enemy.x = getRandomInt(canvasWidth/4) * (-1) - tileWidth;

        allEnemies.prototype.render = function () {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.row * tileHeight - entityOffsetY);
        };
        
        
        /*array;
        player = new Player(200, 380); */
        var Player = []; 
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
        init();
        gameStarted() = true;
/*
        superClass;
        init();
        {
            gameStarted() = true;
        }
    }
}}}}}
*/}}}}}}