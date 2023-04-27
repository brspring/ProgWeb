require 'rubygems' 
require 'active_record' 
 
ActiveRecord::Base.establish_connection :adapter => "sqlite3", 
     :database => "Tabelas.sqlite3" 
 
ActiveRecord::Base.connection.create_table :matriculas do |t|  
  t.string     :cpf  
  t.string     :grr
  t.references :aluno, foreign_key: true
end