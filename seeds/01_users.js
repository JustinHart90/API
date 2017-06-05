exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
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
            first_name: 'Tristan',
            last_name: 'Gilford',
            username: 'tgilford',
            password: 'tristanica',
            is_admin:'false',
            age: 29,
            sex: 'M',
            weight: '160 lbs',
        },
        {
            first_name: 'Devin',
            last_name: 'Hanaway',
            username: 'dhanaway',
            password: 'tarheels',
            is_admin:'true',
            age: 27,
            sex: 'M',
            weight: '180 lbs',
        }

      ]);

    });
};
