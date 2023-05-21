function main() {
    const loadStudentBtn = document.getElementById('loadStudent');
    loadStudentBtn.addEventListener('click', loadStudentData);
  }

  function loadStudentData() {
    const studentId = document.getElementById('studentSelect').value;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const xmlDoc = this.responseXML;
        const studentData = xmlDoc.getElementsByTagName('ALUNO');

        // Limpar a tabela antes de preencher os dados do aluno
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        for (let i = 0; i < studentData.length; i++) {
          const aluno = studentData[i];
          const matricula = aluno.getElementsByTagName('MATR_ALUNO')[0].childNodes[0].nodeValue;
          if (matricula === studentId) {
            const materia = aluno.getElementsByTagName('NOME_ATIV_CURRIC')[0].childNodes[0].nodeValue;
            const situacao = aluno.getElementsByTagName('SITUACAO')[0].childNodes[0].nodeValue;
            const creditos = aluno.getElementsByTagName('CREDITOS')[0].childNodes[0].nodeValue;
            const cargaHoraria = aluno.getElementsByTagName('CH_TOTAL')[0].childNodes[0].nodeValue;

            // Criar uma nova linha na tabela com os dados do aluno
            const newRow = document.createElement('tr');
            const materiaCell = document.createElement('td');
            materiaCell.textContent = materia;
            const situacaoCell = document.createElement('td');
            situacaoCell.textContent = situacao;
            const creditosCell = document.createElement('td');
            creditosCell.textContent = creditos;
            const cargaHorariaCell = document.createElement('td');
            cargaHorariaCell.textContent = cargaHoraria;

            newRow.appendChild(materiaCell);
            newRow.appendChild(situacaoCell);
            newRow.appendChild(creditosCell);
            newRow.appendChild(cargaHorariaCell);
            tableBody.appendChild(newRow);

            break; // Se o aluno foi encontrado, podemos sair do loop
          }
        }
      }
    };
    xhttp.open('GET', 'caminho_do_seu_arquivo.xml', true); // Substitua "caminho_do_seu_arquivo.xml" pelo caminho correto para o seu arquivo XML
    xhttp.send();
  }

  window.onload = main;