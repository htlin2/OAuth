const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/', (req, res) => {
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
