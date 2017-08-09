const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static('client'));

app.set('view engine', 'ejs');

import serverRender from './render';
import apiRouter from './apiRouter';

app.get('/', (req, res) => {
    res.render('index', {
        content: serverRender()
    });
});

app.use('/api', apiRouter);

app.listen(3000, () => console.log(`Server is running at port 3000`));
