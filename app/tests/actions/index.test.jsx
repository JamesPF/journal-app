const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Never Eat Alone'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate type filter action', () => {
    var action = {
      type: 'SET_TYPE_FILTER',
      typeFilter: 'A Book'
    };
    var res = actions.setTypeFilter(action.typeFilter);

    expect(res).toEqual(action);
  });

  it('should generate add journal action', () => {
    var action = {
      type: 'ADD_JOURNAL',
      journalName: 'Never Eat Alone',
      journalType: 'A Book'
    };
    var res = actions.addJournal(action.journalName, action.journalType);

    expect(res).toEqual(action);
  });
});
