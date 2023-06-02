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

// Carregar o arquivo XML e extrair as matérias do aluno
const xmlFileURL = "alunos.xml";

// Obter referência aos elementos do HTML
const inputField = document.getElementById("studentSelect");
const loadButton = document.getElementById("loadStudent");

function extrairInformacoesMateria(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  const alunoElement = xmlDoc.querySelector("ALUNO");
  const ano = alunoElement.querySelector("ANO").textContent;
  const nota = alunoElement.querySelector("MEDIA_FINAL").textContent;
  const situacao = alunoElement.querySelector("SITUACAO").textContent;

  return {
    ano,
    nota,
    situacao,
  };
}

// Adicionar evento de clique ao botão
loadButton.addEventListener("click", function () {
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada
  loadXMLFile(xmlFileURL, function (xmlString) {
    const materiasAluno = extractMateriasAluno(xmlString, matriculaAluno);
    console.log("Matérias do aluno:", materiasAluno);
  });
});

function showModal(id) {
  const xmlFileURL = 'alunos.xml'; // URL do arquivo XML
  const matriculaAluno = inputField.value; // Obter o valor digitado no campo de entrada

  loadXMLFile(xmlFileURL, function (xmlString) {
    const materiasAluno = extractMateriasAluno(xmlString, matriculaAluno);
    const ultimaVez = materiasAluno.lastIndexOf(id);

    if (ultimaVez !== -1) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
      const alunoElements = xmlDoc.getElementsByTagName('ALUNO');

      for (let i = alunoElements.length - 1; i >= 0; i--) {
        const alunoElement = alunoElements[i];
        const matriculaNode = alunoElement.getElementsByTagName('MATR_ALUNO')[0];
        const matricula = matriculaNode.textContent;

        if (matricula === matriculaAluno) {
          const materiaNodes = alunoElement.getElementsByTagName('COD_ATIV_CURRIC');

          for (let j = materiaNodes.length - 1; j >= 0; j--) {
            const materiaNode = materiaNodes[j];
            const materia = materiaNode.textContent;

            if (materia === id) {
              const dataNode = alunoElement.getElementsByTagName('ANO')[j];
              const notaNode = alunoElement.getElementsByTagName('MEDIA_FINAL')[j];
              const situacaoNode = alunoElement.getElementsByTagName('SITUACAO')[j];

              const data = dataNode.textContent;
              const nota = notaNode.textContent;
              const situacao = situacaoNode.textContent;

              // Exibir os dados no modal
              const modalData = document.getElementById('modalData');
              modalData.innerHTML = `
                <h2>${id}</h2>
                <p><strong>Data:</strong> ${data}</p>
                <p><strong>Nota:</strong> ${nota}</p>
                <p><strong>Situação:</strong> ${situacao}</p>
              `;

              // Abrir o modal
              const modal = document.getElementById('modal');
              modal.style.display = 'block';

              return;
            }
          }
        }
      }
    }

    // Exibir mensagem para matéria não cursada
    const modalData = document.getElementById('modalData');
    modalData.innerHTML = `
      <h2>${id}</h2>
      <p><strong> Matéria não cursada</strong></p>
    `;

    // Abrir o modal
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  });
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




