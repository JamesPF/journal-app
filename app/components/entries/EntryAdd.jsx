import React, {Component} from 'react';

class EntryAdd extends Component {
  constructor (props) {
    super(props);
    this.addEntry = this.addEntry.bind(this);
  }
  addEntry () {
    var {onEntryAdd} = this.props;
    onEntryAdd();
  }
  render () {
    return (
      <button id="add-entry" className="btn btn-success" onClick={this.addEntry}>
        <i className="fa fa-plus"></i>
      </button>
    );
  }
}

export default EntryAdd;
