rm -f Tabelas.sqlite3

echo "Criando departamentos..."
ruby criaDepartamento.rb
echo "Ok"

echo "Criando alunos..."
ruby criaAlunos.rb
echo "Ok"

echo "Criando matriculas..."
ruby criaMatricula.rb
echo "Ok"

echo "Criando turmas..."
ruby criaTurmas.rb
echo "Ok"

echo "Criando alunos_turmas..."
ruby criaAlunoTurmas.rb
echo "OK"

echo "Populando tabelas departamentos..."
ruby populaDepartamentos.rb
echo "Ok"

echo "Populando tabela de alunos..."
ruby populaAluno.rb
echo "Ok"

echo "Populando tabela de materias..."
ruby populaTurmas.rb
echo "Ok"

 echo "Populando tabela de aluno e materias..."
ruby populaAlunoTurma.rb
echo "Ok"

