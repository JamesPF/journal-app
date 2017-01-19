var React = require('react');
import Journal from 'Journal';

var JournalList = React.createClass({
  propTypes: {
    journals: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div id="journal-list" className="col-sm-12 col-centered">
        {this.props.journals.map( (journal) => {
          return (
            <Journal journal={journal} key={journal._id} {...this.props} />
            );
          }
        )}
      </div>
    );
  }
});

module.exports = JournalList;
