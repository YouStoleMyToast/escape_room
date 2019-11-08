import Pad from './pad';
const GAME_WIDTH = 720;
const GAME_HEIGHT = 640;

//var page = document.querySelector("wrapper");
var GameCanvas = document.createElement("canvas");
canvas.id = "gameScreen";
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

var GameContext = GameCanvas.getContext("2d");

loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(canvas);
}
loadGameScreen();



// Clearing the screen
//ontext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);

keypad.draw(GameContext);