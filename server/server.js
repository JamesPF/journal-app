require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Journal} = require('./models/journal');
var {Entry} = require('./models/entry');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


// JOURNALS
// --------------------

// POST new journal
app.post('/journals', authenticate, (req, res) => {
  var journal = new Journal({
    name: req.body.name,
    type: req.body.type,
    _creator: req.user._id
  });

  journal.save().then((journal) => {
    res.send(journal);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

// GET all journals
app.get('/journals', authenticate, (req, res) => {
  Journal.find({
    _creator: req.user._id
  }).then((journals) => {
    res.send(journals);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

// GET one journal by id
app.get('/journals/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Journal.findOne({
    _id: id,
    _creator: req.user._id
  }).then((journal) => {
    if (!journal) {
      return res.status(404).send();
    }

    res.send(journal);
  }).catch((e) => {
    res.status(400).send();
  });
});

// PATCH journal by id
app.patch('/journals/:id', authenticate, (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['name', 'type']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Journal.findByIdAndUpdate({_id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((journal) => {
    if (!journal) {
      return res.status(404).send();
    }

    res.send(journal);
  }).catch((e) => {
    res.status(400).send();
  });
});

// DELETE journal by id
app.delete('/journals/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Journal.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  }).then((journal) => {
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
app.post('/entries', authenticate, (req, res) => {
  var entry = new Entry({
    title: req.body.title,
    content: req.body.content,
    _journal: req.body._journal,
    _creator: req.user._id
  });

  entry.save().then((entry) => {
    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// GET all entries
app.get('/entries', authenticate, (req, res) => {
  Entry.find({
    _creator: req.user._id
  }).then((entries) => {
    res.send(entries);
  }).catch((e) => {
    res.status(400).send();
  });
});

// GET one entry by id
app.get('/entries/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Entry.findById({
    _id: id,
    _creator: req.user._id
  }).then((entry) => {
    if (!entry) {
      return res.status(404).send();
    }

    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// PATCH an entry by id
app.patch('/entries/:id', authenticate, (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['title', 'content']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Entry.findOneAndUpdate({_id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((entry) => {
    if (!entry) {
      return res.status(404).send();
    }

    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// DELETE an entry by id
app.delete('/entries/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Entry.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  }).then((entry) => {
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
  var body = _.pick(req.body, ['name', 'email', 'password']);

  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
    res.redirect('/');
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

// POST users login
app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

// DELETE users logout
app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});


app.listen(port, function () {
  console.log('App is listening on port ' + port);
});
