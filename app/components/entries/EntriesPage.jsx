var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');
var AppAPI = require('./../../../api/AppAPI.jsx');
var $ = require('jquery');
var axios = require('axios');

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
      console.log('returned', entries);
      this.setState({
        entries
      });
    });
  },
  handleEntryAdd: function () {
    var {entries} = this.state;
    var entry = {
      title: 'Untitled',
      content: ''
    };

    // AppAPI.createEntry(entry);
    // entries = AppAPI.getEntries();

    this.setState({
      entries
    });
  },
  selectEntry: function (selectedEntry) {
    this.setState({
      selectedEntry
    });
  },
  updateTitle: function (newTitle) {
    var {entries, selectedEntry} = this.state;
    var entryIndex = selectedEntry.id;

    entries[entryIndex].title = newTitle;
    this.setState({
      entries
    });
  },
  updateContent: function (newContent) {
    console.log(newContent);
  },
  handleEntrySearch: function (entrySearchText) {
    this.setState({
      entrySearchText: entrySearchText.toLowerCase()
    });
    console.log('search executed');
  },
  render: function () {
    var {entries, entrySearchText} = this.state;
    console.log('pre filter', entries);
    var matchedEntries = AppAPI.filterEntries(entries, entrySearchText);
    console.log('matched entries', matchedEntries);

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
