export default class Pad {
    constructor(gameWidth, gameHeight) {
        this.width = 100;
        this.height = 100;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }

    draw(context) {
        context.fillStyle = '#136078';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}