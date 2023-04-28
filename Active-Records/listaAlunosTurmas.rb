# -*- coding: utf-8 -*-
$:.push './'
require 'turma.rb'
require 'aluno.rb'

alunos = Aluno.all
alunos.each do |aluno|
  turmas = aluno.turma
  print "#{aluno.nome}->"
  turmas.each do |turma|
    print "#{turma.nome} "
  end
  puts
end

turmas = Turma.all
turmas.each do |turma|
  alunos = turma.alunos
  print "#{turma.nome}->"
  alunos.each do |aluno|
    print "#{aluno.nome} "
  end
  puts
end