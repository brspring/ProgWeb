# -*- coding: utf-8 -*-
$:.push './'
require 'materia.rb'
require 'aluno.rb'

alunos = Aluno.all
alunos.each do |aluno|
  materias = aluno.materia
  print "#{aluno.nome}->"
  materias.each do |materia|
    print "#{materia.nome} "
  end
  puts
end

materias = Materia.all
materias.each do |materia|
  alunos = materia.alunos
  print "#{materia.nome}->"
  alunos.each do |aluno|
    print "#{aluno.nome} "
  end
  puts
end