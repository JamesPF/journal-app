var React = require('react');

var EntryTitle = React.createClass({
  propTypes: {
    selectedEntry: React.PropTypes.object.isRequired,
    updateTitle: React.PropTypes.func.isRequired
  },
  onTitleChange: function () {
    var {updateTitle} = this.props;
    var title = this.refs.title.value;
    // console.log(title);
    updateTitle(title);
  },
  render: function () {
    var {selectedEntry} = this.props;

    return (
      <input ref="title" id="editor-title" type="text" placeholder="Enter Title Here..." value={selectedEntry.title} onChange={this.onTitleChange} />
    );
  }
});

module.exports = EntryTitle;
