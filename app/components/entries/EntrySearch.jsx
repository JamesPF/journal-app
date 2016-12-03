var React = require('react');

var EntrySearch = React.createClass({
  searchEntries: function () {
    var {onEntrySearch} = this.props;
    var entrySearchText = this.refs.searchText.value;

    onEntrySearch(entrySearchText);
  },
  render: function () {
    return (
      <input ref="searchText" id="entry-search" type="search" placeholder="Search..." onChange={this.searchEntries} />
    );
  }
});

module.exports = EntrySearch;
