var React = require('react');
var axios = require('axios');

var SignupForm = require('SignupForm');

var SignupPage = React.createClass({
  getDefaultProps: function () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      email: this.props.email,
      password: this.props.password
    }
  },
  handleUserSignup: function (newUser) {
    console.log(newUser);

    axios.post('/users', newUser);
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
