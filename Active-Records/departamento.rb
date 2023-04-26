require 'active_record'

ActiveRecord::Base.establish_connection :adapter => "sqlite3",
                                        :database => "Tabelas.sqlite3" 

class Restaurante < ApplicationRecord
    has_many :materias                                      
end