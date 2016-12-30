var React = require('react');
var axios = require('axios');
var {hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');
var setAuthorizationToken = require('setAuthorizationToken');

var SignupForm = require('SignupForm');

var SignupPage = React.createClass({
  handleUserSignup: function (newUser) {
    console.log(newUser);

    axios.post('/users', newUser).then((res) => {
      // hashHistory.push('/journals');
      var token = res.headers['x-auth'];
      localStorage.setItem('x-auth', token);
      setAuthorizationToken(token);
      console.log(jwtDecode(token));
    });
  },
  render: function () {
    return (
      <div className="auth-form">
        <SignupForm onUserSignup={this.handleUserSignup}/>
      </div>
    );
  }
});

module.exports = SignupPage;
