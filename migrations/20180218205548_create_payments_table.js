exports.up = function(knex, Promise) {
  return knex.schema.createTable('payments', (table) => {
    table.increments('id').primary();
    table.string('payment_type');
    table.integer('value');
    table.string('format');
    table.string('description');
    table.string('created_at');
    table.string('status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptTable('payments');
};
