# -*- coding: utf-8 -*-
$:.push './'
require 'materia.rb'
require 'aluno.rb'

alunos = Aluno.all
materias = Materia.all
alunos.each do |aluno|
  materias.each do |materia|
    aluno.materias << materia
  end
end