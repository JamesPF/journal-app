var $ = require('jquery');

module.exports = {
  createEntry: function (entry) {
    console.log(entry);
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
    $.ajax('/entries', {
      type: 'GET',
      contentType: 'application/json',
      success: (entries) => {
        var entries = [];
        try {
          entries = JSON.parse(entries);
        } catch (e) {

        }

        return $.isArray(entries) ? entries : [];
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
    var matchedEntries = entries || [];

    matchedEntries = matchedEntries.filter((entry) => {
      var name = entry.name.toLowerCase();
      return entrySearchText.length === 0 || title.indexOf(entrySearchText) > -1;
    });
    return matchedEntries;
  }
};
