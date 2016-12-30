var React = require('react');
var axios = require('axios');
var {hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  signOut: function () {
    axios.delete('/users/me/token').then(() => {
      localStorage.removeItem('x-auth');
      delete axios.defaults.headers.common['x-auth'];
      hashHistory.push('/');
    });
  },
  render: function () {
    var renderNav = () => {
      if (axios.defaults.headers.common['x-auth']) {
        return (
          <div>
            <ul className="nav navbar-nav">
              <li><IndexLink to="/journals" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Journals</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            </ul>
            <div className="navbar-right">
              <p className="navbar-text">Signed in</p>
              <button type="button" className="btn btn-default navbar-btn" onClick={this.signOut}>Sign Out</button>
            </div>
          </div>
        );
      } else {
        return (
          <ul className="nav navbar-nav">
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          </ul>
        );
      }
    };

    return (
      <div className="navbar navbar-default">
        <div className="navbar-brand"><Link to="/">Journal App</Link></div>
        {renderNav()}
      </div>
    );
  }
});

module.exports = Nav;
