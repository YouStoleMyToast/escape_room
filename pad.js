export default class Pad {
    constructor(gameWidth, gameHeight) {
        this.width = gameWidth - (gameWidth / 4);
        this.height = gameHeight - (gameHeight / 4);
        this.position = {
            x: gameWidth / 8,
            y: gameHeight / 8,
        };
    }

    draw(context) {
        context.fillStyle = '#136078';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}