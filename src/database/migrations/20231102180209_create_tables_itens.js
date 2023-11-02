exports.up = async function(knex) {
    return knex.schema.createTable('item', (table)=> {
        table.increments('id').unique();
        table.string('nome').unique().notNullable();
        table.int('qtd').notNullable();
})
};

exports.down = async function(knex) {
    return knex.schema.dropTable('item');
};
