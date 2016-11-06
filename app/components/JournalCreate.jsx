var React = require('react');

var JournalCreate = React.createClass({
  render: function () {
    return (
      <div className="modal fade" id="addJournalModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Create New Journal</h4>
            </div>
            <div className="modal-body">
              <input className="create-journal" type="text" placeholder="Journal title..." />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JournalCreate;
