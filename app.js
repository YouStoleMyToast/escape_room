<<<<<<< HEAD
//import Pad from './pad.js';
import GameScreen from './gamescreen.js';

=======
import Pad from './pad.js';
import GameScreen, { Door } from './game_items.js';
>>>>>>> 2d937c52a53d100b9dc3c5dcd1479df3dabdc887
const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;
getNextWord();


var GameCanvas = document.createElement("canvas");
GameCanvas.id = "gameScreen";
GameCanvas.width = GAME_WIDTH;
GameCanvas.height = GAME_HEIGHT;
var GameContext = GameCanvas.getContext("2d");

var keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);
keypad.loadOptionBlocks();
keypad.loadInputBlocks();

var player = new PlayerData();
var Game = new GameScreen(GAME_WIDTH, GAME_HEIGHT);




var loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(GameCanvas);
    var image1 = document.createElement("img");
    GameCanvas.appendChild(image1);
    console.log(document.querySelector("wrapper"));
}
loadGameScreen();
<<<<<<< HEAD
var number = 1;
var colors = [/*light grey*/'#BBB8AF',/*dark brown*/'#3A190F',/*light brown*/'#653D31'];
let gamescreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
//let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);
gamescreen.loadObjects();
gamescreen.draw(GameContext, colors, number);

// function getClickPosition(e){
//     var mouse_x = e.clientX;
//     var mouse_y = e.clientY;
// }
// keypad.addEventListener("click",getClickPosition,false)


// Clearing the screen
//ontext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

/*let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);
keypad.loadOptionBlocks();
keypad.loadInputBlocks();
keypad.draw(GameContext);*/
=======
var GameContext = GameCanvas.getContext("2d");


GameCanvas.addEventListener("click", EvaluateClick, false);

function EvaluateClick(e) {
    console.log('click')
    var x_pos = e.clientX;
    var y_pos = e.clientY;

    if (player.CurrentState == 1) {
        for (var i = 0; i < Game.game_objects.length; i++) {
            if (Game.game_objects[i].IsClicked(x_pos, y_pos)) {
                keypad.draw(GameContext);
                player.CurrentState = 2;
                return;
            }
        }
        return;
    }


    if (player.CurrentState == 2) {
        for (var i = 0; i < keypad.optionBlocks.length; i++) {
            if (keypad.optionBlocks[i].IsClicked(x_pos, y_pos)) {
                for (var e = 0; e < keypad.inputBlocks.length; e++) {
                    if (!keypad.inputBlocks[e].HasLetter()) {
                        keypad.inputBlocks[e].Letter = keypad.optionBlocks[i].Letter;
                        keypad.draw(GameContext)
                        DetermineGameWin();
                        console.log(player.CurrentState)
                        return;
                    }
                }
            }
        }
        return;
    }
}

function DetermineGameWin() {
    if (!keypad.inputBlocks[keypad.inputBlocks.length - 1].HasLetter()) {
        return false;
    }
    player.CurrentState = 1;
    player.Level = 1; //change this to change level
    Game.image_url = wordObject.image_url;
    keypad.changeWord();
    GetGame();
    return true;
}


function GetGame() {
    PlayerData.CurrentState = 1;
    Game.load_level(player.Level);
    Game.draw(GameContext);
}


GetGame()
>>>>>>> 2d937c52a53d100b9dc3c5dcd1479df3dabdc887
