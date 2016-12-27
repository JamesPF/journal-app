var React = require('react');
var axios = require('axios');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  signOut: function () {
    axios.delete('/users/me/token', user);
  },
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-brand">My Journal</div>
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Journals</IndexLink></li>
          <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
        </ul>
        <div className="navbar-right">
          <p className="navbar-text">Signed in as James Felz</p>
          <button type="button" className="btn btn-default navbar-btn" onClick={this.signOut}>Sign Out</button>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
