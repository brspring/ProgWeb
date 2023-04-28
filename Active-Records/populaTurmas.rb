# -*- coding: utf-8 -*-
$:.push './'
require 'turma.rb'

turma = Turma.new ({ :nome => "ihc", :codigo => "ihc10"})
turma.save
turma = Turma.new ({ :nome => "programacao", :codigo => "prog101"})
turma.save
turma = Turma.new ({ :nome => "algoritmos", :codigo => "alg101"})
turma.save
turma = Turma.new ({ :nome => "projetos", :codigo => "proj101"})
turma.save
