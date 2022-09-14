class Line {

    canvasPoint1 = {};
    canvasPoint3 = {};

    mode = "draw";

    constructor(context) {
        this.ctx = context;
    }

    #drawLine() {
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvasPoint1.x, this.canvasPoint1.y);
        this.ctx.lineTo(this.canvasPoint3.x, this.canvasPoint3.y);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    draw() {
        switch (this.mode) {
            case "draw":
                this.#drawLine();
                break;
        }
    }

}
