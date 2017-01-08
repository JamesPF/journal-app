var React = require('react');

var JournalSearch = React.createClass({
  searchJournals: function () {
    var {onSearch} = this.props;
    var searchText = this.refs.searchText.value;
    var typeFilter = this.refs.typeFilter.value;

    onSearch(searchText, typeFilter);
  },
  render: function () {
    return (
      <div id="search-form">
        <input ref="searchText" id="journal-search" type="search" placeholder="Search..." onChange={this.searchJournals} />
        <div id="type-filter">
          <label htmlFor="journal-search-filter">Filter By: </label>
          <select ref="typeFilter" id="journal-filter" name="journal-search-filter" onChange={this.searchJournals}>
            <option value="All">All</option>
            <option value="Book">Book</option>
            <option value="Course">Course</option>
            <option value="Podcast">Podcast</option>
            <option value="Video">Video</option>
            <option value="Presentation">Presentation</option>
            <option value="Article">Article</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    );
  }
});

module.exports = JournalSearch;
