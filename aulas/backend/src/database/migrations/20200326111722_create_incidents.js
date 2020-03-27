
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //id do caso
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //id da ong que está presente na outra migration criada anteriormente

        table.foreign('ong_id').references('id').inTable('ongs'); //Chave estrangeira: solicita o dado 'id' da table 'ongs' para usar como referencia do dado desta table chamado 'ong_id'
    });  
};

exports.down = function(knex) { // o que eu preciso fazer caso algo de errado com a tabela.
    return knex.schema.dropTable('incidents') //deletar a tabela.
};
