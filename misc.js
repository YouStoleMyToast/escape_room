letters = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

class PlayerData {
    constructor() {
        this.CurrentState = 2;
        this.Level = 1;

    };
};

function getRandomLetter() {
    var i = (Math.floor(Math.random() * letters.length));
    return letters[i];
}



function getNextWord() {
    fetch(`http://localhost:8080/getWord`).then(function(response) {
        response.json().then(function(data) {
            console.log("Data: ", data)
        });
    });
}