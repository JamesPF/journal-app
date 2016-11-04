var React = require('react');

var EntryAdd = React.createClass({
  render: function () {
    return (
      <button id="add-entry" className="btn btn-success"><i className="fa fa-plus"></i></button>
    );
  }
});

module.exports = EntryAdd;
