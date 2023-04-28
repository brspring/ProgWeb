require './operacoesAluno' 
require './identificaOperacao'
require './aluno.rb' 

class Resources
    identificaOperacao = IdentificaOperacao.new
    puts  	
    puts "< operação > < tabela >  <atributo = valor> "
    puts "Nao use aspas nos atributos (Ex: inserir aluno nome = Bruno)"
    puts
    puts "Possiveis operacoes: "
    puts "inserir, buscar, excluir e sair"

    while true
        input = gets.chomp
	
	if input == "sair" #condicao para sair do loop
        	break
    	end

        input_array = input.split(/ /,-1 )
        funcao = input_array[0]
        tabela = input_array[1]
        atributo_valor = input_array[2..input_array.length - 1]
        atributo_valor.delete("=")
    
        case funcao
        when "inserir"
            puts "funcao inserir na tabela #{tabela}"
            identificaOperacao.inserir(tabela, atributo_valor)
        when "excluir"
            puts "funcao excluir na tabela #{tabela}"
            identificaOperacao.excluir(tabela, atributo_valor)
        when "buscar"
            puts "funcao busca na tabela #{tabela}"
            identificaOperacao.buscar(tabela, atributo_valor)
	when "sair"
		break
        else
            puts "funcao #{funcao} nao existe"
        end
    end
end
