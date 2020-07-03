const express = require('express');
const bodyParser = require('body-parser');
var helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('OK TESTE');
});

require('./app/controllers/index')(app);

app.listen(3000);