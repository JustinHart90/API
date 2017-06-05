// Update with your config settings.
require('dotenv').config({silent:true});

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/microlens'
  },
  production: {
    client: 'pg',
    connection: {
     database: process.env.DB,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     port: process.env.DB_PORT,
     host: process.env.DB_HOST
     }
   }
}
