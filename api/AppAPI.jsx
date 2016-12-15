var $ = require('jquery');

module.exports = {
  createEntry: function (entry) {
    $.ajax('/entries', {
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(entry),
      success: (data) => {
        console.log('api', data);
      }
    });
  },
  getEntry: function (entry) {
    $.ajax('/entries/:id', {
      type: 'GET',
      contentType: 'application/json',
      success: (entry) => {
        var entry = JSON.parse(entry);
        console.log(entry);
      }
    });
  },
  updateEntry: function (entry) {

  },
  removeEntry: function (entry) {

  },
  filterEntries: function (entries, entrySearchText) {
    var matchedEntries = entries.filter((entry) => {
      var title = entry.title.toLowerCase();
      return entrySearchText.length === 0 || title.indexOf(entrySearchText) > -1;
    });

    return matchedEntries;
  }
};
