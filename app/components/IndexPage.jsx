var React = require('react');

var IndexPage = React.createClass({
  render: function () {
    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <button className="btn btn-success pull-right">+ Create New Journal</button>
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
        </div>
      </div>
    );
  }
});

module.exports = IndexPage;
