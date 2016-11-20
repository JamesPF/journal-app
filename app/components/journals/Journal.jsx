var React = require('react');

var Journal = React.createClass({
  render: function () {
    var {name, url} = this.props;

    return (
      <div className="col-sm-3 journal-item">
        <div className="journal-link-container">
          <a href={url}>
            <img className="journal-icon" src="/images/journal.png" />
            <p className="text-center">{name}</p>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Journal;
