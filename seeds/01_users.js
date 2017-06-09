exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            id: '10213378191847364',
            first_name: 'Jules',
            last_name: 'Perryman',
            username: 'jperryman',
            password: 'password',
            is_admin:'true',
            age: 30,
            sex: 'M',
            weight: '170 lbs',
        },
        {
            id: '10213378193746574',
            first_name: 'Derek',
            last_name: 'Kramer',
            username: 'dkramer',
            password: 'kramer123',
            is_admin:'true',
            age: 26,
            sex: 'M',
            weight: '300 lbs',
        },
        {
            id: '102133710284536475',
            first_name: 'Tristan',
            last_name: 'Gilford',
            username: 'tgilford',
            password: 'tristanica',
            is_admin:'false',
            age: 29,
            sex: 'M',
            weight: '160 lbs',
        }

      ]);

    });
};
