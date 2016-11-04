var React = require('react');

var EntrySearch = React.createClass({
  render: function () {
    return (
      <input id="entry-search" type="search" placeholder="Search..." />
    );
  }
});

module.exports = EntrySearch;
