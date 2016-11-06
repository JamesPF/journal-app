var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-brand">My Journal</div>
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Journals</IndexLink></li>
          <li><Link to="/entries" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Entries</Link></li>
          <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
        </ul>
        <div className="navbar-right">
          <p className="navbar-text">Signed in as James Felz</p>
          <button type="button" className="btn btn-default navbar-btn">Sign Out</button>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
