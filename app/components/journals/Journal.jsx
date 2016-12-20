var React = require('react');

var Journal = React.createClass({
  propTypes: {
    journal: React.PropTypes.object.isRequired
  },
  typeSelectClicked: function () {
    var {journal, onTypeSelectClicked} = this.props;
    onTypeSelectClicked(journal);
  },
  checkTypeSelect: function () {
    var {journal} = this.props;

    if (!journal.typeSelectSelected) {
      this.exitEditMode()
    }
  },
  handleEditMode: function () {
    var {journal, triggerTypeEdit} = this.props;
    var nameText = this.refs.name;
    nameText.contentEditable = 'true';
    triggerTypeEdit(journal);
    nameText.focus();
    console.log(journal.name);
  },
  exitEditMode: function () {
    var {journal, onUpdateInfo} = this.props;
    var nameText = this.refs.name;

    nameText.contentEditable = 'false';
    var newName = this.refs.name.textContent;
    var newJournalType = this.refs.typeSelect.value;

    console.log('Submitted');
    onUpdateInfo(journal, newName, newJournalType);
  },
  handleKeyPress: function (e) {
    var nameText = this.refs.name;
    if (e.key === 'Enter') {
      this.exitEditMode();
    }
  },
  render: function () {
    var {journal} = this.props;

    var displayStyle = {
      display: 'none'
    };

    if (journal.typeEdit === true) {
      displayStyle['display'] = 'block';
    }

    return (
      <div className="col-sm-3 journal-item">
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
          <a href="/#/entries">
            <img className="journal-icon" src="/images/journal-2.png" />
          </a>
          <p className="text-center journal-title" ref="name" onClick={this.handleEditMode} onBlur={this.checkTypeSelect}
            onKeyPress={this.handleKeyPress}>{journal.name}</p>
        </div>
      </div>
    );
  }
});

module.exports = Journal;
