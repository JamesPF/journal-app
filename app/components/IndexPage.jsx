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
          <button className="btn btn-success pull-right" data-toggle="modal" data-target="#addJournalModal">+ Create New Journal</button>
          <JournalSearch />
          <JournalList />
          <JournalCreate />
        </div>
      </div>
    );
  }
});

module.exports = IndexPage;
