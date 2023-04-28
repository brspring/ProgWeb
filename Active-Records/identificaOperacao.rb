
require './operacoesAluno'
require './operacoesMatricula'
require './operacoesTurma'
require './operacoesDepartamento'

class IdentificaOperacao

    def initialize
        @operacoesAluno = OperacoesAluno.new
        @operacoesTurma = OperacoesTurma.new
        @operacoesMatricula = OperacoesMatricula.new
        @operacoesDepartamento = OperacoesDepartamento.new
    end

    def inserir(tabela, atributo_valor)
        case tabela
        when "aluno"
            puts "inserir na tabela #{tabela}"
            @operacoesAluno.criaAluno(atributo_valor)
        when "matricula"
            puts "inserir na tabela #{tabela}"
            @operacoesMatricula.criaMatricula(atributo_valor)
        when "departamento"
            puts "inserir na tabela #{tabela}"
            @operacoesDepartamento.criaDepartamento(atributo_valor)
        when "turma"
            puts "inserir na tabela #{tabela}"
            @operacoesTurma.criaTurma(atributo_valor)
        else
            puts "tabela #{funcao} nao existe"
        end
    end 

    def excluir(tabela, atributo_valor)
        case tabela
        when "aluno"
            puts "excluir na tabela #{tabela}"
            @operacoesAluno.excluiAluno(atributo_valor)
        when "matricula"
            puts "excluir na tabela #{tabela}"
            @operacoesMatricula.excluiMatricula(atributo_valor)
        when "departamento"
            puts "excluir na tabela #{tabela}"
            @operacoesDepartamento.excluiDepartamento(atributo_valor)
        when "turma"
            puts "excluir na tabela #{tabela}"
            @operacoesTurma.excluiTurma(atributo_valor)
        else
            puts "tabela #{funcao} nao existe"
        end

    end 

    def buscar(tabela, atributo_valor)
        case tabela
        when "aluno"
            puts "buscar na tabela #{tabela}"
            @operacoesAluno.buscarAluno(atributo_valor)
        when "matricula"
            puts "buscar na tabela #{tabela}"
            @operacoesMatricula.buscarMatricula(atributo_valor)
        when "docente"
            puts "buscar na tabela #{tabela}"
            @operacoesDepartamento.buscarDepartamento(atributo_valor)
        when "turma"
            puts "buscar na tabela #{tabela}"
            @operacoesTurma.buscarTurma(atributo_valor)
        else
            puts "tabela #{funcao} nao existe"
        end
    end

end
