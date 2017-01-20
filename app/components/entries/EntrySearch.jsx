import React, {Component} from 'react';

class EntrySearch extends Component {
  constructor (props) {
    super(props);
    this.searchEntries = this.searchEntries.bind(this);
  }
  searchEntries () {
    var {onEntrySearch} = this.props;
    var entrySearchText = this.refs.searchText.value;

    onEntrySearch(entrySearchText);
  }
  render () {
    return (
      <input ref="searchText" id="entry-search" type="search" placeholder="Search..." onChange={this.searchEntries} />
    );
  }
}

export default EntrySearch;
