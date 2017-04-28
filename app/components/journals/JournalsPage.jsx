var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var axios = require('axios');

import JournalCreate from 'JournalCreate';
import JournalSearch from 'JournalSearch';
import JournalList from 'JournalList';

var JournalsPage = React.createClass({
  getDefaultProps: function () {
    return {
      journals: [],
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
    axios.get('/journals').then((result) => {
      var journals = result.data;

      this.setState({
        journals,
        type: 'Select Type'
      });
    });
  },
  handleSearch: function (searchText, typeFilter) {
    this.setState({
      searchText: searchText.toLowerCase(),
      typeFilter
    });
  },
  handleAddJournal: function (journalName, journalType) {
    var {journals} = this.state;
    var journal = {
      name: journalName,
      type: journalType
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

    var journalId = journal._id;

    for (var i = 0; i < journals.length; i++) {
      if (journals[i]._id === journalId) {
        journals[i].typeSelectSelected = true;
      }
    }

    this.setState({
      journals
    });
  },
  handleTypeEdit: function (journal) {
    var {journals} = this.state;

    var journalId = journal._id;

    for (var i = 0; i < journals.length; i++) {
      if (journals[i]._id === journalId) {
        journals[i].typeEdit = true;
      }
    }

    this.setState({
      journals
    });
  },
  handleUpdateInfo: function (journal, newName, newJournalType) {
    var {journals} = this.state;

    var journalId = journal._id;

    if (newName.length > 0) {
      axios.patch(`/journals/${journalId}`, {
        name: newName,
        type: newJournalType})
      .then((journal) => {
        axios.get('/journals').then((result) => {
          var journals = result.data;

          for (var i = 0; i < journals.length; i++) {
            if (journals[i]._id === journalId) {
              journals[i].typeSelectSelected = false;
            }
          }

          this.setState({
            journals
          });
        });
      });
    }

    for (var i = 0; i < journals.length; i++) {
      if (journals[i]._id === journalId) {
        journals[i].typeEdit = false;
      }
    }
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
          <JournalCreate type={type} onAddJournal={this.handleAddJournal} />
          <JournalSearch onSearch={this.handleSearch} />
          <JournalList journals={matchedJournals} onUpdateInfo={this.handleUpdateInfo} triggerTypeEdit={this.handleTypeEdit} onTypeSelectClicked={this.handleTypeSelectClicked} />
        </div>
      </div>
    );
  }
});

module.exports = JournalsPage;
