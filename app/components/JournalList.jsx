var React = require('react');
var Journal = require('Journal');

var JournalList = React.createClass({
  render: function () {
    return (
      <div id="journal-list" className="col-sm-10 col-centered">
        <Journal />
      </div>
    );
  }
});

module.exports = JournalList;
