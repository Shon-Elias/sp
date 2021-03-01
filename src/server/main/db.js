const { Pool }  = require('pg');

const pool = new Pool({
  // user: 'postgres', // the name of your postgres user
  host: 'localhost',
  database: 'sproutt',  // set your db
  // password: 'password',  // your userpasswor
  port: 5432
})

module.exports = pool
