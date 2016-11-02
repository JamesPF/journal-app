var React = require('react');

var IndexPage = React.createClass({
  render: function () {
    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <button className="btn btn-success pull-right">+ Create New Journal</button>
          <div className="col-md-6 col-centered">
            <div className="col-md-4 journal-item">
              <img src="" />
              <p>Journal Item 1</p>
            </div>
            <div className="col-md-4 journal-item">
              <img src="" />
              <p>Journal Item 2</p>
            </div>
            <div className="col-md-4 journal-item">
              <img src="" />
              <p>Journal Item 3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = IndexPage;
