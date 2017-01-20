import React, {Component} from 'react';
import Journal from 'Journal';

class JournalList extends Component {
  constructor (props) {
    super(props);
  }
  render () {
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
}

export default JournalList;
