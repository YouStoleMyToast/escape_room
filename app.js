import Pad from './pad.js';
const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;

//var page = document.querySelector("wrapper");
var GameCanvas = document.createElement("canvas");
GameCanvas.id = "gameScreen";
GameCanvas.width = GAME_WIDTH;
GameCanvas.height = GAME_HEIGHT;

var loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(GameCanvas);
}

loadGameScreen();
var GameContext = GameCanvas.getContext("2d");
let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);


keypad.loadOptionBlocks();
keypad.loadInputBlocks();
keypad.draw(GameContext);