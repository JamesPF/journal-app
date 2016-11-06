var React = require('react');
var JournalCreate = require('JournalCreate');
var JournalSearch = require('JournalSearch');
var JournalList = require('JournalList');

var IndexPage = React.createClass({
  render: function () {
    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <JournalCreate />
          <JournalSearch />
          <JournalList />
        </div>
      </div>
    );
  }
});

module.exports = IndexPage;
