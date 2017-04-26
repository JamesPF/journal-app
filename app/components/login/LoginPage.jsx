import React, {Component} from 'react';
var axios = require('axios');
var {Link, hashHistory} = require('react-router');

import LoginForm from 'LoginForm';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }
  handleUserLogin (user) {

    axios.post('/users/login', user).then((res) => {
      hashHistory.push('/journals');
    });
  }
  render () {
    return (
      <div className="auth-form">
        <LoginForm onUserLogin={this.handleUserLogin}/>
        <p className="text-center">Don't have an account? <Link to="/signup">Sign up!</Link></p>
      </div>
    );
  }
}

export default LoginPage;
