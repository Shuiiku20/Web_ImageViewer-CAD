class cadControl {
    mouseClickCount = 0;

    is_move = false;
    move_sPoint = {};

    mode = "select";
    selectBox = null;
    testMode = false;

    constructor(canvas, context, shape) {
        this.canvas = canvas;
        this.ctx = context;
        this.shape = shape;
        this.drawCursor = new Cursor(canvas, context);
    }

    #drawShape(e) {
        if (this.testMode) {
            this.canvas.style.cursor = "crosshair";
            this.shape.forEach(shape => shape.draw());
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if (this.mode === "select" && this.selectBox !== null) this.selectBox.draw();
            this.shape.forEach(shape => shape.draw());
            this.drawCursor.draw(e);
        }
    }

    canvasMouseListeners() {
        this.canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if (e.button === 0) {
                switch (this.mode) {
                    case "select":
                        if (this.mouseClickCount === 0) {
                            this.selectBox = new Rectangle(this.ctx)
                            this.selectBox.mode = "select";
                            this.selectBox.canvasPoint1.x = e.offsetX;
                            this.selectBox.canvasPoint1.y = e.offsetY;
                            this.mouseClickCount += 1;
                        } else if (this.mouseClickCount === 1) {
                            this.selectBox = null;
                            this.mouseClickCount = 0;
                        }
                        break;
                    case "line":
                        if (this.mouseClickCount === 0) {
                            this.shape.push(new Line(this.ctx))
                            this.shape[this.shape.length - 1].canvasPoint1.x = e.offsetX;
                            this.shape[this.shape.length - 1].canvasPoint1.y = e.offsetY;
                            this.mouseClickCount += 1;
                        } else if (this.mouseClickCount === 1) {
                            this.shape[this.shape.length - 1].canvasPoint3.x = e.offsetX;
                            this.shape[this.shape.length - 1].canvasPoint3.y = e.offsetY;
                            this.mouseClickCount = 0;
                        }
                        break;
                    case "rect":
                        if (this.mouseClickCount === 0) {
                            this.shape.push(new Rectangle(this.ctx))
                            this.shape[this.shape.length - 1].canvasPoint1.x = e.offsetX;
                            this.shape[this.shape.length - 1].canvasPoint1.y = e.offsetY;
                            this.mouseClickCount += 1;
                        } else if (this.mouseClickCount === 1) {
                            this.shape[this.shape.length - 1].canvasPoint3.x = e.offsetX;
                            this.shape[this.shape.length - 1].canvasPoint3.y = e.offsetY;
                            this.mouseClickCount = 0;
                        }
                        break;
                    case "circle":
                        if (this.mouseClickCount === 0) {
                            this.shape.push(new Circle(this.ctx))
                            this.shape[this.shape.length - 1].canvasPoint1.x = e.offsetX;
                            this.shape[this.shape.length - 1].canvasPoint1.y = e.offsetY;
                            this.mouseClickCount += 1;
                        } else if (this.mouseClickCount === 1) {
                            this.shape[this.shape.length - 1].canvasPoint3.x = e.offsetX;
                            this.shape[this.shape.length - 1].canvasPoint3.y = e.offsetY;
                            this.mouseClickCount = 0;
                        }
                        break;
                }

            } else if (e.button === 1) {
                this.move_sPoint.x = e.offsetX;
                this.move_sPoint.y = e.offsetY;
                this.is_move = true;
            } else if (e.button === 2) {

            } else if (e.button === 3) {
                console.log("3down");
            } else if (e.button === 4) {
                console.log("4down");
            }
            this.#drawShape(e);
        })

        this.canvas.addEventListener("mouseup", (e) => {
            e.preventDefault();
            if (e.button === 0) {

            } else if (e.button === 1) {
                this.is_move = false;
            } else if (e.button === 2) {

            } else if (e.button === 3) {

            } else if (e.button === 4) {

            }
            this.#drawShape(e);
        })

        this.canvas.addEventListener("mousemove", (e) => {
            switch (this.mode) {
                case "select":
                    if (this.mouseClickCount === 1) {
                        this.selectBox.canvasPoint3.x = e.offsetX;
                        this.selectBox.canvasPoint3.y = e.offsetY;
                    }
                    break;
                case "line":
                    if (this.mouseClickCount === 1) {
                        this.shape[this.shape.length - 1].canvasPoint3.x = e.offsetX;
                        this.shape[this.shape.length - 1].canvasPoint3.y = e.offsetY;
                    }
                    break;
                case "rect":
                    if (this.mouseClickCount === 1) {
                        this.shape[this.shape.length - 1].canvasPoint3.x = e.offsetX;
                        this.shape[this.shape.length - 1].canvasPoint3.y = e.offsetY;
                    }
                    break;
                case "circle":
                    if (this.mouseClickCount === 1) {
                        this.shape[this.shape.length - 1].canvasPoint3.x = e.offsetX;
                        this.shape[this.shape.length - 1].canvasPoint3.y = e.offsetY;
                    }
                    break;
            }
            if (this.is_move === true) {
                let move_ePoint = {};
                move_ePoint.x = e.offsetX;
                move_ePoint.y = e.offsetY;
                this.move_sPoint = move_ePoint;
            }
            this.#drawShape(e);
        })

        this.canvas.addEventListener("mousewheel", (e) => {
            e.preventDefault();
            this.#drawShape(e);
        })

        this.canvas.addEventListener("mouseleave", (e) => {
            this.is_move = false;
        })

        this.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        }
    }




}