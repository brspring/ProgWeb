require './departamento.rb'

class OperacoesDepartamento

    def criaDepartamento(atributo_valor)
        departamento = Departamento.new ({atributo_valor[0] => atributo_valor[1]} )
        departamento.save
        puts 'Departamento Criado!'
    end

    def excluiDepartamento(atributo_valor)
        departamento = Departamento.find_by({atributo_valor[0] => atributo_valor[1]})
        departamento.delete
        puts 'Departamento Deletado'
    end

    def buscarDepartamento(atributo_valor)
        departamento = Departamento.find_by({atributo_valor[0] => atributo_valor[1]})
        puts departamento.inspect
        puts 'Departamento Buscado'
    end

end
