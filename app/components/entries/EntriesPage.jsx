var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryListWindow = require('EntryListWindow');

var EntriesPage = React.createClass({
  render: function () {
    return (
      <div id="text-editor">
        <EntryListWindow/>
        <EditorWindow/>
      </div>
    );
  }
});

module.exports = EntriesPage;
