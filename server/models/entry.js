var mongoose = require('mongoose');

var Entry = mongoose.model('Entry', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = {Entry};
