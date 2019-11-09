import Pad from './pad.js';
import GameScreen, { Door } from './gamescreen.js';

const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;


var GameCanvas = document.createElement("canvas");
GameCanvas.id = "gameScreen";
GameCanvas.width = GAME_WIDTH;
GameCanvas.height = GAME_HEIGHT;

var loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(GameCanvas);
}
<<<<<<< HEAD
loadGameScreen();
var colors = [/*light grey*/'#BBB8AF',/*dark brown*/'#3A190F',/*light brown*/'#653D31'];
let gamescreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
gamescreen.loadObjects();
gamescreen.draw(GameContext, colors);

// function getClickPosition(e){
//     var mouse_x = e.clientX;
//     var mouse_y = e.clientY;
// }
// keypad.addEventListener("click",getClickPosition,false)
=======
>>>>>>> 507eb18b0c8ee3d904f4b3eea5c6d5e1772efeed

loadGameScreen();
var GameContext = GameCanvas.getContext("2d");
let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);


<<<<<<< HEAD
/*let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);
=======
>>>>>>> 507eb18b0c8ee3d904f4b3eea5c6d5e1772efeed
keypad.loadOptionBlocks();
keypad.loadInputBlocks();
keypad.draw(GameContext);*/