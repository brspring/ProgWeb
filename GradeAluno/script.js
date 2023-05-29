// Função para carregar o arquivo XML usando uma solicitação HTTP
function loadXMLFile(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
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
      const materiaNodes = tagAluno.getElementsByTagName("NOME_ATIV_CURRIC");

      for (let j = 0; j < materiaNodes.length; j++) {
        const materiaNode = materiaNodes[j];
        const materia = materiaNode.textContent;
        materias.push(materia);
      }
    }
  }

  return materias;
}

// Carregar o arquivo XML e extrair as matérias do aluno
const xmlFileURL = "alunos.xml";

// Obter referência aos elementos do HTML
const inputField = document.getElementById("studentSelect");
const loadButton = document.getElementById("loadStudent");

// Adicionar evento de clique ao botão
loadButton.addEventListener("click", function () {
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada
  loadXMLFile(xmlFileURL, function (xmlString) {
    const materiasAluno = extractMateriasAluno(xmlString, matriculaAluno);
    console.log("Matérias do aluno:", materiasAluno);
  });
});

function showModal(id) {
  const dadosUltimaVez = {
    CI068: {
      data: '01/01/2023',
      nota: 8.5,
      frequencia: 'Presente',
      observacoes: 'Bom desempenho'
    },
    CI210: {
      data: '02/02/2023',
      nota: 7.2,
      frequencia: 'Presente',
      observacoes: 'Participação ativa'
    },
    // ... outros dados das matérias
  };

  // Acessar os dados da última vez que a matéria foi cursada
  const dados = dadosUltimaVez[id];

  // Exibir os dados no modal
  const modalData = document.getElementById('modalData');
  modalData.innerHTML = `
      <h2>${id}</h2>
      <p><strong>Data:</strong> ${dados.data}</p>
      <p><strong>Nota:</strong> ${dados.nota}</p>
      <p><strong>Frequência:</strong> ${dados.frequencia}</p>
      <p><strong>Observações:</strong> ${dados.observacoes}</p>
  `;

  // Abrir o modal
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}


// Obtém todas as células da tabela com um id de matéria
const cells = document.querySelectorAll('.tableCell[id]');

// Adiciona o evento de clique para cada célula
cells.forEach((cell) => {
  cell.addEventListener('click', function () {
    const id = this.id;
    showModal(id);
  });
});

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Obtém o elemento do "X" para adicionar o evento de clique
const closeModalButton = document.getElementById('closeModal');

// Adiciona o evento de clique para fechar o modal
closeModalButton.addEventListener('click', closeModal);

// Função para extrair as informações do aluno do XML
function extractAlunoInfo(xmlString, matricula) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  const tagAlunos = xmlDoc.getElementsByTagName("ALUNO");
  const alunoInfo = {};

  for (let i = 0; i < tagAlunos.length; i++) {
    const tagAluno = tagAlunos[i];
    const matriculaNode = tagAluno.getElementsByTagName("MATR_ALUNO")[0];
    const matriculaAluno = matriculaNode.textContent;

    if (matriculaAluno === matricula) {
      const materiasNodes = tagAluno.getElementsByTagName("MATERIA");
      const materias = [];
      const dadosUltimaVez = {};

      for (let j = 0; j < materiasNodes.length; j++) {
        const materiaNode = materiasNodes[j];
        const codigoMateria = materiaNode.getElementsByTagName("COD_ATIV_CURRIC")[0].textContent;
        const dadosMateria = {
          data: materiaNode.getElementsByTagName("DATA")[0].textContent,
          nota: parseFloat(materiaNode.getElementsByTagName("NOTA")[0].textContent),
          frequencia: materiaNode.getElementsByTagName("FREQUENCIA")[0].textContent,
          observacoes: materiaNode.getElementsByTagName("OBSERVACOES")[0].textContent
        };

        materias.push(codigoMateria);
        dadosUltimaVez[codigoMateria] = dadosMateria;
      }

      alunoInfo.materias = materias;
      alunoInfo.dadosUltimaVez = dadosUltimaVez;
      break; // Encerra o loop após encontrar o aluno desejado
    }
  }

  return alunoInfo;
}


// Adicionar evento de clique ao botão
loadButton.addEventListener("click", function() {
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada
  loadXMLFile(xmlFileURL, function(xmlString) {
    const alunoInfo = extractAlunoInfo(xmlString, matriculaAluno);
    console.log("Informações do aluno:", alunoInfo);
  });
});


