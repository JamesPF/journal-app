var React = require('react');

var EntryTitle = React.createClass({
  propTypes: {
    selectedEntry: React.PropTypes.object.isRequired,
  },
  handleEditMode: function () {
    var nameText = this.refs.title;
    nameText.contentEditable = 'true';
    nameText.focus();
  },
  exitEditMode: function () {
    var {selectedEntry, onUpdateTitle} = this.props;
    var nameText = this.refs.title;

    nameText.contentEditable = 'false';
    var newTitle = this.refs.title.textContent;

    onUpdateTitle(selectedEntry, newTitle);
  },
  handleKeyPress: function (e) {
    var nameText = this.refs.name;
    if (e.key === 'Enter') {
      this.exitEditMode();
    }
  },
  render: function () {
    var {selectedEntry} = this.props;

    return (
      <p ref="title" id="editor-title" onClick={this.handleEditMode} onKeyPress={this.handleKeyPress}>{selectedEntry.title}</p>
    );
  }
});

module.exports = EntryTitle;
