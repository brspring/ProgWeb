rm -f Tabelas.sqlite3

ruby criaDepartamento.rb 
echo "Ok"

ruby criaAlunos.rb
echo "Ok"

ruby criaMatricula.rb
echo "Ok"

ruby criaMaterias.rb 
echo "Ok"

ruby criaAlunoMateria.rb
echo "OK"


ruby populaDepartamentos.rb
echo "Ok"

ruby populaAluno.rb
echo "Ok"

ruby populaMaterias.rb
echo "Ok"

ruby populaAlunoMateria.rb
echo "Ok"


ruby listaAlunos.rb
echo "Ok"

ruby listaAlunosmMaterias.rb
echo "Ok"

ruby listaDepartamentos.rb
echo "Ok"