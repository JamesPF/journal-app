const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Journal} = require('./models/journal');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

// POST new journal
app.post('/journals', (req, res) => {
  var journal = new Journal({
    name: req.body.name,
    type: req.body.type
  });

  journal.save().then((journal) => {
    res.send(journal);
  }).catch((e) => {
    res.status(400).send();
  });
});

// GET all journals
app.get('/journals', (req, res) => {
  Journal.find().then((journals) => {
    res.send({journals});
  }).catch((e) => {
    res.status(400).send(e);
  });
});

// GET one journal by id
app.get('/journals/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Journal.findById(id).then((journal) => {
    if (!journal) {
      return res.status(404).send();
    }

    res.send({journal});
  }).catch((e) => {
    res.status(400).send();
  });
});

// PATCH journal by id
app.patch('/journals/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['name', 'type']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Journal.findByIdAndUpdate(id, {$set: body}, {new: true}).then((journal) => {
    if (!journal) {
      return res.status(404).send();
    }

    res.send({journal});
  }).catch((e) => {
    res.status(400).send();
  });
});

// DELETE journal by id
app.delete('/journals/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Journal.findByIdAndRemove(id).then((journal) => {
    if (!journal) {
      return res.status(404).send();
    }

    res.send({journal});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT);
});
