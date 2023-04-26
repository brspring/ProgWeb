require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Aluno < ApplicationRecord::Base;
    has_one :matricula
    has_many :materias
end 