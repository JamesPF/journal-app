var React = require('react');
var axios = require('axios');
var {Link, hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');
var setAuthorizationToken = require('setAuthorizationToken');

var SignupForm = require('SignupForm');

var SignupPage = React.createClass({
  componentWillMount: function () {
    if (axios.defaults.headers.common['x-auth']) {
      hashHistory.push('/journals');
    }
  },
  handleUserSignup: function (newUser) {

    axios.post('/users', newUser).then((res) => {
      var token = res.headers['x-auth'];
      localStorage.setItem('x-auth', token);
      setAuthorizationToken(token);
      hashHistory.push('/journals');
    });
  },
  render: function () {
    return (
      <div className="auth-form">
        <SignupForm onUserSignup={this.handleUserSignup}/>
        <p className="text-center">Already have an account? <Link to="/">Log in!</Link></p>
      </div>
    );
  }
});

module.exports = SignupPage;
