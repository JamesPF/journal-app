var React = require('react');

var EntryAdd = React.createClass({
  onAdd: function () {
    this.props.onEntryAdd();
  },
  render: function () {
    return (
      <button id="add-entry" className="btn btn-success" onClick={this.onAdd}><i className="fa fa-plus"></i></button>
    );
  }
});

module.exports = EntryAdd;
