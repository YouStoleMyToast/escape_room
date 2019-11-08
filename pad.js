export default class Pad {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth - (gameWidth / 4);
        this.height = gameHeight - (gameHeight / 4);
        this.word = "asdfa";
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
            this.inputBlocks[i].draw(context)
        }
        return
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
        this.value = "";
        this.inputBlock = inputBlock;

    }

    draw(context) {
        if (this.inputBlock == true) {
            context.fillStyle = '#000000';
        } else {
            context.fillStyle = '#a38f1e';
        }
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    HasValue() {
        if (this.value == "") {
            return false;
        }
        return true;
    }

    IsClicked(mouse_x, mouse_y) {
        if (mouse_x >= this.position.x & mouse_x < this.position.x + this.width) {
            if (mouse_y >= this.position.y & mouse_y < this.position.y + this.height) {
                return true;
            }
        }
        return false;
    }

}