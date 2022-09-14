const imgCanvas = document.getElementById("imgCanvas"),
    imgCtx = imgCanvas.getContext("2d"),
    openImage = document.getElementById("openImage");

const currentImage = new Image();
const drawImage = new DrawImage(imgCanvas, imgCtx, currentImage);
const imgCtl = new imgControl(imgCanvas, imgCtx, drawImage);
imgCtl.canvasMouseListeners();
imgCtl.openImgListeners(openImage, currentImage);


const cadCanvas = document.getElementById("cadCanvas"),
    cadCtx = cadCanvas.getContext("2d"),
    drawLine = document.getElementById("line"),
    drawRect = document.getElementById("rectangle"),
    drawCircle = document.getElementById("circle"),
    select = document.getElementById("select"),
    eraseAll = document.getElementById("eraseAll"),
    normalMode = document.getElementById("normal"),
    fillMode = document.getElementById("fill");

const shape = [];
const cadCtl = new cadControl(cadCanvas, cadCtx, shape);
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
    cadCtx.clearRect(0, 0, cadCanvas.width, cadCanvas.height);
    shape.length = 0;
});

normalMode.addEventListener("click", () => {
    cadCtl.fillMode = false;
    cadCtl.draw();
});

fillMode.addEventListener("click", () => {
    cadCtl.fillMode = true;
    cadCtl.draw();
});

const graphCanvas = document.getElementById("graphCanvas"),
    graphCtx = graphCanvas.getContext("2d"),
    drawGraph = document.getElementById("graphStart");

let testData = [
    [0, 100],
    [50, 180],
    [100, 50],
    [150, 80],
    [200, 20],
    [250, 120],
    [300, 180],
    [350, 190],
    [400, 40],
    [450, 90],
    [500, 70],
    [550, 80],
    [600, 150],
    [650, 50],
    [700, 30],
    [750, 80],
    [800, 150],
    [850, 180],
    [900, 70],
    [950, 60],
    [1000, 130],
    [1050, 100],
    [1100, 170],
    [1150, 20],
    [1200, 50],
    [1250, 150]
],
    r = 5,
    sAngle = 0,
    eAngle = 2 * Math.PI,
    i = 0;

drawGraph.addEventListener("click", () => {

    graphCtx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
    drawGraphCoordinate();
    let timer = setInterval(() => {
        if (i > (testData.length - 2)) {
            clearInterval(timer);
            i = 0;
        } else {
            drawGraphPoint();
            drawGraphLine();
            i++;
        }
    }, 500)

});

function drawGraphPoint() {
    graphCtx.lineWidth = 1.5;
    graphCtx.strokeStyle = 'blue';
    graphCtx.beginPath();
    graphCtx.arc(
        testData[i + 1][0],
        testData[i + 1][1],
        r,
        sAngle,
        eAngle,
        true);
    graphCtx.fillStyle = 'blue';
    graphCtx.fill();
    graphCtx.stroke();
    graphCtx.closePath();
}

function drawGraphLine() {
    graphCtx.lineWidth = 1.5;
    graphCtx.strokeStyle = 'green';
    graphCtx.beginPath();
    graphCtx.moveTo(testData[i][0], testData[i][1]);
    graphCtx.lineTo(testData[i + 1][0], testData[i + 1][1]);
    graphCtx.stroke();
    graphCtx.closePath();
}

function drawGraphCoordinate() {
    graphCtx.lineWidth = 1.5;
    graphCtx.strokeStyle = 'black';
    graphCtx.beginPath();
    graphCtx.moveTo(15, 190);
    graphCtx.lineTo(15, 25);  // y axis
    graphCtx.moveTo(15, 10);
    graphCtx.lineTo(10, 25);
    graphCtx.lineTo(20, 25);
    graphCtx.lineTo(15, 10);
    graphCtx.moveTo(0, 110);
    graphCtx.lineTo(1275, 110); // x axis
    graphCtx.moveTo(1290, 110);
    graphCtx.lineTo(1275, 105);
    graphCtx.lineTo(1275, 115);
    graphCtx.lineTo(1290, 110);
    graphCtx.stroke();
    graphCtx.closePath();
    graphCtx.strokeRect(10, 105, 10, 10);
}