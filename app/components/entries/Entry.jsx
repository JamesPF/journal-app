var React = require('react');

var Entry = React.createClass({
  propTypes: {
    entry: React.PropTypes.object.isRequired,
    selectEntry: React.PropTypes.func.isRequired,
    selectedEntry: React.PropTypes.object.isRequired
  },
  onClick: function () {
    var {entry, selectEntry} = this.props;
    selectEntry(entry);
  },
  render: function () {
    var {entry} = this.props;

    return (
      <li className="entry" onClick={this.onClick}>
        <img src="/images/entry.png" />
        <p className="text-center">{entry.title}</p>
      </li>
    );
  }
});

module.exports = Entry;
