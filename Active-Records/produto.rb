require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class Produto < ApplicationRecord
    belongs_to :restaurante
    has_many :cliente_produtos
    has_many :clientes, through: :cliente_produtos
end                                                        