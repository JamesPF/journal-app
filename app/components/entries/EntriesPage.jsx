var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryAdd = require('EntryAdd');
var EntrySearch = require('EntrySearch');
var EntryList = require('EntryList');

var EntriesPage = React.createClass({
  getDefaultProps: function () {
    return {
      entries: []
    }
  },
  getInitialState: function () {
    return {
      entries: this.props.entries
    }
  },
  handleEntryAdd: function () {
    var {entries} = this.state;
    var entry = {
      id: entries.length,
      title: '',
      content: ''
    };

    entries.push(entry);

    this.setState({
      entries
    });
  },
  selectEntry: function (activeEntry) {
    console.log(activeEntry);
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
        <EditorWindow {...this.state} />
      </div>
    );
  }
});

module.exports = EntriesPage;
