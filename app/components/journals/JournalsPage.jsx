var React = require('react');
var JournalCreate = require('JournalCreate');
var JournalSearch = require('JournalSearch');
var JournalList = require('JournalList');

var JournalsPage = React.createClass({
  getDefaultProps: function () {
    return {
      journals: []
    }
  },
  getInitialState: function () {
    return {
      journals: this.props.journals
    }
  },
  handleAddJournal: function (journalName) {
    var {journals} = this.state;
    var journal = {
      id: journals.length,
      userid: 1,
      name: journalName,
      type: 'Book'
    };

    // Creates URL based off of id, userid, and journal name
    var journalUrl = journal.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
    journal.url = `/${journal.userid}/${journal.id}/${journalUrl}`;
    console.log(journal.url);

    journals.push(journal);

    this.setState({
      journals
    });
  },
  handleUpdateName: function (updatedJournal, newName) {
    var {journals} = this.state;
    var journalIndex = updatedJournal.id;

    journals[journalIndex].name = newName;
    this.setState({
      journals
    });
  },
  render: function () {
    var {journals} = this.state;

    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <JournalCreate onAddJournal={this.handleAddJournal} />
          <JournalSearch />
          <JournalList journals={journals} onUpdateName={this.handleUpdateName} />
        </div>
      </div>
    );
  }
});

module.exports = JournalsPage;
