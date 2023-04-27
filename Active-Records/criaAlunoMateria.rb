require 'rubygems' 
require 'active_record' 
 
ActiveRecord::Base.establish_connection :adapter => "sqlite3", 
     :database => "Tabelas.sqlite3" 
 
ActiveRecord::Base.connection.create_table :materias_alunos, id: false do |t|  
  t.references :materia, :unique => true
  t.references :aluno, :unique => true
end
 