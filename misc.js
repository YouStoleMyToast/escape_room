letters = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

class PlayerData {
    constructor() {
        this.CurrentState = 1;
        this.Level = 1;

    };
};

function getRandomLetter() {
    var i = (Math.floor(Math.random() * letters.length));
    return letters[i];
}