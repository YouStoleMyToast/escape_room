var letters = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var wordObject = {};
wordObject.word = "start";
wordObject.url = "https://media.owlbot.info/dictionary/images/ggggge.jpeg.400x400_q85_box-0,0,500,500_crop_detail.jpg";
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



async function getNextWord() {
    fetch(`http://localhost:8080/getWord`).then(function(response) {
        response.json().then(function(data) {
            console.log("Data: ", data["word"]);
            wordObject.word = data["word"];
            wordObject.url = data["image_url"];
            console.log(wordObject.url)
            return;
        });
    });
}