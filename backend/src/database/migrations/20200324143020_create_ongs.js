
exports.up = function(knex) { //o método up é responsável pela criação da tabela, oq acontecer ao executar migration
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary(); //primary é chave primaria do banco de dados
      table.string('name').notNullable(); // esse campo n vai poder ser vazio, n vamos poder criar uma ong q n tenha um nome
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); // 2 é o número de caracteres q vai ser aceito
  });
};

exports.down = function(knex) { // e se der errado algo na execução? deleta
  return knex.schema.dropTable('ongs');
};
