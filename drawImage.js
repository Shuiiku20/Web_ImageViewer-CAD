class DrawImage {
    x;
    y;
    width;
    height;

    scale;
    zoom_factor = 1.3;

    constructor(canvas, context, originalImage) {
        this.canvas = canvas;
        this.ctx = context;
        this.originalImage = originalImage;
    }

    fitWindow() {
        let scaleW = this.canvas.clientWidth / this.originalImage.width,
            scaleH = this.canvas.clientHeight / this.originalImage.height;
        if (scaleW <= scaleH && scaleW <= 1) {
            this.scale = scaleW;
        } else if (scaleW > scaleH && scaleH < 1) {
            this.scale = scaleH;
        }
        this.width = this.originalImage.width * this.scale;
        this.height = this.originalImage.height * this.scale;
        this.x = (this.canvas.width - this.width) / 2;
        this.y = (this.canvas.height - this.height) / 2;
        this.ctx.drawImage(
            this.originalImage,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    draw() {
        this.ctx.drawImage(
            this.originalImage,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    zoom(e) {
        if (e.wheelDelta > 0 && this.scale < 5) {
            this.scale *= this.zoom_factor;
            this.x = (this.x - e.offsetX) * this.zoom_factor + e.offsetX;
            this.y = (this.y - e.offsetY) * this.zoom_factor + e.offsetY;
        } else if (e.wheelDelta < 0 && this.scale > 0.1) {
            this.scale /= this.zoom_factor;
            this.x = (this.x - e.offsetX) / this.zoom_factor + e.offsetX;
            this.y = (this.y - e.offsetY) / this.zoom_factor + e.offsetY;
        }
        this.width = this.originalImage.width * this.scale;
        this.height = this.originalImage.height * this.scale;
    }

    span(start_point, end_point) {
        this.x = end_point.x - start_point.x + this.x;
        this.y = end_point.y - start_point.y + this.y;
    }

}