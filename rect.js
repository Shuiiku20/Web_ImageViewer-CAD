class Rectangle {

    canvasPoint1 = {};
    canvasPoint3 = {};

    mode = "draw";
    fillMode = false;

    constructor(context) {
        this.ctx = context;
    }

    #drawRect() {
        let x, y, w, h;
        x = (this.canvasPoint1.x < this.canvasPoint3.x) ? this.canvasPoint1.x : this.canvasPoint3.x;
        y = (this.canvasPoint1.y < this.canvasPoint3.y) ? this.canvasPoint1.y : this.canvasPoint3.y;
        w = Math.abs(this.canvasPoint1.x - this.canvasPoint3.x);
        h = Math.abs(this.canvasPoint1.y - this.canvasPoint3.y);
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'yellow';
        if (this.fillMode) {
            this.ctx.fillStyle = 'yellow';
            this.ctx.fillRect(x, y, w, h);
        }
        this.ctx.strokeRect(x, y, w, h);

    }

    #drawSelectRect() {
        let x, y, w, h;
        x = (this.canvasPoint1.x < this.canvasPoint3.x) ? this.canvasPoint1.x : this.canvasPoint3.x;
        y = (this.canvasPoint1.y < this.canvasPoint3.y) ? this.canvasPoint1.y : this.canvasPoint3.y;
        w = Math.abs(this.canvasPoint1.x - this.canvasPoint3.x);
        h = Math.abs(this.canvasPoint1.y - this.canvasPoint3.y);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'green';
        this.ctx.fillStyle = 'rgba(0,255,255,0.2)';
        this.ctx.strokeRect(x, y, w, h);
        this.ctx.fillRect(x, y, w, h);
    }

    draw() {
        switch (this.mode) {
            case "select":
                this.#drawSelectRect();
                break;
            case "draw":
                this.#drawRect();
                break;
        }
    }

}
