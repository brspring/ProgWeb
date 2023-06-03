// Função para carregar o arquivo XML usando uma solicitação HTTP
function loadXMLFile(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// Função para extrair as matérias de um aluno específico do XML
function extractMateriasAluno(xmlString, matricula) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  const tagAlunos = xmlDoc.getElementsByTagName("ALUNO");
  const materias = [];

  for (let i = 0; i < tagAlunos.length; i++) {
    const tagAluno = tagAlunos[i];
    const matriculaNode = tagAluno.getElementsByTagName("MATR_ALUNO")[0];
    const matriculaAluno = matriculaNode.textContent;

    if (matriculaAluno === matricula) {
      const materiaNodes = tagAluno.getElementsByTagName("COD_ATIV_CURRIC");

      for (let j = 0; j < materiaNodes.length; j++) {
        const materiaNode = materiaNodes[j];
        const materia = materiaNode.textContent;
        materias.push(materia);
      }
    }
  }

  return materias;
}

// Função para extrair informações de uma matéria específica do XML
function extrairInformacoesMateria(xmlString, matriculaAluno) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  const alunoElements = xmlDoc.getElementsByTagName("ALUNO");
  const materias = {};

  for (let i = alunoElements.length - 1; i >= 0; i--) {
    const alunoElement = alunoElements[i];
    const alunoId = alunoElement.querySelector("MATR_ALUNO").textContent;

    if (alunoId === matriculaAluno) {
      const sigla = alunoElement.querySelector("COD_ATIV_CURRIC").textContent;

      if (!materias[sigla]) {
        const ano = alunoElement.querySelector("ANO").textContent;
        const nota = alunoElement.querySelector("MEDIA_FINAL").textContent;
        const situacao = alunoElement.querySelector("SIGLA").textContent;

        materias[sigla] = {
          ano,
          nota,
          situacao,
        };
      }
    }
  }

  return materias;
}

function pintarGradeAluno(xmlString, matriculaAluno) {
  const materias = extrairInformacoesMateria(xmlString, matriculaAluno);

  const cells = document.querySelectorAll(".tableCell");
  cells.forEach((cell) => {
    const materiaId = cell.id;
    const materiaInfo = materias[materiaId];

    if (materiaInfo) {
      const situacao = materiaInfo.situacao;

      if (situacao === "Aprovado") {
        cell.style.backgroundColor = "green";
      } else if (situacao === "Reprovado" ||situacao === "Repr. Freq"||situacao === "Tr. Total" || situacao === "TrancAdm") {
        cell.style.backgroundColor = "red";
      } else if (situacao === "Matricula") {
        cell.style.backgroundColor = "blue";
      } else if (situacao === "Equivale") {
        cell.style.backgroundColor = "yellow";
      }
    }
  });
}



//Obtém referência aos elementos do HTML
const inputField = document.getElementById("studentSelect");
const loadButton = document.getElementById("loadStudent");

// Adiciona evento de clique ao botão
loadButton.addEventListener("click", function() {
  carregarAluno();
});

// Adiciona evento de tecla pressionada ao campo de entrada
inputField.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    carregarAluno();
  }
});

function carregarAluno() {
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada

  console.clear();

  // Restaurar a cor de fundo da grade
  const cells = document.querySelectorAll(".tableCell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });

  const xmlFileURL = "alunos.xml"; // URL do arquivo XML

  loadXMLFile(xmlFileURL, function(xmlString) {
    const materiasAluno = extractMateriasAluno(xmlString, matriculaAluno);
    console.log("Matérias do aluno:", materiasAluno);

    pintarGradeAluno(xmlString, matriculaAluno);
  });
}

// Função para exibir o modal com as informações da matéria
function showModal(id) {
  const xmlFileURL = "alunos.xml"; // URL do arquivo XML
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada

  loadXMLFile(xmlFileURL, function(xmlString) {
    const materiasAluno = extractMateriasAluno(xmlString, matriculaAluno);
    const ultimaVez = materiasAluno.lastIndexOf(id);

    if (ultimaVez !== -1) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");
      const alunoElements = xmlDoc.getElementsByTagName("ALUNO");

      for (let i = alunoElements.length - 1; i >= 0; i--) {
        const alunoElement = alunoElements[i];
        const matriculaNode = alunoElement.getElementsByTagName("MATR_ALUNO")[0];
        const matricula = matriculaNode.textContent;

        if (matricula === matriculaAluno) {
          const materiaNodes = alunoElement.getElementsByTagName("COD_ATIV_CURRIC");

          for (let j = materiaNodes.length - 1; j >= 0; j--) {
            const materiaNode = materiaNodes[j];
            const materia = materiaNode.textContent;

            if (materia === id) {
              const dataNode = alunoElement.getElementsByTagName("ANO")[j];
              const notaNode = alunoElement.getElementsByTagName("MEDIA_FINAL")[j];
              const situacaoNode = alunoElement.getElementsByTagName("SITUACAO")[j];
              const frequenciaNode = alunoElement.getElementsByTagName("FREQUENCIA")[j];

              const data = dataNode.textContent;
              const nota = notaNode.textContent;
              const situacao = situacaoNode.textContent;
              const frequencia = frequenciaNode.textContent;

              // Exibir os dados no modal
              const modalData = document.getElementById("modalData");
              modalData.innerHTML = `
                <h2>${id}</h2>
                <p><strong>Data:</strong> ${data}</p>
                <p><strong>Nota:</strong> ${nota}</p>
                <p><strong>Situação:</strong> ${situacao}</p>
                <p><strong>Frequencia:</strong> ${frequencia}</p>
              `;

              // Abrir o modal
              const modal = document.getElementById("modal");
              modal.style.display = "block";

              return;
            }
          }
        }
      }
    }

    // Exibir mensagem para matéria não cursada
    const modalData = document.getElementById("modalData");
    modalData.innerHTML = `
      <h2>${id}</h2>
      <p><strong> Matéria não cursada</strong></p>
    `;

    // Abrir o modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  });
}

function showHistoricoModal(id) {
  const xmlFileURL = "alunos.xml"; // URL do arquivo XML
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada

  loadXMLFile(xmlFileURL, function(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const alunoElements = xmlDoc.getElementsByTagName("ALUNO");

    const historico = [];

    for (let i = alunoElements.length - 1; i >= 0; i--) {
      const alunoElement = alunoElements[i];
      const matriculaNode = alunoElement.getElementsByTagName("MATR_ALUNO")[0];
      const matricula = matriculaNode.textContent;

      if (matricula === matriculaAluno) {
        const materiaNodes = alunoElement.getElementsByTagName("COD_ATIV_CURRIC");

        for (let j = materiaNodes.length - 1; j >= 0; j--) {
          const materiaNode = materiaNodes[j];
          const materia = materiaNode.textContent;

          if (materia === id) {
            const dataNode = alunoElement.getElementsByTagName("ANO")[j];
            const notaNode = alunoElement.getElementsByTagName("MEDIA_FINAL")[j];
            const situacaoNode = alunoElement.getElementsByTagName("SITUACAO")[j];
            const frequenciaNode = alunoElement.getElementsByTagName("FREQUENCIA")[j];

            const data = dataNode.textContent;
            const nota = notaNode.textContent;
            const situacao = situacaoNode.textContent;
            const frequencia = frequenciaNode.textContent;

            historico.push({
              data,
              nota,
              situacao,
              frequencia,
            });
          }
        }
      }
    }

    if (historico.length > 0) {
      // Construir a tabela de histórico
      let table = "<table><tr><th>Data</th><th>Nota</th><th>Situação</th><th>Frequência</th></tr>";

      for (let i = 0; i < historico.length; i++) {
        const { data, nota, situacao, frequencia } = historico[i];

        table += `<tr><td>${data}</td><td>${nota}</td><td>${situacao}</td><td>${frequencia}</td></tr>`;
      }

      table += "</table>";

      // Exibir os dados no modal
      const modalData = document.getElementById("modalData");
      modalData.innerHTML = table;

      // Abrir o modal
      const modal = document.getElementById("modal");
      modal.style.display = "block";
    } else {
      // Exibir mensagem para matéria não cursada
      const modalData = document.getElementById("modalData");
      modalData.innerHTML = `
        <h2>${id}</h2>
        <p><strong>Matéria não cursada</strong></p>
      `;

      // Abrir o modal
      const modal = document.getElementById("modal");
      modal.style.display = "block";
    }
  });
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Obtém todas as células da tabela com um id de matéria
const cells = document.querySelectorAll(".tableCell[id]");

// Adiciona o evento de clique para cada célula
cells.forEach((cell) => {
  cell.addEventListener("click", function() {
    const id = this.id;
    showModal(id);
  });
});

// Adiciona o evento de clique com o botão direito para cada célula
cells.forEach((cell) => {
  cell.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Impede o menu de contexto padrão de ser exibido
    const id = this.id;
    showHistoricoModal(id);
  });
});

// Obtém o elemento do "X" para adicionar o evento de clique
const closeModalButton = document.getElementById("closeModal");

// Adiciona o evento de clique para fechar o modal
closeModalButton.addEventListener("click", closeModal);
