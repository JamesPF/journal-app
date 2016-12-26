var React = require('react');
var axios = require('axios');
var {hashHistory} = require('react-router');

var LoginForm = require('LoginForm');

var LoginPage = React.createClass({
  handleUserLogin: function (user) {
    console.log(user);

    axios.post('/users/login', user).then(() => {
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
