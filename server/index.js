const express = require('express');
const app = express();

app.use(express.static('client'));

// app.get('/', (req, res) => {
//     res.send('start');
// });

app.listen(3000);
