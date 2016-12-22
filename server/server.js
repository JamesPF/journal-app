const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Journal} = require('./models/journal');
var {Entry} = require('./models/entry');
var {User} = require('./models/user');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


// JOURNALS
// --------------------

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
    res.send(journals);
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

    res.send(journal);
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

    res.send(journal);
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

    res.send(journal);
  }).catch((e) => {
    res.status(400).send();
  });
});


// ENTRIES
// --------------------

// POST new entry
app.post('/entries', (req, res) => {
  var entry = new Entry({
    title: req.body.title,
    content: req.body.content,
    _journal: req.body._journal
  });

  entry.save().then((entry) => {
    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// GET all entries
app.get('/entries', (req, res) => {
  Entry.find().then((entries) => {
    res.send(entries);
  }).catch((e) => {
    res.status(400).send();
  });
});

// GET one entry by id
app.get('/entries/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Entry.findById(id).then((entry) => {
    if (!entry) {
      return res.status(404).send();
    }

    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// PATCH an entry by id
app.patch('/entries/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['title', 'content']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Entry.findByIdAndUpdate(id, {$set: body}, {new: true}).then((entry) => {
    if (!entry) {
      return res.status(404).send();
    }

    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// DELETE an entry by id
app.delete('/entries/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Entry.findByIdAndRemove(id).then((entry) => {
    if (!entry) {
      return res.status(404).send();
    }

    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
})


// USERS
// --------------------

// POST new user
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  var user = new User(body);

  // Add generateAuthToken middleware as first 'then' statement
  user.save().then(() => {
    res.status(200).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});


app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT);
});
