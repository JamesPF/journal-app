var React = require('react');

var JournalList = React.createClass({
  render: function () {
    return (
      <div id="journal-list" className="col-sm-10 col-centered">
        <div className="col-sm-3 journal-item">
          <div className="journal-link-container">
            <a href="">
              <img className="journal-icon" src="/images/journal.png" />
              <p className="text-center">Journal Item 1</p>
            </a>
          </div>
        </div>
        <div className="col-sm-3 journal-item">
          <div className="journal-link-container">
            <a href="">
              <img className="journal-icon" src="/images/journal.png" />
              <p className="text-center">Journal Item 2</p>
            </a>
          </div>
        </div>
        <div className="col-sm-3 journal-item">
          <div className="journal-link-container">
            <a href="">
              <img className="journal-icon" src="/images/journal.png" />
              <p className="text-center">Journal Item 3</p>
            </a>
          </div>
        </div>
        <div className="col-sm-3 journal-item">
          <div className="journal-link-container">
            <a href="">
              <img className="journal-icon" src="/images/journal.png" />
              <p className="text-center">Journal Item 4</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JournalList;
