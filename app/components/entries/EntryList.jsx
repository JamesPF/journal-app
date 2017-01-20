import React, {Component} from 'react';
import Entry from 'Entry';

class EntryList extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    var {entries} = this.props;
    return (
      <div id="entry-list">
        <ul id="entries">
          {entries.map((entry) => {
            return <Entry entry={entry} key={entry._id} {...this.props} />
          })}
        </ul>
      </div>
    );
  }
}

export default EntryList;
