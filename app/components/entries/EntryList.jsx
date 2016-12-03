var React = require('react');
var Entry = require('Entry');

var EntryList = React.createClass({
  render: function () {
    return (
      <div id="entry-list">
        <ul id="entries">
          {this.props.entries.map( (entry) => {
            return (
              <Entry entry={entry} key={entry.id} {...this.props} />
              );
            }
          )}
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
