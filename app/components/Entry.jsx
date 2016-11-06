var React = require('react');

var Entry = React.createClass({
  render: function () {
    return (
      <li className="entry">
        <a href="">
          <img src="/images/entry.png" />
          <p className="text-center">Journal Entry</p>
        </a>
      </li>
    );
  }
});

module.exports = Entry;
