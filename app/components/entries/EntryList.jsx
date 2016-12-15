var React = require('react');
var Entry = require('Entry');

var EntryList = React.createClass({
  render: function () {
    var {entries} = this.props;
    console.log('entry list', entries);
    // var entries = [{
    //   _id: 1,
    //   title: 'test 1',
    //   content: ''
    // },
    // {
    //   _id: 2,
    //   title: 'test 2',
    //   content: ''
    // }];

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
