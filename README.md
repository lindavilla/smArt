### IronHack Game 
## smArt


The purpose of this game is to try and match as many paintings to the era presented. 

The screen will be displaying various artworks, which the player will have to drag to the center if they match the era. Clues will be given and quotes to help them guess. 

There's a timer on the right which is displayed in minutes. The total amount per era is 1 minute. 

If the player is good in this era, minimum of 75% of points achieved, the next level is a specific painter of this same era with the same drag and drop task. 

The levels will be three eras and 2 painters per era. 

The game ends if the player has dragged 50% or more of the wrong artworks and has used their three lives. 

## MVP 
* Splashscreen
* Start button
* Game page
* One era
* One array of paintings 
* Defined lifespan 
* Game over page
* Start over button 


### Technology
HTML, DOM, Vanilla JS 
## Structure
* __Start Screen__
  * Title
  * Name input
  * Start button
  * Config
    * Language: English
    * Music: On/off
* __Game Screen__
  * DOM
* __Game Over Screen__
 * Art meme 
 * Retry button 
### Game
* Create interface
* Drag icons
* Create timer
* Create life bar
* * *
## BACK LOG
### Music
* Add background music to game
* Add music on and off button to setup
### Levels
* Check phase and increase level

### Images

* where from?!

## Data structure
__main.js__
````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();

var game = new Game({
game.init();
````
__Game.js__
````
function Game(options){};

Game.gameOver();
Game.init();
