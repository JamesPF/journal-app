import React, {Component} from 'react';
import EntryTitle from 'EntryTitle';

class EditorWindow extends Component {
  constructor (props) {
    super(props);
  }
  enableEditMode () {
    richTextField.document.designMode = 'On';
  }
  componentDidMount () {
    this.enableEditMode();
  }
  componentDidUpdate () {
    var {selectedEntry, onUpdateContent} = this.props;
    var contentBody = document.getElementById('content-edit-field').contentWindow.document.body;

    contentBody.innerHTML = selectedEntry.content;

    contentBody.addEventListener('blur', () => {
      onUpdateContent(contentBody.innerHTML);
    });
  }
  executeCommand (command) {
    richTextField.document.execCommand(command, false, null);
  }
  executeCommandWithArgument (command) {
    richTextField.document.execCommand(command, false, arg);
  }
  render() {
    var {selectedEntry} = this.props;
    var isInEditMode = true;

    function toggleEdit () {
      if (isInEditMode) {
        $('#edit-mode-button').html('Turn On');
        $('#edit-mode-status').html('off');
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
      } else {
        $('#edit-mode-button').html('Turn Off');
        $('#edit-mode-status').html('on');
        richTextField.document.designMode = 'On';
        isInEditMode = true;
      }
    }

    return (
      <div id="editor-window">
        <div id="editor">
          <EntryTitle {...this.props} updateTitle={this.props.updateTitle} />
          <div id="editor-menu">
            <button onClick={() => this.executeCommand('bold')} className="btn btn-sm btn-default editor-button"><i className="fa fa-bold"></i></button>
            <button onClick={() => this.executeCommand('italic')} className="btn btn-sm btn-default editor-button"><i className="fa fa-italic"></i></button>
            <button onClick={() => this.executeCommand('underline')} className="btn btn-sm btn-default editor-button"><i className="fa fa-underline"></i></button>
            <button onClick={() => this.executeCommand('strikeThrough')} className="btn btn-sm btn-default editor-button"><i className="fa fa-strikethrough"></i></button>
            <button onClick={() => this.executeCommand('cut')} className="btn btn-sm btn-default editor-button"><i className="fa fa-cut"></i></button>
            <button onClick={() => this.executeCommand('copy')} className="btn btn-sm btn-default editor-button"><i className="fa fa-copy"></i></button>
            <button onClick={() => this.executeCommand('undo')} className="btn btn-sm btn-default editor-button"><i className="fa fa-undo"></i></button>
            <button onClick={() => this.executeCommand('redo')} className="btn btn-sm btn-default editor-button"><i className="fa fa-repeat"></i></button>
            <button onClick={() => this.executeCommand('insertUnorderedList')} className="btn btn-sm btn-default editor-button"><i className="fa fa-list-ul"></i></button>
            <button onClick={() => this.executeCommand('insertOrderedList')} className="btn btn-sm btn-default editor-button"><i className="fa fa-list-ol"></i></button>
            <div className="pull-right">
              <p id="edit-mode-text">Edit mode is <span id="edit-mode-status">on</span></p><button onClick={() => toggleEdit()} className="btn btn-sm btn-default editor-button pull-right" id="edit-mode-button">Turn Off</button>
            </div>
          </div>
          <iframe id="content-edit-field" name="richTextField" src="about:blank"></iframe>
        </div>
      </div>
    );
  }
}

export default EditorWindow;
