import Pad from './pad.js';
var player = new PlayerData();
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

GameCanvas.addEventListener("click", EvaluateClick, false);

function EvaluateClick(e) {
    console.log('click')
    var x_pos = e.clientX;
    var y_pos = e.clientY;

    if (player.CurrentState == 2) {
        for (var i = 0; i < keypad.optionBlocks.length; i++) {
            if (keypad.optionBlocks[i].IsClicked(x_pos, y_pos)) {
                for (var e = 0; e < keypad.inputBlocks.length; e++) {
                    if (!keypad.inputBlocks[e].HasLetter()) {
                        keypad.inputBlocks[e].Letter = keypad.optionBlocks[i].Letter;
                        keypad.inputBlocks[e].draw(GameContext)
                        return
                    }
                }
            }
        }
    }
}
keypad.draw(GameContext);