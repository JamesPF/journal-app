var React = require('react');

var JournalSearch = React.createClass({
  render: function () {
    return (
      <input id="journal-search" type="search" placeholder="Search..." />
    );
  }
});

module.exports = JournalSearch;
