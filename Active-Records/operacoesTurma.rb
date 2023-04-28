require './turma.rb'

class OperacoesTurma

    def criaTurma(atributo_valor)
        turma = Turma.new (
            {atributo_valor[0] => atributo_valor[1]} )
        turma.save
        puts 'turma criada!'
    end

    def excluiTurma(atributo_valor)
        turma = Turma.find_by({atributo_valor[0] => atributo_valor[1]})
        turma.delete
        puts 'turma deletada'
    end

    def buscarTurma(atributo_valor)
        turma = Turma.find_by({atributo_valor[0] => atributo_valor[1]})
        puts turma.inspect
        puts 'turma buscada'
    end

end
