import Pad from './pad.js';
// import GameScreen from './gamescreen.js';
import GameScreen from './game_items.js';
const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;

var wordObject;

var first_load = true;



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
}

loadGameScreen();
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
    getWord();
    player.CurrentState = 1;
    player.Level = 1; //change this to change level
    Game.image_url = wordObject.image_url;
    keypad.changeWord(wordObject['word']);
    
    // GetGame(wordObject);
    return true;
}


function GetGame(word) {
    PlayerData.CurrentState = 1;
    Game.load_level(player.Level);
    Game.draw(GameContext,word);
}

var getWord = function(){
    fetch(`http://localhost:8080/getWord`).then( function ( response ){
        response.json().then( function ( data ){
            console.log("The data is: ", data);
            wordObject = data;
            loadImage();
            // var colors = [/*light grey*/'#BBB8AF',/*dark brown*/'#3A190F',/*light brown*/'#653D31'];
            // var gamescreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
            // gamescreen.loadObjects();
            // gamescreen.draw(GameContext, colors, wordObject);
            GetGame(wordObject);
            if (first_load == false){
                keypad.changeWord(wordObject['word']);
            }     
        });
    });
    first_load = false;
};

getWord();

var loadImage = function (){
    var image = document.createElement("img");
    GameCanvas.appendChild(image);
};




// GetGame()