var React = require('react');

var Entry = React.createClass({
  propTypes: {
    entry: React.PropTypes.object.isRequired,
    selectEntry: React.PropTypes.func.isRequired,
    activeEntry: React.PropTypes.object.isRequired
  },
  onClick: function () {

  },
  render: function () {
    var {entry} = this.props;

    return (
      <li className="entry" onClick={this.onClick}>
        <img src="/images/entry.png" />
        <p className="text-center">{title}</p>
      </li>
    );
  }
});

module.exports = Entry;
