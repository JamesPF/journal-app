var React = require('react');
var axios = require('axios');
var lodash = require('lodash');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

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
  componentWillMount: function () {
    if (!axios.defaults.headers.common['x-auth']) {
      hashHistory.push('/');
    }
  },
  componentDidMount: function () {
    var journalId = this.props.location.query.journal;
    axios.get('/entries').then((result) => {
      var entries = result.data;
      var selectedEntry = {};

      var filteredEntries = entries.filter((entry) => {
        return entry._journal === journalId;
      });

      if (filteredEntries.length) {
        selectedEntry = filteredEntries[0];
      }

      this.setState({
        journalId,
        entries: filteredEntries || [],
        selectedEntry
      });
    });
  },
  handleEntryAdd: function () {
    var {entries, journalId} = this.state;
    var journalId = this.props.location.query.journal;
    var entry = {
      _journal: journalId,
      title: 'Untitled',
      content: ''
    };

    axios.post('/entries', entry).then(() => {
      axios.get('/entries').then((result) => {
        var entries = result.data;

        var filteredEntries = entries.filter((entry) => {
          return entry._journal === journalId;
        });

        this.setState({
          entries: filteredEntries
        });
      });
    });
  },
  selectEntry: function (selectedEntry) {
    this.setState({
      selectedEntry
    });
  },
  handleUpdateTitle: function (entry, newTitle) {
    var {entries} = this.state;
    var journalId = this.props.location.query.journal;

    var entryId = entry._id;

    if (newTitle.length > 0) {
      axios.patch(`/entries/${entryId}`, {title: newTitle}).then((entry) => {
        axios.get('/entries').then((result) => {
          var entries = result.data;

          var filteredEntries = entries.filter((entry) => {
            return entry._journal === journalId;
          });

          this.setState({
            entries: filteredEntries
          });
        });
      });
    }
  },
  handleUpdateContent: function (newContent) {
    var {entries, selectedEntry} = this.state;

    var entryId = selectedEntry._id;
    axios.patch(`/entries/${entryId}`, {content: newContent}).then((result) => {
      console.log(result.data.content);
      selectedEntry.content = result.data.content;
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
        <EditorWindow {...this.state} onUpdateTitle={this.handleUpdateTitle} onUpdateContent={this.handleUpdateContent} />
      </div>
    );
  }
});

module.exports = EntriesPage;
