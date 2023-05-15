var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Reta() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Definir as propriedades do objeto 'reta'
  var reta = {
    x: 100,
    y: 100,
    rotation: 0,
    width: 150,
    height: 150,

    centerX: function() {
      return this.x + this.width / 2;
    },

    centerY: function() {
      return this.y + this.height / 2;
    }
  };

  function drawReta() {
    var midPointX = reta.centerX();
    var midPointY = reta.centerY();
    var startPointX = midPointX;
    var startPointY = midPointY - 75;
    var endPointX = midPointX;
    var endPointY = midPointY + 75;

    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.lineTo(midPointX, midPointY);
    ctx.lineTo(endPointX, endPointY);

    ctx.lineWidth = 4;
    ctx.stroke();

    // Desenhar os pontos
    ctx.beginPath();
    ctx.arc(startPointX, startPointY, 4, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(midPointX, midPointY, 4, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(endPointX, endPointY, 4, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  drawReta(); // Desenhar a reta inicialmente

  // Adicionar evento de clique ao canvas
  canvas.addEventListener("mousedown", function(event) {
    var offsetX = event.clientX - canvas.getBoundingClientRect().left;
    var offsetY = event.clientY - canvas.getBoundingClientRect().top;

    // Verificar se o clique ocorreu no ponto médio
    if (
      offsetX >= reta.centerX() - 5 &&
      offsetX <= reta.centerX() + 5 &&
      offsetY >= reta.centerY() - 5 &&
      offsetY <= reta.centerY() + 5
    ) {
      // Atualizar as coordenadas do objeto 'reta' com base no deslocamento do mouse
      canvas.addEventListener("mousemove", moveReta);

      canvas.addEventListener("mouseup", function() {
        canvas.removeEventListener("mousemove", moveReta);
      });
    }
  });

  function moveReta(event) {
    var offsetX = event.clientX - canvas.getBoundingClientRect().left;
    var offsetY = event.clientY - canvas.getBoundingClientRect().top;

    reta.x = offsetX - reta.width / 2;
    reta.y = offsetY - reta.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Redesenhar a reta com as novas coordenadas
    drawReta();
  }
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