var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Reta() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var canvasCenterX = canvas.width / 2;
  var canvasCenterY = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(canvasCenterX - 75, canvasCenterY - 75);
  ctx.lineTo(canvasCenterX + 75, canvasCenterY + 75);
  ctx.lineWidth = 5;
  ctx.stroke();
}

function Poligono() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var canvasCenterX = canvas.width / 2;
  var canvasCenterY = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(canvasCenterX - 75, canvasCenterY - 75);
  ctx.lineTo(canvasCenterX + 75, canvasCenterY - 75);
  ctx.lineWidth = 5;
  ctx.lineTo(canvasCenterX, canvasCenterY + 75);
  ctx.closePath();
  ctx.stroke();
}

var RetaBotao = document.getElementById("RetaBotao");
RetaBotao.addEventListener("click", Reta);

var poligonoBotao = document.getElementById("poligonoBotao");
poligonoBotao.addEventListener("click", Poligono);

Reta();