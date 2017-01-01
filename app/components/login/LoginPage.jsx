var React = require('react');
var axios = require('axios');
var {Link, hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');
var setAuthorizationToken = require('setAuthorizationToken');

var LoginForm = require('LoginForm');

var LoginPage = React.createClass({
  componentWillMount: function () {
    if (axios.defaults.headers.common['x-auth']) {
      hashHistory.push('/journals');
    }
  },
  handleUserLogin: function (user) {

    axios.post('/users/login', user).then((res) => {
      var token = res.headers['x-auth'];
      localStorage.setItem('x-auth', token);
      setAuthorizationToken(token);
      hashHistory.push('/journals');
    });
  },
  render: function () {
    return (
      <div className="auth-form">
        <LoginForm onUserLogin={this.handleUserLogin}/>
        <p className="text-center">Don't have an account? <Link to="/signup">Sign up!</Link></p>
      </div>
    );
  }
});

module.exports = LoginPage;
