var React = require('react');

var Entry = React.createClass({
  onClick: function () {
    var {entry, selectEntry} = this.props;
    selectEntry(entry);
  },
  render: function () {
    var {entry} = this.props;

    return (
      <li className="entry" onClick={this.onClick}>
        <img src="/images/entry.png" />
        <p className="text-center">{entry.name}</p>
      </li>
    );
  }
});

module.exports = Entry;
