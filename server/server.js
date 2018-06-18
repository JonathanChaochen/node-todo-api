const express = require('express');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(express.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  let todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(8000, () => {
  console.log('Started on port 8000');
});

module.exports = { app };
