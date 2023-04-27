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
doc = Matricula.new ({:cpf => "CPF-3", :grr =>"GRR20213"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Lucas"})
doc = Matricula.new ({:cpf => "CPF-4", :grr =>"GRR20214"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Emilia"})
doc = Matricula.new ({:cpf => "CPF-5", :grr =>"GRR20215"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Carol"})
doc = Matricula.new ({:cpf => "CPF-6", :grr =>"GRR20216"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Maria"})
doc = Matricula.new ({:cpf => "CPF-7", :grr =>"GRR20217"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Eduardo"})
doc = Matricula.new ({:cpf => "CPF-8", :grr =>"GRR20218"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "Diogo"})
doc = Matricula.new ({:cpf => "CPF-9", :grr =>"GRR20219"})
doc.aluno = p
doc.save
p.save

p = Aluno.new ({:nome => "David"})
doc = Matricula.new ({:cpf => "CPF-10", :grr =>"GRR20210"})
doc.aluno = p
doc.save
p.save
