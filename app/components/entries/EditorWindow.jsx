var React = require('react');
var EntryTitle = require('EntryTitle');

var EditorWindow = React.createClass({
  propTypes: {
    selectedEntry: React.PropTypes.object.isRequired,
    updateTitle: React.PropTypes.func.isRequired,
    onUpdateContent: React.PropTypes.func.isRequired
  },
  enableEditMode: function () {
    richTextField.document.designMode = 'On';
  },
  componentDidMount: function () {
    this.enableEditMode();

    // var iframeBody = richTextField.document.getElementsByTagName("body")[0];
    // iframeBody.innerHTML = "This is some text";
    //
    // // Calls onContentChange every ten seconds
    // setInterval(() => {
    //   iframeBody.addEventListener('change', this.onContentChange());
    // }, 10000);
  },
  componentDidUpdate: function () {
    var {selectedEntry, onUpdateContent} = this.props;
    var contentBody = document.getElementById('content-edit-field').contentWindow.document.body;

    contentBody.innerHTML = selectedEntry.content;
    console.log('logged', contentBody);

    contentBody.addEventListener('keyup', () => {
      console.log('updated', contentBody.innerHTML);
      onUpdateContent(contentBody.innerHTML);
    });
  },
  executeCommand: function (command) {
    richTextField.document.execCommand(command, false, null);
  },
  executeCommandWithArgument: function (command) {
    richTextField.document.execCommand(command, false, arg);
  },
  // onContentChange: function () {
  //   var {updateContent} = this.props;
  //
  //   var iframeBody = document.getElementById('content-edit-field').contentWindow.document.body.innerHTML;
  //   var content = $(iframeBody).text();
  //
  //   // document.getElementById('content-edit-field').contentWindow.document.body.innerHTML = selectedEntry.content;
  //
  //   updateContent(content);
  // },
  render: function () {
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
            <button className="btn btn-success editor-save-button">Save</button>
            <div className="pull-right">
              <p id="edit-mode-text">Edit mode is <span id="edit-mode-status">on</span></p><button onClick={() => toggleEdit()} className="btn btn-sm btn-default editor-button pull-right" id="edit-mode-button">Turn Off</button>
            </div>
          </div>
          <iframe id="content-edit-field" name="richTextField" src="about:blank"></iframe>
        </div>
      </div>
    );
  }
});

module.exports = EditorWindow;
