var React = require('react');
var Journal = require('Journal');

var JournalList = React.createClass({
  render: function () {
    return (
      <div id="journal-list" className="col-sm-10 col-centered">
        {this.props.journals.map( (journal) => {
          return (
            <Journal key={journal.id} {...this.props} {...journal} />
            );
          }
        )}
      </div>
    );
  }
});

module.exports = JournalList;
