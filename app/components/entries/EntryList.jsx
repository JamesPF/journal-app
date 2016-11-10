var React = require('react');
var Entry = require('Entry');

var EntryList = React.createClass({
  propTypes: {
    entries: React.PropTypes.array.isRequired,
    activeEntry: React.PropTypes.object.isRequired,
    selectEntry: React.PropTypes.func.isRequired
  },
  render: function () {
    return (
      <div id="entry-list">
        <ul id="entries">
          {this.props.entries.map( (entry) => {
            return (
              <Entry title={entry.title} key={entry.id} />
              );
            }
          )}
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
