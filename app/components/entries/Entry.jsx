import React, {Component} from 'react';

class Entry extends Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick () {
    var {entry, selectEntry} = this.props;
    selectEntry(entry);
  }
  render () {
    var {entry} = this.props;

    return (
      <li className="entry" onClick={this.onClick}>
        <img src="/images/entry.png" />
        <p className="text-center">{entry.title}</p>
      </li>
    );
  }
}

export default Entry;
