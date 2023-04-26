require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Matricula < ApplicationRecord::Base
    belongs_to :materia
    belongs_to :aluno
end