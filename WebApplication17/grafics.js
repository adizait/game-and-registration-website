//var canvas = document.getElementById("myCanvas");
//var context = canvas.getContext("2d");
function drawRectangle(x, y, width, height, color, borderWidth, borderColor) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.stroke();
}

function drawArc(x, y, r, startAngle, endAngle, counterClockWise, color, borderWidth) {
    context.beginPath();
    context.arc(x, y, r, startAngle, endAngle, counterClockWise);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.stroke();

}

function drawTriangle(xOfFirstPoint, yOfFirstPoint, xOfSecondPoint, yOfSecondPoint, xOFThirdPoint, yOFThirdPoint, color, borderWidth, borderColor) {
    context.beginPath();
    context.moveTo(xOfFirstPoint, yOfFirstPoint);
    context.lineTo(xOfSecondPoint, yOfSecondPoint);
    context.lineTo(xOFThirdPoint, yOFThirdPoint);
    context.lineTo(xOfFirstPoint, yOfFirstPoint);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.stroke();
}

function drawText(x, y, style, text, color, borderWidth, borderColor) {
    context.beginPath();
    context.font = (style);
    context.fillText(text, x, y);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = borderWidth;
    context.strokeStyle = borderColor;
    context.stroke();

}