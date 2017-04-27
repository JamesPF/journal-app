var mongoose = require('mongoose');

// Uncomment _journal after front end Redux is set up
var Entry = mongoose.model('Entry', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  content: {
    type: String
  },
  // _journal: {
  //   type: String,
  //   required: true
  // },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Entry};
