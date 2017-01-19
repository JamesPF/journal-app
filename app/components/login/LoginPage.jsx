import React, {Component} from 'react';
var axios = require('axios');
var {Link, hashHistory} = require('react-router');
var jwtDecode = require('jwt-decode');
var setAuthorizationToken = require('setAuthorizationToken');

import LoginForm from 'LoginForm';

class LoginPage extends Component {
  constructor (props) {
    super(props);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }
  componentWillMount () {
    if (axios.defaults.headers.common['x-auth']) {
      hashHistory.push('/journals');
    }
  }
  handleUserLogin (user) {

    axios.post('/users/login', user).then((res) => {
      var token = res.headers['x-auth'];
      localStorage.setItem('x-auth', token);
      setAuthorizationToken(token);
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
