var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function desenharLinha() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 200);
  ctx.stroke();
}

function desenharPoligono() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 50);
  ctx.lineTo(125, 200);
  ctx.closePath();
  ctx.stroke();
}

var linhaBotao = document.getElementById("linhaBotao");
linhaBotao.addEventListener("click", desenharLinha);

var poligonoBotao = document.getElementById("poligonoBotao");
poligonoBotao.addEventListener("click", desenharPoligono);
