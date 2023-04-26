require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Aluno < ApplicationRecord
    t.string :nome
    has_many :materias