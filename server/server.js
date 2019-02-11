const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/api/todos/:userId', (req, res) => {
  const { userId } = req.params;
  db.getTodoList(userId, (error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  })
});

app.post('/api/todos/:userId', (req, res) => {
  const userId = Number(req.params.userId);
  const { enteredItem } = req.body;
  db.insertTodoList(userId, enteredItem, (error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).end();
    }
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/'));
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
