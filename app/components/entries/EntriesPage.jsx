var React = require('react');
var axios = require('axios');
var lodash = require('lodash');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import EditorWindow from 'EditorWindow';
import EntryAdd from 'EntryAdd';
import EntrySearch from 'EntrySearch';
import EntryList from 'EntryList';

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
    var journalId = this.props.location.query.journal;
    axios.get('/entries').then((result) => {
      var entries = result.data;
      var selectedEntry = {};

      var filteredEntries = entries.filter((entry) => {
        return entry._journal === journalId;
      });

      if (filteredEntries.length) {
        selectedEntry = filteredEntries[0];

        return this.setState({
          journalId,
          entries: filteredEntries || [],
          selectedEntry
        });
      } else {
        this.handleEntryAdd();
      }

      this.setState({
        journalId
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

    axios.post('/entries', entry).then((entry) => {
      axios.get('/entries').then((result) => {
        var entries = result.data;
        var newEntry = entry.data;

        var filteredEntries = entries.filter((entry) => {
          return entry._journal === journalId;
        });

        this.setState({
          entries: filteredEntries,
          selectedEntry: newEntry
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
    var journalId = this.props.location.query.journal;

    var entryId = selectedEntry._id;
    axios.patch(`/entries/${entryId}`, {content: newContent}).then((result) => {
      console.log(result.data.content);
      selectedEntry.content = result.data.content;

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
