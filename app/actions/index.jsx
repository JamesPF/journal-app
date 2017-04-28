// Search Journals
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var setTypeFilter = (typeFilter) => {
  return {
    type: 'SET_TYPE_FILTER',
    typeFilter
  }
};

// Add Journal
export var addJournal = (journalName, journalType) => {
  return {
    type: 'ADD_JOURNAL',
    journalName,
    journalType
  }
};
