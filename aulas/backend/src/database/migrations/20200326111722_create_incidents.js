
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();                        //id do caso. E incrementado sempre que e adicionado um novo caso.
        
        table.string('title').notNullable();       //"title" nao nulo.
        table.string('description').notNullable(); //"description" nao nulo.
        table.decimal('value').notNullable();      //"value" nao nulo (valor numerico).
        table.string('ong_id').notNullable();      //"ong_id" nao nulo. Id da ong que criou esse caso.

        table.foreign('ong_id').references('id').inTable('ongs'); //Chave estrangeira: solicita o dado 'id' da table 'ongs' para usar como referencia do dado desta table chamado 'ong_id'
    });  
};

exports.down = function(knex) {                    // o que eu preciso fazer caso algo de errado com a tabela.
    return knex.schema.dropTable('incidents')      //deletar a tabela.
};
