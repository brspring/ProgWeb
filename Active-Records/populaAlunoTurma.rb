# -*- coding: utf-8 -*-
$:.push './'
require 'turma.rb'
require 'aluno.rb'

alunos = Aluno.all
turmas = Turma.all
alunos.each do |aluno|
  turmas.each do |turma|
    aluno.turmas << turma
  end
end
