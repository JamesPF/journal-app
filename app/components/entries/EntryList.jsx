var React = require('react');
var Entry = require('Entry');

var EntryList = React.createClass({
  render: function () {
    return (
      <div id="entry-list">
        <ul id="entries">
          {this.props.entries.map( (entry) => {
            return (
              <Entry name={entry.name} key={entry.id} />
              );
            }
          )}
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
