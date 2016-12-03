var React = require('react');

var EntryAdd = React.createClass({
  addEntry: function () {
    var {onEntryAdd} = this.props;
    onEntryAdd();
  },
  render: function () {
    return (
      <button id="add-entry" className="btn btn-success" onClick={this.addEntry}>
        <i className="fa fa-plus"></i>
      </button>
    );
  }
});

module.exports = EntryAdd;
