import Pad from './pad.js';
const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;

//var page = document.querySelector("wrapper");
var GameCanvas = document.createElement("canvas");
GameCanvas.id = "gameScreen";
GameCanvas.width = GAME_WIDTH;
GameCanvas.height = GAME_HEIGHT;
var GameContext = GameCanvas.getContext("2d");

var loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(GameCanvas);
}
loadGameScreen();



// Clearing the screen
//ontext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);

keypad.draw(GameContext);