require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3" 

class Departamento < ApplicationRecord::Base;
    has_many :materias                                      
end