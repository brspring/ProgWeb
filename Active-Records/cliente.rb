require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Cliente < ApplicationRecord
    t.string :nome
    has_many :cliente_produtos
    has_many :produtos, through: :cliente_produtos
end