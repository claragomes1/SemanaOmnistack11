
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //PRIMARY
        table.increments();   

        //CAMPOS DA TABELA
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //RELACIONAMENTO
        table.string('ong_id').notNullable();

        //CHAVE ESTRANGEIRA
        table.foreign('ong_id').references('id').inTable('ongs');
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  