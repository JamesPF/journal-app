var React = require('react');

var Entry = React.createClass({
  render: function () {
    var {name} = this.props;

    return (
      <li className="entry">
        <a href="">
          <img src="/images/entry.png" />
          <p className="text-center">{name}</p>
        </a>
      </li>
    );
  }
});

module.exports = Entry;
