<<<<<<< HEAD
<<<<<<< HEAD
//import Pad from './pad';

export default class GameScreen {
    constructor(gameWidth, gameHeight){
        this.width = gameWidth;
        this.height = gameHeight;
        this.position = {
            x: 0,
            y: 0
        }
    }
    
    draw(context, colors, number) {
        context.fillStyle = colors[0]
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.door.draw(context, colors[1]);
        this.picture.draw(context, colors[2]);
        this.level.draw(context, number);
        this.key.draw(context);
    }

    drawDoor() {
        var doorW = this.width/5;
        var doorH = this.height/2;
        var doorX = this.position.x+this.height/6;
        var doorY = this.position.y+this.width/3;
        var door = new Door(doorW, doorH, doorX, doorY);
        this.door = door;
    }
    drawPicture() {
        var pictureW = this.width/2;
        var pictureH = this.height/2;
        var pictureX = this.position.x+this.width/2 - 50;
        var pictureY = this.position.y + 50;
        var picture = new Picture(pictureW, pictureH, pictureX, pictureY);
        this.picture = picture;
    }
    drawLevel() {
        var levelW = this.width/4;
        var levelH = this.height/8;
        var levelX = this.position.x+10;
        var levelY = this.position.y+10;
        var level = new Level(levelW, levelH, levelX, levelY);
        this.level = level;
    }
    drawKey() {
        var keyW = this.width/14;
        var keyH = this.height/8;
        var keyX = this.position.x+this.width/3;
        var keyY = this.position.y+this.height/1.5;
        var key = new Key(keyW, keyH, keyX, keyY);
        this.key = key;
    }

    loadObjects(){
        this.drawDoor();
        this.drawPicture();
        this.drawLevel();
        this.drawKey();
    }
}

export class Door {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context, color){
        context.fillStyle = color;
        context.fillRect(this.x,this.y,this.width,this.height);
        context.strokeRect(this.x+8, this.y+8, this.width-15, this.height);
        context.strokeRect(this.x+28, this.y+25, this.width-55, this.height/2.5);
        context.strokeRect(this.x+28, this.y+25+this.height/2, this.width-55, this.height/2.8);
    }
}

export class Picture {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context, color){
        context.fillStyle = color;
        context.fillRect(this.x,this.y,this.width,this.height);
        context.strokeRect(this.x+15, this.y+15, this.width-30, this.height-30);
        var img = new Image();
        img.onload = function () {
            context.drawImage(img, 445, 65, 450, 290);
        }
        img.src="tiger.jpg";
    }
}

export class Level {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context, number){
        context.fillStyle = '#F6F6F6';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.strokeRect(this.x,this.y,this.width,this.height);
        context.fillStyle = '#000000';
        context.font = "50px Georgia";
        context.fillText("LEVEL: " + number, this.x+15, this.y+55);
    }
}

export class Key {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context){
        context.fillStyle = '#136078';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillStyle = '#000000';
        context.fillRect(this.x+5,this.y+5,this.width/1.17,this.height/3);

    }
}
export default class GameScreen {
    constructor(gameWidth, gameHeight){
        this.width = gameWidth;
        this.height = gameHeight;
        this.position = {
            x: 0,
            y: 0
        }
    }
    
    draw(context, colors, word) {
        context.fillStyle = colors[0]
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.door.draw(context, colors[1]);
        this.picture.draw(context, colors[2], word);
        this.level.draw(context);
        this.key.draw(context);
    }

    drawDoor() {
        var doorW = this.width/5;
        var doorH = this.height/2;
        var doorX = this.position.x+this.height/6;
        var doorY = this.position.y+this.width/3;
        var door = new Door(doorW, doorH, doorX, doorY);
        this.door = door;
    }
    drawPicture() {
        var pictureW = this.width/2;
        var pictureH = this.height/2;
        var pictureX = this.position.x+this.width/2 - 50;
        var pictureY = this.position.y + 50;
        var picture = new Picture(pictureW, pictureH, pictureX, pictureY);
        this.picture = picture;
    }
    drawLevel() {
        var levelW = this.width/4;
        var levelH = this.height/8;
        var levelX = this.position.x+10;
        var levelY = this.position.y+10;
        var level = new Level(levelW, levelH, levelX, levelY);
        this.level = level;
    }
    drawKey() {
        var keyW = this.width/14;
        var keyH = this.height/8;
        var keyX = this.position.x+this.width/3;
        var keyY = this.position.y+this.height/1.5;
        var key = new Key(keyW, keyH, keyX, keyY);
        this.key = key;
    }

    loadObjects(){
        this.drawDoor();
        this.drawPicture();
        this.drawLevel();
        this.drawKey();
    }
}

export class Door {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context, color){
        context.fillStyle = color;
        context.fillRect(this.x,this.y,this.width,this.height);
        context.strokeRect(this.x+8, this.y+8, this.width-15, this.height);
        context.strokeRect(this.x+28, this.y+25, this.width-55, this.height/2.5);
        context.strokeRect(this.x+28, this.y+25+this.height/2, this.width-55, this.height/2.8);
    }
}

export class Picture {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context, color, word){
        context.fillStyle = color;
        context.fillRect(this.x,this.y,this.width,this.height);
        var loaded_image = new Image();
        loaded_image.onload = function (){
            context.drawImage(loaded_image, 445, 65, 450, 290);
        }
        loaded_image.src = word['image_url'];
    }
}

export class Level {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context){
        context.fillStyle = '#F6F6F6';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.strokeRect(this.x,this.y,this.width,this.height);
        context.fillStyle = '#000000';
        context.font = "45px Georgia";
        context.fillText("LEVEL", this.x+15, this.y+55);
    }
}

export class Key {
    constructor(w, h, x, y){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw(context){
        context.fillStyle = '#136078';
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillStyle = '#000000';
        context.fillRect(this.x+5,this.y+5,this.width/1.17,this.height/3);

    }
}
