var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div id="outer-wrapper">
        <div id="wrapper">
          <div id="main">
            <Nav />
            {this.props.children}
          </div>
        </div>
        <footer>
          <p className="text-center">Copyright 2016</p>
        </footer>
      </div>
    );
  }
});

module.exports = Main;
