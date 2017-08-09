const express = require('express');
const router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books-dev',
  password: 'aq1sw2de3fr4',
  port: 5432,
});



router.get('/books', (req, res) => {
    pool.query('SELECT * from books', [], (err, result) => {
        if(err) throw err;
        res.send(result.rows);
    });
});

export default router;
