var React = require('react');
var axios = require('axios');
var lodash = require('lodash');

var EditorWindow = require('EditorWindow');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');

var EntriesPage = React.createClass({
  getInitialState: function () {
    return {
      journalId: '',
      entries: [],
      selectedEntry: {},
      entrySearchText: ''
    }
  },
  componentDidMount: function () {
    // console.log(this.props.location.query.journal);
    var journalId = this.props.location.query.journal;
    axios.get('/entries').then((result) => {
      var entries = result.data;
      var selectedEntry = {};

      var filteredEntries = entries.filter((entry) => {
        return entry._journal === journalId;
      });

      if (filteredEntries) {
        selectedEntry = filteredEntries[0];
      }

      this.setState({
        journalId,
        entries: filteredEntries || [],
        selectedEntry
      });
    });
  },
  componentWillUnmount: function () {
    this.setState({journalId: ''});
  },
  handleEntryAdd: function () {
    var {entries, journalId} = this.state;
    var entry = {
      _journal: journalId,
      title: 'Untitled',
      content: ''
    };

    axios.post('/entries', entry).then(() => {
      axios.get('/entries').then((result) => {
        var entries = result.data;
        this.setState({
          entries
        });
      });
    });
  },
  selectEntry: function (selectedEntry) {
    this.setState({
      selectedEntry
    });
  },
  updateTitle: function (newTitle) {
    var {entries, selectedEntry} = this.state;

    var entryId = selectedEntry._id;
    axios.patch(`/entries/${entryId}`, {title: newTitle}).then((entry) => {
      selectedEntry.title = newTitle;

      axios.get('/entries').then((result) => {
        var entries = result.data;
        this.setState({
          entries
        });
      });
    });
  },
  handleUpdateContent: function (newContent) {
    var {entries, selectedEntry} = this.state;

    var entryId = selectedEntry._id;
    axios.patch(`/entries/${entryId}`, {content: newContent}).then((entry) => {
      selectedEntry.content = newContent;
    });
  },
  handleEntrySearch: function (entrySearchText) {
    this.setState({
      entrySearchText: entrySearchText.toLowerCase()
    });
  },
  render: function () {
    var {entries, entrySearchText} = this.state;
    var matchedEntries = entries;

    matchedEntries = matchedEntries.filter((entry) => {
      var title = entry.title.toLowerCase();
      return entrySearchText.length === 0 || title.indexOf(entrySearchText) > -1;
    });

    return (
      <div id="text-editor">
        <div id="entry-list-container">
          <div id="add-search">
            <h3>Entry List</h3>
            <EntryAdd onEntryAdd={this.handleEntryAdd} />
            <EntrySearch onEntrySearch={this.handleEntrySearch} />
          </div>
          <EntryList entries={matchedEntries} selectEntry={this.selectEntry} />
        </div>
        <EditorWindow {...this.state} updateTitle={this.updateTitle} onUpdateContent={this.handleUpdateContent} />
      </div>
    );
  }
});

module.exports = EntriesPage;
