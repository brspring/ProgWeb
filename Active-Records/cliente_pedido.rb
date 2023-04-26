require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3"

class ClientePedido < ApplicationRecord
    belongs_to :cliente
    belongs_to :pedido
end