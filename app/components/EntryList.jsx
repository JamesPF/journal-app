var React = require('react');

var EntryList = React.createClass({
  render: function () {
    return (
      <div id="entry-list">
        <h3>Entry List</h3>
        <ul id="entries">
          <li className="entry">
            <a href="">
              <img src="/images/entry.png" />
              <p className="text-center">Journal Entry 1</p>
            </a>
          </li>
          <li className="entry">
            <a href="">
              <img src="/images/entry.png" />
              <p className="text-center">Journal Entry 2</p>
            </a>
          </li>
          <li className="entry">
            <a href="">
              <img src="/images/entry.png" />
              <p className="text-center">Journal Entry 3</p>
            </a>
          </li>
          <li className="entry">
            <a href="">
              <img src="/images/entry.png" />
              <p className="text-center">Journal Entry 4</p>
            </a>
          </li>
          <li className="entry">
            <a href="">
              <img src="/images/entry.png" />
              <p className="text-center">Journal Entry 5</p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;
