var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div id="wrapper">
        <Nav />
        {this.props.children}
        <footer>
          <p className="text-center">Copyright 2016</p>
        </footer>
      </div>
    );
  }
});

module.exports = Main;
