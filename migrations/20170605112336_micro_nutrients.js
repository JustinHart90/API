exports.up = (knex) => {
  return knex.schema.createTable('micro_nutrients', (table) => {
    table.increments();
    table.integer('food_id').references('id').inTable('food_log').onDelete('CASCADE')
    table.boolean('is_mineral').notNullable().defaultTo(false)
    table.string('is_vitamin').notNullable().defaultTo(false)
    table.string('is_phytonutrient').notNullable().defaultTo(false)
    table.string('calcium').notNullable()
    table.string('chromium').notNullable()
    table.string('copper').notNullable()
    table.string('flouride').notNullable()
    table.string('iodine').notNullable()
    table.string('magnesium').notNullable()
    table.string('manganese').notNullable()
    table.string('molybdenum').notNullable()
    table.string('phosphorus').notNullable()
    table.string('selenium').notNullable()
    table.string('zinc').notNullable()
    table.string('potassium').notNullable()
    table.string('sodium').notNullable()
    table.string('chloride').notNullable()
    table.string('vitamin_a').notNullable()
    table.string('vitamin_c').notNullable()
    table.string('vitamin_d').notNullable()
    table.string('vitamin_e').notNullable()
    table.string('vitamin_k').notNullable()
    table.string('thiamine').notNullable()
    table.string('riboflavin').notNullable()
    table.string('niacin').notNullable()
    table.string('vitamin_b6').notNullable()
    table.string('folate').notNullable()
    table.string('vitamin_b12').notNullable()
    table.string('pathoethenic_acid').notNullable()
    table.string('biotin').notNullable()
    table.string('choline').notNullable()
  });

};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('micro_nutrients');
};
