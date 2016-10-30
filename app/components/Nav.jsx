var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div class="container-fluid">
          <div className="navbar-brand">My Journal</div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Text Editor</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
