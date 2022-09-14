class Cursor {
    mode = "select"

    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;

    }

    #drawPoint(Px, Py) {
        let pointSize = 10;
        this.ctx.strokeRect(Px - pointSize / 2, Py - pointSize / 2, pointSize, pointSize);
    }

    #drawSelectMode(e) {
        let l = 50;
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY - l)
        this.ctx.lineTo(e.offsetX, e.offsetY + l)
        this.ctx.moveTo(e.offsetX - l, e.offsetY)
        this.ctx.lineTo(e.offsetX + l, e.offsetY)
        this.ctx.stroke();
        this.ctx.closePath();
        this.#drawPoint(e.offsetX, e.offsetY);
    }

    #drawLineMode(e) {
        let l = 50;
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY - l)
        this.ctx.lineTo(e.offsetX, e.offsetY + l)
        this.ctx.moveTo(e.offsetX - l, e.offsetY)
        this.ctx.lineTo(e.offsetX + l, e.offsetY)
        this.ctx.stroke();
        this.ctx.closePath();
    }

    #drawRectMode(e) {
        let l = 50;
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'yellow';
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY - l)
        this.ctx.lineTo(e.offsetX, e.offsetY + l)
        this.ctx.moveTo(e.offsetX - l, e.offsetY)
        this.ctx.lineTo(e.offsetX + l, e.offsetY)
        this.ctx.stroke();
        this.ctx.closePath();
    }

    #drawCircleMode(e) {
        let l = 50;
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = 'rgb(0, 255, 255)';
        this.ctx.beginPath();
        this.ctx.moveTo(e.offsetX, e.offsetY - l)
        this.ctx.lineTo(e.offsetX, e.offsetY + l)
        this.ctx.moveTo(e.offsetX - l, e.offsetY)
        this.ctx.lineTo(e.offsetX + l, e.offsetY)
        this.ctx.stroke();
        this.ctx.closePath();
    }

    draw(e) {
        this.canvas.style.cursor = "none";
        switch (this.mode) {
            case "select":
                this.#drawSelectMode(e);
                break;
            case "rect":
                this.#drawRectMode(e);
                break;
            case "line":
                this.#drawLineMode(e);
                break;
            case "circle":
                this.#drawCircleMode(e);
                break;
        }
    }
}

