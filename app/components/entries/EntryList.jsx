var React = require('react');
var Entry = require('Entry');

var EntryList = React.createClass({
  render: function () {
    return (
      <div id="entry-list">
        <ul id="entries">
          <Entry />
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
