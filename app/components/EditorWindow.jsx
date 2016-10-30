var React = require('react');
var Editor = require('Editor');

var EditorWindow = React.createClass({
  render: function () {

    return (
      <div id="editor-window">
        <Editor/>
      </div>
    );
  }
});

module.exports = EditorWindow;
