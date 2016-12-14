var React = require('react');
var Entry = require('Entry');

var EntryList = React.createClass({
  render: function () {
    var {entries} = this.props;

    var names = ['James', 'Bob', 'Yadi'];
    return (
      <div id="entry-list">
        <ul id="entries">
          {entries.map((entry) => {
            return <Entry entry={entry} key={entry._id} {...this.props} />
          })}
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
