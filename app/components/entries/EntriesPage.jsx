var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');

var EntriesPage = React.createClass({
  getDefaultProps: function () {
    return {
      entries: [],
      selectedEntry: {},
      entrySearchText: ''
    }
  },
  getInitialState: function () {
    return {
      entries: this.props.entries,
      selectedEntry: this.props.selectedEntry,
      entrySearchText: this.props.entrySearchText
    }
  },
  handleEntryAdd: function () {
    var {entries} = this.state;
    var entry = {
      id: entries.length,
      title: '',
      content: 'test.html'
    };

    entries.push(entry);

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
            <EntryAdd {...this.state} onEntryAdd={this.handleEntryAdd} />
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
