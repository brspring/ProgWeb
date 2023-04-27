# -*- coding: utf-8 -*-

$:.push './'
require 'departamento.rb'


dep = Departamento.all
puts dep.class # Departamento::ActiveRecord_Relation
dep.each do |departamento|
  puts "#{departamento.nome}"
end