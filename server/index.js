const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static('client'));

app.set('view engine', 'ejs');

import serverRender from './render';
import apiRouter from './apiRouter';

app.get('/', (req, res) => {
    serverRender().then(content =>
        res.render('index', {
            content,
        })
    );
});

app.use('/api', apiRouter);

app.listen(3000, () => console.log(`Server is running at port 3000`));
