import React, {Component} from 'react';

class EntryTitle extends Component {
  constructor (props) {
    super(props);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
  }
  handleEditMode () {
    var nameText = this.refs.title;
    nameText.contentEditable = 'true';
    nameText.focus();
  }
  exitEditMode () {
    var {selectedEntry, onUpdateTitle} = this.props;
    var nameText = this.refs.title;

    nameText.contentEditable = 'false';
    var newTitle = this.refs.title.textContent;

    onUpdateTitle(selectedEntry, newTitle);
  }
  handleKeyPress (e) {
    var nameText = this.refs.name;
    if (e.key === 'Enter') {
      this.exitEditMode();
    }
  }
  render () {
    var {selectedEntry} = this.props;

    return (
      <p ref="title" id="editor-title" onClick={this.handleEditMode} onKeyPress={this.handleKeyPress} onBlur={this.exitEditMode}>{selectedEntry.title}</p>
    );
  }
}

export default EntryTitle;
