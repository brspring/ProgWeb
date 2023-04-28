# -*- coding: utf-8 -*-

$:.push './'
require 'aluno.rb'
require 'turma.rb'


alunos = Aluno.all
alunos.each do |p|
  print "#{p.nome} "
  print "RG=#{p.matricula.cpf} GRR=#{p.matricula.grr} "
end
