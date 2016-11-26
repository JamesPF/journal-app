var React = require('react');
var JournalCreate = require('JournalCreate');
var JournalSearch = require('JournalSearch');
var JournalList = require('JournalList');

var JournalsPage = React.createClass({
  getDefaultProps: function () {
    return {
      journals: [],
      type: 'Select Type'
    }
  },
  getInitialState: function () {
    return {
      journals: this.props.journals,
      type: this.props.type
    }
  },
  handleJournalTypeSelect: function (type) {
    this.setState({
      type
    });
  },
  handleAddJournal: function (journalName, journalType) {
    var {journals} = this.state;
    var journal = {
      id: journals.length,
      userid: 1,
      name: journalName,
      type: journalType
    };

    // Creates URL based off of id, userid, and journal name
    var journalUrl = journal.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase();
    journal.url = `/${journal.userid}/${journal.id}/${journalUrl}`;
    console.log(journal.url);

    journals.push(journal);

    this.setState({
      journals,
      type: 'Select Type'
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
    var {journals, type} = this.state;

    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <JournalCreate type={type} onAddJournal={this.handleAddJournal} onJournalTypeSelect={this.handleJournalTypeSelect} />
          <JournalSearch />
          <JournalList journals={journals} onUpdateName={this.handleUpdateName} />
        </div>
      </div>
    );
  }
});

module.exports = JournalsPage;
