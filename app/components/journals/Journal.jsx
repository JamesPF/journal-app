var React = require('react');

var Journal = React.createClass({
  propTypes: {
    journal: React.PropTypes.object.isRequired
  },
  handleEditMode: function () {
    var {journal, selectJournal} = this.props;
    var nameText = this.refs.name;
    nameText.contentEditable = 'true';
    nameText.focus();
    console.log(journal.name);
  },
  exitEditMode: function () {
    var {journal, onUpdateName} = this.props;
    var nameText = this.refs.name;
    nameText.contentEditable = 'false';
    var newName = this.refs.name.textContent;

    onUpdateName(journal, newName);
  },
  handleKeyPress: function (e) {
    var nameText = this.refs.name;
    if (e.key === 'Enter') {
      nameText.blur();
    }
  },
  render: function () {
    var {journal} = this.props;

    return (
      <div className="col-sm-3 journal-item">
        <div className="journal-link-container">
          <a href={journal.url}>
            <img className="journal-icon" src="/images/journal.png" />
          </a>
          <p className="text-center journal-title" ref="name" onClick={this.handleEditMode} onBlur={this.exitEditMode}
            onKeyPress={this.handleKeyPress}>{journal.name}</p>
        </div>
      </div>
    );
  }
});

module.exports = Journal;
