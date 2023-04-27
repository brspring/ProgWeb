# -*- coding: utf-8 -*-

$:.push './'
require 'aluno.rb'
require 'matricula.rb'


alunos = Aluno.all
alunos.each do |p|
  print "#{p.nome} "
  print "RG=#{p.matricula.cpf} GRR=#{p.matricula.grr} "
end
