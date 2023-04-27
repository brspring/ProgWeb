# -*- coding: utf-8 -*-
$:.push './'
require 'materia.rb'

materia = Materia.new ({ :nome => "ihc"})
materia.save
materia = Materia.new ({ :nome => "programacao"})
materia.save
materia = Materia.new ({ :nome => "algoritmos"})
materia.save
materia = Materia.new ({ :nome => "projetos"})
materia.save