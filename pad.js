export default class Pad {
    constructor(gameWidth, gameHeight, woord) {
        this.width = gameWidth - (gameWidth / 4);
        this.height = gameHeight - (gameHeight / 4);
        this.word = woord;
        this.position = {
            x: gameWidth / 8,
            y: gameHeight / 8,
        };
    }

    draw(context) {
        context.fillStyle = '#136078';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        for (var i = 0; i < this.optionBlocks.length; i++) {
            this.optionBlocks[i].draw(context)
        }
        for (var i = 0; i < this.inputBlocks.length; i++) {
            this.inputBlocks[i].draw(context);
        }
        return;
    }

    changeWord(word) {
        this.word = word;
        this.loadInputBlocks()
        this.loadOptionBlocks()
    }

    handleBackspace() {
        for (var i = this.inputBlocks.length; i > -1; i--) {
            if (this.inputBlocks[i].HasLetter()) {
                this.inputBlocks[i].Letter = "";
                return true;
            }
        }
        return false;
    }

    loadOptionBlocks() {
        var optionBlockX = this.position.x + this.width / 5;
        var optionBlockY = this.position.y + this.height / 3;
        var optionBlocks = [];
        for (var i = 0; i < 12; i++) {
            if (i % 4 == 0 & i != 0) {
                optionBlockX = this.position.x + this.width / 5;
                optionBlockY += 100;
            }
            optionBlocks.push(new OptionBlock(optionBlockX, optionBlockY, false));
            optionBlockX += 100;
        }
        this.optionBlocks = optionBlocks;
        return;
    }

    loadInputBlocks() {
        var inputBlockX = this.position.x + this.width / (this.word.length + 1);
        var inputBlockY = this.position.y + this.height / 10;
        var inputBlocks = [];
        for (var i = 0; i < this.word.length; i++) {
            inputBlocks.push(new OptionBlock(inputBlockX, inputBlockY, true));
            inputBlockX += 100;
        }
        this.inputBlocks = inputBlocks;
    }
}

export class OptionBlock {
    constructor(x, y, inputBlock) {
        this.position = {
            x: x,
            y: y,
        }
        this.width = 75;
        this.height = 75;
        this.Letter = "";
        if (!inputBlock) {
            this.Letter = getRandomLetter();
        }
        this.inputBlock = inputBlock;

    }

    draw(context) {
        if (this.inputBlock == true) {
            context.fillStyle = '#000000';
        } else {
            context.fillStyle = '#a38f1e';
        }
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        if (this.HasLetter()) {
            var quarterX = this.position.x + ((this.width / 4));
            var quarterY = this.position.y + ((this.height / 4)) * 3;
            context.fillStyle = '#ffffff';
            context.font = '30px Arial'
            context.fillText(this.Letter, quarterX, quarterY);
        }

        return;
    }

    HasLetter() {
        if (this.Letter == "") {
            return false;
        }
        return true;
    }

    IsClicked(mouse_x, mouse_y) {
        if (mouse_x >= this.position.x) {
            if (mouse_y >= this.position.y) {
                if (mouse_x <= this.position.x + this.width) {
                    if (mouse_y <= this.position.y + this.height) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

}