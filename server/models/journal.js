var mongoose = require('mongoose');

var Journal = mongoose.model('Journal', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = {Journal};
