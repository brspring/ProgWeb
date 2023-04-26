require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Marticula < ApplicationRecord
    belongs_to :aluno
end