export default class GameScreen {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth;
        this.height = gameHeight;
        this.game_objects = [];
        this.position = {
            x: 0,
            y: 0
        }
    }

    draw(context) {
        context.fillStyle = "#BBB8AF";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        for (var i = 0; i < this.game_objects.length; i++) {
            this.game_objects[i].draw(context);
            if (this.game_objects[i].name == "picture") {}
        };
    }

    drawDoor() {
        var doorW = this.width / 5;
        var doorH = this.height / 2;
        var doorX = this.position.x + this.height / 6;
        var doorY = this.position.y + this.width / 3;
        var door = new Door(doorW, doorH, doorX, doorY);
        this.game_objects.push(door);
    }
    drawPicture() {
        var pictureW = this.width / 2;
        var pictureH = this.height / 2;
        var pictureX = this.position.x + this.width / 2 - 50;
        var pictureY = this.position.y + 50;
        var picture = new Picture(pictureW, pictureH, pictureX, pictureY);
        this.game_objects.push(picture);
    }
    drawLevel() {
        var levelW = this.width / 4;
        var levelH = this.height / 8;
        var levelX = this.position.x + 10;
        var levelY = this.position.y + 10;
        var level = new Level(levelW, levelH, levelX, levelY);
        this.game_objects.push(level);
    }
    drawKey() {
        var keyW = this.width / 14;
        var keyH = this.height / 8;
        var keyX = this.position.x + this.width / 3;
        var keyY = this.position.y + this.height / 1.5;
        var key = new Key(keyW, keyH, keyX, keyY);
        this.game_objects.push(key);
    }


    load_level(level) {
        if (level == 1) {
            this.drawDoor();
            this.drawPicture();
            this.drawLevel();
            this.drawKey();
        }
    }
}

export class Door {
    constructor(w, h, x, y) {
        this.name = "door";
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context) {
        context.fillStyle = "#3A190F";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeRect(this.x + 8, this.y + 8, this.width - 15, this.height);
        context.strokeRect(this.x + 28, this.y + 25, this.width - 55, this.height / 2.5);
        context.strokeRect(this.x + 28, this.y + 25 + this.height / 2, this.width - 55, this.height / 2.8);
    }
    IsClicked(mouse_x, mouse_y) {
        return false;
    }
}

export class Picture {
    constructor(w, h, x, y) {
        this.width = w;
        this.height = h;
        this.name = "picture";
        this.x = x;
        this.y = y;
    }
    draw(context) {
        context.fillStyle = '#653D31';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeRect(this.x + 15, this.y + 15, this.width - 30, this.height - 30);
    }
    drawImage(context, url) {
        var img = new Image;
        var strDataURI = oCanvas.toDataURL();
        img.src = strDataURI;
        context.drawImage(img, this.x, this.y, this.width, this.height);
    }

    IsClicked(mouse_x, mouse_y) {
        return false;
    }
}

export class Level {
    constructor(w, h, x, y) {
        this.name = "level"
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context) {
        context.fillStyle = '#F6F6F6';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#000000';
        context.font = "45px Georgia";
        context.fillText("LEVEL", this.x + 15, this.y + 55);
    }
    IsClicked(mouse_x, mouse_y) {
        return false;
    }
}

export class Key {
    constructor(w, h, x, y) {
        this.name = "key"
        this.width = w;
        this.height = h;

        this.x = x;
        this.y = y;
    }
    draw(context) {
        context.fillStyle = '#136078';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#000000';
        context.fillRect(this.x + 5, this.y + 5, this.width / 1.17, this.height / 3);

    }
    IsClicked(mouse_x, mouse_y) {
        if (this.x <= mouse_x & mouse_x <= this.x + this.width) {
            if (this.y <= mouse_y & mouse_y <= this.y + this.height) {
                return true;
            }
        }
        return false;
    }
}