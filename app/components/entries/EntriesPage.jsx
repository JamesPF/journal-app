var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryListWindow = require('EntryListWindow');

var entries = [
  {name: 'Cool Entry'},
  {name: 'Rad Entry'}
];

var EntriesPage = React.createClass({
  getDefaultProps: function () {
    return {
      entries
    }
  },
  getInitialState: function () {
    return {
      entries: this.props.entries
    }
  },
  render: function () {
    var {entries} = this.state;

    return (
      <div id="text-editor">
        <EntryListWindow entries={entries} />
        <EditorWindow />
      </div>
    );
  }
});

module.exports = EntriesPage;
