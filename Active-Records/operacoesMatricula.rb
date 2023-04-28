require './matricula.rb'
require './aluno.rb'

class OperacoesMatricula

    def criaMatricula(atributo_valor)
        matricula = Matricula.new ({atributo_valor[0] => atributo_valor[1]})
        if(atributo_valor[2] == 'aluno')
            aluno = Aluno.find_by_nome(atributo_valor[3])
            matricula.aluno = aluno
        end
        matricula.save
        puts 'matricula criada'
    end

    def excluiMatricula(atributo_valor)
        matricula = Matricula.find_by({atributo_valor[0] => atributo_valor[1]})
        matricula.delete
        puts 'matricula deletada'
    end

    def buscarMatricula(atributo_valor)
        matricula = Matricula.find_by({atributo_valor[0] => atributo_valor[1]})
        puts matricula.inspect
        puts 'matricula buscada'
    end

end
