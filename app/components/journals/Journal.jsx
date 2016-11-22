var React = require('react');

var Journal = React.createClass({
  handleEditMode: function () {
    var nameText = this.refs.name;
    nameText.contentEditable = 'true';
    nameText.focus();
  },
  exitEditMode: function () {
    var {onUpdateName} = this.props;
    var nameText = this.refs.name;
    nameText.contentEditable = 'false';
    var newName = this.refs.name.textContent;

    onUpdateName(newName);
  },
  render: function () {
    var {name, url} = this.props;

    return (
      <div className="col-sm-3 journal-item">
        <div className="journal-link-container">
          <a href={url}>
            <img className="journal-icon" src="/images/journal.png" />
          </a>
          <p className="text-center journal-title" ref="name" onClick={this.handleEditMode} onBlur={this.exitEditMode}>{name}</p>
        </div>
      </div>
    );
  }
});

module.exports = Journal;
