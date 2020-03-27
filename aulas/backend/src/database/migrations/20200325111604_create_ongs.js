
exports.up = function(knex) { //permite ao método exports realizar a exportação do return da função atual ao ser utilizado o método "up" na linha de comando do terminal "npx knex imigrate:up ..."
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary(); //diferentemente do Caso, o id da ong deve ser gerado do outra forma para dificultar a revelação desse id para outras ongs.
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //segundo parametro representa o tamanho fixo da string.
  });
};

exports.down = function(knex) { //o que eu preciso fazer caso algo de errado com a tabela.
  return knex.schema.dropTable('ongs') //deletar a tabela.
};
