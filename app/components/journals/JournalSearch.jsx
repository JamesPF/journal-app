var React = require('react');

var JournalSearch = React.createClass({
  render: function () {
    return (
      <div>
        <input id="journal-search" type="search" placeholder="Search..." />
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
