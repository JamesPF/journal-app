var React = require('react');
var axios = require('axios');

var JournalCreate = require('JournalCreate');
var JournalSearch = require('JournalSearch');
var JournalList = require('JournalList');

var JournalsPage = React.createClass({
  getDefaultProps: function () {
    return {
      journals: [],
      type: 'Select Type',
      searchText: '',
      typeFilter: 'All'
    }
  },
  getInitialState: function () {
    return {
      journals: this.props.journals,
      type: this.props.type,
      searchText: this.props.searchText,
      typeFilter: this.props.typeFilter
    }
  },
  componentDidMount: function () {
    // GET JOURNALS
  },
  handleSearch: function (searchText, typeFilter) {
    this.setState({
      searchText: searchText.toLowerCase(),
      typeFilter
    });
  },
  handleJournalTypeSelect: function (type) {
    this.setState({
      type
    });
  },
  handleAddJournal: function (journalName, journalType) {
    var {journals} = this.state;
    var journal = {
      id: journals.length,
      userid: 1,
      name: journalName,
      type: journalType,
      typeEdit: false,
      typeSelectSelected: false
    };

    axios.post('/journals', journal).then((journal) => {
      axios.get('/journals').then((result) => {
        var journals = result.data;
        this.setState({
          journals,
          type: 'Select Type'
        });
      });
    });
  },
  handleTypeSelectClicked: function (journal) {
    var {journals} = this.state;
    var journalIndex = journal.id;

    journals[journalIndex].typeSelectSelected = true;
    this.setState({
      journals
    });

    console.log(journals[journalIndex].typeSelectSelected);
  },
  handleTypeEdit: function (journal) {
    var {journals} = this.state;
    var journalToUpdate = journal.id;

    journals[journalToUpdate].typeEdit = true;
    this.setState({
      journals
    });
  },
  handleUpdateInfo: function (updatedJournal, newName, newJournalType) {
    var {journals} = this.state;
    var journalIndex = updatedJournal.id;

    if (newName.length > 0) {
      journals[journalIndex].name = newName;
      journals[journalIndex].type = newJournalType;
      journals[journalIndex].typeSelectSelected = false;
      this.setState({
        journals
      });
    }

    journals[journalIndex].typeEdit = false;
  },
  render: function () {
    var {journals, searchText, typeFilter, type} = this.state;
    var matchedJournals = journals;

    matchedJournals = matchedJournals.filter((journal) => {
      return typeFilter === 'All' || journal.type === typeFilter;
    });

    matchedJournals = matchedJournals.filter((journal) => {
      var name = journal.name.toLowerCase();
      return searchText.length === 0 || name.indexOf(searchText) > -1;
    });

    return (
      <div>
        <div id="journal-index">
          <h1 className="text-center">Journals</h1>
          <JournalCreate type={type} onAddJournal={this.handleAddJournal} onJournalTypeSelect={this.handleJournalTypeSelect} />
          <JournalSearch onSearch={this.handleSearch} />
          <JournalList journals={matchedJournals} onUpdateInfo={this.handleUpdateInfo} triggerTypeEdit={this.handleTypeEdit} onTypeSelectClicked={this.handleTypeSelectClicked} />
        </div>
      </div>
    );
  }
});

module.exports = JournalsPage;
