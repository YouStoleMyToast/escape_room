import Pad from './pad.js';
import GameScreen, { Door } from './game_items.js';
const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;
getNextWord(); //this loads first word

//var page = document.querySelector("wrapper");
var GameCanvas = document.createElement("canvas");
GameCanvas.id = "gameScreen";
GameCanvas.width = GAME_WIDTH;
GameCanvas.height = GAME_HEIGHT;

var keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);
keypad.loadOptionBlocks();
keypad.loadInputBlocks();

var player = new PlayerData();
var Game = new GameScreen(GAME_WIDTH, GAME_HEIGHT);



getNextWord(); //this loads next word after success

var loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(GameCanvas);
}

loadGameScreen();
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
    player.Level = 1;
    Game.image_url = wordObject.image_url; //update image to be drawn
    keypad.changeWord(); //update word value ---also gets values for next turn
    GetGame();
    return true;
}


function GetGame() { //starts the next level
    PlayerData.CurrentState = 1;
    Game.load_level(player.Level);
    Game.draw(GameContext);
    return;
}


GetGame()