var React = require('react');

var JournalCreate = React.createClass({
  onJournalSubmit: function () {
    var journalName = this.refs.journal.value;

    if (journalName.length > 0) {
      this.refs.journal.value = '';
      this.props.onAddJournal(journalName);
      $('#addJournalModal').modal('toggle');
    }
  },
  render: function () {
    return (
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JournalCreate;
