var mongoose = require('mongoose');

var Entry = mongoose.model('Entry', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  content: {
    type: String
  }
});

module.exports = {Entry};
