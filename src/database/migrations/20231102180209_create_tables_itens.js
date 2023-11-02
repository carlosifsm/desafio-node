exports.up = async function(knex) {
    return knex.schema.createTable('item', (table)=> {
        table.increments('id').unique();
        table.string('nome').unique().notNullable();
        table.string('validade').notNullable();
})
};

exports.down = async function(knex) {
    return knex.schema.dropTable('item');
};
