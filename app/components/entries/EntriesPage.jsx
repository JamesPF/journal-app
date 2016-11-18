var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');

var EntriesPage = React.createClass({
  getDefaultProps: function () {
    return {
      entries: [],
      selectedEntry: {}
    }
  },
  getInitialState: function () {
    return {
      entries: this.props.entries,
      selectedEntry: this.props.selectedEntry
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
  render: function () {
    return (
      <div id="text-editor">
        <div id="entry-list-container">
          <div id="add-search">
            <h3>Entry List</h3>
            <EntryAdd {...this.state} onEntryAdd={this.handleEntryAdd} />
            <EntrySearch/>
          </div>
          <EntryList {...this.state} selectEntry={this.selectEntry} />
        </div>
        <EditorWindow {...this.state} updateTitle={this.updateTitle} updateContent={this.updateContent} />
      </div>
    );
  }
});

module.exports = EntriesPage;
