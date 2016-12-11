var $ = require('jquery');

module.exports = {
  createEntry: function (entry) {
    $.ajax('/entries', {
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(entry),
      success: (data) => {
        console.log(data);
      }
    });
  },
  getEntries: function () {

  },
  getEntry: function (entry) {

  },
  updateEntry: function (entry) {

  },
  removeEntry: function (entry) {

  },
  filterEntries: function () {

  }
};
