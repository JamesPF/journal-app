var React = require('react');
var axios = require('axios');
var lodash = require('lodash');

var EditorWindow = require('EditorWindow');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');
var AppAPI = require('./../../../api/AppAPI.jsx');

var EntriesPage = React.createClass({
  getInitialState: function () {
    return {
      entries: [],
      selectedEntry: {},
      entrySearchText: ''
    }
  },
  componentDidMount: function () {
    axios.get('/entries').then((result) => {
      var entries = result.data;
      var selectedEntry = {};

      if (entries) {
        selectedEntry = entries[0];
      }

      this.setState({
        entries,
        selectedEntry
      });
    });
  },
  handleEntryAdd: function () {
    var {entries} = this.state;
    var entry = {
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
  updateContent: function (newContent) {
    console.log(newContent);
  },
  handleEntrySearch: function (entrySearchText) {
    this.setState({
      entrySearchText: entrySearchText.toLowerCase()
    });
  },
  render: function () {
    var {entries, entrySearchText} = this.state;
    var matchedEntries = AppAPI.filterEntries(entries, entrySearchText);

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
        <EditorWindow {...this.state} updateTitle={this.updateTitle} updateContent={this.updateContent} />
      </div>
    );
  }
});

module.exports = EntriesPage;
