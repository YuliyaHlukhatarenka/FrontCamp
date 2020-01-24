const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'news';

mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
require('./routes')(app);

app.listen(port, () => console.log(`App is listening on port ${port}!`));
