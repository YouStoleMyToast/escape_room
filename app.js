import Pad from '/pad.js';

//var page = document.querySelector("wrapper");
let canvas = document.getElementById("gameScreen");

let context = canvas.getContext("2d");

const GAME_WIDTH = 1500;
const GAME_HEIGHT = 700;

// Clearing the screen
//ontext.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let keypad = new Pad(GAME_WIDTH, GAME_HEIGHT);

keypad.draw(context);