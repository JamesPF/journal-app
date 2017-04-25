import React, {Component} from 'react';
var {Link} = require('react-router');

class Journal extends Component {
  constructor (props) {
    super(props);
    this.typeSelectClicked = this.typeSelectClicked.bind(this);
    this.exitEditMode = this.exitEditMode.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.checkTypeSelect = this.checkTypeSelect.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  typeSelectClicked () {
    var {journal, onTypeSelectClicked} = this.props;
    onTypeSelectClicked(journal);
  }
  checkTypeSelect () {
    var {journal} = this.props;

    if (!journal.typeSelectSelected) {
      this.exitEditMode()
    }
  }
  handleEditMode () {
    var {journal, triggerTypeEdit} = this.props;
    var nameText = this.refs.name;
    nameText.contentEditable = 'true';
    triggerTypeEdit(journal);
    nameText.focus();
  }
  exitEditMode () {
    var {journal, onUpdateInfo} = this.props;
    var nameText = this.refs.name;

    nameText.contentEditable = 'false';
    var newName = this.refs.name.textContent;
    var newJournalType = this.refs.typeSelect.value;

    onUpdateInfo(journal, newName, newJournalType);
  }
  handleKeyPress (e) {
    var nameText = this.refs.name;
    if (e.key === 'Enter') {
      this.exitEditMode();
    }
  }
  render () {
    var {journal} = this.props;
    var journalUrl = `/entries?journal=${journal._id}`;

    var displayStyle = {
      display: 'none'
    };

    if (journal.typeEdit === true) {
      displayStyle['display'] = 'block';
    }

    return (
      <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3 journal-item">
        <div className="journal-link-container">
          <select defaultValue={journal.type} ref="typeSelect" style={displayStyle} onMouseDown={this.typeSelectClicked} onBlur={this.exitEditMode}>
            <option value="Book">A Book</option>
            <option value="Course">A Course</option>
            <option value="Podcast">A Podcast</option>
            <option value="Video">A Video</option>
            <option value="Presentation">A Presentation</option>
            <option value="Article">An Article</option>
            <option value="Other">Other</option>
          </select>
          <Link to={journalUrl}>
            <img className="journal-icon" src="/images/journal-4.png" />
          </Link>
          <p className="text-center journal-title" ref="name" onClick={this.handleEditMode} onBlur={this.checkTypeSelect}
            onKeyPress={this.handleKeyPress}>{journal.name}</p>
        </div>
      </div>
    );
  }
}

export default Journal;
