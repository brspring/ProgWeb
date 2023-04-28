require './aluno.rb'
require './matricula.rb'

class OperacoesAluno

    def criaAluno(atributo_valor)
        aluno = Aluno.new ({atributo_valor[0] => atributo_valor[1]} )
        if(atributo_valor[2] == 'matricula')
            matricula = Matricula.find_by_cpf(atributo_valor[3])
            matricula.aluno = aluno
            matricula.save
        end
        aluno.save
	puts 'aluno criado'
    end

    def excluiAluno(atributo_valor)
        aluno = Aluno.find_by({atributo_valor[0] => atributo_valor[1]})
        aluno.delete
	puts 'aluno deletado'
    end

    def buscarAluno(atributo_valor)
        aluno = Aluno.find_by({atributo_valor[0] => atributo_valor[1]})
        puts aluno.inspect
        puts 'Buscou aluno'
    end

end
