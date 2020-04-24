var canvas;
var canvasPlace;
var ballx = 50;
var ballVx = 10;
var bally = 50;
var ballVy = 4;

var score1 = 0;
var score2 = 0;
const winningScore = 3;

var winScreen = false;

var paddle1y = 250;
var paddle2y = 250;
const paddleThickness = 10
const paddleHeight = 100;
//action when mose click to reset game
function mouseClick() {
    if (winScreen) {
        score1 = 0;
        score2 = 0;
        winScreen = false;
    }
}
window.onload = function () {
    canvas = document.getElementById("myCanvas");
    canvasPlace = canvas.getContext("2d");
    var fps = 30
    setInterval(function () {
        drawAll();
        moveAll();
    }, 1000 / fps);
    canvas.addEventListener("mousedown", mouseClick)
    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = calcMousePos(evt);
        paddle1y = mousePos.y - paddleHeight / 2;
    })
}
//move ai paddle
function pad2Move() {
    var padCenter = paddle2y + (paddleHeight / 2)
    if (padCenter < bally - 35) {
        paddle2y += 10;
    } else if (padCenter > bally + 35) {
        paddle2y -= 10;
    }
}
//moves ball and paddles
function moveAll() {
    if (winScreen) {
        return
    }
    pad2Move()
    ballx += ballVx;
    bally += ballVy;
    if (ballx >= canvas.width) {
        if (bally > paddle2y && bally < paddle2y + paddleHeight) {
            ballVx = -ballVx;
            ballVx -= 1;
            var deltaY = bally - (paddle2y + paddleHeight / 2);
            ballVy = deltaY * 0.35
        }
        else {
            score1 += 1; //must be before ballreset
            ballReset()
        }
    }
    if (ballx < 0) {
        if (bally > paddle1y && bally < paddle1y + paddleHeight) {
            ballVx = -ballVx;
            ballVx += 1;
            var deltaY = bally - (paddle1y + paddleHeight / 2);
            ballVy = deltaY * 0.35
        }
        else {
            score2 += 1; //must be before ballreset
            ballReset()
        }
    }
    if (bally > canvas.height) {
        ballVy = -ballVy;
    }
    if (bally < 0) {
        ballVy = -ballVy;
    }
}
//resets ball when it hits the wall
function ballReset() {
    if (score1 >= 3 || score2 >= 3) {
        winScreen = true;
    }
    if (ballVx > 0) { ballVx = -10; }
    else { ballVx = 10; }
    ballx = canvas.width / 2;
    bally = canvas.height / 2;
}
//draws dotted line  in the middle
function drawDottedLine() {
    for (var i = 0; i < canvas.height; i += 40) {
        colorRect(canvas.width / 2 - 1, i, 2, 20, "white")
    }
}
//draws every thing
function drawAll() {

    colorRect(0, 0, canvas.width, canvas.height, "rgba(30,30,30,0.25)"); // draw background

    if (winScreen) {
        canvasPlace.fillStyle = "white";
        if (score1 >= winningScore) {
            canvasPlace.fillText("Left Player Won!", 350, 200);
        }
        else if (score2 >= winningScore) {
            canvasPlace.fillText("Right Player Won!", 350, 200);
        }
        canvasPlace.fillText("click to continue", 350, 500)
        return
    }
    drawDottedLine()// draws dotted line in the middle
    colorRect(0, paddle1y, paddleThickness, paddleHeight, "white"); //left playble paddle
    colorRect(canvas.width - paddleThickness, paddle2y, paddleThickness, paddleHeight, "white");
    colorcircle(ballx, bally, 10, 10, "red") //ball
    canvasPlace.font = "30px ariel";
    canvasPlace.fillText(score1, 200, 100);
    canvasPlace.fillText(score2, canvas.width - 200, 100);
}
//finds the xy of mouse
function calcMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mousex = evt.clientX - rect.left - root.scrollLeft;
    var mousey = evt.clientY - rect.top - root.scrollTop;
    return { x: mousex, y: mousey }
}
//draw circle with color
function colorcircle(x, y, r, color) {
    canvasPlace.fillStyle = color;
    canvasPlace.beginPath();
    canvasPlace.arc(x, y, r, 0, Math.PI * 2);
    canvasPlace.fill();
}
//draw rect with color
function colorRect(x, y, width, height, color) {
    canvasPlace.fillStyle = color;
    canvasPlace.fillRect(x, y, width, height)
}

