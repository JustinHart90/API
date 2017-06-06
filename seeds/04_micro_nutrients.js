exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('micro_nutrients').del()
    .then(function () {
      // Inserts seed entries
      return knex('micro_nutrients').insert([
          {
            food_id: 1,
            is_mineral: 'false',
            is_vitamin: 'false',
            is_phytonutrient: 'false',
            calcium: '20g',
            chromium:'20g',
            copper:'20g',
            flouride:'20g',
            iodine:'20g',
            magnesium:'20g',
            manganese:'20g',
            molybdenum:'20g',
            phosphorus:'20g',
            selenium: '5g',
            zinc:'10g',
            potassium:'20g',
            sodium: '3g',
            chloride:'20g',
            vitamin_a: '1g',
            vitamin_c:'20g',
            vitamin_d:'5g',
            vitamin_e:'20g',
            vitamin_k: '.05g',
            thiamine:'20g',
            riboflavin:'20g',
            niacin:'20g',
            vitamin_b6:'2g',
            folate: '1g',
            vitamin_b12:'50g',
            pathoethenic_acid: '6g',
            biotin: '20g',
            choline: '3g'
        }

      ]);

    });
};
