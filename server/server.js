const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Journal} = require('./models/journal');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.post('/journals', (req, res) => {
  var journal = new Journal({
    name: req.body.name
  });

  journal.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send();
  });
});

app.get('/journals', (req, res) => {
  Journal.find().then((journals) => {
    res.send({journals});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.delete('/journals/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // FINISH THIS
});

app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT);
});
