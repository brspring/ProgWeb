#maneira de inserir uma pessoa no banco de dados:
#ruby script.rb inclusao people first_name="John" last_name="Doe" age=30


# Criação dos modelos Active Record
class Person < ApplicationRecord
  has_one :passport
  has_many :addresses
  has_and_belongs_to_many :groups
end

class Passport < ApplicationRecord
  belongs_to :person
end

class Address < ApplicationRecord
  belongs_to :person
end

class Group < ApplicationRecord
  has_and_belongs_to_many :people
end

# Comandos de inserção, alteração e exclusão
command = ARGV[0]
table = ARGV[1]

case command
when 'inclusao'
  params = Hash[ARGV.drop(2).map { |x| x.split('=') }]
  case table
  when 'people'
    Person.create(params)
  when 'passports'
    Passport.create(params)
  when 'addresses'
    Address.create(params)
  when 'groups'
    Group.create(params)
  end
when 'alteracao'
  params = Hash[ARGV.drop(2).map { |x| x.split('=') }]
  case table
  when 'people'
    person = Person.find_by(params.slice(:id))
    person.update(params.except(:id))
  when 'passports'
    passport = Passport.find_by(params.slice(:id))
    passport.update(params.except(:id))
  when 'addresses'
    address = Address.find_by(params.slice(:id))
    address.update(params.except(:id))
  when 'groups'
    group = Group.find_by(params.slice(:id))
    group.update(params.except(:id))
  end
when 'exclusao'
  params = Hash[ARGV.drop(2).map { |x| x.split('=') }]
  case table
  when 'people'
    person = Person.find_by(params.slice(:id))
    person.destroy
  when 'passports'
    passport = Passport.find_by(params.slice(:id))
    passport.destroy
  when 'addresses'
    address = Address.find_by(params.slice(:id))
    address.destroy
  when 'groups'
    group = Group.find_by(params.slice(:id))
    group.destroy
  end
when 'lista'
  case table
  when 'people'
    people = Person.all
    puts people
  when 'passports'
    passports = Passport.all
    puts passports
  when 'addresses'
    addresses = Address.all
    puts addresses
  when 'groups'
    groups = Group.all
    puts groups
  end
end
