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

// takes authenticate
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

// takes authenticate
// GET all journals
app.get('/journals', (req, res) => {
  // Replace query with this after adding auth
  // Journal.find({
  //   _creator: req.user._id
  // }).then((journals) => {

  Journal.find().then((journals) => {
    journals.sort((a, b) => {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    res.send(journals);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

// takes authenticate
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

// takes authenticate
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

// takes authenticate
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

// takes authenticate
// POST new entry
app.post('/entries', authenticate, (req, res) => {
  // Uncomment _journal after Redux is put back in
  var entry = new Entry({
    title: req.body.title,
    content: req.body.content,
    // _journal: req.body._journal,
    _creator: req.user._id
  });

  entry.save().then((entry) => {
    res.send(entry);
  }).catch((e) => {
    res.status(400).send();
  });
});

// takes authenticate
// GET all entries
app.get('/entries', authenticate, (req, res) => {
  // Use commented out query once Redux is implemented
  // Entry.find({
  //   _creator: req.user._id
  // })
  Entry.find().then((entries) => {
    res.send(entries);
  }).catch((e) => {
    res.status(400).send();
  });
});

// takes authenticate
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

// takes authenticate
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

// takes authenticate
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

// takes authenticate
app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

// POST users login
app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
      console.log('successfully logged in');
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

// takes authenticate
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
