exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('macro_nutrients').del()
    .then(function () {
      // Inserts seed entries
      return knex('macro_nutrients').insert([
        {
            food_id: 1,
            protein: '20g',
            fats: '10g',
            carbohydrates: '5g',
            calories:'120',
            fibers: '10g',
            sugars: '15g',

        },
        {
            food_id: 2,
            protein: '40g',
            fats: '1g',
            carbohydrates: '10g',
            calories:'4',
            fibers: '20g',
            sugars: '2g',
        }

      ]);

    });
};
