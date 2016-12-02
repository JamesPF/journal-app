var React = require('react');

var JournalSearch = React.createClass({
  searchJournals: function () {
    var {onSearch} = this.props;
    var searchText = this.refs.searchText.value;

    onSearch(searchText);
  },
  render: function () {
    return (
      <div>
        <input ref="searchText" id="journal-search" type="search" placeholder="Search..." onChange={this.searchJournals} />
        <label htmlFor="journal-search-filter">Filter By: </label>
        <select id="journal-filter" name="journal-search-filter">
          <option>All</option>
          <option>Books</option>
          <option>Courses</option>
          <option>Podcasts</option>
          <option>Videos</option>
          <option>Presentations</option>
          <option>Articles</option>
          <option>Other</option>
        </select>
      </div>
    );
  }
});

module.exports = JournalSearch;
