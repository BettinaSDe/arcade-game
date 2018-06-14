
// access the winner Youtube video modal :-) 
var modal = document.getElementById("modal-video");
// add stats board to the canvas
var statsBoard = document.createElement("h1");
document.body.appendChild(statsBoard);
// add stats board to the canvas
var statsBoardScore = document.createElement("h1");
document.body.appendChild(statsBoardScore);
// add stats board to the canvas
var statsBoardLives = document.createElement("h1");
document.body.appendChild(statsBoardLives);
// access the class
var count = document.querySelector("h1");
// game description popup
function instruct() {
    document.querySelector('button').onclick = function() {alert('ARCADE: CROSS IT THREE TIMES FOR A SURPRISE!')}
    // alert('ARCADE: CROSS IT THREE TIMES FOR A SURPRISE!');
}
// define variables for points and lives
var score = 0;
// declare lives
var lives = 3;
// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/heart.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 510) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 200);
    }
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.reset();
        lives--;


        if (lives == 0) {
            ctx.font = "30px Comic Sans MS";
            ctx.strokeText("GAME OVER. Refresh your browser",10,50); 
            //finishedGame();
            reset();
        }  

        else if (score >= 2) {
            ctx.font = "30px Comic Sans MS";
            ctx.strokeText("CONGRATS. Refresh your browser to play again.",10,50); 
            winningModal();
            reset();
           // finishedGame();

        } 

    }
            
    
    
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-princess-girl.png';
};
// Update the player's position/ shows score & lives
Player.prototype.update = function (dt) {
    // statsBoard.innerHTML = `Score: ${score} _______________ Lives: ${lives}`;
    statsBoardScore.innerHTML = "Score: " + score;
    statsBoardLives.innerHTML = "Lives: " + lives;
    
};
// Draw the player on the screen
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
// Move the player back to the starting position
Player.prototype.reset = function () {
    this.x = 202;
    this.y = 405;
};
Player.prototype.handleInput = function (keyPress) {
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    }
    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    }
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    }
    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    }
    if (this.y < 0) {
        setTimeout(function () {
            player.x = 202;
            player.y = 405;
            score++;
        }, 100);
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPosition = [63, 147, 230];
enemyPosition.forEach(function (positionY) {
    enemy = new Enemy(0, positionY, 200);
    allEnemies.push(enemy);
});
var player = new Player(202, 405);
// restart game
function gameRestart() {
    player.reset();
    lives = 3;
    score = 0;
}


// click play-again button to play the game again: this will be done later, I am behind schedule with this project! 
//function playAgain() {
  //  modal.classList.remove("modal-reveal");
   // gameRestart();
//}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

//modal is declared in the first line of this app.js . Now I trigger it after score reached 3 (winning condition) with a nice youtube video modal. 
function winningModal() {

    if (score == 3)

modal.classList.add('reveal-modal');
// reset();
}

//I was not able to make the below functional, but this would be the best way to stop this game perfectly by halting the enemy. Any help is welcome! 
//function finishedGame() {
 //  (enemy.speed == 0);}






