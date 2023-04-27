# -*- coding: utf-8 -*-
$:.push './'
require 'materia.rb'
require 'aluno.rb'

materia1 = Materia.find_by_nome("ihc")
alunos = Aluno.all
alunos.each do |aluno|
  aluno.materias << materia1
end

aluno1  = Aluno.find_by_nome("Maria")
materias = Materia.all
materias.each do |materia|
  materia.alunos << aluno1
end