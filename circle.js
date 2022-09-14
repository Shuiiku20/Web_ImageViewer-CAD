class Circle {
    r;
    sAngle = 0;
    eAngle = 2 * Math.PI;

    canvasPoint1 = {};
    canvasPoint3 = {};

    mode = "draw";
    fillMode = false;

    constructor(context) {
        this.ctx = context;
    }

    #drawCircle() {
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'rgb(0, 255, 255)';
        this.r = Math.sqrt(
            Math.pow(
                (this.canvasPoint3.x - this.canvasPoint1.x), 2
            )
            +
            Math.pow(
                (this.canvasPoint3.y - this.canvasPoint1.y), 2
            )
        );
        this.ctx.beginPath();
        this.ctx.arc(
            this.canvasPoint1.x,
            this.canvasPoint1.y,
            this.r,
            this.sAngle,
            this.eAngle,
            true);
        if (this.fillMode) {
            this.ctx.fillStyle = 'rgb(0, 255, 255)';
            this.ctx.fill();
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }

    draw() {
        switch (this.mode) {
            case "draw":
                this.#drawCircle();
                break;
        }
    }

}
