require 'rubygems' 
require 'active_record' 
require_relative 'materia'

ActiveRecord::Base.establish_connection :adapter => "sqlite3", 
     :database => "Tabelas.sqlite3" 
 
ActiveRecord::Base.connection.create_table :materias do |t|  
  t.string     :nome
  t.string     :codigo
end

