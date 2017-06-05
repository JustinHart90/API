exports.up = (knex) => {
  return knex.schema.createTable('macro_nutrients', (table) => {
    table.increments();
    table.integer('food_id').references('id').inTable('food_log').onDelete('CASCADE')
    table.string('protein').notNullable()
    table.string('fats').notNullable()
    table.string('carbohydrates').notNullable()
    table.integer('calories').notNullable()
    table.string('fibers').notNullable()
    table.string('sugars').notNullable()
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('macro_nutrients');
};
