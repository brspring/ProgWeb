# -*- coding: utf-8 -*-
$:.push './'
require 'departamento.rb'
require 'active_record'

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end

class Departamento < ApplicationRecord
    dep = Departamento.new ()
    dep.nome  = "DINF"
    dep.save
end