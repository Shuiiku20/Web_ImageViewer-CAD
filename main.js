const imgCanvas = document.getElementById("imgCanvas"),
    imgctx = imgCanvas.getContext("2d"),
    openImage = document.getElementById("openImage");

const currentImage = new Image();
const drawImage = new DrawImage(imgCanvas, imgctx, currentImage);
const imgCtl = new imgControl(imgCanvas, imgctx, drawImage);
imgCtl.canvasMouseListeners();
imgCtl.openImgListeners(openImage, currentImage);


const cadCanvas = document.getElementById("cadCanvas"),
    cadctx = cadCanvas.getContext("2d"),
    drawLine = document.getElementById("line"),
    drawRect = document.getElementById("rectangle"),
    drawCircle = document.getElementById("circle"),
    select = document.getElementById("select"),
    eraseAll = document.getElementById("eraseAll"),
    normalMode = document.getElementById("normal"),
    testMode = document.getElementById("test");

const shape = [];
const cadCtl = new cadControl(cadCanvas, cadctx, shape);
cadCtl.canvasMouseListeners();

drawLine.addEventListener("click", () => {
    cadCtl.mode = "line";
    cadCtl.drawCursor.mode = "line";
    shape.forEach(element => {
        element.mode = "draw";
    });
});

drawRect.addEventListener("click", () => {
    cadCtl.mode = "rect";
    cadCtl.drawCursor.mode = "rect";
    shape.forEach(element => {
        element.mode = "draw";
    });
});

drawCircle.addEventListener("click", () => {
    cadCtl.mode = "circle";
    cadCtl.drawCursor.mode = "circle";
    shape.forEach(element => {
        element.mode = "draw";
    });
});

select.addEventListener("click", () => {
    cadCtl.drawCursor.mode = "select";
    cadCtl.mode = "select";
});

eraseAll.addEventListener("click", () => {
    cadctx.clearRect(0, 0, cadCanvas.width, cadCanvas.height);
    shape.length = 0;
});

normalMode.addEventListener("click", () => {
    cadCtl.testMode = false;
});

testMode.addEventListener("click", () => {
    cadCtl.testMode = true;
});