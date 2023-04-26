require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Materias < ApplicationRecord
    belongs_to :departamento
    has_many :alunos
end                                                        