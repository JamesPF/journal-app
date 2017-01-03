var React = require('react');
var ReactDOM = require('react-dom');

var JournalCreate = React.createClass({
  triggerAutoFocus: function () {
    setTimeout(() => {
      this.refs.journal.focus();
    }, 500);
  },
  onSelectChange: function (e) {
    var selectValue = e.target.value;
    this.props.onJournalTypeSelect(selectValue);
  },
  onJournalSubmit: function (e) {
    e.preventDefault();
    var journalName = this.refs.journal.value;
    var journalType = this.refs.type.value;

    if (journalName.length > 0 && journalType !== 'Select Type') {
      this.refs.journal.value = '';
      this.props.onAddJournal(journalName, journalType);
      $('#addJournalModal').modal('toggle');
    }
  },
  render: function () {
    return (
      <div>
        <button className="btn btn-success pull-right" id="create-new-journal-button" data-toggle="modal" data-target="#addJournalModal" onClick={this.triggerAutoFocus}>+ Create New Journal</button>

        <div className="modal fade" id="addJournalModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={this.onJournalSubmit}>
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Create New Journal</h4>
                </div>
                <div className="modal-body">
                    <input ref="journal" className="create-journal" type="text" placeholder="Journal title..." />
                    <label id="journal-type-label" htmlFor="set-journal-type">Notes for:</label>
                    <select ref="type" value={this.props.type} name="set-journal-type" id="set-journal-type" onChange={this.onSelectChange}>
                      <option value="Select Type">Select Type</option>
                      <option value="Book">A Book</option>
                      <option value="Course">A Course</option>
                      <option value="Podcast">A Podcast</option>
                      <option value="Video">A Video</option>
                      <option value="Presentation">A Presentation</option>
                      <option value="Article">An Article</option>
                      <option value="Other">Other</option>
                    </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JournalCreate;
