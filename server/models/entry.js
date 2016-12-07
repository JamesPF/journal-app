var mongoose = require('mongoose');

var Entry = mongoose.model('Entry', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {Entry};
