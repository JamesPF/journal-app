const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
const {ObjectID} = require('mongodb');
const fs = require('fs');

var {mongoose} = require('./db/mongoose');
var Grid = require('gridfs-stream');
var {Journal} = require('./models/journal');
var {Entry} = require('./models/entry');

Grid.mongo = mongoose.mongo;
var gfs;

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(busboyBodyParser({limit: '5mb'}));
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


// Hook up GridFS
gfs = Grid(mongoose.connection.db);

app.get('/entries', (req, res) => {
  res.send('This is hooked up');
});

// GET one entry by id
app.get('/entries/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  gfs.files.find({
    _id: new ObjectID(id)
  }).toArray(function (e, files) {
    if (files.length === 0) {
      return res.status(404).send({
        message: 'File not found'
      });
    }
    console.log(files);
    var data = [];
    var readStream = gfs.createReadStream({
      filename: files[0].filename
    });

    readStream.on('data', function (chunk) {
      data.push(chunk);
    });

    readStream.on('end', function () {
      data = Buffer.concat(data);
      var entry = data;
      res.end(entry);
    });

    readStream.on('error', function (e) {
      console.log('An error occurred', e);
      throw e;
    });
  });
});

// POST new entry
app.post('/entries', (req, res) => {
  var entry = new Entry({
    name: req.params.name
  });

  var document = req.files.file;
  var writeStream = gfs.createWriteStream({
    filename: document.name,
    mode: 'w',
    content_type: document.mimetype
  });

  writeStream.on('close', (file) => {
    return res.status(200).send({
      message: 'Success',
      file
    });
  });

  writeStream.write(document.data);

  writeStream.end();
});

app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT);
});
