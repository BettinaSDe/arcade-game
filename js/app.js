


const canvas = document.QuerySelector('canvas');

let allEnemies = [];



    class Enemy {
    constructor(x, y, speed = 1) {

// Enemies our player must avoid


        // Variables applied to each of our instances go here,
        this.x = x;
        this.y = y;
        this.location = ( x, y);
        this.speed = speed;



    this.sprite = 'images/enemy-bug.png';

}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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



Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


document.querySelector('#button').addEventListener('click', function(init())
