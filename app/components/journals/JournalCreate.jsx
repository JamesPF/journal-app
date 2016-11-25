var React = require('react');
var ReactDOM = require('react-dom');

var JournalCreate = React.createClass({
  triggerAutoFocus: function () {
    setTimeout(() => {
      this.refs.journal.focus();
    }, 500);
  },
  onJournalSubmit: function (e) {
    e.preventDefault();
    var journalName = this.refs.journal.value;

    if (journalName.length > 0) {
      this.refs.journal.value = '';
      this.props.onAddJournal(journalName);
      $('#addJournalModal').modal('toggle');
    }
  },
  render: function () {
    return (
      <div>
        <button className="btn btn-success pull-right" data-toggle="modal" data-target="#addJournalModal" onClick={this.triggerAutoFocus}>+ Create New Journal</button>

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
                    <label id="journal-type-label" for="set-journal-type">Notes for:</label>
                    <select name="set-journal-type" id="set-journal-type">
                      <option>Select Type</option>
                      <option>A Book</option>
                      <option>A Course</option>
                      <option>A Podcast</option>
                      <option>A Video</option>
                      <option>A Presentation</option>
                      <option>An Article</option>
                      <option>Other</option>
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
