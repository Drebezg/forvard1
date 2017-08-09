const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books-dev',
  password: 'aq1sw2de3fr4',
  port: 5432,
});

pool.query('SELECT * from books', [], (err, result) => {
    if(err) throw err;
    console.log(result.rows);
});
