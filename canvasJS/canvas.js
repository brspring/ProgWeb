var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Reta() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Definir as propriedades do objeto 'reta'
  var reta = {
    x: 350,
    y: 350,
    rotation: 0,
    width: 150,
    height: 150,

    centerX: function () {
      return this.x + this.width / 2;
    },

    centerY: function () {
      return this.y + this.height / 2;
    },

    startPointX: function () {
      return this.centerX() - this.width / 2;
    },
    
    startPointY: function () {
      return this.centerY() - this.height / 2;
    },
    
    endPointX: function () {
      return this.centerX() + this.width / 2;
    },
    
    endPointY: function () {
      return this.centerY() + this.height / 2;
    }
  };

  function drawReta() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(reta.startPointX(), reta.startPointY());
    ctx.lineTo(reta.centerX(), reta.centerY());
    ctx.lineTo(reta.endPointX(), reta.endPointY());

    ctx.lineWidth = 4;
    ctx.stroke();

    // Desenhar os pontos
    ctx.beginPath();
    ctx.arc(reta.startPointX(), reta.startPointY(), 4, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(reta.centerX(), reta.centerY(), 4, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(reta.endPointX(), reta.endPointY(), 4, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  // Adicionar evento de clique ao canvas
  canvas.addEventListener("mousedown", function (event) {
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

      canvas.addEventListener("mouseup", function () {
        canvas.removeEventListener("mousemove", moveReta);
      });
    }

    if (
      (offsetX >= reta.startPointX() - 5 &&
        offsetX <= reta.startPointX() + 5 &&
        offsetY >= reta.startPointY() - 5 &&
        offsetY <= reta.startPointY() + 5) ||
      (offsetX >= reta.endPointX() - 5 &&
        offsetX <= reta.endPointX() + 5 &&
        offsetY >= reta.endPointY() - 5 &&
        offsetY <= reta.endPointY() + 5)
    ) {
      // Atualizar as coordenadas do objeto 'reta' com base no deslocamento do mouse
      canvas.addEventListener("mousemove", resizeReta);

      canvas.addEventListener("mouseup", function () {
        canvas.removeEventListener("mousemove", resizeReta);
      });
    }
  });

  function moveReta(event) {
    var offsetX = event.clientX - canvas.getBoundingClientRect().left;
    var offsetY = event.clientY - canvas.getBoundingClientRect().top;
    reta.x += offsetX - reta.centerX();
    reta.y += offsetY - reta.centerY();

    drawReta();
  }

  function resizeReta(event) {
    var offsetX = event.clientX - canvas.getBoundingClientRect().left;
    var offsetY = event.clientY - canvas.getBoundingClientRect().top;
  
    var startPointClicked =
      offsetX >= reta.startPointX() - 5 &&
      offsetX <= reta.startPointX() + 5 &&
      offsetY >= reta.startPointY() - 5 &&
      offsetY <= reta.startPointY() + 5;
  
    var endPointClicked =
      offsetX >= reta.endPointX() - 5 &&
      offsetX <= reta.endPointX() + 5 &&
      offsetY >= reta.endPointY() - 5 &&
      offsetY <= reta.endPointY() + 5;
  
    if (startPointClicked || endPointClicked) {
      var startX = reta.startPointX();
      var startY = reta.startPointY();
      var endX = reta.endPointX();
      var endY = reta.endPointY();
  
      canvas.addEventListener("mousemove", dragRe);
      canvas.addEventListener("mouseup", function () {
      canvas.removeEventListener("mousemove", dragRe);
      });
  
      function dragRe(event) {
        var newOffsetX = event.clientX - canvas.getBoundingClientRect().left;
        var newOffsetY = event.clientY - canvas.getBoundingClientRect().top;
  
        if (startPointClicked) {
          var diffX = newOffsetX - offsetX;
          var diffY = newOffsetY - offsetY;
          reta.x = startX + diffX;
          reta.y = startY + diffY;
          reta.width = endX - reta.x;
          reta.height = endY - reta.y;
        } else if (endPointClicked) {
          reta.width = newOffsetX - reta.startPointX();
          reta.height = newOffsetY - reta.startPointY();
        }
  
        drawReta();
      }
    }
  }

drawReta(); // Desenhar a reta inicial

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

