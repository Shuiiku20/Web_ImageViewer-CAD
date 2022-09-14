class imgControl {
    mouseClickCount = 0;

    is_move = false;
    move_sPoint = {};

    constructor(canvas, context, image) {
        this.canvas = canvas;
        this.ctx = context;
        this.image = image;
    }

    #drawImgShape(e) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.image.draw();
    }

    #fitWindow() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.image.fitWindow();
    }

    openImgListeners(button, image) {
        // image.src = "./image/test.jpg";
        image.src = "";
        button.addEventListener("change", (e) => {
            let fileList = button.files;
            let file = fileList[0];

            let reader = new FileReader();
            reader.onload = function () {
                image.src = reader.result;
            }
            reader.readAsDataURL(file);
        })

        image.addEventListener("load", () => {
            this.#fitWindow();
        });
    }

    canvasMouseListeners() {
        this.canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if (e.button === 0) {
                this.move_sPoint.x = e.offsetX;
                this.move_sPoint.y = e.offsetY;
                this.is_move = true;
            } else if (e.button === 1) {

            } else if (e.button === 2) {
                this.#fitWindow();
            } else if (e.button === 3) {

            } else if (e.button === 4) {

            }
            this.#drawImgShape(e);
        })

        this.canvas.addEventListener("mouseup", (e) => {
            e.preventDefault();
            if (e.button === 0) {
                this.is_move = false;
            } else if (e.button === 1) {

            } else if (e.button === 2) {

            } else if (e.button === 3) {

            } else if (e.button === 4) {

            }
            this.#drawImgShape(e);
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if (this.is_move === true) {
                let move_ePoint = {};
                move_ePoint.x = e.offsetX;
                move_ePoint.y = e.offsetY;
                this.image.span(this.move_sPoint, move_ePoint);
                this.move_sPoint = move_ePoint;
            }
            this.#drawImgShape(e);
        })

        this.canvas.addEventListener("mousewheel", (e) => {
            e.preventDefault();
            this.image.zoom(e);
            this.#drawImgShape(e);
        })

        this.canvas.addEventListener("mouseleave", (e) => {
            this.is_move = false;
        })

        this.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        }
    }




}