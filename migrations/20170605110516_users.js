exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.string('age').notNullable();
    table.string('sex').notNullable();
    table.string('weight').notNullable();
    table.timestamp('created_on').defaultTo(knex.fn.now())
    table.timestamp('updated_on').defaultTo(knex.fn.now())
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users');
};
