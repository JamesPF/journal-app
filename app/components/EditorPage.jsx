var React = require('react');
var EditorWindow = require('EditorWindow');
var EntryList = require('EntryList');

var EditorPage = React.createClass({
  render: function () {
    return (
      <div id="text-editor">
        <EntryList/>
        <EditorWindow/>
      </div>
    );
  }
});

module.exports = EditorPage;
