var React = require('react');

var Editor = React.createClass({
  enableEditMode: function () {
    richTextField.document.designMode = 'On';
  },
  componentDidMount: function () {
    this.enableEditMode();
  },
  executeCommand: function (command) {
    richTextField.document.execCommand(command, false, null);
  },
  executeCommandWithArgument: function (command) {
    richTextField.document.execCommand(command, false, arg);
  },
  render: function () {
    var isInEditMode = true;

    function toggleEdit () {
      if (isInEditMode) {
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
      } else {
        richTextField.document.designMode = 'On';
        isInEditMode = true;
      }
    }

    return (
      <div id="editor">
        <div>
          <button onClick={() => this.executeCommand('bold')} className="btn btn-sm white-button"><i className="fa fa-bold"></i></button>
          <button onClick={() => this.executeCommand('italic')} className="btn btn-sm white-button"><i className="fa fa-italic"></i></button>
          <button onClick={() => this.executeCommand('underline')} className="btn btn-sm white-button"><i className="fa fa-underline"></i></button>
          <button onClick={() => this.executeCommand('strikeThrough')} className="btn btn-sm white-button"><i className="fa fa-strikethrough"></i></button>
          <button onClick={() => this.executeCommand('cut')} className="btn btn-sm white-button"><i className="fa fa-cut"></i></button>
          <button onClick={() => this.executeCommand('copy')} className="btn btn-sm white-button"><i className="fa fa-copy"></i></button>
          <button onClick={() => this.executeCommand('undo')} className="btn btn-sm white-button"><i className="fa fa-undo"></i></button>
          <button onClick={() => this.executeCommand('redo')} className="btn btn-sm white-button"><i className="fa fa-repeat"></i></button>
          <button onClick={() => this.executeCommand('insertUnorderedList')} className="btn btn-sm white-button"><i className="fa fa-list-ul"></i></button>
          <button onClick={() => this.executeCommand('insertOrderedList')} className="btn btn-sm white-button"><i className="fa fa-list-ol"></i></button>
          <button onClick={() => toggleEdit()}>Toggle Edit</button>
        </div>
        <iframe name="richTextField" style={{width: 700+'px', height: 500+'px'}}></iframe>
      </div>
    );
  }
});

module.exports = Editor;
