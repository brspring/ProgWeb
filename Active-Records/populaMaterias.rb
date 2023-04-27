# -*- coding: utf-8 -*-
$:.push './'
require 'materia.rb'

materia = Materia.new ({ :nome => "ihc", :codigo => "ihc10"})
materia.save
materia = Materia.new ({ :nome => "programacao", :codigo => "prog101"})
materia.save
materia = Materia.new ({ :nome => "algoritmos", :codigo => "alg101"})
materia.save
materia = Materia.new ({ :nome => "projetos", :codigo => "proj101"})
materia.save