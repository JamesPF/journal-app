var React = require('react');
var axios = require('axios');
var {hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');
var setAuthorizationToken = require('setAuthorizationToken');

var LoginForm = require('LoginForm');

var LoginPage = React.createClass({
  handleUserLogin: function (user) {
    console.log(user);

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
      </div>
    );
  }
});

module.exports = LoginPage;
