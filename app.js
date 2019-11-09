import Pad from './pad.js';
import GameScreen from './game_items.js';

const GAME_WIDTH = 960;
const GAME_HEIGHT = 640;
getNextWord(); //this loads first word


var wordObject;

var GameCanvas = document.createElement("canvas");
GameCanvas.id = "gameScreen";
GameCanvas.width = GAME_WIDTH;
GameCanvas.height = GAME_HEIGHT;
var GameContext = GameCanvas.getContext("2d");


var loadGameScreen = () => {
    document.querySelector("wrapper").appendChild(GameCanvas);
    var image1 = document.createElement("img");
    GameCanvas.appendChild(image1);
    console.log(document.querySelector("wrapper"));
}

var getWord = function(){
    fetch(`http://localhost:8080/getWord`).then( function ( response ){
        response.json().then( function ( data ){
            console.log("The data is: ", data);
            loadGameScreen();
            wordObject = data;
            loadImage();
            var colors = [/*light grey*/'#BBB8AF',/*dark brown*/'#3A190F',/*light brown*/'#653D31'];
            let gamescreen = new GameScreen(GAME_WIDTH, GAME_HEIGHT);
            gamescreen.loadObjects(); 
            gamescreen.draw(GameContext, colors, wordObject);
        });
    });
};

getWord();

var loadImage = function () {
    var word_image = document.createElement("img");
    GameCanvas.appendChild(word_image); 
};













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
