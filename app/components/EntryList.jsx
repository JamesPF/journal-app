var React = require('react');

var EntryList = React.createClass({
  render: function () {
    return (
      <div id="entry-list">
        <h3>Entry List</h3>
        <ul id="entries">
          <li>Journal Entry 1</li>
          <li>Journal Entry 2</li>
          <li>Journal Entry 3</li>
          <li>Journal Entry 4</li>
          <li>Journal Entry 5</li>
          <li>Journal Entry 6</li>
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
