var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Reta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var canvasCenterX = canvas.width / 2;
    var canvasCenterY = canvas.height / 2;
    
    var startPointX = canvasCenterX - 75;
    var startPointY = canvasCenterY - 75;
    var endPointX = canvasCenterX + 75;
    var endPointY = canvasCenterY + 75;
    var midPointX = (startPointX + endPointX) / 2;
    var midPointY = (startPointY + endPointY) / 2;
    
    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.lineTo(midPointX, midPointY);
    ctx.lineTo(endPointX, endPointY);
    
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Desenhar os pontos
    ctx.beginPath();
    ctx.arc(startPointX, startPointY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(midPointX, midPointY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(endPointX, endPointY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
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