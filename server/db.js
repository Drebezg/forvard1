const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books-dev',
  password: 'aq1sw2de3fr4',
  port: 5432,
});
pool.connect((err, client, done) => {
    if(err) throw err;
    client.query('SELECT * from books', [], (err, res) => {
        if(err) throw err;
        console.log(res.rows);
    });
});
