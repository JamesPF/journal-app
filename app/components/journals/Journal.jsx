var React = require('react');

var Journal = React.createClass({
  render: function () {
    return (
      <div className="col-sm-3 journal-item">
        <div className="journal-link-container">
          <a href="">
            <img className="journal-icon" src="/images/journal.png" />
            <p className="text-center">Journal Item</p>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Journal;
