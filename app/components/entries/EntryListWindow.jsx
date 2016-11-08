var React = require('react');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');

var EntryListWindow = React.createClass({
  render: function () {
    var {entries} = this.props;

    return (
      <div id="entry-list-container">
        <div id="add-search">
          <h3>Entry List</h3>
          <EntryAdd/>
          <EntrySearch/>
        </div>
        <EntryList entries={entries} />
      </div>
    );
  }
});

module.exports = EntryListWindow;
