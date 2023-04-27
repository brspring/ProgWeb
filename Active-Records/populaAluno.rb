# -*- coding: utf-8 -*-

$:.push './'
require 'aluno.rb'
require 'matricula.rb'

p = Aluno.new ({:nome => "Joao"})
doc = Matricula.new ({:cpf => "CPF-1", :grr =>"GRR20211"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Bruno"})
doc = Matricula.new ({:cpf => "CPF-2", :grr =>"GRR20212"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Joana"})
doc = Matricula.new ({:cpf => "CPF-1", :grr =>"GRR20213"})
doc.aluno = p
doc.save
p.save