exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('id').notNullable().primary().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('username');
    table.string('password');
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.integer('age');
    table.string('sex');
    table.string('weight');
    table.timestamp('created_on').defaultTo(knex.fn.now())
    table.timestamp('updated_on').defaultTo(knex.fn.now())
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
