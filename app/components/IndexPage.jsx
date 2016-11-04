var React = require('react');
var JournalCreate = require('JournalCreate');
var JournalList = require('JournalList');

var IndexPage = React.createClass({
  render: function () {
    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <JournalCreate />
          <input id="journal-search" type="search" placeholder="Search..." />
          <JournalList />
        </div>
      </div>
    );
  }
});

module.exports = IndexPage;
